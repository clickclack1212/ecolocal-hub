import { useState, useMemo } from 'react';
import { initiatives, type Category } from '../data/initiatives';

export function useInitiatives() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tutte');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return initiatives.filter((item) => {
      const matchCategory =
        activeCategory === 'Tutte' || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return { filtered, activeCategory, setActiveCategory, searchQuery, setSearchQuery };
}
