import React, { useEffect } from 'react';
import { Calendar, Download, Target, Zap, Shield, TrendingUp, CheckCircle, Lightbulb, Rocket } from 'lucide-react';

interface ConsultationHeroProps {
  onScheduleClick: () => void;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = ({ onScheduleClick }) => {
  useEffect(() => {
    // Add animation class to elements after component mounts
    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-in').forEach(el => {
        el.classList.add('animate-fade-in');
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-float-3"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/20 rounded-full animate-float-4"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transform transition-all duration-500 hover:scale-105">
                <Calendar size={16} className="text-white" />
                <span className="text-sm font-medium">Strategic Planning Session</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Strategic <span className="text-yellow-300">Technology</span> Planning Session
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 font-light max-w-xl">
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
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-teal-400 rounded-lg flex items-center justify-center">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{benefit.title}</h3>
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
    className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 px-8 py-4 rounded-xl font-medium hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg shadow-emerald-500/20"
  >
    <Calendar size={20} />
    <span className="text-lg">Schedule Strategic Session</span>
  </button>
  
  <a href="/assets/planning-guide.pdf" download>
    <button className="text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
      <Download size={20} />
      <span className="text-lg">Download Planning Guide</span>
    </button>
  </a>
</div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-in">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Consultation Value</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-400 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="space-y-5">
                  {[
                    { metric: "95%", label: "Client Satisfaction Rate" },
                    { metric: "40%", label: "Faster Project Delivery" },
                    { metric: "60%", label: "Reduced Development Risks" },
                    { metric: "85%", label: "Proceed to Full Project" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0 group"
                    >
                      <span className="text-blue-200 group-hover:text-white transition-colors">{stat.label}</span>
                      <span className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors">{stat.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce-slow">
              <Lightbulb size={24} className="text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce-slow-reverse">
              <Rocket size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(10px) translateX(15px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(15px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(8px); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(12px) translateX(-12px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 9s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow-reverse {
          animation: bounce-slow-reverse 4s ease-in-out infinite;
        }
        
        .animate-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ConsultationHero;