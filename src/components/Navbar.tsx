import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const links = [
  { to: '/initiatives', label: 'Iniziative' },
  { to: '/community', label: 'Comunità' },
  { to: '/eco-assistant', label: 'Eco Assistente' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-gray-900 font-medium'
      : 'text-gray-500 hover:text-gray-900 transition-colors duration-150';

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? 'shadow-sm border-b border-gray-100' : 'border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[60px]"
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          aria-label="EcoLocal Hub — homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-700 transition-colors">
            <Leaf size={15} className="text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            EcoLocal Hub
          </span>
        </NavLink>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={false}>
                <span className="text-sm">{l.label}</span>
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
            className="inline-flex items-center text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Esplora
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-medium'
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
                className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Partecipa
              </NavLink>
              <NavLink
                to="/initiatives"
                className="block text-center text-sm font-medium bg-primary-600 text-white px-4 py-2.5 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Esplora le Iniziative
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
