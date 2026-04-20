import { useParams, Link } from 'react-router-dom';
import { MapPin, Tag, Mail, Globe, ArrowLeft, MessageCircle } from 'lucide-react';
import { initiatives } from '../data/initiatives';

/*
 * INTEGRAZIONE CHATBOT VOICEFLOW - Pagina Dettaglio Iniziativa
 *
 * Una volta configurato Voiceflow (vedi ChatbotButton.tsx),
 * sostituisci il div placeholder con:
 *   window.voiceflow.chat.open();
 *   window.voiceflow.chat.interact({ type: 'launch', payload: { initiativeId: initiative.id } });
 */

export default function InitiativeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const initiative = initiatives.find((i) => i.id === id);

  if (!initiative) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🌿</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Iniziativa non trovata</h1>
        <p className="text-gray-500 mb-6">
          Questa iniziativa potrebbe essere stata spostata o non esiste più.
        </p>
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Torna alle Iniziative
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Link indietro */}
      <Link
        to="/initiatives"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 transition-colors mb-6"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Torna a tutte le iniziative
      </Link>

      {/* Immagine hero */}
      <img
        src={initiative.image}
        alt={initiative.title}
        className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8 shadow"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contenuto principale */}
        <div className="md:col-span-2">
          <span className="inline-block text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full mb-3">
            {initiative.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{initiative.title}</h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {initiative.longDescription}
          </p>

          {/* Impatto */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-1">
              Impatto
            </p>
            <p className="text-primary-900 font-medium">{initiative.impactMetric}</p>
          </div>

          {/* Tag */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="text-gray-400" aria-hidden="true" />
            {initiative.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          {/* Scheda info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-4">Dettagli</h2>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
              <span>{initiative.location}</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
              <Mail size={15} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
              <a
                href={`mailto:${initiative.contact}`}
                className="hover:text-primary-600 underline break-all"
              >
                {initiative.contact}
              </a>
            </div>

            {initiative.website && (
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Globe size={15} className="mt-0.5 shrink-0 text-primary-500" aria-hidden="true" />
                <a
                  href={initiative.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 underline break-all"
                >
                  Sito web
                </a>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Partecipa
          </Link>

          {/* PLACEHOLDER VOICEFLOW */}
          <div
            id="voiceflow-initiative-chat"
            className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-5 text-center"
          >
            <MessageCircle size={24} className="mx-auto text-gray-400 mb-2" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-600 mb-1">Chiedi all'Eco Assistente</p>
            <p className="text-xs text-gray-400">
              Chatbot AI in arrivo tramite Voiceflow
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
