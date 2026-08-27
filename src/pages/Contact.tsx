import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useToast } from '@/components/Toast';
import { supabase } from '@/lib/supabase';
import { IMAGES, SCHOOL } from '@/lib/data';

const empty = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
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
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address';
    if (form.phone && !/^\+?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter your message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      setSuccess(true);
      setForm(empty);
      toast.show('Message Sent!', 'We will get back to you shortly. Thank you for reaching out.');
    } catch (err) {
      toast.show('Something went wrong', 'Please try again or call us directly.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    { icon: MapPin, title: 'Visit Us', lines: [SCHOOL.address] },
    { icon: Phone, title: 'Call Us', lines: [SCHOOL.phonePrimary, SCHOOL.phoneSecondary] },
    { icon: Mail, title: 'Email Us', lines: [SCHOOL.email] },
    { icon: Clock, title: 'Office Hours', lines: [SCHOOL.hours, 'Closed on Sundays & public holidays'] },
  ];

  return (
    <div className="animate-fade-in pt-20">
      {/* hero */}
      <section className="relative overflow-hidden bg-royal-900 py-24">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.campusWalk} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 max-w-3xl">
          <span className="section-label !bg-white/10 !text-gold-300">Contact Us</span>
          <h1 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">We'd love to hear from you</h1>
          <p className="mt-5 text-lg text-white/75">
            Have a question, a suggestion, or want to schedule a campus visit? Our team is here to help — reach out any way that suits you.
          </p>
        </div>
      </section>

      {/* contact cards */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <div key={c.title} className="card text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-50 text-royal-700">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-royal-900">{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-slate-600">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* form + map */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-royal-900/5 sm:p-8">
            {success ? (
              <div className="flex flex-col items-center py-12 text-center animate-fade-up">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-royal-900">Message Sent!</h3>
                <p className="mt-3 max-w-sm text-slate-600">
                  Thank you for reaching out to GC Genius Public School. We'll respond to your message shortly.
                </p>
                <button onClick={() => setSuccess(false)} className="btn-solid mt-7">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <SectionHeader
                  label="General Query Form"
                  title="Send us a message"
                  subtitle="Fill in the form below and we'll get back to you as soon as we can."
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" error={errors.name} required>
                    <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. Priya Singh" className={inputCls(errors.name)} />
                  </Field>
                  <Field label="Email Address" error={errors.email} required>
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className={inputCls(errors.email)} />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number (optional)" error={errors.phone}>
                    <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 98765 43210" className={inputCls(errors.phone)} />
                  </Field>
                  <Field label="Subject" error={errors.subject} required>
                    <input type="text" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="How can we help?" className={inputCls(errors.subject)} />
                  </Field>
                </div>
                <Field label="Message" error={errors.message} required>
                  <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} placeholder="Write your message here…" className={inputCls(errors.message)} />
                </Field>
                <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70 disabled:hover:translate-y-0">
                  {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send Message <Send className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>

          {/* map + info */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-72 bg-royal-100">
                <iframe
                  title="GC Genius Public School, Etawah map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Etawah,Uttar+Pradesh,India&output=embed"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-royal-900">GC Genius Public School</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> {SCHOOL.address}
                </p>
                <a
                  href="https://www.google.com/maps?q=Etawah,Uttar+Pradesh,India"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal-700 transition-colors hover:text-royal-900"
                >
                  Open in Google Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img src={IMAGES.buildingAlt} alt="Campus" className="h-40 w-full object-cover" />
            </div>
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
