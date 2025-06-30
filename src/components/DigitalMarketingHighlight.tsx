import React from 'react';
import { Star, Users, TrendingUp, Palette, Search, ArrowRight, Calendar, CheckCircle, Zap, Clock } from 'lucide-react';

interface DigitalMarketingHighlightProps {
  onNavigateToConsultation: () => void;
}

const DigitalMarketingHighlight: React.FC<DigitalMarketingHighlightProps> = ({ onNavigateToConsultation }) => {
  const services = [
    { icon: Search, name: 'SEO Expert', description: 'Boost your rankings' },
    { icon: TrendingUp, name: 'Google/Meta Ads', description: 'Drive targeted traffic' },
    { icon: Palette, name: 'Graphic Designer', description: 'Stunning visuals' },
    { icon: Users, name: 'Social Media Manager', description: 'Engage your audience' }
  ];

  const handleGetOffer = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden border-4 border-yellow-400 border-dashed">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Offer Badge */}
      <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
        🔥 HOT DEAL!
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse shadow-lg">
            <Star size={20} className="mr-2 fill-current" />
            ⚡ LIMITED TIME SPECIAL OFFER ⚡
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Marketing Team
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              For Just 1,499 ﷼/Month
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Get a dedicated team of 4 marketing experts to elevate your online presence and drive measurable results.
          </p>

          {/* Price Highlight */}
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-400 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">1,499 ﷼</div>
              <div className="text-sm text-gray-600">Per Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 line-through mb-2">2,999 ﷼</div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                SAVE 50%
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center text-green-600 mb-2">
                <Clock size={20} className="mr-2" />
                <span className="font-bold">Limited Time</span>
              </div>
              <div className="text-sm text-gray-600">Only 5 spots left!</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Team Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🚀 Your Complete Marketing Dream Team
            </h3>
            
            <div className="grid gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-400">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Benefits & CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ✨ Everything Included
            </h3>
            
            <div className="space-y-4 mb-8">
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
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">300%</div>
                  <div className="text-sm text-gray-600">Avg ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Urgency Indicator */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                ⚡ Only 5 spots available this month!
              </div>
              <p className="text-gray-600 text-sm">
                Limited availability to ensure premium service quality
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGetOffer}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mb-4"
            >
              <Calendar size={24} className="mr-3" />
              🚀 Claim This Offer Now!
              <ArrowRight size={24} className="ml-3" />
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                🛡️ 30-day money-back guarantee • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Zap size={32} className="text-white animate-pulse" />
            <h3 className="text-2xl font-bold">Don't Miss Out!</h3>
            <Zap size={32} className="text-white animate-pulse" />
          </div>
          <p className="text-lg mb-6">
            This exclusive 50% discount is only available for the first 5 clients this month. 
            Once these spots are filled, the price returns to 2,999 ﷼.
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Clock size={20} className="mr-2" />
            <span className="font-bold">Offer expires soon - Act now!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingHighlight;