import React from 'react';
import { ArrowRight, Play, Star, Globe, Smartphone, BarChart2, Zap, Code, Server, Clock, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float-particle ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center mb-8 group">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ 
                      animationDelay: `${i * 100}ms`,
                      filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.5))'
                    }}
                  />
                ))}
              </div>
              <span className="ml-4 text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                Trusted by 500+ clients worldwide
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="inline-block">
                Digital{' '}
                <span className="relative inline-block">
                  Transformation
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 animate-underline-expand"></span>
                </span>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 animate-text-glow mt-4">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We transform businesses with cutting-edge digital solutions, delivering exceptional web development, 
              mobile applications, and data-driven marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-14">
             <button
  className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-teal-500/50 group"
  onClick={() => {
    const section = document.getElementById('scheduling-integration');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
>
  <span className="relative z-10 flex items-center text-lg">
    Get Started Today
    <ArrowRight className="w-6 h-6 ml-3 transition-all duration-300 group-hover:translate-x-2" />
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
</button>
              {/* <button className="relative overflow-hidden border-2 border-white/40 hover:border-white/60 text-white px-10 py-5 rounded-full font-semibold flex items-center justify-center transition-all duration-500 hover:bg-white/10 group">
                <span className="relative z-10 flex items-center text-lg">
                  <Play className="w-6 h-6 mr-3 transition-all duration-300 group-hover:scale-125" />
                  Watch Demo
                </span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="text-4xl font-bold text-teal-400 mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <span>500+</span>
                  <Code className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ml-2" />
                </div>
                <div className="text-lg text-gray-300 group-hover:text-teal-300 transition-colors duration-300">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-teal-400 mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <span>98%</span>
                  <Activity className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ml-2" />
                </div>
                <div className="text-lg text-gray-300 group-hover:text-purple-300 transition-colors duration-300">Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-teal-400 mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <span>24/7</span>
                  <Clock className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ml-2" />
                </div>
                <div className="text-lg text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Card */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Services Card */}
            <div className="max-w-lg mx-auto bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(139,92,246,0.4)] border border-white/20 hover:border-teal-400/50">
  <div className="relative h-[35rem] bg-gradient-to-br from-indigo-900/60 via-purple-900/60 to-gray-900/60 overflow-hidden">
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent_5%,white_25%,transparent_95%)]"></div>
                  </div>
                  
                  {/* Floating orbs */}
                  <div className="absolute top-24 left-16 w-40 h-40 bg-purple-500/30 rounded-full mix-blend-screen blur-xl animate-float"></div>
                  <div className="absolute bottom-20 right-16 w-32 h-32 bg-teal-400/30 rounded-full mix-blend-screen blur-xl animate-float-delay"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
                    <div className="mb-8 flex justify-center">
                      <div className="relative w-28 h-28">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-lg animate-pulse-slow"></div>
                        <div className="relative w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-teal-400/50 transition-all duration-500 group">
                          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/30 to-blue-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-teal-400/40 transition-all duration-500">
                            <div className="absolute -inset-3 rounded-xl bg-teal-400/30 blur-lg animate-pulse"></div>
                            <Zap className="w-9 h-9 animate-bounce group-hover:animate-none group-hover:scale-125 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mb-6 animate-text-glow">
                      Our Services
                    </h3>
                    
                    {/* Services */}
                    <div className="w-full space-y-5">
                      <div className="service-item group">
                        <div className="relative z-10 flex items-center space-x-5">
                          <div className="service-icon bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:from-blue-400 group-hover:to-indigo-500 transition-all duration-500">
                            <div className="absolute -inset-1.5 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Globe className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                          </div>
                          <span className="text-xl font-medium group-hover:text-blue-300 transition-colors">Web Development</span>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500"></div>
                      </div>
                      
                      <div className="service-item group">
                        <div className="relative z-10 flex items-center space-x-5">
                          <div className="service-icon bg-gradient-to-br from-purple-500 to-pink-600 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-500">
                            <div className="absolute -inset-1.5 bg-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Smartphone className="w-7 h-7 group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
                          </div>
                          <span className="text-xl font-medium group-hover:text-purple-300 transition-colors">Mobile App Development</span>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-purple-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500"></div>
                      </div>
                      
                      <div className="service-item group">
                        <div className="relative z-10 flex items-center space-x-5">
                          <div className="service-icon bg-gradient-to-br from-amber-500 to-red-500 group-hover:from-amber-400 group-hover:to-red-400 transition-all duration-500">
                            <div className="absolute -inset-1.5 bg-amber-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <BarChart2 className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                          </div>
                          <span className="text-xl font-medium group-hover:text-amber-300 transition-colors">Digital Marketing</span>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-amber-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-500/20 rounded-full blur-2xl animate-pulse border border-teal-500/30"></div>
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000 border border-purple-500/30"></div>
              
              {/* Small Cards */}
              <div className="absolute top-10 -left-10 bg-white/15 backdrop-blur-xl rounded-xl p-5 text-white transform -rotate-12 hover:rotate-0 transition-all duration-500 border border-white/20 hover:border-teal-400/50 group">
                <div className="relative">
                  <div className="text-3xl font-bold text-teal-400 group-hover:scale-110 transition-transform flex items-center">
                    <span>99%</span>
                    <Server className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="text-base group-hover:text-teal-300 transition-colors duration-300">Uptime</div>
                  <div className="absolute -inset-2 bg-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-10 bg-white/15 backdrop-blur-xl rounded-xl p-5 text-white transform rotate-12 hover:rotate-0 transition-all duration-500 border border-white/20 hover:border-purple-400/50 group">
                <div className="relative">
                  <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform flex items-center">
                    <span>24h</span>
                    <Clock className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="text-base group-hover:text-purple-300 transition-colors duration-300">Delivery</div>
                  <div className="absolute -inset-2 bg-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-8deg); }
        }
        @keyframes float-delayed-2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(15px) scale(1.08); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 15px rgba(74, 222, 128, 0); }
          50% { text-shadow: 0 0 25px rgba(74, 222, 128, 0.7); }
        }
        @keyframes underline-expand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
        .animate-float {
          animation: float 9s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 11s ease-in-out infinite;
        }
        .animate-float-delayed-2 {
          animation: float-delayed-2 13s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }
        .animate-underline-expand {
          animation: underline-expand 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .service-item {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
        }
        .service-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(74, 222, 128, 0.3);
        }
        .service-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.5s ease;
        }
        .bg-grid-white\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.1'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          mask-image: linear-gradient(to bottom, transparent 5%, white 25%, transparent 95%);
        }
      `}</style>
    </section>
  );
};

export default Hero;