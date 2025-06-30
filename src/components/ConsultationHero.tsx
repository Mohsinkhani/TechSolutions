import React from 'react';
import { Calendar, Download, Target, Zap, Shield, TrendingUp, CheckCircle, Lightbulb, Rocket } from 'lucide-react';

interface ConsultationHeroProps {
  onScheduleClick: () => void;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = ({ onScheduleClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar size={16} className="text-white" />
                <span className="text-sm font-medium">Strategic Planning Session</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Strategic Technology Planning Session
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 font-light">
                Align Your Vision with Technical Reality
              </p>
              
              <p className="text-lg text-blue-200 leading-relaxed max-w-2xl">
                Transform ambitious ideas into executable technology strategies. Our consultation process goes beyond project scoping to deliver comprehensive technology roadmaps that drive business growth.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Strategic Clarity", desc: "Clear technology roadmap aligned with business goals" },
                { icon: Zap, title: "Accelerated Timeline", desc: "Faster project delivery through proper planning" },
                { icon: Shield, title: "Risk Mitigation", desc: "Identify and address potential challenges early" },
                { icon: TrendingUp, title: "Scalable Architecture", desc: "Future-proof solutions that grow with your business" }
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-blue-200">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onScheduleClick}
                className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Schedule Strategic Session</span>
              </button>
              
              <a href="/planning-guide.pdf" download>
                <button className="text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download Planning Guide</span>
                </button>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Consultation Value</h3>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "95%", label: "Client Satisfaction Rate" },
                    { metric: "40%", label: "Faster Project Delivery" },
                    { metric: "60%", label: "Reduced Development Risks" },
                    { metric: "85%", label: "Proceed to Full Project" }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-blue-200">{stat.label}</span>
                      <span className="text-2xl font-bold text-white">{stat.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Lightbulb size={24} className="text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Rocket size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;