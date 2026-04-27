import { useEffect } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

// Tally global tipizzato
declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const howToJoin = [
  {
    emoji: '🌱',
    title: "Proponi un'iniziativa",
    desc: "Hai un'idea verde per il tuo quartiere? Inviala e ti aiutiamo a realizzarla.",
  },
  {
    emoji: '🤝',
    title: 'Fai volontariato',
    desc: 'Offri il tuo tempo e le tue competenze ai progetti esistenti: dai repair café agli orti comunitari.',
  },
  {
    emoji: '📢',
    title: 'Diffondi la notizia',
    desc: 'Condividi EcoLocal Hub con amici, sui social e nei gruppi locali.',
  },
  {
    emoji: '💡',
    title: 'Invia feedback',
    desc: 'Aiutaci a migliorare la piattaforma: i tuoi suggerimenti guidano ciò che costruiamo.',
  },
];

const contactInfo = [
  { Icon: Mail, label: 'g.capuana@lumsastud.it', href: 'mailto:g.capuana@lumsastud.it' },
  { Icon: Mail, label: 's.digaudio@lumsastud.it', href: 'mailto:s.digaudio@lumsastud.it' },
  { Icon: MapPin, label: 'Palermo, Italia (disponibili da remoto)', href: null },
  { Icon: Clock, label: 'Risposta entro 2 giorni lavorativi', href: null },
];

export default function ContactPage() {
  // Tally viene eseguito prima che React monti l'iframe nel DOM:
  // richiamiamo loadEmbeds() manualmente dopo il mount.
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    } else {
      // Fallback: se lo script non è ancora pronto, aspettiamo l'evento
      const onLoad = () => window.Tally?.loadEmbeds();
      document.querySelector('script[src*="tally.so"]')
        ?.addEventListener('load', onLoad);
      return () => {
        document.querySelector('script[src*="tally.so"]')
          ?.removeEventListener('load', onLoad);
      };
    }
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Partecipa
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 mb-5 leading-tight">
            Unisciti al movimento.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Che tu voglia proporre una nuova iniziativa, fare volontariato o restare
            informato — c'è un posto per te in EcoLocal Hub.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-14">

        {/* Left: how to join */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-8">
            Come partecipare
          </h2>

          <ul className="space-y-6 mb-12 list-none m-0 p-0">
            {howToJoin.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="text-2xl shrink-0 w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100" aria-hidden="true">
                  {item.emoji}
                </span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* Contact info */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Contatti diretti
            </h3>
            <ul className="space-y-3.5 list-none m-0 p-0">
              {contactInfo.map(({ Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-gray-600">
                  <Icon size={14} className="text-primary-500 shrink-0" aria-hidden="true" />
                  {href ? (
                    <a href={href} className="hover:text-primary-600 transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: form embed */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Card header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900">Iscriviti e contattaci</h2>
                <p className="text-xs text-gray-400 mt-0.5">Compila il modulo — ti risponderemo entro 2 giorni</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                Attivo
              </div>
            </div>

            {/* Tally.so embed — Form ID: Pd2rrb */}
            <div id="tally-embed-container" className="px-2 py-2">
              <iframe
                data-tally-src="https://tally.so/embed/Pd2rrb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="540"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="EcoLocal Hub — Modulo Partecipazione"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
