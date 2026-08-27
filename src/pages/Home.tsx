import { ArrowRight, Users, MonitorPlay, Trophy, Bus, Quote, Newspaper, ChevronRight } from 'lucide-react';
import Counter from '@/components/Counter';
import SectionHeader from '@/components/SectionHeader';
import { IMAGES, SCHOOL } from '@/lib/data';
import type { PageId } from '@/lib/nav';

type Props = { onNavigate: (page: PageId) => void };

const stats = [
  { icon: Users, label: 'Experienced Faculty', value: 65, suffix: '+' },
  { icon: MonitorPlay, label: 'Smart Classrooms', value: 40, suffix: '+' },
  { icon: Trophy, label: 'Sports & Activities', value: 18, suffix: '+' },
  { icon: Bus, label: 'Safe Bus Routes', value: 22, suffix: '+' },
];

const news = [
  { date: 'Aug 24, 2026', tag: 'Admissions', title: 'Admissions open for the 2026-27 academic session for all grades.', href: 'admissions' as PageId },
  { date: 'Aug 18, 2026', tag: 'Results', title: 'Our students achieved a 100% pass rate in the CBSE Class XII board examinations.', href: 'academics' as PageId },
  { date: 'Aug 10, 2026', tag: 'Event', title: 'Annual Sports Day to be held on the school grounds this December.', href: 'about' as PageId },
  { date: 'Jul 28, 2026', tag: 'Facility', title: 'New state-of-the-art science and robotics lab inaugurated on campus.', href: 'academics' as PageId },
];

const tickerItems = news.map((n) => n.title);

export default function Home({ onNavigate }: Props) {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="GC Genius Public School campus" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-950/95 via-royal-900/80 to-royal-800/50" />
        </div>

        <div className="container-x relative z-10 pt-28 pb-16">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-gold-400/30">
              CBSE Affiliated &middot; Etawah, Uttar Pradesh
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Shaping Bright Futures at GC Genius Public School, Etawah
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Nurturing curious minds and confident hearts through a holistic education that balances academic excellence, character building, and co-curricular brilliance — right here in the heart of Etawah.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => onNavigate('admissions')} className="btn-primary">
                Admissions Open 2026-27 <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate('academics')} className="btn-outline">
                Explore Campus
              </button>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-royal-950/80 backdrop-blur-md">
          <div className="container-x grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/20">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="leading-tight">
                  <p className="font-serif text-2xl font-bold text-white">
                    <Counter end={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS TICKER */}
      <section className="bg-royal-900 py-3 text-white">
        <div className="container-x flex items-center gap-4 overflow-hidden">
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal-950">
            <Newspaper className="h-3.5 w-3.5" /> Latest
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee gap-12 text-sm text-white/80">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5 text-gold-400" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME / PRINCIPAL MESSAGE */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-royal-900/20">
              <img src={IMAGES.principal} alt="Principal" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-400 p-6 shadow-xl sm:block">
              <p className="font-serif text-3xl font-bold text-royal-950">25+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-royal-900">Years of Excellence</p>
            </div>
          </div>
          <div>
            <SectionHeader
              label="Principal's Message"
              title="A place where every child is seen, heard, and inspired"
              subtitle="At GC Genius Public School, we believe education is not the filling of a pail, but the lighting of a fire. Our dedicated educators walk alongside each student, helping them discover their unique gifts and grow into thoughtful, capable citizens."
            />
            <blockquote className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <Quote className="h-7 w-7 text-gold-400" />
              <p className="mt-3 font-serif text-lg italic text-royal-900">
                "We don't just teach lessons — we shape lives. Every child who walks through our gates carries within them a future we are honoured to help build."
              </p>
              <footer className="mt-4 text-sm">
                <p className="font-semibold text-slate-900">Dr. (Mrs.) Anjali Verma</p>
                <p className="text-slate-500">Principal, GC Genius Public School</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              label="News & Announcements"
              title="What's happening on campus"
              subtitle="Stay up to date with the latest events, achievements, and important notices from our school community."
            />
            <button onClick={() => onNavigate('about')} className="flex items-center gap-2 text-sm font-semibold text-royal-700 transition-colors hover:text-royal-900">
              View all <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((n) => (
              <article
                key={n.title}
                className="card group flex flex-col cursor-pointer"
                onClick={() => onNavigate(n.href)}
              >
                <span className="self-start rounded-full bg-royal-50 px-3 py-1 text-xs font-semibold text-royal-700">{n.tag}</span>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-slate-900 group-hover:text-royal-700">
                  {n.title}
                </h3>
                <p className="mt-auto pt-4 text-xs text-slate-400">{n.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-royal-900 py-16">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.graduation} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container-x relative z-10 flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Give your child the gift of a brilliant beginning
          </h2>
          <p className="max-w-xl text-white/70">
            Admissions for the 2026-27 session are now open. Limited seats available across all grades — from Kindergarten to Senior Secondary.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button onClick={() => onNavigate('admissions')} className="btn-primary">
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-outline">
              Schedule a Campus Visit
            </button>
          </div>
        </div>
      </section>

      {/* contact mini strip */}
      <section className="bg-royal-950 py-8 text-center text-white/70">
        <div className="container-x text-sm">
          <p>Visit us at {SCHOOL.address} &middot; Call {SCHOOL.phonePrimary} &middot; Email {SCHOOL.email}</p>
        </div>
      </section>
    </div>
  );
}
