import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Leaf, Zap, Recycle, Bike, ArrowRight } from 'lucide-react';

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

// Voiceflow API integration
const VF_API_KEY = 'VF.DM.69ef5ba0003c5c7a49123aa5.2bCHkWDztM6iLEo1';
const VF_PROJECT_ID = '69ef595aa11bd47e12fe8f37';

async function getVoiceflowResponse(userMessage: string, sessionId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://general-runtime.voiceflow.com/state/user/${sessionId}/interact`,
      {
        method: 'POST',
        headers: {
          'Authorization': VF_API_KEY,
          'Content-Type': 'application/json',
          'versionID': 'production',
          'projectID': VF_PROJECT_ID,
        },
        body: JSON.stringify({
          action: { type: 'text', payload: userMessage },
          config: { tts: false, stripSSML: true },
        }),
      }
    );
    if (!res.ok) throw new Error('Errore API');
    const traces = await res.json();
    const testo = (Array.isArray(traces) ? traces : [])
      .filter((t: { type: string }) => t.type === 'speak' || t.type === 'text')
      .map((t: { payload?: { message?: string } }) => t.payload?.message ?? '')
      .join(' ')
      .trim();
    return testo || '🌍 Non ho trovato una risposta specifica. Visita la pagina Iniziative per esplorare i progetti attivi a Palermo!';
  } catch {
    return '⚠️ Connessione temporaneamente non disponibile. Riprova tra qualche secondo!';
  }
}

const howItWorks = [
  { step: '1', title: "L'utente pone una domanda", desc: 'Scrivi qualsiasi cosa sulla sostenibilità locale o su come vivere in modo più verde.' },
  { step: '2', title: "L'AI elabora il contesto", desc: "L'agente analizza la richiesta e la abbina ai dati delle iniziative locali e alle conoscenze ambientali." },
  { step: '3', title: 'Suggerimenti personalizzati', desc: "L'assistente restituisce consigli concreti: iniziative vicine, risorse e prossimi passi." },
  { step: '4', title: 'Basato su dati reali', desc: "L'agente conosce le 6 iniziative attive a Palermo e le risponde con orari, luoghi e contatti aggiornati." },
];

export default function EcoAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "🌿 Ciao! Sono l'Eco Assistente di EcoLocal Hub. Chiedimi delle iniziative di sostenibilità locali, come vivere in modo più verde o come partecipare alla tua comunità a Palermo!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>(Math.random().toString(36).slice(2));

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function handleSend(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);
    const reply = await getVoiceflowResponse(msg, sessionIdRef.current);
    setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    setLoading(false);
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
            <span className="uppercase tracking-widest">AI Integrata</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Eco Assistente.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Un agente AI che suggerisce azioni di sostenibilità locali in base alle tue
            domande. Alimentato da Voiceflow con dati reali sulle iniziative di Palermo.
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
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  Online · Voiceflow AI
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
              AI Agent — Voiceflow
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
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 text-xs text-gray-600 leading-relaxed">
            <strong className="text-primary-700 block mb-1.5">Powered by Voiceflow</strong>
            Questo assistente è collegato a un agente{' '}
            <span className="text-primary-600 font-medium">Voiceflow</span>{' '}
            reale, con Knowledge Base sulle iniziative di Palermo, Playbooks tematici
            e modello{' '}
            <span className="text-primary-600 font-medium">Gemini 3 Flash</span>.
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Vuoi partecipare alle iniziative?
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </aside>
      </div>
    </>
  );
}
