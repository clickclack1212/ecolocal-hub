import { Link } from 'react-router-dom';
import { MapPin, Tag } from 'lucide-react';
import type { Initiative } from '../data/initiatives';

interface Props {
  initiative: Initiative;
}

export default function InitiativeCard({ initiative }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <img
        src={initiative.image}
        alt={initiative.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-1">
        {/* Badge categoria */}
        <span className="inline-block text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full mb-3 self-start">
          {initiative.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {initiative.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {initiative.description}
        </p>

        {/* Luogo */}
        <div className="flex items-center gap-1 text-gray-500 text-xs mt-4">
          <MapPin size={13} aria-hidden="true" />
          <span>{initiative.location}</span>
        </div>

        {/* Tag */}
        <div className="flex flex-wrap gap-1 mt-3" aria-label="Tag">
          <Tag size={12} className="text-gray-400 mt-0.5" aria-hidden="true" />
          {initiative.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/initiatives/${initiative.id}`}
          className="mt-5 block text-center bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
          aria-label={`Scopri di più su ${initiative.title}`}
        >
          Scopri di più
        </Link>
      </div>
    </article>
  );
}
