export interface Initiative {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  location: string;
  category: string;
  tags: string[];
  image: string;
  contact: string;
  website?: string;
  impactMetric: string;
}

export const CATEGORIES = [
  'Tutte',
  'Riciclo',
  'Cibo Locale',
  'Energia',
  'Spazi Verdi',
  'Eventi Comunitari',
  'Trasporti',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const initiatives: Initiative[] = [
  {
    id: 'urban-garden-1',
    title: 'Orto Comunitario Riverside',
    description:
      'Un orto urbano condiviso dove i residenti coltivano insieme verdure, frutta ed erbe aromatiche, riducendo i chilometri del cibo e rafforzando i legami di quartiere.',
    longDescription:
      "L'Orto Comunitario Riverside si estende su 2.000 mq e ospita oltre 80 appezzamenti individuali. I membri condividono attrezzi, semi e competenze. I laboratori settimanali trattano il compostaggio, il risparmio idrico e la lotta biologica ai parassiti. I prodotti in eccesso vengono donati al banco alimentare locale ogni venerdì.",
    location: 'Quartiere Riverside, Torino',
    category: 'Cibo Locale',
    tags: ['agricoltura urbana', 'comunità', 'biologico'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    contact: 'garden@riverside-to.it',
    website: 'https://riverside-garden.example.com',
    impactMetric: '800 kg di prodotti coltivati localmente per stagione',
  },
  {
    id: 'bike-share-2',
    title: 'Rete Ciclistica GreenWheels',
    description:
      'Una rete di condivisione biciclette gestita dalla comunità con 15 punti di prelievo in tutta la città per ridurre l\'uso dell\'auto nei tragitti brevi.',
    longDescription:
      'GreenWheels gestisce 200 biciclette su 15 stazioni nel centro città e in periferia. L\'iniziativa è nata da un progetto universitario e ora funziona come cooperativa. I soci pagano una piccola quota annuale; gli utenti occasionali possono noleggiare a ore. La manutenzione è svolta in parte da meccanici volontari.',
    location: 'Tutta la città, Torino',
    category: 'Trasporti',
    tags: ['ciclismo', 'basse emissioni', 'mobilità'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    contact: 'info@greenwheels.example.com',
    impactMetric: '1.200 tragitti in auto sostituiti al mese',
  },
  {
    id: 'zero-waste-3',
    title: 'Mercato a Rifiuti Zero',
    description:
      'Un mercato mensile dove i venditori propongono solo prodotti sfusi e a km zero, dal cibo ai detersivi.',
    longDescription:
      'Il primo sabato di ogni mese in Piazza Repubblica, il Mercato a Rifiuti Zero riunisce oltre 40 espositori impegnati ad eliminare la plastica monouso. Gli acquirenti portano i propri contenitori. Il mercato ospita anche un "repair café" dove i volontari riparano gratuitamente gli oggetti rotti per sottrarli alla discarica.',
    location: 'Piazza Repubblica, Torino',
    category: 'Riciclo',
    tags: ['zero rifiuti', 'senza plastica', 'mercato locale'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    contact: 'zerowaste.market@example.com',
    impactMetric: '500 kg di plastica evitata per evento',
  },
  {
    id: 'solar-coop-4',
    title: 'Cooperativa Energetica SolarShare',
    description:
      'I residenti investono collettivamente e beneficiano di un impianto solare condominiale installato sugli edifici di edilizia sociale.',
    longDescription:
      'SolarShare permette ai residenti che non possono installare pannelli privati, soprattutto gli inquilini, di acquistare quote di un impianto solare condiviso. I ritorni arrivano come crediti sulla bolletta energetica. Il progetto alimenta attualmente 60 famiglie ed è in espansione verso un secondo sito. I profitti oltre i costi operativi vengono reinvestiti nelle infrastrutture verdi locali.',
    location: 'Barriera di Milano, Torino',
    category: 'Energia',
    tags: ['solare', 'rinnovabile', 'cooperativa'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    contact: 'info@solarshare.example.com',
    website: 'https://solarshare.example.com',
    impactMetric: '45 tonnellate di CO₂ evitate all\'anno',
  },
  {
    id: 'repair-cafe-5',
    title: 'Fix It! Repair Café',
    description:
      'Un laboratorio di riparazione gratuito dove i volontari ti aiutano a riparare elettronica, vestiti, bici e oggetti di casa.',
    longDescription:
      'Fix It! si riunisce ogni giovedì sera al Circolo ARCI San Salvario. Volontari qualificati (elettricisti, sarte, falegnami) riparano gratuitamente i tuoi oggetti rotti. Impari abilità pratiche, l\'oggetto riprende vita e meno rifiuti finiscono in discarica. Le donazioni sono benvenute e finanziano la libreria dei ricambi.',
    location: 'San Salvario, Torino',
    category: 'Riciclo',
    tags: ['riparazione', 'upcycling', 'competenze'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    contact: 'fixit@example.com',
    impactMetric: '150 oggetti riparati ogni mese',
  },
  {
    id: 'seed-library-6',
    title: 'Biblioteca dei Semi Aperti',
    description:
      'Prendi in prestito gratuitamente semi di ortaggi ed erbe aromatiche, coltivali e restituisci una parte a fine stagione.',
    longDescription:
      'La Biblioteca dei Semi Aperti opera dalla sede centrale della biblioteca pubblica. Conserva oltre 200 varietà di semi antichi e a impollinazione aperta. Chiunque abbia la tessera della biblioteca può prendere semi in prestito. Al raccolto, i membri restituiscono il doppio dei semi presi, mantenendo la collezione in crescita. Preserva la biodiversità e la conoscenza agricola locale.',
    location: 'Biblioteca Centrale, Torino',
    category: 'Cibo Locale',
    tags: ['semi', 'biodiversità', 'cibo locale'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    contact: 'seeds@biblioTO.example.com',
    impactMetric: 'Oltre 200 varietà antiche preservate',
  },
];
