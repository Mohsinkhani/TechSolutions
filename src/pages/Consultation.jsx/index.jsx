import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ConsultationHero from './components/ConsultationHero';
import ConsultationProcess from './components/ConsultationProcess';
import IntelligentIntakeForm from './components/IntelligentIntakeForm';
import ProjectComplexityEstimator from './components/ProjectComplexityEstimator';
import ConsultationTestimonials from './components/ConsultationTestimonials';
import SchedulingIntegration from './components/SchedulingIntegration';
import AlternativeEngagement from './components/AlternativeEngagement';
import Icon from '../../components/AppIcon';


const ConsultationGatewayPage = () => {
  const [showScheduling, setShowScheduling] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleScheduleClick = () => {
    setShowScheduling(true);
    // Smooth scroll to scheduling section
    setTimeout(() => {
      const schedulingSection = document.getElementById('scheduling-section');
      if (schedulingSection) {
        schedulingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFormSubmit = (formData) => {
    console.log('Consultation form submitted:', formData);
    setFormSubmitted(true);
    
    // Simulate form processing
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your consultation request has been received. Our team will contact you within 24 hours to schedule your strategic planning session.`);
    }, 500);
  };

  const handleScheduleSuccess = (appointmentData) => {
    console.log('Appointment scheduled:', appointmentData);
    setAppointmentBooked(true);
    
    // Simulate booking confirmation
    setTimeout(() => {
      alert(`Consultation confirmed! You'll receive a calendar invitation for your ${appointmentData.type} session with ${appointmentData.consultant.name} on ${appointmentData.date.formatted} at ${appointmentData.time}.`);
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>Strategic Technology Consultation - TechSolutions</title>
        <meta 
          name="description" 
          content="Book a strategic technology consultation to align your vision with technical reality. Expert guidance for digital transformation, architecture planning, and technology roadmap development." 
        />
        <meta name="keywords" content="technology consultation, strategic planning, digital transformation, software architecture, CTO advisory, technical strategy" />
        <meta property="og:title" content="Strategic Technology Consultation - Software Developers Pro" />
        <meta property="og:description" content="Transform your technology vision into executable strategy with expert consultation services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/consultation-gateway-strategic-planning-portal" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ConsultationHero onScheduleClick={handleScheduleClick} />
        
        {/* Consultation Process */}
        <ConsultationProcess />
        
        {/* Intelligent Intake Form */}
        <IntelligentIntakeForm onSubmit={handleFormSubmit} />
        
        {/* Project Complexity Estimator */}
        <ProjectComplexityEstimator />
        
        {/* Consultation Testimonials */}
        <ConsultationTestimonials />
        
        {/* Scheduling Integration */}
        <div id="scheduling-section">
          <SchedulingIntegration onScheduleSuccess={handleScheduleSuccess} />
        </div>
        
        {/* Alternative Engagement Options */}
        <AlternativeEngagement />
        
        {/* Success Messages */}
        {formSubmitted && (
          <div className="fixed bottom-4 right-4 bg-success text-white p-4 rounded-lg shadow-lg z-50">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} color="white" />
              <span>Consultation request submitted successfully!</span>
            </div>
          </div>
        )}
        
        {appointmentBooked && (
          <div className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={20} color="white" />
              <span>Strategic consultation scheduled!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConsultationGatewayPage;