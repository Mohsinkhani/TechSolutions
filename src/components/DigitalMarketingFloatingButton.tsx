import React, { useState, useEffect } from 'react';
import { Zap, X, ArrowRight, Star } from 'lucide-react';

interface DigitalMarketingFloatingButtonProps {
  onNavigateToConsultation: () => void;
}

const DigitalMarketingFloatingButton: React.FC<DigitalMarketingFloatingButtonProps> = ({ onNavigateToConsultation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show floating button only if popup was seen and user didn't dismiss the floating button
    const hasSeenPopup = localStorage.getItem('hasSeenDigitalMarketingPopup');
    const hasSeenFloatingButton = localStorage.getItem('hasSeenFloatingButton');
    
    if (hasSeenPopup && !hasSeenFloatingButton) {
      // Show floating button after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Auto-expand for 5 seconds to grab attention
        setIsExpanded(true);
        setTimeout(() => setIsExpanded(false), 5000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenFloatingButton', 'true');
    onNavigateToConsultation();

    // Scroll to intake form by ID or fallback to h2
    setTimeout(() => {
      const formSection = document.getElementById('sectionform');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
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

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('hasSeenFloatingButton', 'true');
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed right-6 z-50" style={{ bottom: '80px' }}>
      <div 
        className={`transition-all duration-500 ease-in-out transform ${
          isExpanded ? 'scale-100' : 'scale-90'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Expanded Card */}
        <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden ${
          isExpanded ? 'w-80 opacity-100' : 'w-16 opacity-90'
        }`}>
          
          {/* Compact Button State */}
          {!isExpanded && (
            <div className="w-16 h-16 flex items-center justify-center cursor-pointer" onClick={handleClick}>
              <div className="relative">
                <Zap size={28} className="text-white animate-pulse" />
                {/* Notification Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">!</span>
                </div>
              </div>
            </div>
          )}

          {/* Expanded Card State */}
          {isExpanded && (
            <div className="p-4 relative">
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X size={14} className="text-white" />
              </button>

              {/* Content */}
              <div className="text-white">
                {/* Badge */}
                <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold mb-3">
                  <Star size={12} className="mr-1 fill-current" />
                  50% OFF
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2 leading-tight">
                  Digital Marketing Team
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-yellow-400">1,499 ﷼</span>
                  <span className="text-sm line-through text-white/70">2,999 ﷼</span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/90 mb-4">
                  4 experts: SEO, Ads, Design & Social Media
                </p>

                {/* CTA Button */}
                <button
                  onClick={handleClick}
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-200 flex items-center justify-center"
                >
                  Get This Deal
                  <ArrowRight size={16} className="ml-2" />
                </button>

                {/* Urgency */}
                <div className="text-center mt-2">
                  <span className="text-xs text-yellow-200 font-medium">
                    ⚡ Only 5 spots left!
                  </span>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 animate-pulse pointer-events-none"></div>
            </div>
          )}
        </div>

        {/* Pulsing Ring Animation */}
        <div className={`absolute inset-0 rounded-2xl border-4 border-yellow-400 animate-ping ${
          isExpanded ? 'opacity-0' : 'opacity-75'
        }`}></div>
      </div>
    </div>
  );
};

export default DigitalMarketingFloatingButton;