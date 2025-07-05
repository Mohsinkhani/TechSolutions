import React, { useState, useEffect } from 'react';
import ConsultationHero from '../components/ConsultationHero';
import ConsultationProcess from '../components/ConsultationProcess';
import IntelligentIntakeForm from '../components/IntelligentIntakeForm';
import ProjectComplexityEstimator from '../components/ProjectComplexityEstimator';
import ConsultationTestimonials from '../components/ConsultationTestimonials';
import SchedulingIntegration from '../components/SchedulingIntegration';
import AlternativeEngagement from '../components/AlternativeEngagement';
import { CheckCircle, Calendar } from 'lucide-react';

const Consultation = () => {
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

  const handleFormSubmit = (formData: any) => {
    console.log('Consultation form submitted:', formData);
    setFormSubmitted(true);

    // Simulate form processing
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your consultation request has been received. Our team will contact you within 24 hours to schedule your strategic planning session.`);
    }, 500);
  };

  const handleScheduleSuccess = (appointmentData: any) => {
    console.log('Appointment scheduled:', appointmentData);
    setAppointmentBooked(true);

    // Simulate booking confirmation
    setTimeout(() => {
      alert(`Consultation confirmed! You'll receive a calendar invitation for your ${appointmentData.type} session with ${appointmentData.consultant.name} on ${appointmentData.date.formatted} at ${appointmentData.time}.`);
    }, 500);
  };

  // Auto-hide formSubmitted message after 10 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => setFormSubmitted(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  // Auto-hide appointmentBooked message after 10 seconds
  useEffect(() => {
    if (appointmentBooked) {
      const timer = setTimeout(() => setAppointmentBooked(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [appointmentBooked]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ConsultationHero onScheduleClick={handleScheduleClick} />

      {/* Consultation Process */}
      <ConsultationProcess />

      {/* Intelligent Intake Form */}
      <IntelligentIntakeForm onSubmit={handleFormSubmit} />

      {/* Project Complexity Estimator */}
      <ProjectComplexityEstimator />

      {/* Consultation Testimonials */}
      {/* <ConsultationTestimonials /> */}

      {/* Scheduling Integration */}
      <div id="scheduling-section">
        <SchedulingIntegration onScheduleSuccess={handleScheduleSuccess} />
      </div>

      {/* Alternative Engagement Options */}
      {/* <AlternativeEngagement /> */}

      {/* Success Messages */}
      {formSubmitted && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} color="white" />
            <span>Consultation request submitted successfully!</span>
          </div>
        </div>
      )}

      {appointmentBooked && (
        <div className="fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <Calendar size={20} color="white" />
            <span>Strategic consultation scheduled!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultation;