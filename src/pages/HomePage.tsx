import { Link } from 'react-router-dom';
import { Recycle, Sprout, Zap, Users, Calendar, Bike } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import InitiativeCard from '../components/InitiativeCard';
import { initiatives } from '../data/initiatives';

const categories = [
  {
    icon: <Recycle size={28} aria-hidden="true" />,
    label: 'Riciclo e Riparazione',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Sprout size={28} aria-hidden="true" />,
    label: 'Cibo Locale',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: <Zap size={28} aria-hidden="true" />,
    label: 'Energie Rinnovabili',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: <Users size={28} aria-hidden="true" />,
    label: 'Comunità',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Calendar size={28} aria-hidden="true" />,
    label: 'Eventi Locali',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: <Bike size={28} aria-hidden="true" />,
    label: 'Trasporti Verdi',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function HomePage() {
  const featured = initiatives.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
        aria-label="Hero"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary-200 text-sm font-semibold uppercase tracking-widest mb-4">
              🌿 Piattaforma di Sostenibilità Locale
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Agisci Localmente. <br />
              <span className="text-primary-200">Pensa Verde.</span>
            </h1>
            <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-lg">
              Scopri le iniziative di sostenibilità nella tua città.
              Connettiti con i vicini, riduci la tua impronta ecologica
              e fai la differenza a partire dal tuo quartiere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/initiatives"
                className="bg-white text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-xl transition-colors shadow"
              >
                Esplora le Iniziative
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Unisciti alla Comunità
              </Link>
            </div>
          </div>

          {/* Illustrazione decorativa */}
          <div
            className="hidden md:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center text-9xl select-none">
              🌍
            </div>
          </div>
        </div>
      </section>

      {/* Statistiche di impatto */}
      <section className="bg-primary-50 py-10" aria-label="Statistiche di impatto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '6+', label: 'Iniziative Attive' },
            { value: '800+', label: 'Membri della Comunità' },
            { value: '45t', label: 'CO₂ Evitata / anno' },
            { value: '1.200', label: 'Tragitti Auto Sostituiti' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-primary-700">{s.value}</div>
              <div className="text-gray-600 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorie di sostenibilità */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading
          label="Di cosa ci occupiamo"
          title="Categorie di Sostenibilità"
          subtitle="Dai mercati a rifiuti zero al solare condiviso: trova l'azione verde più adatta alla tua vita."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to="/initiatives"
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl ${cat.color} hover:scale-105 transition-transform text-center`}
              aria-label={`Vedi iniziative: ${cat.label}`}
            >
              {cat.icon}
              <span className="text-sm font-medium leading-tight">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Iniziative in evidenza */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="In Evidenza"
            title="Iniziative Locali"
            subtitle="Progetti reali, comunità reali, impatto reale."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((i) => (
              <InitiativeCard key={i.id} initiative={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/initiatives"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Vedi Tutte le Iniziative
            </Link>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto a fare la differenza?</h2>
          <p className="text-primary-200 mb-8 text-lg">
            Unisciti a centinaia di persone che stanno già agendo.
            Iscriviti per ricevere aggiornamenti sulle nuove iniziative nella tua zona.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-3 rounded-xl transition-colors shadow"
          >
            Partecipa Oggi
          </Link>
        </div>
      </section>
    </>
  );
}
