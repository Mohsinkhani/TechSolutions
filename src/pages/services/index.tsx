import React from 'react';
import { Helmet } from 'react-helmet';
// import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProcessMethodology from './components/ProcessMethodology';
import TechnologyStack from './components/TechnologyStack';
import CaseStudySpotlights from './components/CaseStudySpotlights';
import TechnicalDepth from './components/TechnicalDepth';
import PricingTransparency from './components/PricingTransparency';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Header from '../../components/Header';

const ServicesWebDevelopmentExcellence: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Excellence - Software Developers Pro | Strategic Technology Partnership</title>
        <meta 
          name="description" 
          content="Transform your business with scalable web solutions that drive growth. Expert full-stack development, modern frameworks, enterprise security, and proven results. Strategic technology partnership for ambitious businesses." 
        />
        <meta name="keywords" content="web development, full-stack development, React, Node.js, scalable web applications, enterprise web solutions, custom web development, technology partnership" />
        <meta property="og:title" content="Web Development Excellence - Software Developers Pro" />
        <meta property="og:description" content="Scalable web solutions that drive business growth. Expert development with modern frameworks and enterprise-grade security." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Excellence - Software Developers Pro" />
        <meta name="twitter:description" content="Transform your business with scalable web solutions that drive growth." />
        <link rel="canonical" href="/services-deep-dive-web-development-excellence" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header currentPage="services" setCurrentPage={() => {}} />
        
        <main>
          <HeroSection />
          <ProcessMethodology />
          <TechnologyStack />
          <CaseStudySpotlights />
          <TechnicalDepth />
          <PricingTransparency />
          <SocialProof />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default ServicesWebDevelopmentExcellence;