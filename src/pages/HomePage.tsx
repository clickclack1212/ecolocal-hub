import { Link } from 'react-router-dom';
import {
  ArrowRight, Recycle, Sprout, Zap, Users, Calendar, Bike,
  Leaf, Globe, TrendingUp, MessageCircle, Check,
} from 'lucide-react';
import InitiativeCard from '../components/InitiativeCard';
import { initiatives } from '../data/initiatives';

const stats = [
  { value: '6+', label: 'Iniziative attive' },
  { value: '800+', label: 'Membri della comunità' },
  { value: '45t', label: 'CO₂ evitata / anno' },
  { value: '1.200', label: 'Tragitti auto sostituiti' },
];

const categories = [
  { icon: Recycle, label: 'Riciclo', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Sprout, label: 'Cibo Locale', color: 'bg-primary-50 text-primary-700 border-primary-100' },
  { icon: Zap, label: 'Energia', color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { icon: Users, label: 'Comunità', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { icon: Calendar, label: 'Eventi', color: 'bg-rose-50 text-rose-600 border-rose-100' },
  { icon: Bike, label: 'Trasporti', color: 'bg-teal-50 text-teal-600 border-teal-100' },
];

const features = [
  {
    label: 'Scopri',
    title: 'Trova iniziative vicino a te.',
    description:
      'Sfoglia progetti reali nella tua città: orti urbani, repair café, cooperative solari, mercati a rifiuti zero. Filtrate per quartiere e categoria.',
    points: ['Ricerca per zona e categoria', 'Dettagli, contatti e impatto', 'Aggiornate in tempo reale'],
    tint: 'bg-earth-50 border-earth-100',
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-400" />
          <span className="text-xs text-gray-400 font-medium">Iniziative · Palermo</span>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { title: 'Orto Comunitario Riverside', cat: 'Cibo Locale', impact: '800 kg / stagione' },
            { title: 'GreenWheels Bike Sharing', cat: 'Trasporti', impact: '1.200 tragitti / mese' },
            { title: 'Mercato a Rifiuti Zero', cat: 'Riciclo', impact: '500 kg plastica evitata' },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <div className="text-xs font-semibold text-gray-800">{item.title}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{item.cat}</div>
              </div>
              <div className="text-[10px] text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded-full whitespace-nowrap">
                {item.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'Connetti',
    title: 'Unisciti a chi già agisce.',
    description:
      "EcoLocal Hub non è una directory — è una comunità. Trova persone con i tuoi valori, partecipa a eventi locali e misura l'impatto collettivo del tuo quartiere.",
    points: ['Profili e competenze dei volontari', 'Forum e bacheca annunci', 'Tracker impatto comunitario'],
    tint: 'bg-teal-50 border-teal-100',
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm shrink-0">G</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Gabriele C.</div>
              <div className="text-xs text-gray-400">Partecipante · Orto Riverside</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-sm shrink-0">S</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Serena D.</div>
              <div className="text-xs text-gray-400">Volontaria · Fix It! Repair Café</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-semibold text-sm shrink-0">M</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Marco L.</div>
              <div className="text-xs text-gray-400">Socio · SolarShare</div>
            </div>
          </div>
          <div className="mt-2 pt-3 border-t border-gray-50">
            <div className="text-xs text-gray-400 mb-2">Impatto collettivo questo mese</div>
            <div className="flex gap-4">
              <div><div className="text-lg font-bold text-primary-700">38</div><div className="text-[10px] text-gray-400">azioni</div></div>
              <div><div className="text-lg font-bold text-primary-700">4.2t</div><div className="text-[10px] text-gray-400">CO₂</div></div>
              <div><div className="text-lg font-bold text-primary-700">127</div><div className="text-[10px] text-gray-400">oggetti</div></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Assistente AI',
    title: "Chiedi all'Eco Assistente.",
    description:
      "Non sai da dove iniziare? L'agente AI analizza le tue domande e suggerisce le iniziative più adatte a te, nella tua zona, con i tuoi obiettivi.",
    points: ['Suggerimenti personalizzati', 'Basato su dati locali reali', 'Integrazione Voiceflow in arrivo'],
    tint: 'bg-primary-50 border-primary-100',
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
            <MessageCircle size={12} className="text-white" />
          </div>
          <span className="text-xs font-medium text-gray-700">Eco Assistente</span>
          <span className="ml-auto text-[10px] text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full">online</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-gray-50 rounded-xl rounded-tl-sm p-3 max-w-[85%]">
            <p className="text-xs text-gray-700 leading-relaxed">
              🌿 Ciao! Come posso aiutarti a vivere in modo più sostenibile oggi?
            </p>
          </div>
          <div className="bg-primary-600 rounded-xl rounded-tr-sm p-3 max-w-[85%] ml-auto">
            <p className="text-xs text-white leading-relaxed">
              Come posso ridurre gli sprechi alimentari?
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl rounded-tl-sm p-3 max-w-[90%]">
            <p className="text-xs text-gray-700 leading-relaxed">
              🥕 Il Mercato a Rifiuti Zero in Piazza Repubblica è perfetto per te! Ogni primo sabato del mese…
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const valuePropCards = [
  {
    icon: Globe,
    title: 'Azioni concrete',
    desc: "Ogni progetto ha contatti reali, indirizzi e metriche d'impatto verificabili.",
  },
  {
    icon: Users,
    title: 'Comunità attiva',
    desc: 'Oltre 800 persone già coinvolte in iniziative nella città di Palermo.',
  },
  {
    icon: TrendingUp,
    title: 'Impatto misurabile',
    desc: "45 tonnellate di CO₂ evitate all'anno grazie alle iniziative aggregate.",
  },
  {
    icon: Leaf,
    title: "Dal basso verso l'alto",
    desc: 'Ogni iniziativa è gestita da cittadini reali, non da istituzioni.',
  },
];

/* ─── Illustrated landscape SVG ─── */
function HeroLandscape() {
  const leftTrees = [
    { x: -10, y: 462, s: 1.05 }, { x: 38, y: 455, s: 1.15 }, { x: 90, y: 463, s: 0.9 },
    { x: 138, y: 452, s: 1.2 }, { x: 186, y: 460, s: 1.0 }, { x: 232, y: 455, s: 0.88 },
    { x: 276, y: 463, s: 1.08 }, { x: 316, y: 458, s: 0.92 },
    { x: 10, y: 482, s: 0.72 }, { x: 58, y: 478, s: 0.78 }, { x: 112, y: 483, s: 0.7 },
    { x: 162, y: 476, s: 0.75 }, { x: 210, y: 480, s: 0.68 }, { x: 258, y: 477, s: 0.73 },
  ];
  const rightTrees = [
    { x: 1084, y: 458, s: 0.92 }, { x: 1124, y: 462, s: 1.05 }, { x: 1162, y: 455, s: 1.15 },
    { x: 1210, y: 463, s: 0.9 }, { x: 1258, y: 452, s: 1.2 }, { x: 1302, y: 460, s: 1.0 },
    { x: 1344, y: 455, s: 0.88 }, { x: 1388, y: 463, s: 1.08 },
    { x: 1100, y: 480, s: 0.72 }, { x: 1148, y: 476, s: 0.75 }, { x: 1195, y: 482, s: 0.7 },
    { x: 1245, y: 478, s: 0.73 }, { x: 1292, y: 481, s: 0.68 }, { x: 1342, y: 477, s: 0.72 },
    { x: 1390, y: 480, s: 0.7 },
  ];
  const midTrees = [
    { x: 348, y: 480, s: 0.6 }, { x: 390, y: 485, s: 0.55 }, { x: 430, y: 480, s: 0.62 },
    { x: 468, y: 487, s: 0.57 },
    { x: 932, y: 480, s: 0.6 }, { x: 972, y: 485, s: 0.57 }, { x: 1012, y: 480, s: 0.62 },
    { x: 1052, y: 487, s: 0.55 },
  ];
  const stars = [
    [85, 48], [230, 28], [415, 62], [660, 32], [880, 54],
    [970, 38], [1120, 58], [1310, 44], [1370, 72], [520, 45], [740, 28],
  ];

  const Tree = ({ x, y, s }: { x: number; y: number; s: number }) => (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-5" y="0" width="10" height="24" fill="#030c06" />
      <polygon points="0,-88 -28,0 28,0" fill="#062214" />
      <polygon points="0,-112 -21,-28 21,-28" fill="#082c1a" />
      <polygon points="0,-134 -14,-60 14,-60" fill="#0d3a20" />
    </g>
  );

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041510" />
          <stop offset="35%" stopColor="#083522" />
          <stop offset="65%" stopColor="#0f4025" />
          <stop offset="85%" stopColor="#195c38" />
          <stop offset="100%" stopColor="#246845" />
        </linearGradient>
        <radialGradient id="g-glow" cx="50%" cy="62%" r="32%">
          <stop offset="0%" stopColor="#246845" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#041510" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="g-road" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#c49a18" />
          <stop offset="100%" stopColor="#7a5e0a" />
        </linearGradient>
        <linearGradient id="g-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a2e18" />
          <stop offset="100%" stopColor="#030c06" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1400" height="700" fill="url(#g-sky)" />
      {/* Horizon glow */}
      <rect width="1400" height="700" fill="url(#g-glow)" />

      {/* Stars */}
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.4" />
      ))}

      {/* Far mountains */}
      <polygon points="0,390 140,245 280,390" fill="#1a6040" opacity="0.5" />
      <polygon points="180,390 370,210 560,390" fill="#1d6a44" opacity="0.45" />
      <polygon points="450,390 690,180 930,390" fill="#1a6040" opacity="0.4" />
      <polygon points="780,390 980,225 1180,390" fill="#1d6a44" opacity="0.45" />
      <polygon points="1080,390 1260,248 1400,360 1400,390" fill="#1a6040" opacity="0.5" />

      {/* Mid mountains */}
      <polygon points="-20,470 130,315 280,470" fill="#124a2a" />
      <polygon points="160,470 370,298 580,470" fill="#155435" />
      <polygon points="450,470 690,265 930,470" fill="#124a2a" />
      <polygon points="780,470 975,305 1170,470" fill="#155435" />
      <polygon points="1060,470 1240,318 1410,430 1410,470" fill="#124a2a" />

      {/* Ground */}
      <rect x="0" y="458" width="1400" height="242" fill="url(#g-ground)" />

      {/* Winding road */}
      <path
        d="M 555,700 Q 618,572 664,528 Q 686,505 700,498 Q 714,505 736,528 Q 782,572 845,700 Z"
        fill="url(#g-road)"
      />
      {/* Road horizon */}
      <ellipse cx="700" cy="500" rx="10" ry="4" fill="#c49a18" opacity="0.75" />

      {/* Trees */}
      {leftTrees.map((t, i) => <Tree key={`l${i}`} {...t} />)}
      {rightTrees.map((t, i) => <Tree key={`r${i}`} {...t} />)}
      {midTrees.map((t, i) => <Tree key={`m${i}`} {...t} />)}

      {/* Clouds */}
      <g opacity="0.07">
        <ellipse cx="160" cy="105" rx="125" ry="40" fill="white" />
        <ellipse cx="115" cy="112" rx="75" ry="30" fill="white" />
        <ellipse cx="215" cy="100" rx="85" ry="28" fill="white" />
      </g>
      <g opacity="0.05">
        <ellipse cx="1230" cy="125" rx="110" ry="38" fill="white" />
        <ellipse cx="1185" cy="132" rx="65" ry="26" fill="white" />
        <ellipse cx="1280" cy="118" rx="75" ry="25" fill="white" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  const featured = initiatives.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden" aria-label="Hero">
        <HeroLandscape />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-forest-900/30 pointer-events-none" />
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-24 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Piattaforma di sostenibilità locale · Palermo
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Agisci localmente.<br />
            <span className="text-green-300">Cambia tutto.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Scopri le iniziative di sostenibilità nella tua città. Connettiti
            con i vicini e fai la differenza partendo dal tuo quartiere.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Esplora le Iniziative
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Partecipa Oggi
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-sm text-white/50">
            Progetto LUMSA · 800+ persone già coinvolte · Palermo, Italia
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-100 bg-cream-50" aria-label="Statistiche di impatto">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold metric-num">{s.value}</div>
              <div className="text-sm text-gray-500 mt-2 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE SECTION HEADING ── */}
      <section className="pt-24 pb-6 bg-white" aria-label="Funzionalità principali">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Come funziona
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-5 tracking-tight leading-[1.1]">
            Dalla scoperta all'azione,<br className="hidden sm:block" /> in un'unica piattaforma.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Trova iniziative reali, connettiti con la tua comunità e misura il tuo impatto — tutto in un posto.
          </p>
        </div>
      </section>

      {/* ── 3-COLUMN FEATURE CARDS (Solidroad style) ── */}
      <section className="pb-24 bg-white" aria-label="Funzionalità">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-5 mt-12">
            {features.map((feat) => (
              <div
                key={feat.label}
                className={`rounded-3xl border p-6 overflow-hidden flex flex-col ${feat.tint}`}
              >
                {/* UI visual mockup */}
                <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
                  {feat.visual}
                </div>

                {/* Label pill */}
                <span className="inline-flex self-start items-center text-xs font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full mb-3">
                  {feat.label}
                </span>

                {/* Text */}
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {feat.description}
                </p>

                {/* Points */}
                <ul className="mt-4 space-y-2">
                  {feat.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <Check size={9} className="text-primary-600" strokeWidth={3} />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/initiatives"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-primary-700 transition-colors"
                >
                  Scopri di più
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS GRID ── */}
      <section className="py-24 bg-cream-50 border-t border-gray-100" aria-label="Perché EcoLocal Hub">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Perché noi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
              Il cambiamento parte dal quartiere.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Le piattaforme globali fanno sensibilizzazione. Noi facciamo azione.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuePropCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-primary-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-24 bg-white border-t border-gray-100" aria-label="Categorie">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Categorie
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
              Scegli il tuo percorso verde.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Dai mercati a rifiuti zero al solare condiviso: ogni azione conta.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to="/initiatives"
                  className={`flex flex-col items-center gap-3 p-5 rounded-2xl border hover:scale-[1.03] hover:shadow-sm transition-all duration-200 text-center ${cat.color}`}
                  aria-label={`Vedi iniziative: ${cat.label}`}
                >
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-xs font-semibold leading-tight">{cat.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED INITIATIVES ── */}
      <section className="py-24 bg-cream-50 border-t border-gray-100" aria-label="Iniziative in evidenza">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
                In Evidenza
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
                Iniziative reali.<br />Impatto reale.
              </h2>
            </div>
            <Link
              to="/initiatives"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors"
            >
              Vedi tutte
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600"
            >
              Vedi tutte le iniziative
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / QUOTE SECTION (Solidroad style) ── */}
      <section className="py-24 bg-mint-50 border-t border-gray-100" aria-label="Dati scientifici">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: illustrated nature image */}
            <div className="relative">
              <div className="absolute -inset-3 bg-primary-100/40 rounded-3xl blur-xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=700&q=80"
                  alt="Sentiero in un bosco verde"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Green tint overlay to make it look more illustrated */}
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
                {/* Metric badge overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex gap-6">
                  {[
                    { stat: '70%', desc: 'emissioni influenzate da scelte locali' },
                    { stat: '3×', desc: 'più efficace del top-down' },
                    { stat: '12k€', desc: 'valore economico per iniziativa' },
                  ].map((s) => (
                    <div key={s.stat} className="text-center flex-1">
                      <div className="text-xl font-extrabold metric-num">{s.stat}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5 leading-tight">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: quote + attribution */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
                La scienza lo conferma
              </span>
              <blockquote className="mt-6 mb-8">
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug tracking-tight">
                  "Le iniziative ambientali basate sulla comunità generano fino a{' '}
                  <span className="text-primary-600">3 volte più cambiamento comportamentale</span>{' '}
                  rispetto alle campagne istituzionali."
                </p>
              </blockquote>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Leaf size={16} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Ricerca IPCC · 2023</div>
                  <div className="text-xs text-gray-500">Iniziative ambientali comunitarie</div>
                </div>
              </div>

              <Link
                to="/initiatives"
                className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-gray-900 font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Esplora le Iniziative
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-forest-800 text-white relative overflow-hidden" aria-label="Call to action finale">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-transparent to-primary-800/20 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Pronto a fare la<br />differenza?
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Unisciti alle centinaia di persone che già agiscono.
            Iscriviti per ricevere aggiornamenti sulle nuove iniziative
            nella tua zona.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Partecipa Oggi
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-200"
            >
              Esplora le Iniziative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
