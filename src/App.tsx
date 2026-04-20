import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import InitiativesPage from './pages/InitiativesPage';
import InitiativeDetailPage from './pages/InitiativeDetailPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import EcoAssistantPage from './pages/EcoAssistantPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="initiatives" element={<InitiativesPage />} />
          <Route path="initiatives/:id" element={<InitiativeDetailPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="eco-assistant" element={<EcoAssistantPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
