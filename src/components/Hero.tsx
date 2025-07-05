import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, Star, Globe, Smartphone, BarChart2, Zap, Code, Server, Clock, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateToConsultation: () => void;
}

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  cursorColor?: string;
  cursorBlinking?: boolean;
  onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 50,
  delay = 0,
  cursorColor = '#00ff00',
  cursorBlinking = true,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Handle cursor blinking
  useEffect(() => {
    if (!cursorBlinking) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [cursorBlinking]);

  // Handle typing effect
  useEffect(() => {
    if (isTypingComplete) return;

    const typingTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isTypingComplete) {
        setIsTypingComplete(true);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, isTypingComplete, onComplete]);

  // Reset typing when text changes
  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsTypingComplete(false);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTypingComplete(false);
    }
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {cursorBlinking && !isTypingComplete && (
        <span 
          style={{ 
            color: cursorColor,
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.3s',
            textShadow: '0 0 5px #00ff00'
          }}
        >|</span>
      )}
    </span>
  );
};

const Hero: React.FC<HeroProps> = ({ onNavigateToConsultation }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setTypingComplete(true);
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGetStarted = () => {
    onNavigateToConsultation();
    setTimeout(() => {
      const sectionform = document.getElementById('sectionform');
      if (sectionform) {
        sectionform.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  // Generate unique keys for raindrops to prevent re-render issues
  const generateRaindrops = () => {
    return [...Array(100)].map((_, i) => {
      const id = `raindrop-${i}-${Math.random().toString(36).substr(2, 9)}`;
      return (
        <motion.div
          key={id}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: windowHeight + 100,
            opacity: [0, 0.8, 0],
            x: Math.random() * 10 - 5
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
          className="absolute w-0.5 h-8 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            filter: "blur(0.5px)"
          }}
        />
      );
    });
  };

  // Generate unique keys for matrix code to prevent re-render issues
  const generateMatrixCode = () => {
    return [...Array(30)].map((_, i) => {
      const id = `matrix-${i}-${Math.random().toString(36).substr(2, 9)}`;
      return (
        <motion.div
          key={id}
          initial={{ y: -100 }}
          animate={{ y: windowHeight + 100 }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute text-green-400 text-xs font-mono whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            textShadow: '0 0 5px #00ff00'
          }}
        >
          {Array(20).fill(0).map((_, idx) => 
            Math.random() > 0.5 ? Math.floor(Math.random() * 10) : String.fromCharCode(65 + Math.floor(Math.random() * 26)))
          .join(' ')}
        </motion.div>
      );
    });
  };

  return (
    <section id="home" className="bg-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Rain Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Raindrops */}
        {generateRaindrops()}

        {/* Rain mist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"
        />

        {/* Matrix-style code rain in background */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {generateMatrixCode()}
        </div>
      </div>

      {/* Glowing scan line */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: windowHeight }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 h-0.5 bg-green-400 opacity-30 z-10"
        style={{ boxShadow: '0 0 10px 2px #00ff00' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center mb-8 group">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`star-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Star 
                      className="w-6 h-6 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ 
                        filter: 'drop-shadow(0 0 4px rgba(234, 179, 8, 0.5))'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="ml-4 text-lg text-gray-300 group-hover:text-white transition-colors font-mono"
              >
                Trusted by 500+ clients worldwide
              </motion.span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight font-mono"
            >
              <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                <TypewriterEffect
                  text="Digital Transformation Solutions"
                  speed={50}
                  cursorColor="#00ff00"
                  cursorBlinking
                  onComplete={handleTypingComplete}
                />
              </div>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-mono"
            >
              <TypewriterEffect
                text="We transform businesses with cutting-edge digital solutions, delivering exceptional web development, mobile applications, and data-driven marketing strategies."
                speed={20}
                delay={typingComplete ? 0 : 1000}
                cursorColor="#00ff00"
                cursorBlinking={false}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-14"
            >
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg font-mono"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)' }}
              >
                <TypewriterEffect
                  text="Get Started Today"
                  speed={30}
                  delay={typingComplete ? 0 : 1500}
                  cursorColor="#ffffff"
                  cursorBlinking={false}
                />
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="grid grid-cols-3 gap-10"
            >
              {[
                { value: "500+", icon: Code, label: "Projects", color: "green" },
                { value: "98%", icon: Activity, label: "Satisfaction", color: "purple" },
                { value: "24/7", icon: Clock, label: "Support", color: "cyan" }
              ].map((stat, i) => (
                <motion.div
                  key={`stat-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="text-4xl font-bold mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <span className={`text-${stat.color}-400`}>{stat.value}</span>
                    <stat.icon 
                      className={`w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ml-2 text-${stat.color}-400`}
                    />
                  </div>
                  <div className={`text-lg text-gray-300 group-hover:text-${stat.color}-300 transition-colors duration-300 font-mono`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Services Card */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Services Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="max-w-lg mx-auto bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 border border-green-400/20 hover:border-green-400/50"
              >
                <div className="relative h-[35rem] bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 overflow-hidden">
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent_5%,white_25%,transparent_95%)]"></div>
                  </div>
                  
                  {/* Floating orbs */}
                  <div className="absolute top-24 left-16 w-40 h-40 bg-green-500/20 rounded-full mix-blend-screen blur-xl animate-float"></div>
                  <div className="absolute bottom-20 right-16 w-32 h-32 bg-cyan-400/20 rounded-full mix-blend-screen blur-xl animate-float-delay"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-10 text-center">
                    <div className="mb-8 flex justify-center">
                      <div className="relative w-28 h-28">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-lg animate-pulse-slow"></div>
                        <div className="relative w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-green-400/30 hover:border-green-400/50 transition-all duration-500 group">
                          <div className="absolute -inset-2 bg-gradient-to-r from-green-400/30 to-cyan-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-green-400/40 transition-all duration-500">
                            <div className="absolute -inset-3 rounded-xl bg-green-400/30 blur-lg animate-pulse"></div>
                            <Zap className="w-9 h-9 animate-bounce group-hover:animate-none group-hover:scale-125 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-green-400 mb-6 font-mono">
                      Our Expertise
                    </h3>
                    
                    {/* Services */}
                    <div className="w-full space-y-5">
                      {[
                        { icon: Globe, title: "Web Development", color: "blue" },
                        { icon: Smartphone, title: "Mobile Apps", color: "purple" },
                        { icon: BarChart2, title: "Digital Marketing", color: "amber" }
                      ].map((service, i) => (
                        <motion.div
                          key={`service-${i}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                          className="service-item group"
                        >
                          <div className="relative z-10 flex items-center space-x-5">
                            <div className={`service-icon bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 group-hover:from-${service.color}-400 group-hover:to-${service.color}-500 transition-all duration-500`}>
                              <div className={`absolute -inset-1.5 bg-${service.color}-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                              <service.icon className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                            </div>
                          <span className={`text-xl font-medium text-green-400 group-hover:text-${service.color}-300 transition-colors font-mono`}>
  {service.title}
</span>
                          </div>
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${service.color}-500/10 to-${service.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          <div className={`absolute bottom-0 left-1/2 w-0 h-1 bg-${service.color}-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500`}></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-10 -right-10 w-28 h-28 bg-green-500/20 rounded-full blur-2xl animate-pulse border border-green-500/30"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute -bottom-10 -left-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000 border border-cyan-500/30"
              ></motion.div>
              
              {/* Small Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.5 }}
                className="absolute top-10 -left-10 bg-white/15 backdrop-blur-xl rounded-xl p-5 text-white transform -rotate-12 hover:rotate-0 transition-all duration-500 border border-green-400/30 hover:border-green-400/50 group"
              >
                <div className="relative">
                  <div className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform flex items-center font-mono">
                    <span>99%</span>
                    <Server className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="text-base group-hover:text-green-300 transition-colors duration-300 font-mono">Uptime</div>
                  <div className="absolute -inset-2 bg-green-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="absolute bottom-10 -right-10 bg-white/15 backdrop-blur-xl rounded-xl p-5 text-white transform rotate-12 hover:rotate-0 transition-all duration-500 border border-cyan-400/30 hover:border-cyan-400/50 group"
              >
                <div className="relative">
                  <div className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform flex items-center font-mono">
                    <span>24h</span>
                    <Clock className="w-7 h-7 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="text-base group-hover:text-cyan-300 transition-colors duration-300 font-mono">Support</div>
                  <div className="absolute -inset-2 bg-cyan-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        .animate-float {
          animation: float 9s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delayed 11s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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