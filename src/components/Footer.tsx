import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <img src="/logo.png" alt="EcoLocal Hub" className="h-8 w-auto" />
              EcoLocal Hub
            </div>
            <p className="text-sm leading-relaxed">
              Connettere le comunità con le iniziative di sostenibilità locale.
              Insieme costruiamo un futuro più verde.
            </p>
          </div>

          {/* Link */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Esplora
            </h3>
            <ul className="flex flex-col gap-2 text-sm list-none m-0 p-0">
              {[
                { to: '/initiatives', label: 'Iniziative' },
                { to: '/community', label: 'Comunità' },
                { to: '/eco-assistant', label: 'Eco Assistente' },
                { to: '/contact', label: 'Partecipa' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Contatti
            </h3>
            <ul className="flex flex-col gap-2 text-sm list-none m-0 p-0">
              <li>
                <a
                  href="mailto:g.capuana@lumsastud.it"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <Mail size={14} aria-hidden="true" />
                  g.capuana@lumsastud.it
                </a>
              </li>
              <li>
                <a
                  href="mailto:s.digaudio@lumsastud.it"
                  className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                >
                  <Mail size={14} aria-hidden="true" />
                  s.digaudio@lumsastud.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
          © 2026 EcoLocal Hub — Lumsa Project
        </div>
      </div>
    </footer>
  );
}
