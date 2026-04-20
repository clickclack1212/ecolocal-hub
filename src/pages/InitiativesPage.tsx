import { Search } from 'lucide-react';
import { CATEGORIES } from '../data/initiatives';
import { useInitiatives } from '../hooks/useInitiatives';
import InitiativeCard from '../components/InitiativeCard';
import SectionHeading from '../components/SectionHeading';

export default function InitiativesPage() {
  const { filtered, activeCategory, setActiveCategory, searchQuery, setSearchQuery } =
    useInitiatives();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <SectionHeading
        label="Esplora"
        title="Iniziative Locali"
        subtitle="Sfoglia i progetti di sostenibilità vicino a te. Filtra per categoria o cerca."
      />

      {/* Ricerca */}
      <div className="relative max-w-md mx-auto mb-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Cerca iniziative, luoghi, tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
          aria-label="Cerca iniziative"
        />
      </div>

      {/* Filtri per categoria */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-10"
        role="group"
        aria-label="Filtra per categoria"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-600'
            }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contatore risultati */}
      <p className="text-sm text-gray-500 mb-6 text-center">
        {filtered.length} {filtered.length === 1 ? 'iniziativa trovata' : 'iniziative trovate'}
      </p>

      {/* Griglia */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg">Nessuna iniziativa corrisponde alla ricerca.</p>
          <button
            className="mt-4 text-primary-600 hover:underline text-sm"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Tutte');
            }}
          >
            Rimuovi filtri
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      )}
    </div>
  );
}
