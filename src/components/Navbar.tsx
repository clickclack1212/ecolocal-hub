import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/initiatives', label: 'Iniziative' },
  { to: '/community', label: 'Comunità' },
  { to: '/eco-assistant', label: 'Eco Assistente' },
  { to: '/contact', label: 'Partecipa' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-primary-700 font-semibold'
      : 'text-gray-600 hover:text-primary-600 transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        aria-label="Navigazione principale"
      >
        {/* Logo ufficiale — salva il file come public/logo.png */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          aria-label="EcoLocal Hub homepage"
        >
          <img
            src="/logo.png"
            alt="EcoLocal Hub"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Link desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Unisciti alla Comunità
        </NavLink>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-primary-600 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={linkClass}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="block bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
                onClick={() => setOpen(false)}
              >
                Unisciti alla Comunità
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
