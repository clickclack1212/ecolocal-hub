import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotButton from '../components/ChatbotButton';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Voiceflow floating chatbot button — always visible */}
      <ChatbotButton />
    </div>
  );
}
