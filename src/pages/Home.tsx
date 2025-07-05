import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
// import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import DigitalMarketingPopup from '../components/DigitalMarketingPopup';
import DigitalMarketingHighlight from '../components/DigitalMarketingHighlight';
import DigitalMarketingFloatingButton from '../components/DigitalMarketingFloatingButton';
import DigitalMarketingSection from '../components/DigitalMarketingSection';

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

      {/* Show highlight section if popup was dismissed or user has seen it before */}
      {/* {showHighlight && ( */}
      <DigitalMarketingHighlight onNavigateToConsultation={onNavigateToConsultation} />
      {/* )} */}
      <DigitalMarketingSection onNavigateToConsultation={onNavigateToConsultation} />
      {/* <Portfolio /> */}
      <About />
      {/* Pass the handler to Testimonials */}
      <Testimonials onNavigateToScheduling={onNavigateToScheduling} />
      {/* <Contact /> */}

      {/* Popup component */}
      {/* <DigitalMarketingPopup onDismiss={handlePopupDismissed} /> */}

      {/* Floating Button - shows after popup is dismissed */}
      <DigitalMarketingFloatingButton 
        onNavigateToConsultation={onNavigateToConsultation}
      />
    </>
  );
};

export default Home;