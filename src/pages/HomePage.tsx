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
    visual: (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-400" />
          <span className="text-xs text-gray-400 font-medium">Iniziative · Torino</span>
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
    desc: 'Oltre 800 persone già coinvolte in iniziative nella città di Torino.',
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

export default function HomePage() {
  const featured = initiatives.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white" aria-label="Hero">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f0fdf4 1px, transparent 1px), linear-gradient(to bottom, #f0fdf4 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Piattaforma di sostenibilità locale · Torino
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-[1.06] tracking-tight mb-6">
              Agisci localmente.<br />
              <span className="text-primary-600">Cambia tutto.</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Scopri le iniziative di sostenibilità nella tua città. Connettiti
              con i vicini, riduci la tua impronta ecologica e fai la differenza
              partendo dal tuo quartiere.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/initiatives"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm shadow-primary-200"
              >
                Esplora le Iniziative
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-5 py-3 rounded-xl transition-colors border border-gray-200"
              >
                Chi siamo
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-gray-400">
              Progetto LUMSA · 800+ persone già coinvolte · Torino, Italia
            </p>
          </div>

          {/* Right — product mockup */}
          <div className="relative lg:pl-4" aria-hidden="true">
            <div className="absolute -inset-4 bg-primary-50/60 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
                <div className="mx-auto text-[11px] text-gray-400 bg-white border border-gray-200 px-4 py-1 rounded-md">
                  ecolocal.hub/initiatives
                </div>
              </div>
              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">6 iniziative trovate</div>
                  <div className="flex gap-1.5">
                    {['Tutte', 'Riciclo', 'Cibo'].map((f, i) => (
                      <span
                        key={f}
                        className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${
                          i === 0
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'text-gray-500 border-gray-200 bg-white'
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { title: 'Orto Comunitario', cat: 'Cibo Locale', img: 'bg-green-100', emoji: '🌱' },
                    { title: 'GreenWheels', cat: 'Trasporti', img: 'bg-teal-100', emoji: '🚲' },
                    { title: 'Rifiuti Zero', cat: 'Riciclo', img: 'bg-blue-100', emoji: '♻️' },
                    { title: 'SolarShare', cat: 'Energia', img: 'bg-yellow-100', emoji: '⚡' },
                  ].map((c) => (
                    <div key={c.title} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      <div className={`h-16 ${c.img} flex items-center justify-center text-2xl`}>
                        {c.emoji}
                      </div>
                      <div className="p-2.5">
                        <div className="text-[11px] font-semibold text-gray-800">{c.title}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">{c.cat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-100 bg-gray-50/60" aria-label="Statistiche di impatto">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold metric-num">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE BLOCKS ── */}
      <section aria-label="Funzionalità principali">
        {features.map((feat, idx) => (
          <div
            key={feat.label}
            className={`py-20 sm:py-24 ${idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}`}
          >
            <div
              className={`max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <div>
                <span className="inline-flex items-center text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full mb-6">
                  {feat.label}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
                  {feat.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {feat.description}
                </p>
                <ul className="space-y-2.5 mb-10">
                  {feat.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
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
                  Scopri di più
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-50/40 rounded-3xl blur-xl" />
                <div className="relative">{feat.visual}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── VALUE PROPS GRID ── */}
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100" aria-label="Perché EcoLocal Hub">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuePropCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-primary-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 sm:py-24 bg-gray-50/60 border-t border-gray-100" aria-label="Categorie">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
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
      <section className="py-20 sm:py-24 bg-white border-t border-gray-100" aria-label="Iniziative in evidenza">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
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
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
            >
              Vedi tutte le iniziative
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCIENCE / QUOTE SECTION ── */}
      <section className="py-20 sm:py-24 bg-gray-50/60 border-t border-gray-100" aria-label="Dati scientifici">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            La scienza lo conferma
          </span>
          <blockquote className="mt-8 mb-10">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
              "Le iniziative ambientali basate sulla comunità generano fino a{' '}
              <span className="text-primary-600">3 volte più cambiamento comportamentale</span>{' '}
              rispetto alle campagne istituzionali."
            </p>
          </blockquote>
          <div className="flex justify-center gap-12 sm:gap-20">
            {[
              { stat: '70%', desc: 'emissioni influenzate da scelte locali' },
              { stat: '3×', desc: 'più efficace del top-down' },
              { stat: '12k€', desc: 'valore economico locale per iniziativa' },
            ].map((s) => (
              <div key={s.stat}>
                <div className="text-3xl sm:text-4xl font-extrabold metric-num">{s.stat}</div>
                <div className="text-xs text-gray-500 mt-1.5 max-w-[100px] leading-tight">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-gray-900 text-white" aria-label="Call to action finale">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Pronto a fare la<br />differenza?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Unisciti alle centinaia di persone che già agiscono.
            Iscriviti per ricevere aggiornamenti sulle nuove iniziative
            nella tua zona.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Partecipa Oggi
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              Esplora le Iniziative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
