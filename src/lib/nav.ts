export type PageId = 'home' | 'about' | 'academics' | 'admissions' | 'contact';

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'contact', label: 'Contact' },
];
