import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

/*
 * INTEGRAZIONE VOICEFLOW CHATBOT
 *
 * Per attivare il chatbot reale:
 * 1. Aggiungi lo snippet Voiceflow nel <head> di index.html:
 *    <script type="text/javascript">
 *      (function(d, t) {
 *        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
 *        v.onload = function() {
 *          window.voiceflow.chat.load({
 *            verify: { projectID: 'IL_TUO_PROJECT_ID' },
 *            url: 'https://general-runtime.voiceflow.com',
 *            versionID: 'production'
 *          });
 *        }
 *        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
 *        v.type = "text/javascript";
 *        s.parentNode.insertBefore(v, s);
 *      })(document, 'script');
 *    </script>
 *
 * 2. Sostituisci IL_TUO_PROJECT_ID con l'ID del tuo progetto Voiceflow.
 * 3. Rimuovi il pannello placeholder qui sotto: il widget Voiceflow
 *    mostrerà il proprio pulsante flottante automaticamente.
 */

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Pannello placeholder (rimuovere quando Voiceflow è attivo) */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Chat Eco Assistente"
        >
          {/* Intestazione */}
          <div className="bg-primary-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} aria-hidden="true" />
              <span className="font-semibold text-sm">Eco Assistente</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Chiudi chat"
              className="hover:opacity-80 transition-opacity"
            >
              <X size={18} />
            </button>
          </div>

          {/* Contenitore embed Voiceflow */}
          <div
            id="voiceflow-embed-container"
            className="h-80 flex flex-col items-center justify-center p-6 text-center bg-gray-50"
          >
            <div className="text-4xl mb-3">🌿</div>
            <p className="text-gray-600 text-sm font-medium mb-1">
              AI Chatbot in arrivo
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Quest'area ospiterà l'assistente AI Voiceflow. Visita la pagina{' '}
              <span className="text-primary-600 font-medium">Eco Assistente</span>{' '}
              per maggiori dettagli.
            </p>
            {/* PLACEHOLDER: il widget Voiceflow si carica qui automaticamente una volta aggiunto lo script */}
          </div>
        </div>
      )}

      {/* Pulsante flottante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label={open ? 'Chiudi Eco Assistente' : 'Apri Eco Assistente'}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
