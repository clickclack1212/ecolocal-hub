import { Link } from 'react-router-dom';
import { Users, Leaf, Globe, Heart, TrendingUp, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const benefits = [
  {
    icon: <Leaf size={24} aria-hidden="true" />,
    title: 'Scopri l\'Impatto Locale',
    description:
      'Trova iniziative di sostenibilità nel tuo quartiere in linea con i tuoi valori: dagli orti urbani ai repair café.',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: <Users size={24} aria-hidden="true" />,
    title: 'Connettiti con i Vicini',
    description:
      'Incontra persone con i tuoi stessi valori. Collabora, condividi competenze e costruisci legami duraturi.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: <TrendingUp size={24} aria-hidden="true" />,
    title: 'Monitora i Progressi Collettivi',
    description:
      'Vedi l\'impatto reale della tua comunità: CO₂ ridotta, oggetti riparati, cibo locale prodotto.',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: <Globe size={24} aria-hidden="true" />,
    title: 'Pensa Globale, Agisci Locale',
    description:
      'Ogni azione locale contribuisce agli obiettivi globali. Colleghiamo le iniziative dal basso ai grandi quadri di sostenibilità.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: <Heart size={24} aria-hidden="true" />,
    title: 'Fai Volontariato',
    description:
      'Offri il tuo tempo, le tue competenze o le tue risorse ai progetti attivi. Ogni contributo conta.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: <Award size={24} aria-hidden="true" />,
    title: 'Ottieni Riconoscimento',
    description:
      'I contributori attivi sono messi in evidenza nel feed della comunità. Mostra le tue azioni verdi e ispira gli altri.',
    color: 'bg-purple-50 text-purple-700',
  },
];

const teamMembers = [
  {
    name: 'Gabriele Capuana',
    role: 'Responsabile del Progetto',
    emoji: '🌿',
  },
  {
    name: 'Serena Di Gaudio',
    role: 'Membro del Team',
    emoji: '💻',
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Chi Siamo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Costruiamo Insieme una <br />
            <span className="text-primary-600">Comunità Sostenibile</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            EcoLocal Hub è una piattaforma civica nata dalla convinzione che
            un cambiamento ambientale significativo parta dal livello del quartiere.
            Aggreghiamo, promuoviamo e colleghiamo iniziative di sostenibilità
            locali per dare potere ai singoli individui.
          </p>
        </div>
      </section>

      {/* Missione */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              La Nostra Missione
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Azioni locali, impatto globale
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Crediamo che i movimenti di sostenibilità più efficaci siano quelli
              radicati nelle comunità locali. EcoLocal Hub rende semplice scoprire
              cosa succede vicino a te, partecipare e misurare l'impatto collettivo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dai mercati a rifiuti zero alle cooperative solari comunitarie:
              ogni iniziativa sulla nostra piattaforma è gestita da persone reali
              che si prendono cura della propria città e del suo futuro.
            </p>
            <Link
              to="/initiatives"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Esplora le Iniziative
            </Link>
          </div>
          <div className="bg-primary-50 rounded-2xl p-8 text-center" aria-hidden="true">
            <div className="text-7xl mb-4">🌱</div>
            <div className="grid grid-cols-2 gap-4 text-left">
              {[
                { v: '6+', l: 'Progetti attivi' },
                { v: '800+', l: 'Membri' },
                { v: '2024', l: 'Anno di fondazione' },
                { v: 'Torino', l: 'Città pilota' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-primary-700">{s.v}</div>
                  <div className="text-gray-500 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            label="Perché aderire?"
            title="Vantaggi della Comunità"
            subtitle="Che tu sia un curioso alle prime armi o un attivista esperto, EcoLocal Hub ha qualcosa per te."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl ${b.color} mb-4`}>
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impatto della sostenibilità */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">La Scienza delle Azioni Locali</h2>
          <p className="text-primary-100 text-lg leading-relaxed mb-8">
            Le ricerche dimostrano costantemente che le iniziative ambientali
            basate sulla comunità generano fino a{' '}
            <strong className="text-white">3 volte più cambiamento comportamentale</strong>{' '}
            rispetto alle campagne governative dall'alto verso il basso.
            Quando i vicini agiscono insieme, le norme sociali cambiano davvero.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '70%', desc: 'delle emissioni è influenzata da decisioni locali' },
              { stat: '3x', desc: 'più efficace: campagne tra pari vs istituzionali' },
              { stat: '12k€', desc: 'valore economico locale medio trattenuto per iniziativa' },
            ].map((s) => (
              <div key={s.stat} className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">{s.stat}</div>
                <p className="text-primary-200 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading
          label="Le Persone"
          title="Il Team"
          subtitle="Il gruppo dietro EcoLocal Hub, studenti LUMSA appassionati di sostenibilità."
        />
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm w-64"
            >
              <div className="text-5xl mb-3" aria-hidden="true">
                {m.emoji}
              </div>
              <div className="font-semibold text-gray-900 text-lg">{m.name}</div>
              <div className="text-sm text-gray-500 mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
