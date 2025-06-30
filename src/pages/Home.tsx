import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import DigitalMarketingPopup from '../components/DigitalMarketingPopup';
import DigitalMarketingHighlight from '../components/DigitalMarketingHighlight';
import DigitalMarketingFloatingButton from '../components/DigitalMarketingFloatingButton';

interface HomeProps {
  onNavigateToConsultation: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToConsultation }) => {
  const [showHighlight, setShowHighlight] = useState(false);

  // Check if user has already seen the popup
  React.useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenDigitalMarketingPopup');
    if (hasSeenPopup) {
      setShowHighlight(true);
    }
  }, []);

  const handlePopupDismissed = () => {
    setShowHighlight(true);
  };

  return (
    <>
      <Hero />
      <Services />
      
      {/* Show highlight section if popup was dismissed or user has seen it before */}
      {showHighlight && (
        <DigitalMarketingHighlight onNavigateToConsultation={onNavigateToConsultation} />
      )}
      
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      
      {/* Popup component */}
      <DigitalMarketingPopup 
        onNavigateToConsultation={onNavigateToConsultation}
        onPopupDismissed={handlePopupDismissed}
      />
      
      {/* Floating Button - shows after popup is dismissed */}
      <DigitalMarketingFloatingButton 
        onNavigateToConsultation={onNavigateToConsultation}
      />
    </>
  );
};

export default Home;