import { useState } from 'react';
import { Sparkles, Send, Leaf, Zap, Recycle, Bike } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

/*
 * ECO ASSISTENTE - Pagina Concetto Agente AI
 *
 * Questa pagina dimostra il concetto di un agente AI.
 * L'interfaccia chat simulata genera risposte senza backend.
 *
 * INTEGRAZIONE API FUTURA:
 * Sostituisci getMockResponse() con una chiamata API reale:
 *
 *   const response = await fetch('/api/eco-assistant', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ message: userInput }),
 *   });
 *   const data = await response.json();
 *   return data.reply;
 *
 * Oppure collega direttamente a Voiceflow, OpenAI o Google Gemini.
 *
 * EMBED VOICEFLOW COMPLETO:
 * Aggiungi lo script da ChatbotButton.tsx e sostituisci la UI mock
 * con il contenitore del widget Voiceflow.
 */

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const suggestions = [
  { icon: <Recycle size={16} />, text: 'Come posso ridurre gli sprechi alimentari?' },
  { icon: <Leaf size={16} />, text: 'Ci sono orti comunitari vicino a me?' },
  { icon: <Bike size={16} />, text: 'Come partecipare alla mobilità verde?' },
  { icon: <Zap size={16} />, text: 'Dimmi dell\'energia solare comunitaria.' },
];

// Risposte simulate (sostituire con chiamata API reale in produzione)
function getMockResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('spreco') || q.includes('rifiut') || q.includes('waste')) {
    return '🌿 Ottima domanda! Per ridurre gli sprechi alimentari: pianifica i pasti settimanalmente, conserva correttamente i prodotti, fai il compostaggio. Controlla anche il Mercato a Rifiuti Zero in Piazza Repubblica: organizza un repair café ogni mese!';
  }
  if (q.includes('solare') || q.includes('energia') || q.includes('solar')) {
    return '⚡ La Cooperativa Energetica SolarShare a Barriera di Milano permette agli inquilini e proprietari di investire nel solare condiviso. Evitano 45 tonnellate di CO₂ all\'anno. Visita la pagina Iniziative per saperne di più!';
  }
  if (q.includes('bici') || q.includes('trasport') || q.includes('mobilit')) {
    return '🚲 La Rete Ciclistica GreenWheels conta 200 bici su 15 stazioni in città. Sostituisce 1.200 tragitti in auto al mese. La tessera annuale è conveniente e la rete è in espansione!';
  }
  if (q.includes('orto') || q.includes('cibo') || q.includes('semi') || q.includes('garden')) {
    return '🥕 Dai un\'occhiata all\'Orto Comunitario Riverside (2.000 mq, 80+ appezzamenti) oppure alla Biblioteca dei Semi Aperti nella biblioteca centrale: puoi prendere in prestito semi antichi gratuitamente!';
  }
  if (q.includes('ciao') || q.includes('salve') || q.includes('buon')) {
    return '👋 Ciao! Sono l\'Eco Assistente. Chiedimi qualsiasi cosa sulle iniziative di sostenibilità locali, come ridurre la tua impronta ecologica o come partecipare alla comunità!';
  }
  return `🌍 Grazie per la tua domanda su "${input}". Per informazioni aggiornate, sfoglia la pagina Iniziative o scrivici tramite il modulo Contatti. Sono un assistente dimostrativo: presto sarà integrata un'AI reale tramite Voiceflow!`;
}

export default function EcoAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: '🌿 Ciao! Sono l\'Eco Assistente. Chiedimi delle iniziative di sostenibilità locali, come vivere in modo più verde o come partecipare alla tua comunità!',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSend(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);

    // Risposta asincrona simulata (sostituire con chiamata API reale)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: getMockResponse(msg) },
      ]);
      setLoading(false);
    }, 800);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-primary-200 text-sm font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={16} aria-hidden="true" />
            Concetto di Automazione AI
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Eco Assistente</h1>
          <p className="text-primary-100 text-lg leading-relaxed max-w-xl mx-auto">
            Un agente AI che suggerisce azioni di sostenibilità locali
            in base alle tue domande. Alimentato da Voiceflow (modalità demo attiva).
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-5 gap-8">
        {/* Interfaccia chat */}
        <div className="md:col-span-3 flex flex-col">
          <div
            className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col"
            style={{ minHeight: '480px' }}
            role="log"
            aria-live="polite"
            aria-label="Conversazione con Eco Assistente"
          >
            {/* Messaggi */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
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
                  <div className="bg-gray-100 text-gray-400 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                    L'Eco Assistente sta elaborando...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Chiedi della sostenibilità locale..."
                className="flex-1 text-sm px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label="Scrivi il tuo messaggio"
                disabled={loading}
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white p-2.5 rounded-xl transition-colors"
                aria-label="Invia messaggio"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Domande suggerite */}
          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-2 font-medium">Domande suggerite</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s.text}
                  onClick={() => handleSend(s.text)}
                  className="flex items-center gap-1.5 text-xs bg-white border border-gray-200 text-gray-600 hover:border-primary-400 hover:text-primary-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s.icon}
                  {s.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: spiegazione del concetto */}
        <aside className="md:col-span-2 flex flex-col gap-5">
          <SectionHeading
            label="Come funziona"
            title="Concetto di Automazione AI"
            center={false}
          />

          <div className="flex flex-col gap-4">
            {[
              {
                step: '1',
                title: 'L\'utente pone una domanda',
                desc: 'L\'utente scrive una domanda sulla sostenibilità locale o su come vivere in modo più verde.',
              },
              {
                step: '2',
                title: 'L\'AI elabora il contesto',
                desc: 'L\'agente analizza la richiesta e la abbina ai dati delle iniziative locali e alle conoscenze ambientali.',
              },
              {
                step: '3',
                title: 'Suggerimenti personalizzati',
                desc: 'L\'assistente restituisce suggerimenti concreti: iniziative vicine, consigli e risorse.',
              },
              {
                step: '4',
                title: 'Futuro: basato sulla posizione',
                desc: 'Con il consenso dell\'utente, l\'agente potrebbe considerare la posizione GPS per suggerire azioni iper-locali.',
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 shrink-0 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {s.step}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota tecnica */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-700">Nota tecnica:</strong> questa demo usa
            risposte simulate. Per la produzione, integra con{' '}
            <span className="text-primary-600">Voiceflow</span>,{' '}
            <span className="text-primary-600">OpenAI API</span> o{' '}
            <span className="text-primary-600">Google Gemini</span> sostituendo
            la funzione{' '}
            <code className="bg-gray-200 px-1 rounded">getMockResponse()</code>{' '}
            con una chiamata API reale.
          </div>
        </aside>
      </div>
    </>
  );
}
