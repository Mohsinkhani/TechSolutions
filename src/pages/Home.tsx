import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { Contact } from '../components/Contact';
import DigitalMarketingPopup from '../components/DigitalMarketingPopup';
import DigitalMarketingHighlight from '../components/DigitalMarketingHighlight';
import DigitalMarketingFloatingButton from '../components/DigitalMarketingFloatingButton';
import DigitalMarketingSection from '../components/DigitalMarketingSection';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import PortfolioShowcase from '../components/PortfolioShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustSignals from '../components/TrustSignals';

interface HomeProps {
  onNavigateToConsultation: () => void;
  onNavigateToScheduling: () => void;
  onNavigateToPortfolio?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

const Home: React.FC<HomeProps> = ({ 
  onNavigateToConsultation, 
  onNavigateToScheduling,
  onNavigateToPortfolio,
  onNavigateToServices,
  onNavigateToAbout,
  onNavigateToContact
}) => {
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

  // Navigation handlers
  const handleNavigateToPortfolio = () => {
    if (onNavigateToPortfolio) {
      onNavigateToPortfolio();
    } else {
      // Fallback: scroll to portfolio section if it exists on the page
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigateToServices = () => {
    if (onNavigateToServices) {
      onNavigateToServices();
    } else {
      // Fallback: scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigateToAbout = () => {
    if (onNavigateToAbout) {
      onNavigateToAbout();
    } else {
      // Fallback: scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigateToContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      // Fallback: scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Hero onNavigateToConsultation={onNavigateToConsultation} />
      <TrustSignals />
      
      <div id="services">
        <Services 
          onNavigateToConsultation={onNavigateToConsultation}
          onNavigateToPortfolio={handleNavigateToPortfolio}
          onNavigateToContact={handleNavigateToContact}
        />
      </div>
      
      <div id="portfolio">
        <PortfolioShowcase onNavigateToConsultation={onNavigateToConsultation} />
      </div>
      
      <WhyChooseUs onNavigateToConsultation={onNavigateToConsultation} />
      <DigitalMarketingHighlight onNavigateToConsultation={onNavigateToConsultation} />
      <DigitalMarketingSection onNavigateToConsultation={onNavigateToConsultation} />
      
      <div id="about">
        <About />
      </div>
      
      <Testimonials onNavigateToScheduling={onNavigateToScheduling} />
      
      <div id="contact">
        <Contact />
      </div>
      
      <DigitalMarketingPopup 
        onNavigateToConsultation={onNavigateToConsultation}
        onPopupDismissed={handlePopupDismissed}
      />
      
      <DigitalMarketingFloatingButton 
        onNavigateToConsultation={onNavigateToConsultation}
      />
      
      <WhatsAppFloatingButton />
    </>
  );
};

export default Home;