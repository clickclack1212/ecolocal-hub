import { Search } from 'lucide-react';
import { CATEGORIES } from '../data/initiatives';
import { useInitiatives } from '../hooks/useInitiatives';
import InitiativeCard from '../components/InitiativeCard';

export default function InitiativesPage() {
  const { filtered, activeCategory, setActiveCategory, searchQuery, setSearchQuery } =
    useInitiatives();

  return (
    <>
      {/* Page header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
            Esplora
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4">
            Iniziative locali.
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Sfoglia i progetti di sostenibilità vicino a te. Filtra per categoria
            o cerca per nome, luogo o tag.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative sm:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Cerca iniziative, luoghi, tag…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent placeholder-gray-400"
              aria-label="Cerca iniziative"
            />
          </div>

          {/* Category filters */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtra per categoria"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} {filtered.length === 1 ? 'iniziativa' : 'iniziative'}
          {activeCategory !== 'Tutte' && ` · ${activeCategory}`}
          {searchQuery && ` · "${searchQuery}"`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mx-auto mb-5">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Nessuna iniziativa trovata.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Prova a cambiare la ricerca o rimuovi i filtri.
            </p>
            <button
              className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              onClick={() => { setSearchQuery(''); setActiveCategory('Tutte'); }}
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
    </>
  );
}
