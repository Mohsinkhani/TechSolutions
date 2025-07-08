import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, Star, Globe, Smartphone, BarChart2, Zap, Code, Server, Clock, Activity, CheckCircle, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateToConsultation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToConsultation }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGetQuote = () => {
    onNavigateToConsultation();
    setTimeout(() => {
      const sectionform = document.getElementById('sectionform');
      if (sectionform) {
        sectionform.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const portfolioProjects = [
    {
      id: 'exchange-app',
      title: 'Exchange App',
      subtitle: '100K+ Users',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=400&h=250&fit=crop',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'mobile-palace',
      title: 'Mobile Palace',
      subtitle: '300% Sales Growth',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=400&h=250&fit=crop',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'happy-helpers',
      title: 'Happy Helpers',
      subtitle: '500% ROI',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&h=250&fit=crop',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechStyle Boutique',
      quote: 'Conversion rates increased by 45% within the first month.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Analytics',
      quote: 'The scalability they built has been crucial as we\'ve grown 10x.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    }
  ];

  return (
    <section id="home" className="bg-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
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
                Math.random() > 0.5 ? Math.floor(Math.random() * 10) : String.fromCharCode(65 + Math.floor(Math.random() * 26))
              ).join(' ')}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Web</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Apps</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
            >
              From websites and mobile apps to e-commerce and data-driven marketing strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <button 
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📋</span>
                Get Free Quote
              </button>
              
              <button 
                onClick={() => window.location.href = 'tel:+966535560431'}
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Free Call
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="grid grid-cols-3 gap-10"
            >
              {[
                { value: "500+", label: "Projects", color: "green" },
                { value: "98%", label: "Satisfaction", color: "purple" },
                { value: "24/7", label: "Support", color: "cyan" }
              ].map((stat, i) => (
                <motion.div
                  key={`stat-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="text-4xl font-bold mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <span className={`text-${stat.color}-400`}>{stat.value}</span>
                  </div>
                  <div className={`text-lg text-gray-300 group-hover:text-${stat.color}-300 transition-colors duration-300`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Portfolio Cards */}
          <div className="relative">
            <div className="grid gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="bg-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-green-300 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl animate-pulse border border-orange-500/30"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000 border border-cyan-500/30"
            ></motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;