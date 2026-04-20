import { Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

/*
 * INTEGRAZIONE MODULO TALLY.SO
 *
 * Per incorporare un modulo Tally.so reale:
 * 1. Crea il tuo modulo su https://tally.so
 * 2. Clicca "Condividi" > "Incorpora" e copia il codice iframe
 * 3. Sostituisci il div #tally-embed-container con l'iframe Tally:
 *
 *    <iframe
 *      data-tally-src="https://tally.so/embed/ID_DEL_TUO_FORM?alignLeft=1&hideTitle=1&transparentBackground=1"
 *      loading="lazy"
 *      width="100%"
 *      height="500"
 *      frameBorder="0"
 *      title="EcoLocal Hub - Modulo Partecipazione"
 *    ></iframe>
 *
 * 4. (Opzionale) Aggiungi lo script Tally popup in index.html:
 *    <script async src="https://tally.so/widgets/embed.js"></script>
 */

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Partecipa
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Unisciti al Movimento
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Che tu voglia proporre una nuova iniziativa, fare volontariato
            o semplicemente restare informato, compila il modulo qui sotto
            e ti risponderemo al più presto.
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Sinistra: info */}
        <div>
          <SectionHeading
            title="Come Partecipare"
            subtitle="Ci sono molti modi per contribuire: grandi o piccoli, ogni gesto conta."
            center={false}
          />

          <ul className="flex flex-col gap-5 mb-8 list-none m-0 p-0">
            {[
              {
                emoji: '🌱',
                title: 'Proponi un\'Iniziativa',
                desc: 'Hai un\'idea verde per il tuo quartiere? Inviala e ti aiutiamo a realizzarla.',
              },
              {
                emoji: '🤝',
                title: 'Fai Volontariato',
                desc: 'Offri il tuo tempo e le tue competenze ai progetti esistenti: dai repair café agli orti comunitari.',
              },
              {
                emoji: '📢',
                title: 'Difffondi la Notizia',
                desc: 'Condividi EcoLocal Hub con amici, sui social e nei gruppi locali.',
              },
              {
                emoji: '💡',
                title: 'Invia Feedback',
                desc: 'Aiutaci a migliorare la piattaforma: i tuoi suggerimenti guidano ciò che costruiamo.',
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.emoji}
                </span>
                <div>
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* Dati di contatto */}
          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-primary-500 shrink-0" aria-hidden="true" />
              <a
                href="mailto:g.capuana@lumsastud.it"
                className="hover:text-primary-600 transition-colors"
              >
                g.capuana@lumsastud.it
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-primary-500 shrink-0" aria-hidden="true" />
              <a
                href="mailto:s.digaudio@lumsastud.it"
                className="hover:text-primary-600 transition-colors"
              >
                s.digaudio@lumsastud.it
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-primary-500 shrink-0" aria-hidden="true" />
              <span>Roma, Italia (disponibili da remoto)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-primary-500 shrink-0" aria-hidden="true" />
              <span>Risposta entro 2 giorni lavorativi</span>
            </div>
          </div>
        </div>

        {/* Destra: embed Tally.so */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-primary-600 px-6 py-4">
              <h2 className="text-white font-semibold text-lg">Iscriviti e Contattaci</h2>
              <p className="text-primary-200 text-sm mt-1">
                Inserisci qui il tuo modulo Tally.so
              </p>
            </div>

            {/*
             * PLACEHOLDER TALLY.SO
             * Sostituisci questo div con il tuo iframe Tally (vedi commento in cima al file).
             */}
            <div
              id="tally-embed-container"
              className="min-h-[420px] flex flex-col items-center justify-center p-8 text-center bg-gray-50"
              aria-label="Placeholder modulo di contatto"
            >
              <div className="text-5xl mb-4" aria-hidden="true">📋</div>
              <p className="text-gray-600 font-medium mb-2">Modulo in arrivo</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Quest'area è pronta per un modulo{' '}
                <strong className="text-gray-600">Tally.so</strong>.
                Crea il tuo modulo su{' '}
                <span className="text-primary-600">tally.so</span> e incolla
                il codice iframe qui.
              </p>
              <div className="mt-6 bg-gray-200 text-gray-500 text-xs px-4 py-2 rounded-lg font-mono">
                &lt;iframe data-tally-src="..." /&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
