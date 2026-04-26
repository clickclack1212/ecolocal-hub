import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';

const links = [
  { to: '/initiatives', label: 'Iniziative' },
  { to: '/community', label: 'Comunità' },
  { to: '/eco-assistant', label: 'Eco Assistente' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-gray-900 font-semibold text-sm'
      : 'text-gray-500 hover:text-gray-900 transition-colors duration-150 text-sm';

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 pb-1">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-lg border border-gray-100'
            : 'bg-white/90 backdrop-blur-sm shadow-md border border-white/60'
        }`}
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="EcoLocal Hub — homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-700 transition-colors">
            <Leaf size={15} className="text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-bold text-gray-900 tracking-tight">
            EcoLocal Hub
          </span>
        </NavLink>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={false}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/contact"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Partecipa
          </NavLink>
          <NavLink
            to="/initiatives"
            className="inline-flex items-center gap-1.5 text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Esplora
            <ArrowRight size={13} strokeWidth={2.5} />
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden max-w-5xl mx-auto mt-1 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
              <NavLink
                to="/contact"
                className="block px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Partecipa
              </NavLink>
              <NavLink
                to="/initiatives"
                className="flex items-center justify-center gap-2 text-sm font-semibold bg-primary-600 text-white px-4 py-2.5 rounded-full"
                onClick={() => setOpen(false)}
              >
                Esplora le Iniziative
                <ArrowRight size={13} strokeWidth={2.5} />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
