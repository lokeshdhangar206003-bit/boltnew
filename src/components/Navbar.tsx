import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '@/lib/nav';
import { SCHOOL } from '@/lib/data';

type NavbarProps = {
  current: PageId;
  onNavigate: (page: PageId) => void;
};

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-royal-900/95 shadow-xl backdrop-blur-md'
          : 'bg-royal-900/80 backdrop-blur-sm'
      }`}
    >
      {/* top utility bar */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container-x flex items-center justify-between py-2 text-xs text-white/70">
          <p>{SCHOOL.address}</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${SCHOOL.phonePrimary}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-300">
              <Phone className="h-3.5 w-3.5" /> {SCHOOL.phonePrimary}
            </a>
            <span className="text-white/30">|</span>
            <span>Admissions Open 2026-27</span>
          </div>
        </div>
      </div>

      <nav className="container-x flex items-center justify-between py-3">
        <button onClick={() => go('home')} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-royal-900 shadow-lg shadow-gold-500/30">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className="text-left leading-tight">
            <span className="block font-serif text-lg font-bold text-white">{SCHOOL.shortName}</span>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-gold-300">Public School, Etawah</span>
          </span>
        </button>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  current === item.id
                    ? 'text-gold-300'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {current === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />
                )}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => go('admissions')}
              className="btn-primary !px-5 !py-2.5 !text-xs"
            >
              Apply Now
            </button>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="animate-slide-down border-t border-white/10 bg-royal-950 lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    current === item.id
                      ? 'bg-white/10 text-gold-300'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="px-4 pt-3 pb-2">
              <button
                onClick={() => go('admissions')}
                className="btn-primary w-full"
              >
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
