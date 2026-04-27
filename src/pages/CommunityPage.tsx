import { Link } from 'react-router-dom';
import { Users, Leaf, Globe, Heart, TrendingUp, Award, ArrowRight, Check } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "Scopri l'impatto locale",
    description:
      'Trova iniziative di sostenibilità nel tuo quartiere in linea con i tuoi valori: dagli orti urbani ai repair café.',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: Users,
    title: 'Connettiti con i vicini',
    description:
      'Incontra persone con i tuoi stessi valori. Collabora, condividi competenze e costruisci legami duraturi.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: TrendingUp,
    title: 'Monitora i progressi',
    description:
      "Vedi l'impatto reale della tua comunità: CO₂ ridotta, oggetti riparati, cibo locale prodotto.",
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Globe,
    title: 'Pensa globale, agisci locale',
    description:
      'Ogni azione locale contribuisce agli obiettivi globali. Colleghiamo le iniziative dal basso ai grandi quadri di sostenibilità.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Heart,
    title: 'Fai volontariato',
    description:
      'Offri il tuo tempo, le tue competenze o le tue risorse ai progetti attivi. Ogni contributo conta.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Award,
    title: 'Ottieni riconoscimento',
    description:
      'I contributori attivi sono messi in evidenza nel feed della comunità. Ispira gli altri con le tue azioni.',
    color: 'bg-purple-50 text-purple-700',
  },
];

const teamMembers = [
  { name: 'Gabriele Capuana', role: 'Responsabile del Progetto', initial: 'G', color: 'bg-primary-100 text-primary-700' },
  { name: 'Serena Di Gaudio', role: 'Membro del Team', initial: 'S', color: 'bg-purple-100 text-purple-700' },
];

const scienceStats = [
  { stat: '70%', desc: 'delle emissioni è influenzata da decisioni locali' },
  { stat: '3×', desc: 'più efficace: campagne tra pari vs istituzionali' },
  { stat: '12k€', desc: 'valore economico locale medio trattenuto per iniziativa' },
];

const missionPoints = [
  'Aggregare iniziative reali, gestite da cittadini',
  "Rendere semplice partecipare e misurare l'impatto",
  "Connettere l'azione locale ai grandi obiettivi globali",
];

export default function CommunityPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Chi Siamo
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2 mb-5">
            Costruiamo insieme una<br />
            <span className="text-primary-600">comunità sostenibile.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            EcoLocal Hub è una piattaforma civica nata dalla convinzione che
            un cambiamento ambientale significativo parta dal livello del quartiere.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              La nostra missione
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2 mb-5 leading-tight">
              Azioni locali,<br />impatto globale.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Crediamo che i movimenti di sostenibilità più efficaci siano quelli
              radicati nelle comunità locali. EcoLocal Hub rende semplice scoprire
              cosa succede vicino a te, partecipare e misurare l'impatto collettivo.
            </p>
            <ul className="space-y-3 mb-8">
              {missionPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-primary-600" strokeWidth={3} />
                  </div>
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              Esplora le iniziative
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Stats card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8" aria-hidden="true">
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: '6+', l: 'Progetti attivi' },
                { v: '800+', l: 'Membri' },
                { v: '2024', l: 'Anno di fondazione' },
                { v: 'Palermo', l: 'Città pilota' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="text-2xl font-extrabold text-primary-700">{s.v}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 sm:py-24 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Perché aderire
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4 leading-tight">
              Vantaggi della comunità.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Che tu sia curioso o attivista esperto, EcoLocal Hub ha qualcosa per te.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${b.color}`}>
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SCIENCE / METRICS ── */}
      <section className="py-20 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-400">
            La scienza lo dimostra
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 leading-tight tracking-tight">
            Perché l'azione locale funziona.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
            Le ricerche dimostrano costantemente che le iniziative ambientali
            basate sulla comunità generano fino a{' '}
            <strong className="text-white">3 volte più cambiamento comportamentale</strong>{' '}
            rispetto alle campagne istituzionali dall'alto.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {scienceStats.map((s) => (
              <div key={s.stat} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-primary-400 mb-3">{s.stat}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Il team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4">
            Le persone dietro EcoLocal Hub.
          </h2>
          <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
            Studenti LUMSA appassionati di sostenibilità e tecnologia civica.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm w-60 hover:border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-16 h-16 rounded-2xl ${m.color} flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {m.initial}
                </div>
                <div className="font-semibold text-gray-900">{m.name}</div>
                <div className="text-sm text-gray-400 mt-1">{m.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Unisciti alla comunità
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
