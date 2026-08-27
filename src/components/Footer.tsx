import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { SCHOOL } from '@/lib/data';
import { NAV_ITEMS, type PageId } from '@/lib/nav';

const socialIcons: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  YouTube: Youtube,
  Twitter,
};

type FooterProps = { onNavigate: (page: PageId) => void };

export default function Footer({ onNavigate }: FooterProps) {
  const go = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-950 text-white/70">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-royal-900">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold text-white">{SCHOOL.shortName}</span>
              <span className="block text-[11px] uppercase tracking-wider text-gold-300">Public School, Etawah</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            A premier CBSE-affiliated institution dedicated to nurturing confident, compassionate, and capable young minds in the heart of Etawah, Uttar Pradesh.
          </p>
          <div className="mt-5 flex gap-2">
            {SCHOOL.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Facebook;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-all duration-300 hover:bg-gold-400 hover:text-royal-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="text-white/70 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{SCHOOL.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${SCHOOL.phonePrimary}`} className="hover:text-gold-300">{SCHOOL.phonePrimary}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-gold-300">{SCHOOL.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{SCHOOL.hours}</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Admissions Open</h4>
          <p className="mt-2 text-sm text-white/70">Session 2026-27 applications now being accepted for all grades.</p>
          <button onClick={() => go('admissions')} className="btn-primary mt-4 w-full">
            Start Application
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SCHOOL.name}, Etawah. All rights reserved.</p>
          <p>Designed with care for the students of tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
