import { useParams, Link } from 'react-router-dom';
import { MapPin, Tag, Mail, Globe, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react';
import { initiatives } from '../data/initiatives';

const categoryColors: Record<string, string> = {
  'Cibo Locale': 'bg-primary-50 text-primary-700',
  Riciclo: 'bg-blue-50 text-blue-700',
  Trasporti: 'bg-teal-50 text-teal-700',
  Energia: 'bg-yellow-50 text-yellow-700',
  'Spazi Verdi': 'bg-emerald-50 text-emerald-700',
  'Eventi Comunitari': 'bg-rose-50 text-rose-700',
};

export default function InitiativeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const initiative = initiatives.find((i) => i.id === id);

  if (!initiative) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-6 text-4xl">
          🌿
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Iniziativa non trovata</h1>
        <p className="text-gray-500 mb-8">
          Questa iniziativa potrebbe essere stata spostata o non esiste più.
        </p>
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          Torna alle Iniziative
        </Link>
      </div>
    );
  }

  const catColor = categoryColors[initiative.category] ?? 'bg-gray-100 text-gray-600';

  return (
    <article>
      {/* Hero image */}
      <div className="relative h-64 sm:h-80 bg-gray-100 overflow-hidden">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {/* Back link over image */}
        <Link
          to="/initiatives"
          className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium bg-black/30 hover:bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg transition-colors"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Tutte le iniziative
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-3 gap-10">

        {/* Main */}
        <div className="lg:col-span-2">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${catColor}`}>
            {initiative.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-5 leading-tight">
            {initiative.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {initiative.longDescription}
          </p>

          {/* Impact */}
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-8">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
              Impatto misurato
            </p>
            <p className="text-primary-900 font-semibold text-lg">{initiative.impactMetric}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={13} className="text-gray-400" aria-hidden="true" />
            {initiative.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          {/* Details card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Dettagli
            </h2>

            <div className="flex items-start gap-2.5 text-sm text-gray-600 mb-4">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
              <span>{initiative.location}</span>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-gray-600 mb-4">
              <Mail size={14} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
              <a
                href={`mailto:${initiative.contact}`}
                className="hover:text-primary-600 underline break-all transition-colors"
              >
                {initiative.contact}
              </a>
            </div>

            {initiative.website && (
              <div className="flex items-start gap-2.5 text-sm text-gray-600">
                <Globe size={14} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
                <a
                  href={initiative.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 underline break-all transition-colors"
                >
                  Sito web
                </a>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl transition-colors"
          >
            Partecipa a questa iniziativa
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>

          {/* Voiceflow placeholder */}
          <div
            id="voiceflow-initiative-chat"
            className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-5 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3">
              <MessageCircle size={18} className="text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Chiedi all'Eco Assistente</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Chatbot AI in arrivo tramite Voiceflow
            </p>
            <Link
              to="/eco-assistant"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700 mt-3 transition-colors"
            >
              Prova la demo
              <ArrowRight size={11} strokeWidth={2.5} />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
