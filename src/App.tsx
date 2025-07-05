import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import EcommerceDevelopment from './pages/EcommerceDevelopment';
import { Portfolio } from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [portfolioFilter, setPortfolioFilter] = useState<string | null>(null);

  const handleNavigateToConsultation = () => {
    setCurrentPage('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPortfolio = (filter: string | null = null) => {
    setPortfolioFilter(filter);
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCaseStudy = () => {
    setCurrentPage('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to navigate to Consultation and scroll to Scheduling Integration
  const handleNavigateToScheduling = () => {
    setCurrentPage('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const schedulingSection = document.getElementById('scheduling-section');
      if (schedulingSection) {
        schedulingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // Delay to allow Consultation page to render
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigateToConsultation={handleNavigateToConsultation}
            onNavigateToScheduling={handleNavigateToScheduling}
          />
        );
      case 'software-development':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <SoftwareDevelopment />;
      case 'ecommerce-development':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <EcommerceDevelopment />;
      case 'portfolio':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <Portfolio initialFilter={portfolioFilter} />;
      case 'case-study':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <CaseStudy />;
      case 'about':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <About />;
      case 'contact':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <Contact />;
      case 'consultation':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <Consultation />;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return <Home onNavigateToConsultation={handleNavigateToConsultation} onNavigateToScheduling={handleNavigateToScheduling} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer
        onNavigateToPortfolio={handleNavigateToPortfolio}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToCaseStudy={handleNavigateToCaseStudy}
        onNavigateToContact={handleNavigateToContact}
      />
    </div>
  );
}

export default App;