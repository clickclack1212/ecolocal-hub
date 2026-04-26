import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Initiative } from '../data/initiatives';

interface Props {
  initiative: Initiative;
}

const categoryColors: Record<string, string> = {
  'Cibo Locale': 'bg-primary-50 text-primary-700',
  Riciclo: 'bg-blue-50 text-blue-700',
  Trasporti: 'bg-teal-50 text-teal-700',
  Energia: 'bg-yellow-50 text-yellow-700',
  'Spazi Verdi': 'bg-emerald-50 text-emerald-700',
  'Eventi Comunitari': 'bg-rose-50 text-rose-700',
};

export default function InitiativeCard({ initiative }: Props) {
  const catColor = categoryColors[initiative.category] ?? 'bg-gray-100 text-gray-600';

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
        {/* Category pill over image */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${catColor}`}
        >
          {initiative.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
          {initiative.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {initiative.description}
        </p>

        {/* Impact metric */}
        <div className="mt-4 px-3 py-2 bg-primary-50/70 rounded-xl">
          <p className="text-xs font-semibold text-primary-700">{initiative.impactMetric}</p>
        </div>

        {/* Footer row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <MapPin size={12} aria-hidden="true" />
            <span>{initiative.location}</span>
          </div>
          <Link
            to={`/initiatives/${initiative.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            aria-label={`Scopri di più su ${initiative.title}`}
          >
            Scopri
            <ArrowRight size={12} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
