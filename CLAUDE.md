# CLAUDE.md — Contesto Progetto per Claude

Questo file descrive architettura, convenzioni e pattern del progetto **EcoLocal Hub**
per assistere Claude nelle sessioni di sviluppo.

---

## Panoramica

SPA React per la promozione di iniziative di sostenibilità locale.
Nessun backend — tutto in-browser. Dati mock in TypeScript.
Build con Vite + TypeScript + TailwindCSS + React Router v7.

---

## Comandi Essenziali

```bash
npm run dev      # dev server su localhost:5173
npm run build    # tsc + vite build — usare per verificare errori TS
npm run preview  # anteprima build produzione
```

---

## File Chiave

| File | Ruolo |
|------|-------|
| `src/data/initiatives.ts` | Dati mock, interfaccia `Initiative`, costante `CATEGORIES` — leggere prima di modificare |
| `src/hooks/useInitiatives.ts` | Filtro per categoria + ricerca full-text con `useMemo` |
| `src/layouts/Layout.tsx` | Shell dell'app: Navbar + Outlet + Footer + ChatbotButton |
| `src/App.tsx` | Tutte le 6 route React Router |
| `src/components/Navbar.tsx` | Logo (`/logo.png`), 5 link, CTA, menu mobile |
| `src/components/Footer.tsx` | Link, 2 email di contatto, copyright fisso |
| `src/components/InitiativeCard.tsx` | Card con immagine, badge, tag, link a dettaglio |
| `src/components/ChatbotButton.tsx` | Pulsante flottante Voiceflow + pannello placeholder |
| `src/components/SectionHeading.tsx` | Heading riutilizzabile con `label`, `title`, `subtitle`, `center` |
| `index.html` | Contiene gli snippet placeholder per Voiceflow e Tally.so |
| `tailwind.config.js` | Colori custom: `primary` (verde), `earth` (giallo) |
| `vercel.json` | Rewrite `/(.*) -> /` per SPA routing su Vercel |

---

## Architettura

```
App.tsx (BrowserRouter + Routes)
    └── Layout.tsx (Navbar + Footer + ChatbotButton)
            ├── HomePage
            ├── InitiativesPage  ←  useInitiatives()  ←  initiatives.ts
            ├── InitiativeDetailPage  ←  useParams + initiatives.find()
            ├── CommunityPage
            ├── ContactPage
            └── EcoAssistantPage
```

---

## Route

| Path | Componente | Note |
|------|-----------|------|
| `/` | `HomePage` | 4 sezioni: hero, stats, categorie, evidenza |
| `/initiatives` | `InitiativesPage` | Ricerca + filtro categoria |
| `/initiatives/:id` | `InitiativeDetailPage` | ID da `initiatives.ts` |
| `/community` | `CommunityPage` | Team: solo Capuana e Di Gaudio |
| `/contact` | `ContactPage` | Placeholder Tally.so |
| `/eco-assistant` | `EcoAssistantPage` | Chat dimostrativa senza backend |

---

## Convenzioni Importanti

### Read preventivo obbligatorio
Prima di usare `Write` o `Edit` su un file, **il file deve essere stato letto nella sessione corrente**.
Anche leggere 3 righe è sufficiente per registrarlo nel contesto.

### Lingua
**Tutto il testo visibile all'utente è in italiano.**
Non introdurre stringhe in inglese nell'interfaccia utente.

### Icone
Tutte le icone usano **Lucide React** (`lucide-react`).
Non usare emoji come icone UI — usare componenti `<NomeIcona size={N} aria-hidden="true" />`.
Verificare che il nome dell'icona esista nella versione installata prima di usarla.

### Logo
Il logo è un'immagine statica in `public/logo.png`.
Si usa con `<img src="/logo.png" alt="EcoLocal Hub" />` — non come componente SVG inline.

### Tailwind
Usare solo le classi Tailwind. Nessun file CSS esterno (ad eccezione di `index.css` che
contiene solo le direttive `@tailwind` e il font import).
Colori del brand: `primary-600` (verde principale), `primary-700` (hover).

### Aggiungere una nuova iniziativa
1. Aggiungere l'oggetto in `src/data/initiatives.ts` seguendo l'interfaccia `Initiative`
2. Se la categoria è nuova, aggiungerla a `CATEGORIES` nello stesso file
3. Nessuna altra modifica necessaria: filtri e card si aggiornano automaticamente

### Aggiungere una nuova route
1. Creare il componente in `src/pages/`
2. Aggiungere la `<Route>` in `src/App.tsx`
3. Aggiungere il link in `src/components/Navbar.tsx` (array `links`) e nel footer se necessario

### Aggiungere una nuova icona Lucide
1. Verificare il nome esatto su [lucide.dev](https://lucide.dev)
2. Importare direttamente nel componente che la usa: `import { NomeIcona } from 'lucide-react'`

---

## Placeholder Integrazioni

### Voiceflow
- Script: `index.html` (commentato, pronto)
- Pannello popup: `src/components/ChatbotButton.tsx` — `id="voiceflow-embed-container"`
- Chatbot contestuale: `src/pages/InitiativeDetailPage.tsx` — `id="voiceflow-initiative-chat"`

### Tally.so
- Modulo contatti: `src/pages/ContactPage.tsx` — `id="tally-embed-container"`
- Script popup: `index.html` (commentato, pronto)

---

## Tipi Principali

```typescript
interface Initiative {
  id: string;
  title: string;
  description: string;       // breve, usata nella card
  longDescription: string;   // estesa, usata nel dettaglio
  location: string;
  category: string;          // deve corrispondere a un valore in CATEGORIES
  tags: string[];
  image: string;             // URL Unsplash o percorso pubblico
  contact: string;           // email
  website?: string;          // opzionale
  impactMetric: string;      // es. "45 tonnellate di CO₂ evitate all'anno"
}

type Category = 'Tutte' | 'Riciclo' | 'Cibo Locale' | 'Energia' |
                'Spazi Verdi' | 'Eventi Comunitari' | 'Trasporti';
```

---

## Cosa NON fare

- Non introdurre un backend o chiamate API esterne non richieste
- Non usare file CSS separati oltre a `index.css`
- Non aggiungere librerie UI esterne (Material UI, Chakra, ecc.) — solo Tailwind
- Non usare emoji come icone nell'interfaccia (solo nelle card dei team e nei testi descrittivi)
- Non modificare il copyright nel Footer: deve restare `© 2026 EcoLocal Hub — Lumsa Project`
- Non modificare i membri del team in `CommunityPage.tsx`: sono solo Gabriele Capuana e Serena Di Gaudio
- Non cambiare le email di contatto: `g.capuana@lumsastud.it` e `s.digaudio@lumsastud.it`
- Non usare `Write` o `Edit` senza aver prima chiamato `Read` sul file nella sessione corrente
