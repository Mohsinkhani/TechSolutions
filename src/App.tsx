import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import EcommerceDevelopment from './pages/EcommerceDevelopment';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigateToConsultation = () => {
    setCurrentPage('consultation');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigateToConsultation={handleNavigateToConsultation} />;
      case 'software-development':
        return <SoftwareDevelopment />;
      case 'ecommerce-development':
        return <EcommerceDevelopment />;
      case 'portfolio':
        return <Portfolio />;
      case 'case-study':
        return <CaseStudy />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'consultation':
        return <Consultation />;
      default:
        return <Home onNavigateToConsultation={handleNavigateToConsultation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;