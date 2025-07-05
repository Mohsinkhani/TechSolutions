import React, { useState } from 'react';
import { motion } from 'framer-motion';

type TechnicalAreaKey = 'architecture' | 'security' | 'scalability';

interface Principle {
  title: string;
  description: string;
  benefits: string[];
}

interface TechnicalArea {
  title: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
  content: {
    overview: string;
    principles: Principle[];
    technologies: string[];
    bestPractices: string[];
  };
}

const TechnicalDepth = () => {
  const [activeTab, setActiveTab] = useState<TechnicalAreaKey>('architecture');

  const technicalAreas: Record<TechnicalAreaKey, TechnicalArea> = {
    architecture: {
      title: 'System Architecture',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M9 21V9"></path>
        </svg>
      ),
      color: 'text-cyan-400',
      bgColor: 'from-cyan-600 to-blue-600',
      content: {
        overview: 'We design scalable, maintainable architectures that grow with your business needs.',
        principles: [
          {
            title: 'Microservices Design',
            description: 'Loosely coupled services for better scalability',
            benefits: ['Independent deployment', 'Fault isolation', 'Team autonomy']
          },
          {
            title: 'Event-Driven Architecture',
            description: 'Asynchronous communication for resilient systems',
            benefits: ['Real-time processing', 'Loose coupling', 'Fault tolerance']
          },
          {
            title: 'API-First Approach',
            description: 'Robust APIs for seamless integrations',
            benefits: ['Multi-platform support', 'Future-proofing', 'Developer experience']
          }
        ],
        technologies: ['Docker', 'Kubernetes', 'API Gateway', 'Message Queues'],
        bestPractices: [
          'Domain-driven design',
          'SOLID principles',
          'Configuration management',
          'Environment parity'
        ]
      }
    },
    security: {
      title: 'Security Implementation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      color: 'text-emerald-400',
      bgColor: 'from-emerald-600 to-green-600',
      content: {
        overview: 'Enterprise-grade security measures protecting your data from modern threats.',
        principles: [
          {
            title: 'Zero Trust Security',
            description: 'Never trust, always verify security model',
            benefits: ['Identity verification', 'Least privilege access', 'Threat detection']
          },
          {
            title: 'Data Protection',
            description: 'End-to-end encryption practices',
            benefits: ['Encryption at rest', 'Key management', 'Data anonymization']
          },
          {
            title: 'Compliance Standards',
            description: 'Adherence to industry regulations',
            benefits: ['GDPR compliance', 'HIPAA ready', 'PCI DSS standards']
          }
        ],
        technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'WAF'],
        bestPractices: [
          'Multi-factor authentication',
          'Regular security audits',
          'Secure coding practices',
          'Incident response planning'
        ]
      }
    },
    scalability: {
      title: 'Scalability Planning',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 16.98h-5.99c-1.1 0-1.95.9-1.95 1.95v0c0 1.06.85 1.95 1.95 1.95h2.99"></path>
          <path d="M7 19h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
          <path d="M7 13.03h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
          <path d="M7 7.01h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
        </svg>
      ),
      color: 'text-amber-400',
      bgColor: 'from-amber-600 to-orange-600',
      content: {
        overview: 'Future-proof your application with strategies that handle growth.',
        principles: [
          {
            title: 'Horizontal Scaling',
            description: 'Add servers instead of upgrading hardware',
            benefits: ['Cost efficiency', 'Fault tolerance', 'Unlimited growth']
          },
          {
            title: 'Database Optimization',
            description: 'Efficient data storage and retrieval',
            benefits: ['Query optimization', 'Caching layers', 'Read replicas']
          },
          {
            title: 'Performance Monitoring',
            description: 'Continuous optimization',
            benefits: ['Bottleneck identification', 'Proactive scaling', 'Cost optimization']
          }
        ],
        technologies: ['Auto Scaling', 'Load Balancers', 'CDN', 'Caching'],
        bestPractices: [
          'Performance budgets',
          'Lazy loading strategies',
          'Database optimization',
          'Caching strategies'
        ]
      }
    }
  };

  const currentArea = technicalAreas[activeTab];

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

  // Fixed tab keys array
  const tabKeys: TechnicalAreaKey[] = ['architecture', 'security', 'scalability'];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-[50%] h-[50%] bg-gradient-to-r from-amber-500/5 to-orange-500/5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
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
            Technical Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Deep Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade solutions built on solid foundations with optimized architecture, security, and scalability.
          </p>
        </motion.div>

        {/* Fixed Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
          {tabKeys.map((key) => {
            const area = technicalAreas[key];
            return (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group
                  ${key === activeTab 
                    ? `bg-gradient-to-r ${area.bgColor} text-white shadow-lg scale-[1.02] shadow-cyan-500/20` 
                    : 'bg-gray-800/50 backdrop-blur border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer', zIndex: 10 }}
              >
                <div className={`p-2 rounded-lg ${key === activeTab ? 'bg-white/10' : 'bg-gray-700/50 group-hover:bg-gray-600/50'}`}>
                  {area.icon}
                </div>
                {area.title}
              </motion.button>
            );
          })}
        </div>

        {/* Content Area */}
        <motion.div 
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Overview */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentArea.bgColor}`}>
                {currentArea.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{currentArea.title}</h3>
            </div>
            <p className="text-gray-300 text-lg">{currentArea.content.overview}</p>
          </div>

          {/* Core Principles */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              Core Principles
            </h4>
            <div className="grid lg:grid-cols-3 gap-6">
              {currentArea.content.principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ translateY: -5 }}
                >
                  <h5 className="font-semibold text-white mb-3">{principle.title}</h5>
                  <p className="text-gray-300 text-sm mb-4">{principle.description}</p>
                  
                  <div className="space-y-2">
                    {principle.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies & Best Practices */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Key Technologies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentArea.content.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="text-sm font-medium text-white">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Best Practices
              </h4>
              <div className="space-y-3">
                {currentArea.content.bestPractices.map((practice, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 bg-gray-800/50 backdrop-blur rounded-lg p-3 border border-gray-700"
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">{practice}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Guarantees */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Technical Guarantees</h3>
              <p className="text-white/80">
                Concrete commitments to quality and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">&lt; 3s</div>
                <div className="text-sm text-white/80">Load Time</div>
              </motion.div>

              <motion.div 
                className="text-center bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-white/80">Uptime SLA</div>
              </motion.div>

              <motion.div 
                className="text-center bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 16.98h-5.99c-1.1 0-1.95.9-1.95 1.95v0c0 1.06.85 1.95 1.95 1.95h2.99"></path>
                    <path d="M7 19h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
                    <path d="M7 13.03h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
                    <path d="M7 7.01h5.99c1.1 0 1.95-.9 1.95-1.95v0c0-1.06-.85-1.95-1.95-1.95H9.96"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">10x</div>
                <div className="text-sm text-white/80">Scalability</div>
              </motion.div>

              <motion.div 
                className="text-center bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Security</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default TechnicalDepth;