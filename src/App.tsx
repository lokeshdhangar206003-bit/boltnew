import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastProvider } from '@/components/Toast';
import { NAV_ITEMS, type PageId } from '@/lib/nav';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Academics from '@/pages/Academics';
import Admissions from '@/pages/Admissions';
import Contact from '@/pages/Contact';

const validPages = NAV_ITEMS.map((n) => n.id);

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
  return validPages.includes(hash) ? hash : 'home';
}

export default function App() {
  const [page, setPage] = useState<PageId>(getInitialPage);

  useEffect(() => {
    const onHash = () => setPage(getInitialPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (next: PageId) => {
    window.location.hash = `/${next}`;
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const render = () => {
    switch (page) {
      case 'about': return <About onNavigate={navigate} />;
      case 'academics': return <Academics onNavigate={navigate} />;
      case 'admissions': return <Admissions onNavigate={navigate} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar current={page} onNavigate={navigate} />
        <main className="flex-1">{render()}</main>
        <Footer onNavigate={navigate} />
      </div>
    </ToastProvider>
  );
}
