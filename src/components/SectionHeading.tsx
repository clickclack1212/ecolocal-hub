interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: Props) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight ${label ? 'mt-2' : ''} mb-3`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
