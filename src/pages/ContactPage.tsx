import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

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
  { Icon: MapPin, label: 'Roma, Italia (disponibili da remoto)', href: null },
  { Icon: Clock, label: 'Risposta entro 2 giorni lavorativi', href: null },
];

export default function ContactPage() {
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
                <p className="text-xs text-gray-400 mt-0.5">Tally.so embed — pronti per l'integrazione</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                Attivo
              </div>
            </div>

            {/*
             * PLACEHOLDER TALLY.SO
             * Sostituisci questo div con il tuo iframe Tally:
             *
             * <iframe
             *   data-tally-src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1"
             *   loading="lazy"
             *   width="100%"
             *   height="520"
             *   frameBorder="0"
             *   title="EcoLocal Hub - Modulo Partecipazione"
             * />
             *
             * Aggiungi anche: <script async src="https://tally.so/widgets/embed.js" /> in index.html
             */}
            <div
              id="tally-embed-container"
              className="min-h-[420px] flex flex-col items-center justify-center p-10 text-center bg-gray-50/50"
              aria-label="Placeholder modulo di contatto"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-5 text-2xl shadow-sm">
                📋
              </div>
              <p className="text-base font-semibold text-gray-700 mb-2">
                Modulo in arrivo
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Quest'area è pronta per un modulo{' '}
                <strong className="text-gray-600">Tally.so</strong>.
                Crea il tuo form e incolla l'iframe qui.
              </p>
              <div className="mt-6 bg-gray-100 text-gray-400 text-xs px-4 py-2.5 rounded-lg font-mono">
                &lt;iframe data-tally-src="…" /&gt;
              </div>

              {/* Fallback mailto CTA */}
              <a
                href="mailto:g.capuana@lumsastud.it"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Scrivici via email
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
