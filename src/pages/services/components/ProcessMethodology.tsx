import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessMethodology = () => {
  const [activePhase, setActivePhase] = useState<number>(-1);

  const phases = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      duration: '1-2 weeks',
      color: 'from-cyan-500 to-blue-500',
      description:
        'Deep dive into your business goals, user needs, and technical requirements to create a comprehensive project roadmap.',
      activities: [
        'Stakeholder interviews and requirement gathering',
        'User research and persona development',
        'Technical architecture planning',
        'Competitive analysis and market research',
        'Project timeline and milestone definition'
      ],
      deliverables: [
        'Project Requirements Document',
        'Technical Architecture Blueprint',
        'User Experience Wireframes',
        'Development Timeline & Milestones'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture & Design',
      duration: '2-3 weeks',
      color: 'from-purple-500 to-pink-500',
      description:
        'Design scalable system architecture and create intuitive user interfaces that align with your brand and business objectives.',
      activities: [
        'System architecture design and documentation',
        'Database schema design and optimization',
        'API design and integration planning',
        'UI/UX design and prototyping',
        'Security framework implementation'
      ],
      deliverables: [
        'System Architecture Documentation',
        'Database Design & Schema',
        'API Specifications',
        'High-Fidelity Design Mockups',
        'Interactive Prototypes'
      ]
    },
    {
      id: 'development',
      title: 'Development & Integration',
      duration: '6-12 weeks',
      color: 'from-green-400 to-emerald-600',
      description:
        'Agile development process with continuous integration, regular testing, and iterative feedback incorporation.',
      activities: [
        'Frontend development with modern frameworks',
        'Backend API development and database integration',
        'Third-party service integrations',
        'Automated testing and quality assurance',
        'Performance optimization and security hardening'
      ],
      deliverables: [
        'Fully Functional Web Application',
        'Comprehensive Test Suite',
        'API Documentation',
        'Performance Optimization Report',
        'Security Audit Results'
      ]
    },
    {
      id: 'optimization',
      title: 'Launch & Optimization',
      duration: '2-4 weeks',
      color: 'from-yellow-400 to-orange-500',
      description:
        'Seamless deployment, performance monitoring, and continuous optimization based on real-world usage data.',
      activities: [
        'Production deployment and environment setup',
        'Performance monitoring and analytics integration',
        'User training and documentation',
        'Load testing and scalability validation',
        'Ongoing support and maintenance planning'
      ],
      deliverables: [
        'Live Production Application',
        'Monitoring & Analytics Dashboard',
        'User Training Materials',
        'Maintenance & Support Plan',
        'Performance Baseline Report'
      ]
    }
  ];

  const phaseIcons = {
   discovery: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
),
   architecture: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
),
    development: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
),
   optimization: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M12 2v4"></path>
    <path d="M12 22v-4"></path>
    <path d="M4.93 4.93l2.83 2.83"></path>
    <path d="M19.07 19.07l-2.83-2.83"></path>
    <path d="M2 12h4"></path>
    <path d="M22 12h-4"></path>
    <path d="M4.93 19.07l2.83-2.83"></path>
    <path d="M19.07 4.93l-2.83 2.83"></path>
    <circle cx="12" cy="12" r="5"></circle>
  </svg>
),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-[50%] h-[50%] bg-gradient-to-r from-emerald-500/5 to-green-500/5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-800/50 backdrop-blur border border-gray-700 text-gray-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Proven Development Methodology
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our systematic approach ensures every project delivers exceptional results through careful planning, agile execution, and continuous optimization.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className="relative"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {/* Phase Card */}
              <motion.div 
                className={`bg-gradient-to-br ${phase.color} rounded-2xl p-1 shadow-xl`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="bg-gray-800/70 backdrop-blur-lg rounded-xl p-6 h-full cursor-pointer"
                  onClick={() => setActivePhase(index === activePhase ? -1 : index)}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-inner">
                      {phaseIcons[phase.id as keyof typeof phaseIcons]}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 text-sm mb-5">{phase.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-white/70">
                      {index + 1} of {phases.length}
                    </span>
                    <motion.span 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                      animate={{ rotate: activePhase === index ? 180 : 0 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
              
              {/* Expandable Content */}
              <AnimatePresence>
                {activePhase === index && (
                  <motion.div
                    className="mt-4 bg-gray-800/70 backdrop-blur-lg rounded-xl border border-gray-700 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-400 mt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                  </svg>
                                </span>
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                              <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                            Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                                    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                                    <circle cx="12" cy="20" r="1"></circle>
                                  </svg>
                                </span>
                                <span className="text-gray-300 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-800/50 to-transparent p-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">
                          Phase {index + 1}/{phases.length}
                        </div>
                        <button 
                          className="text-xs text-white hover:text-cyan-400 transition-colors"
                          onClick={() => setActivePhase(-1)}
                        >
                          Close Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Process Visualization */}
        <motion.div 
          className="mt-20 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-4xl h-2 bg-gray-700 rounded-full mb-16">
              <div className="absolute inset-0 flex justify-between items-center">
                {phases.map((_, index) => (
                  <div 
                    key={index} 
                    className="relative flex flex-col items-center"
                    style={{ left: `${(index / (phases.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-gray-700 ${
                        activePhase === index 
                          ? 'bg-gradient-to-r ' + phases[index].color 
                          : 'bg-gray-600'
                      }`}
                    ></div>
                    <div className="absolute top-8 whitespace-nowrap text-sm text-gray-300 font-medium">
                      {phases[index].title.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Development Lifecycle</h3>
              <p className="text-gray-300">
                Our iterative process ensures continuous improvement at every stage, with regular client feedback loops and quality assurance checkpoints to deliver exceptional results on time and within budget.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessMethodology;