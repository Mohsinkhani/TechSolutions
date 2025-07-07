import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import DigitalMarketingPopup from '../components/DigitalMarketingPopup';
import DigitalMarketingHighlight from '../components/DigitalMarketingHighlight';
import DigitalMarketingFloatingButton from '../components/DigitalMarketingFloatingButton';
import DigitalMarketingSection from '../components/DigitalMarketingSection';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
  // Add this import

interface HomeProps {
  onNavigateToConsultation: () => void;
  onNavigateToScheduling: () => void;
}
interface DigitalMarketingSectionProps {
  onNavigateToConsultation: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToConsultation, onNavigateToScheduling }) => {
  const [showHighlight, setShowHighlight] = useState(false);

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
      <Hero onNavigateToConsultation={onNavigateToConsultation} />
      <Services onNavigateToConsultation={onNavigateToConsultation} />
      <DigitalMarketingHighlight onNavigateToConsultation={onNavigateToConsultation} />
      <DigitalMarketingSection onNavigateToConsultation={onNavigateToConsultation} />
      <About />
      <Testimonials onNavigateToScheduling={onNavigateToScheduling} />
      
      <DigitalMarketingFloatingButton 
        onNavigateToConsultation={onNavigateToConsultation}
      />
      
      {/* Add the WhatsApp floating button */}
      <WhatsAppFloatingButton />
    </>
  );
};

export default Home;