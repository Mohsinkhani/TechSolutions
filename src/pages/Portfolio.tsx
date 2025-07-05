import React, { useState, useEffect } from 'react';
import { 
  Zap, Globe, Smartphone, ShoppingCart, TrendingUp, 
  Code, Palette, Database, Monitor, Filter, 
  ArrowRight, ExternalLink, X, Github, Link
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface PortfolioProps {
  initialFilter?: string | null;
}

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  tech: string[];
  url: string;
  image: string;
  client: string;
  year: string;
  results: string[];
  features: string[];
}

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  cursorColor?: string;
  cursorBlinking?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 50,
  delay = 0,
  cursorColor = '#00ff00',
  cursorBlinking = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (cursorBlinking) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [cursorBlinking]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimeout);
    } else {
      setCurrentIndex(0);
    }
  }, [text, delay]);
  // Removed useEffect for initialFilter here, as it's not available in TypewriterEffect
  return (
    <span>
      {displayedText}
      <span 
        style={{ 
          color: cursorColor,
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.3s',
          textShadow: '0 0 5px #00ff00'
        }}
      >|</span>
    </span>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ initialFilter }) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter || 'All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   if (initialFilter) {
  //     setActiveFilter(initialFilter);
  //   }
  // }, [initialFilter]);

  const filterButtons = [
    'All Projects',
    'Web Designs',
    'Ecommerce Development',
    'Apps / Softwares'
  ];

  const projects: Project[] = [
    {
      id: 'exchange-app',
      name: 'Exchange App',
      description: "Africa's leading blockchain platform for secure crypto trading, storage, and payments with great rates and referral earnings.",
      category: 'Apps / Softwares',
      tech: ['React Native', 'Node.js', 'Blockchain'],
      url: 'https://play.google.com/store/apps/details?id=com.cexchange.app',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000',
      client: 'Exchange Financial Services',
      year: '2024',
      results: ['100K+ active users', '99.9% uptime', '4.8 app store rating'],
      features: [
        'Secure crypto transactions',
        'Real-time market data',
        'Referral program',
        'Multi-currency support'
      ]
    },
    {
      id: 'mobile-palace',
      name: 'Mobile Palace',
      description: 'Complete eCommerce solution for mobile devices with product listings, cart functionality, and secure checkout.',
      category: 'Ecommerce Development',
      tech: ['React', 'Node.js', 'MongoDB'],
      url: 'https://mobilepalace.com.pk/',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000',
      client: 'Mobile Palace Group',
      year: '2024',
      results: ['300% sales increase', '50% higher conversion', '200% mobile traffic growth'],
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment gateway integration',
        'Admin dashboard'
      ]
    },
    {
      id: 'awami-labs',
      name: 'Awami Laboratories',
      description: 'Professional website showcasing medical laboratory services with appointment booking and test results portal.',
      category: 'Web Designs',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      url: 'http://mkportfoli.netlify.app/',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000',
      client: 'Awami Laboratories',
      year: '2024',
      results: ['150% more leads', '40% longer visits', '90% satisfaction'],
      features: [
        'Service catalog',
        'Online appointment booking',
        'Patient portal',
        'Responsive design'
      ]
    },
    {
      id: 'happy-helpers',
      name: 'Happy Helpers',
      description: 'Service app connecting users with housekeeping, babysitting, nannies, and event staffing professionals.',
      category: 'Apps / Softwares',
      tech: ['Flutter', 'Firebase'],
      url: 'https://play.google.com/store/apps/details?id=com.happyhelper.app',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000',
      client: 'Happy Helpers Inc.',
      year: '2024',
      results: ['500% ROI improvement', '80% time savings', '95% accuracy'],
      features: [
        'Service provider matching',
        'Booking system',
        'Ratings and reviews',
        'In-app messaging'
      ]
    },
    {
      id: 'coffee-shop',
      name: 'Coffee Shop',
      description: 'Online ordering system with real-time coffee preparation tracking and admin dashboard for management.',
      category: 'Apps / Softwares',
      tech: ['React Native', 'Express.js'],
      url: 'https://coffeshopweb.netlify.app/',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000',
      client: 'Foodie Delivery Co.',
      year: '2023',
      results: ['50K+ downloads', '4.7 app rating', '30min avg delivery'],
      features: [
        'Menu browsing',
        'Order tracking',
        'Loyalty program',
        'Admin dashboard'
      ]
    },
    {
      id: 'kiu-app',
      name: 'KIU Student Faculty',
      description: 'University app providing academic updates, grade access, course schedules, and campus event information.',
      category: 'Apps / Softwares',
      tech: ['Flutter', 'Firebase'],
      url: 'https://play.google.com/store/apps/details?id=com.kiu.sis_student_faculty',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
      client: 'KIU University',
      year: '2023',
      results: ['60% productivity increase', '10K+ active users', '99.5% retention'],
      features: [
        'Grade access',
        'Course schedules',
        'Campus news',
        'Event calendar'
      ]
    },
    {
      id: 'solar-solutions',
      name: 'Solar Solution Provider',
      description: 'Ecommerce platform for solar products with company information and service awareness sections.',
      category: 'Ecommerce Development',
      tech: ['Angular', 'Node.js'],
      url: 'https://solarworksolution.com/',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000',
      client: 'Global Trade Corp.',
      year: '2023',
      results: ['1000+ vendors', '$5M+ transactions', '150+ countries'],
      features: [
        'Product catalog',
        'Solar calculator',
        'Installation services',
        'Energy monitoring'
      ]
    },
    {
      id: 'saudi-ps',
      name: 'Saudi Project Support',
      description: 'Corporate website showcasing transport, accommodation, catering, and IT services for projects in Saudi Arabia.',
      category: 'Web Designs',
      tech: ['WordPress', 'PHP'],
      url: 'https://saudips.org/',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000',
      client: 'Tech Innovations Inc.',
      year: '2023',
      results: ['200% lead generation', '75% bounce reduction', '300% page views'],
      features: [
        'Service showcase',
        'Project portfolio',
        'Contact forms',
        'Multilingual support'
      ]
    },
    {
      id: 'finance-mgmt',
      name: 'Finance Management',
      description: 'Comprehensive platform for tracking assets, billing, transactions with real-time financial insights.',
      category: 'Web Designs',
      tech: ['Flutter', 'Firebase'],
      url: 'https://financewebmangement.netlify.app/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000',
      client: 'CryptoSecure Ltd.',
      year: '2024',
      results: ['500K+ users', '$100M+ transactions', 'Bank-level security'],
      features: [
        'Asset tracking',
        'Expense management',
        'Financial reports',
        'Budget planning'
      ]
    },
    {
      id: 'asktabeeb',
      name: 'Asktabeeb',
      description: 'Online health consultation platform connecting patients with certified doctors via secure video calls.',
      category: 'Web Designs',
      tech: ['React', 'Node.js'],
      url: 'https://asktabeeb.com/',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
      client: 'MedCare Health Services',
      year: '2024',
      results: ['50K+ consultations', '98% satisfaction', '24/7 availability'],
      features: [
        'Doctor search',
        'Appointment booking',
        'Video consultations',
        'Prescription management'
      ]
    },
    {
      id: 'jawline-app',
      name: 'Jawline Exercises',
      description: 'Fitness app providing mewing techniques and jawline workouts to reduce face fat and improve facial structure.',
      category: 'Apps / Softwares',
      tech: ['Flutter', 'Firebase'],
      url: 'https://play.google.com/store/apps/details?id=com.jawline.exercise.mewing.jawlineworkout',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000',
      client: 'Grace Technologies',
      year: '2024',
      results: ['100K+ downloads', '500+ exercises', '95% completion'],
      features: [
        'Exercise library',
        'Progress tracking',
        'Custom routines',
        'Before/after photos'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Rain Effect */}
      <section className="relative py-32 overflow-hidden">
        {/* Rain Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Raindrops */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
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
          ))}

          {/* Rain mist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"
          />

          {/* Matrix-style code rain in background */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`code-${i}`}
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

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Hacker-style typing animation */}
          <div className="font-mono text-left inline-block">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-green-400 mb-6 text-center"
              style={{ textShadow: '0 0 10px #00ff00' }}
            >
              <TypewriterEffect
                text="Our Portfolio"
                speed={100}
                cursorColor="#00ff00"
                cursorBlinking
              />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-lg md:text-xl text-green-300 max-w-3xl mx-auto text-center"
              style={{ textShadow: '0 0 5px #00ff00' }}
            >
              <TypewriterEffect
                text="Showcasing our best work and the results we've delivered for clients worldwide."
                speed={30}
                delay={1500}
                cursorColor="#00ff00"
                cursorBlinking
              />
            </motion.div>
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
            className="absolute left-0 right-0 h-0.5 bg-green-400 opacity-30"
            style={{ boxShadow: '0 0 10px 2px #00ff00' }}
          />
        </div>
      </section>

      {/* Filter Section with Hacker Animation */}
      <section className="bg-gray-800 py-6 sticky top-0 z-10 border-b border-green-400/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filterButtons.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-mono ${
                  activeFilter === filter 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-gray-700 text-green-300 hover:bg-gray-600'
                }`}
                style={{
                  textShadow: activeFilter === filter ? '0 0 5px #00ff00' : 'none'
                }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Hacker Effects */}
      <section className="py-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 255, 0, 0.3)'
                  }}
                  className="bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-green-400/20 hover:shadow-green-500/10 transition-all cursor-pointer"
                  onClick={() => openProjectDetails(project)}
                  onMouseEnter={() => setIsHovering(project.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-xl font-bold text-white font-mono">{project.name}</h3>
                      <p className="text-green-300/90 text-sm font-mono">{project.client}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur-sm rounded-lg p-2">
                      {project.category === 'Apps / Softwares' ? (
                        <Smartphone className="w-5 h-5 text-green-400" />
                      ) : project.category === 'Ecommerce Development' ? (
                        <ShoppingCart className="w-5 h-5 text-green-400" />
                      ) : (
                        <Globe className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded font-mono"
                          style={{ textShadow: '0 0 2px #00ff00' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      animate={{ 
                        x: isHovering === project.id ? 5 : 0
                      }}
                      className="text-green-400 text-sm font-medium flex items-center font-mono"
                      style={{ textShadow: '0 0 5px #00ff00' }}
                    >
                      View details <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2 font-mono">No Projects Found</h3>
              <p className="text-gray-400 mb-4 font-mono">No projects available in the {activeFilter} category yet.</p>
              <button 
                onClick={() => setActiveFilter('All Projects')}
                className="text-green-400 hover:text-green-300 font-medium font-mono"
                style={{ textShadow: '0 0 5px #00ff00' }}
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section with Hacker Theme */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-green-400/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-400 mb-6 font-mono"
            style={{ textShadow: '0 0 10px #00ff00' }}
          >
            <TypewriterEffect
              text="Ready to start your project?"
              speed={50}
              cursorColor="#00ff00"
              cursorBlinking
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-8 font-mono"
          >
            Let's collaborate to create something amazing. Get in touch to discuss your project requirements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors font-mono"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)' }}
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 px-8 py-3 rounded-lg font-medium transition-colors font-mono"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal with Hacker Theme */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto backdrop-blur-sm"
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden border border-green-400/20"
              >
                {/* Header */}
                <div className="relative h-64">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={closeProjectDetails}
                      className="bg-green-400/20 backdrop-blur-sm rounded-full p-2 text-green-400 hover:bg-green-400/30"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="text-3xl font-bold text-white font-mono">{selectedProject.name}</h2>
                    <p className="text-green-300/90 font-mono">{selectedProject.client} • {selectedProject.year}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">Project Overview</h3>
                      <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">Key Features</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-green-400"></div>
                            <span className="ml-2 text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-700 text-green-300 px-3 py-1 rounded-full text-sm font-mono"
                            style={{ textShadow: '0 0 2px #00ff00' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">Achievements</h3>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {selectedProject.results.map((result, i) => (
                          <div 
                            key={i} 
                            className="bg-gray-700/50 p-3 rounded-lg border border-green-400/20"
                          >
                            <p className="text-sm text-gray-300">{result}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center font-mono"
                          style={{ boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)' }}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" /> Visit Live Project
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 px-6 py-3 rounded-lg font-medium font-mono"
                        >
                          View Case Study
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;