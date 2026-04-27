import { Link } from 'react-router-dom';
import { Leaf, Mail } from 'lucide-react';

const navLinks = [
  { to: '/initiatives', label: 'Iniziative' },
  { to: '/community', label: 'Comunità' },
  { to: '/eco-assistant', label: 'Eco Assistente' },
  { to: '/contact', label: 'Partecipa' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shrink-0">
                <Leaf size={15} className="text-white" strokeWidth={2} />
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">EcoLocal Hub</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Connettere le comunità con le iniziative di sostenibilità locale.
              Insieme costruiamo un futuro più verde.
            </p>
            <p className="text-xs text-gray-600 mt-4">Progetto LUMSA · Palermo, Italia</p>
          </div>

          {/* Esplora */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Esplora
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Contatti
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              <li>
                <a
                  href="mailto:g.capuana@lumsastud.it"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={13} aria-hidden="true" />
                  g.capuana@lumsastud.it
                </a>
              </li>
              <li>
                <a
                  href="mailto:s.digaudio@lumsastud.it"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={13} aria-hidden="true" />
                  s.digaudio@lumsastud.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© 2026 EcoLocal Hub — Progetto universitario LUMSA</span>
          <span>Fatto con 🌿 a Palermo</span>
        </div>
      </div>
    </footer>
  );
}
