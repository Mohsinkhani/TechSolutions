import React, { useState, useEffect } from 'react';
import { X, Star, Users, TrendingUp, Palette, Search, ArrowRight, Calendar, CheckCircle } from 'lucide-react';

interface DigitalMarketingPopupProps {
  onNavigateToConsultation: () => void;
  onPopupDismissed?: () => void;
}

const DigitalMarketingPopup: React.FC<DigitalMarketingPopupProps> = ({ onNavigateToConsultation, onPopupDismissed }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenDigitalMarketingPopup');
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenDigitalMarketingPopup', 'true');
    // Notify parent component that popup was dismissed
    onPopupDismissed?.();
  };

  const handleGetOffer = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenDigitalMarketingPopup', 'true');
    // Navigate to consultation page and scroll to the form
    onNavigateToConsultation();
    
    // Small delay to ensure page navigation completes, then scroll to the form
    setTimeout(() => {
      const formSection = document.querySelector('[data-section="consultation-form"]');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: scroll to the consultation form by looking for the form title
        const formTitle = Array.from(document.querySelectorAll('h2')).find(h => 
          h.textContent?.includes('Tell us about yourself') || 
          h.textContent?.includes('Strategic Consultation Request')
        );
        if (formTitle) {
          formTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 500);
  };

  if (!isVisible) return null;

  const services = [
    { icon: Search, name: 'SEO Expert', description: 'Boost your rankings' },
    { icon: TrendingUp, name: 'Google/Meta Ads', description: 'Drive targeted traffic' },
    { icon: Palette, name: 'Graphic Designer', description: 'Stunning visuals' },
    { icon: Users, name: 'Social Media Manager', description: 'Engage your audience' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 text-white p-8 rounded-t-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Special Offer Badge */}
            <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <Star size={16} className="mr-2 fill-current" />
              🔥 LIMITED TIME OFFER 🔥
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Complete Digital Marketing Team
            </h2>
            
            <p className="text-xl text-white/90 mb-6">
              Get a dedicated team of 4 marketing experts for just
            </p>

            {/* Price Display */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl font-bold text-yellow-400">
                1,499 ﷼
              </div>
              <div className="text-white/70">
                <div className="text-lg line-through">2,999 ﷼</div>
                <div className="text-sm bg-red-500 text-white px-2 py-1 rounded">Save 50%</div>
              </div>
            </div>

            <div className="text-white/80 text-sm">
              *Monthly package - No setup fees - Cancel anytime
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* What You Get */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Complete Marketing Dream Team
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">✨ What's Included:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Daily social media management',
                'SEO optimization & keyword research',
                'Google Ads & Meta Ads campaigns',
                'Custom graphic design assets',
                'Monthly performance reports',
                'Dedicated account manager',
                '24/7 support & consultation',
                'Content calendar planning'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">300%</div>
                <div className="text-sm text-gray-600">Avg ROI Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              ⚡ Only 5 spots left this month!
            </div>
            <p className="text-gray-600 text-sm">
              This exclusive offer is limited to ensure quality service for each client.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleGetOffer}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Calendar size={20} className="mr-2" />
              🚀 Claim This Offer - Start Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </button>
            
            <button
              onClick={handleClose}
              className="w-full text-gray-600 hover:text-gray-800 px-8 py-3 rounded-full font-medium transition-colors duration-300 border border-gray-300 hover:border-gray-400"
            >
              Maybe Later
            </button>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              🛡️ 30-day money-back guarantee • No long-term contracts • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPopup;