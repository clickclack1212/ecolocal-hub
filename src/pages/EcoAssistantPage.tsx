import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Leaf, Zap, Recycle, Bike, ArrowRight } from 'lucide-react';

/*
 * ECO ASSISTENTE — Concept page.
 * getMockResponse() simulates AI responses.
 * Replace with a real API call (Voiceflow / OpenAI / Gemini) for production.
 */

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const suggestions = [
  { icon: Recycle, text: 'Come posso ridurre gli sprechi alimentari?' },
  { icon: Leaf, text: "Ci sono orti comunitari vicino a me?" },
  { icon: Bike, text: 'Come partecipare alla mobilità verde?' },
  { icon: Zap, text: "Dimmi dell'energia solare comunitaria." },
];

function getMockResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('spreco') || q.includes('rifiut') || q.includes('waste'))
    return '🌿 Ottima domanda! Per ridurre gli sprechi alimentari: pianifica i pasti settimanalmente, conserva correttamente i prodotti, fai il compostaggio. Controlla anche il Mercato a Rifiuti Zero in Piazza Politeama ogni primo sabato del mese!';
  if (q.includes('solare') || q.includes('energia') || q.includes('solar'))
    return "⚡ La Cooperativa SolarShare al Quartiere Noce permette a inquilini e proprietari di investire nel solare condiviso. Evitano 45 tonnellate di CO₂ all'anno!";
  if (q.includes('bici') || q.includes('trasport') || q.includes('mobilit'))
    return '🚲 La Rete GreenWheels conta 200 bici su 15 stazioni in città. Sostituisce 1.200 tragitti in auto al mese. La tessera annuale è conveniente!';
  if (q.includes('orto') || q.includes('cibo') || q.includes('semi') || q.includes('garden'))
    return "🥕 L'Orto Comunitario (2.000 mq, 80+ appezzamenti) al Quartiere Zisa e la Biblioteca dei Semi alla Biblioteca Comunale sono perfetti per te!";
  if (q.includes('ciao') || q.includes('salve') || q.includes('buon'))
    return '👋 Ciao! Sono l\'Eco Assistente. Chiedimi qualsiasi cosa sulle iniziative di sostenibilità locali!';
  return `🌍 Grazie per la tua domanda su "${input}". Sfoglia la pagina Iniziative per dettagli aggiornati. Presto sarà integrata un'AI reale tramite Voiceflow!`;
}

const howItWorks = [
  { step: '1', title: "L'utente pone una domanda", desc: 'Scrivi qualsiasi cosa sulla sostenibilità locale o su come vivere in modo più verde.' },
  { step: '2', title: "L'AI elabora il contesto", desc: "L'agente analizza la richiesta e la abbina ai dati delle iniziative locali e alle conoscenze ambientali." },
  { step: '3', title: 'Suggerimenti personalizzati', desc: "L'assistente restituisce consigli concreti: iniziative vicine, risorse e prossimi passi." },
  { step: '4', title: 'Futuro: basato sulla posizione', desc: "Con il consenso, l'agente suggerirà azioni iper-locali basate sulla tua posizione GPS." },
];

export default function EcoAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "🌿 Ciao! Sono l'Eco Assistente. Chiedimi delle iniziative di sostenibilità locali, come vivere in modo più verde o come partecipare alla tua comunità!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  function handleSend(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', text: getMockResponse(msg) }]);
      setLoading(false);
    }, 800);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary-600 mb-4">
            <Sparkles size={14} aria-hidden="true" />
            <span className="uppercase tracking-widest">Concetto AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Eco Assistente.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Un agente AI che suggerisce azioni di sostenibilità locali in base alle tue
            domande. Modalità demo — integrazione Voiceflow in arrivo.
          </p>
        </div>
      </section>

      {/* ── CHAT + SIDEBAR ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid lg:grid-cols-5 gap-10">

        {/* Chat */}
        <div className="lg:col-span-3 flex flex-col">
          <div
            className="flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm"
            style={{ minHeight: '480px' }}
            role="log"
            aria-live="polite"
            aria-label="Conversazione con Eco Assistente"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50/60">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                <Leaf size={14} className="text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Eco Assistente</div>
                <div className="flex items-center gap-1.5 text-xs text-primary-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  Online · Demo
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs sm:max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-primary-600 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Chiedi della sostenibilità locale…"
                className="flex-1 text-sm px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-gray-50 placeholder-gray-400"
                aria-label="Scrivi il tuo messaggio"
                disabled={loading}
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors"
                aria-label="Invia messaggio"
              >
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Suggested questions */}
          <div className="mt-4">
            <p className="text-xs text-gray-400 font-medium mb-2.5">Domande suggerite</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.text}
                    onClick={() => handleSend(s.text)}
                    className="flex items-center gap-1.5 text-xs bg-white border border-gray-200 text-gray-600 hover:border-primary-300 hover:text-primary-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Icon size={12} strokeWidth={2} aria-hidden="true" />
                    {s.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">
              Come funziona
            </span>
            <h2 className="text-xl font-extrabold text-gray-900 mt-2 mb-6 tracking-tight">
              Concept AI Agent
            </h2>
            <div className="flex flex-col gap-5">
              {howItWorks.map((s) => (
                <div key={s.step} className="flex gap-3.5">
                  <div className="w-7 h-7 shrink-0 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">{s.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech note */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700 block mb-1.5">Nota tecnica</strong>
            Questa demo usa risposte simulate. Per la produzione, integra{' '}
            <span className="text-primary-600 font-medium">Voiceflow</span>,{' '}
            <span className="text-primary-600 font-medium">OpenAI API</span> o{' '}
            <span className="text-primary-600 font-medium">Google Gemini</span>{' '}
            sostituendo <code className="bg-gray-200 px-1 rounded">getMockResponse()</code>.
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Vuoi integrare un AI reale?
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </aside>
      </div>
    </>
  );
}
