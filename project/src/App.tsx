import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import HomePage from './pages/Home';
import TeamPage from './pages/Team';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <FloatingCallButton />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'team' && <TeamPage />}

      <Footer />
    </div>
  );
}

export default App;
