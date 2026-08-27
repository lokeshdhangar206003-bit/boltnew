import { Baby, BookOpen, GraduationCap, FlaskConical, Cpu, Library, MonitorPlay, CalendarDays, ClipboardCheck, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { IMAGES } from '@/lib/data';
import type { PageId } from '@/lib/nav';

type Props = { onNavigate: (page: PageId) => void };

const sections = [
  {
    icon: Baby,
    name: 'Kindergarten',
    grades: 'Pre-Nursery — UKG',
    img: IMAGES.classroom3,
    points: [
      'Play-based, activity-led learning in a joyful, safe setting',
      'Phonics, story-time, art, music, and motor-skill development',
      'Low student-teacher ratio with nurturing care-givers',
      'Regular parent updates and milestone celebrations',
    ],
  },
  {
    icon: BookOpen,
    name: 'Primary',
    grades: 'Class I — V',
    img: IMAGES.classroom2,
    points: [
      'Strong foundations in language, mathematics, and environmental science',
      'Inquiry-driven projects and hands-on learning',
      'Weekly library, computer, art, and physical education periods',
      'Continuous, stress-free assessment to track individual progress',
    ],
  },
  {
    icon: GraduationCap,
    name: 'Secondary & Senior Secondary',
    grades: 'Class VI — XII',
    img: IMAGES.classroom1,
    points: [
      'CBSE curriculum with Science, Commerce, and Humanities streams in XI–XII',
      'Specialised subject labs and dedicated faculty mentors',
      'Career counselling, board-exam preparation, and Olympiad coaching',
      'Leadership opportunities through house system and student council',
    ],
  },
];

const facilities = [
  { icon: FlaskConical, title: 'Science Laboratories', text: 'Fully-equipped Physics, Chemistry, and Biology labs with safety-first design and modern apparatus.' },
  { icon: Cpu, title: 'Computer Lab', text: 'High-speed internet, updated systems, and coding & robotics workstations for all grades.' },
  { icon: Library, title: 'Digital Library', text: 'Over 12,000 books, reference material, and digital resources in a calm reading environment.' },
  { icon: MonitorPlay, title: 'Smart Classrooms', text: 'Interactive panels and multimedia content that make every lesson visual and engaging.' },
  { icon: BookOpen, title: 'Language Lab', text: 'Dedicated audio-visual lab building fluency in English, Hindi, and Sanskrit.' },
  { icon: GraduationCap, title: 'Robotics & STEM Studio', text: 'Hands-on engineering, electronics, and programming that bring innovation to life.' },
];

const calendar = [
  { month: 'April', event: 'New academic session begins · Orientation for new admissions' },
  { month: 'July', event: 'First Term Examinations · Parent-Teacher Meeting' },
  { month: 'August', event: 'Independ Day celebrations · Inter-house competitions' },
  { month: 'November', event: 'Second Term Examinations · Annual Sports Day' },
  { month: 'December', event: 'Annual Cultural Function & Art Exhibition' },
  { month: 'February–March', event: 'Pre-Board & Final / Board Examinations' },
];

const examGuidelines = [
  'Two terminal examinations and regular unit tests form the assessment calendar across the year.',
  'A minimum of 75% attendance is mandatory for eligibility to sit for examinations.',
  'Grading combines scholastic performance with co-scholastic and life-skills evaluation.',
  'Report cards are shared digitally and discussed in scheduled parent-teacher meetings.',
  'Special support and remedial classes are arranged for students needing extra help.',
];

export default function Academics({ onNavigate }: Props) {
  return (
    <div className="animate-fade-in pt-20">
      {/* hero */}
      <section className="relative overflow-hidden bg-royal-900 py-24">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.classroom2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 max-w-3xl">
          <span className="section-label !bg-white/10 !text-gold-300">Academics</span>
          <h1 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
            A curriculum that grows with your child
          </h1>
          <p className="mt-5 text-lg text-white/75">
            From the wonder of early years to the rigour of board examinations, our academic program is designed to challenge, support, and inspire at every stage.
          </p>
        </div>
      </section>

      {/* curriculum sections */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            center
            label="Curriculum Overview"
            title="Learning, stage by stage"
            subtitle="Three carefully designed wings, each with its own approach — but one shared commitment to excellence."
          />
          <div className="mt-12 space-y-8">
            {sections.map((s, i) => (
              <div
                key={s.name}
                className={`grid items-center gap-8 rounded-3xl bg-slate-50 p-6 lg:grid-cols-2 lg:p-8 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img src={s.img} alt={s.name} className="h-64 w-full object-cover lg:h-72" />
                </div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-300">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-bold text-royal-900">{s.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gold-600">{s.grades}</p>
                  <ul className="mt-5 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* facilities */}
      <section className="bg-royal-900 py-20">
        <div className="container-x">
          <SectionHeader
            center
            light
            label="Campus Facilities"
            title="Spaces designed for discovery"
            subtitle="Modern, safe, and stimulating — our facilities give students the tools to learn by doing."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/20">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[IMAGES.scienceLab, IMAGES.computerLab, IMAGES.library2].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img src={img} alt="Facility" className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* academic calendar */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label="Academic Calendar"
              title="Highlights of the year ahead"
              subtitle="Key dates that shape our academic rhythm — from term exams to our much-loved annual celebrations."
            />
            <ol className="mt-8 space-y-4">
              {calendar.map((c) => (
                <li key={c.month} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-serif text-sm font-bold text-royal-900">{c.month}</p>
                    <p className="text-sm text-slate-600">{c.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeader
              label="Examination Guidelines"
              title="Assessment with purpose"
              subtitle="Our evaluation philosophy balances academic accountability with the well-being of every student."
            />
            <ul className="mt-8 space-y-4">
              {examGuidelines.map((g) => (
                <li key={g} className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm text-slate-600">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="container-x flex flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-2xl font-bold text-royal-900 sm:text-3xl">Ready to join the GC Genius family?</h2>
          <p className="max-w-xl text-slate-600">Admissions for 2026-27 are open across all grades. Start your application today.</p>
          <button onClick={() => onNavigate('admissions')} className="btn-primary">Begin Admission Process <ArrowRight className="h-4 w-4" /></button>
        </div>
      </section>
    </div>
  );
}
