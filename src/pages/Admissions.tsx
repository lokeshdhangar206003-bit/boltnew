import { useState, type FormEvent } from 'react';
import { ClipboardList, FileText, UserCheck, CheckCircle2, ArrowRight, Loader2, IndianRupee, Phone, Mail } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useToast } from '@/components/Toast';
import { supabase } from '@/lib/supabase';
import { IMAGES, SCHOOL } from '@/lib/data';
import type { PageId } from '@/lib/nav';

type Props = { onNavigate: (page: PageId) => void };

const steps = [
  { icon: ClipboardList, title: 'Submit Inquiry', text: 'Fill out the online inquiry form below with your child\'s details and the grade you are seeking admission to.' },
  { icon: FileText, title: 'Application & Documents', text: 'Our admissions office will share the full application form and a list of required documents via email.' },
  { icon: UserCheck, title: 'Interaction & Assessment', text: 'An informal interaction (and a short assessment for Grade I onwards) helps us understand your child\'s level.' },
  { icon: CheckCircle2, title: 'Confirmation & Enrollment', text: 'On selection, complete the fee payment and formalities to confirm your child\'s seat for the new session.' },
];

const feeRows = [
  { component: 'Admission Fee (one-time)', kg: '₹ 8,000', primary: '₹ 10,000', secondary: '₹ 12,000' },
  { component: 'Tuition Fee (per quarter)', kg: '₹ 6,500', primary: '₹ 8,000', secondary: '₹ 10,500' },
  { component: 'Transport Fee (per quarter)', kg: '₹ 2,800', primary: '₹ 2,800', secondary: '₹ 3,200' },
  { component: 'Activity / Lab Fee (annual)', kg: '₹ 2,000', primary: '₹ 2,500', secondary: '₹ 3,500' },
];

const grades = [
  'Pre-Nursery', 'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
  'Class XI (Science)', 'Class XI (Commerce)', 'Class XI (Humanities)',
  'Class XII (Science)', 'Class XII (Commerce)', 'Class XII (Humanities)',
];

const empty = { studentName: '', grade: '', parentName: '', phone: '', email: '', message: '' };

export default function Admissions({ onNavigate }: Props) {
  const toast = useToast();
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.studentName.trim()) e.studentName = 'Please enter the student\'s name';
    if (!form.grade) e.grade = 'Please select a grade';
    if (!form.parentName.trim()) e.parentName = 'Please enter the parent\'s name';
    if (!/^\+91[\s-]?\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid +91 followed by 10 digits';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from('admission_inquiries').insert({
        student_name: form.studentName.trim(),
        grade_applying: form.grade,
        parent_name: form.parentName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim() || null,
      });
      if (error) throw error;
      setSuccess(true);
      setForm(empty);
      toast.show('Inquiry Submitted!', 'Our admissions team will contact you within 48 hours.');
    } catch (err) {
      toast.show('Something went wrong', 'Please try again or call us directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in pt-20">
      {/* hero */}
      <section className="relative overflow-hidden bg-royal-900 py-24">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.graduation} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 max-w-3xl">
          <span className="section-label !bg-white/10 !text-gold-300">Admissions</span>
          <h1 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
            Admissions Open for 2026-27
          </h1>
          <p className="mt-5 text-lg text-white/75">
            We're delighted you're considering GC Genius Public School. Here's everything you need to know about joining our community — from the process to the fees, all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <span className="rounded-full bg-gold-400/15 px-4 py-2 text-sm font-semibold text-gold-300 ring-1 ring-gold-400/30">Limited seats available</span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/20">All grades welcome</span>
          </div>
        </div>
      </section>

      {/* process steps */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            center
            label="Admission Process"
            title="Four simple steps to enrollment"
            subtitle="We've made the journey to joining GC Genius as smooth and transparent as possible."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative card">
                <span className="absolute -top-3 right-4 font-serif text-5xl font-bold text-royal-50">{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-300">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fee structure */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <SectionHeader
            center
            label="Fee Structure"
            title="Transparent, value-driven fees"
            subtitle="A summary of our annual fees for the 2026-27 session. Sibling concessions and scholarships are available — please ask our admissions team."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-royal-900 text-white">
                  <th className="px-6 py-4 font-semibold">Fee Component</th>
                  <th className="px-6 py-4 font-semibold">Kindergarten</th>
                  <th className="px-6 py-4 font-semibold">Primary (I–V)</th>
                  <th className="px-6 py-4 font-semibold">Secondary (VI–XII)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeRows.map((row) => (
                  <tr key={row.component} className="transition-colors hover:bg-royal-50/40">
                    <td className="px-6 py-4 font-medium text-slate-900">{row.component}</td>
                    <td className="px-6 py-4 text-slate-600">{row.kg}</td>
                    <td className="px-6 py-4 text-slate-600">{row.primary}</td>
                    <td className="px-6 py-4 text-slate-600">{row.secondary}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gold-50 font-semibold text-royal-900">
                  <td className="px-6 py-4">Indicative Annual Total</td>
                  <td className="px-6 py-4">₹ 36,000</td>
                  <td className="px-6 py-4">₹ 44,500</td>
                  <td className="px-6 py-4">₹ 57,700</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Fees are indicative and subject to revision. Concessions available for siblings and merit scholars.
          </p>
        </div>
      </section>

      {/* inquiry form */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Admission Inquiry"
              title="Start your child's journey with us"
              subtitle="Share a few details and our admissions team will reach out within 48 hours to guide you through the next steps."
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-5 w-5 text-gold-500" />
                <a href={`tel:${SCHOOL.phonePrimary}`} className="hover:text-royal-700">{SCHOOL.phonePrimary}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-5 w-5 text-gold-500" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-royal-700">{SCHOOL.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <IndianRupee className="h-5 w-5 text-gold-500" />
                <span>Scholarships available for deserving students</span>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={IMAGES.classroom4} alt="Classroom" className="h-48 w-full object-cover" />
            </div>
          </div>

          {/* form card */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-royal-900/5 sm:p-8">
            {success ? (
              <div className="flex flex-col items-center py-12 text-center animate-fade-up">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-royal-900">Inquiry Received!</h3>
                <p className="mt-3 max-w-sm text-slate-600">
                  Thank you for your interest in GC Genius Public School. Our admissions team will contact you within 48 hours at the phone number and email you provided.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => setSuccess(false)} className="btn-solid">Submit Another Inquiry</button>
                  <button onClick={() => onNavigate('contact')} className="btn-outline !text-royal-700 !border-royal-200 !bg-royal-50">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="font-serif text-xl font-bold text-royal-900">Admission Inquiry / Application Form</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Student's Name" error={errors.studentName} required>
                    <input
                      type="text"
                      value={form.studentName}
                      onChange={(e) => update('studentName', e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className={inputCls(errors.studentName)}
                    />
                  </Field>
                  <Field label="Grade Applying For" error={errors.grade} required>
                    <select
                      value={form.grade}
                      onChange={(e) => update('grade', e.target.value)}
                      className={inputCls(errors.grade)}
                    >
                      <option value="">Select a grade</option>
                      {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Parent / Guardian Name" error={errors.parentName} required>
                  <input
                    type="text"
                    value={form.parentName}
                    onChange={(e) => update('parentName', e.target.value)}
                    placeholder="e.g. Mr. Rakesh Sharma"
                    className={inputCls(errors.parentName)}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number (+91)" error={errors.phone} required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputCls(errors.phone)}
                    />
                  </Field>
                  <Field label="Email Address" error={errors.email} required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="parent@example.com"
                      className={inputCls(errors.email)}
                    />
                  </Field>
                </div>
                <Field label="Additional Message (optional)">
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={3}
                    placeholder="Any questions or information you'd like to share with us…"
                    className={inputCls()}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                  ) : (
                    <>Submit Inquiry <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to be contacted by our admissions team regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-500/30 ${
    error ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-royal-400'
  }`;
}
