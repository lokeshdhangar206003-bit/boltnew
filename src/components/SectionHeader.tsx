type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeader({ label, title, subtitle, center, light }: Props) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label && (
        <span className={`section-label ${light ? '!bg-white/10 !text-gold-300' : ''}`}>{label}</span>
      )}
      <h2 className={`mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-royal-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
