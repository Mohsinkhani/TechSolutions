import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';

interface ProjectType {
  title: string;
  description: string;
  priceRange: string;
  timeline: string;
  icon: string;
  color: string;
  bgColor: string;
  features: string[];
  includes: string[];
  idealFor: string[];
}

interface PricingFactor {
  factor: string;
  impact: string;
  description: string;
  icon: string;
}

const PricingTransparency: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('startup');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const projectTypes: Record<string, ProjectType> = {
    startup: {
      title: 'Startup MVP',
      description: 'Perfect for validating your business idea with a minimum viable product',
      priceRange: '20,000 - 50,000 SAR',
      timeline: '6-10 weeks',
      icon: 'Rocket',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-900/30',
      features: [
        'Core functionality development',
        'Responsive web design',
        'User authentication system',
        'Basic admin dashboard',
        'Database design & setup',
        'API development',
        'Basic SEO optimization',
        '3 months post-launch support'
      ],
      includes: [
        'Technical architecture planning',
        'UI/UX design consultation',
        'Quality assurance testing',
        'Deployment & hosting setup',
        'Documentation & training'
      ],
      idealFor: [
        'Early-stage startups',
        'Proof of concept projects',
        'Limited initial budget',
        'Quick market validation'
      ]
    },
    growth: {
      title: 'Growth-Stage Platform',
      description: 'Comprehensive solution for scaling businesses with advanced features',
      priceRange: '50,000 - 150,000 SAR',
      timeline: '10-16 weeks',
      icon: 'TrendingUp',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-900/30',
      features: [
        'Advanced feature development',
        'Custom integrations',
        'Performance optimization',
        'Advanced security measures',
        'Analytics & reporting',
        'Multi-user role management',
        'API integrations',
        '6 months ongoing support'
      ],
      includes: [
        'Scalability planning',
        'Advanced UI/UX design',
        'Comprehensive testing suite',
        'Performance monitoring',
        'Security audit & compliance'
      ],
      idealFor: [
        'Growing businesses',
        'Complex feature requirements',
        'Multiple user types',
        'Integration needs'
      ]
    },
    enterprise: {
      title: 'Enterprise Solution',
      description: 'Mission-critical applications with enterprise-grade requirements',
      priceRange: '150,000 - 750,000+ SAR',
      timeline: '16-24 weeks',
      icon: 'Building',
      color: 'text-violet-400',
      bgColor: 'bg-violet-900/30',
      features: [
        'Custom enterprise architecture',
        'Advanced security & compliance',
        'High-availability infrastructure',
        'Custom integrations & APIs',
        'Advanced analytics & BI',
        'Multi-tenant architecture',
        'Disaster recovery planning',
        '12 months premium support'
      ],
      includes: [
        'Enterprise architecture design',
        'Compliance consultation',
        'Load testing & optimization',
        'Security penetration testing',
        'Staff training & documentation'
      ],
      idealFor: [
        'Large enterprises',
        'Mission-critical systems',
        'Compliance requirements',
        'High-volume traffic'
      ]
    }
  };

  const pricingFactors: PricingFactor[] = [
    {
      factor: 'Project Complexity',
      impact: 'High',
      description: 'Number of features, integrations, and custom requirements',
      icon: 'Layers'
    },
    {
      factor: 'Design Requirements',
      impact: 'Medium',
      description: 'Custom UI/UX design vs. template-based solutions',
      icon: 'Palette'
    },
    {
      factor: 'Third-party Integrations',
      impact: 'Medium',
      description: 'APIs, payment systems, CRM, and other service connections',
      icon: 'Link'
    },
    {
      factor: 'Performance Requirements',
      impact: 'High',
      description: 'Load handling, speed optimization, and scalability needs',
      icon: 'Zap'
    },
    {
      factor: 'Security & Compliance',
      impact: 'High',
      description: 'Industry regulations, data protection, and security measures',
      icon: 'Shield'
    },
    {
      factor: 'Timeline Constraints',
      impact: 'Medium',
      description: 'Rushed timelines may require additional resources',
      icon: 'Clock'
    }
  ];

  const saudiMarketFactors = [
    {
      title: "Localization Requirements",
      description: "Arabic/English bilingual support and RTL layout adaptation",
      impact: "Adds 15-20% to development costs"
    },
    {
      title: "KSA Regulatory Compliance",
      description: "Meeting CITC standards and Saudi e-commerce laws",
      impact: "Essential for legal operation in Saudi market"
    },
    {
      title: "Payment Gateway Integration",
      description: "Local payment systems like Mada, STC Pay, and HyperPay",
      impact: "Affects both development time and transaction costs"
    },
    {
      title: "Hosting Location",
      description: "Data residency requirements within Saudi Arabia",
      impact: "Increases hosting costs by 20-30% compared to global options"
    }
  ];

  const currentProject = projectTypes[selectedProject];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-cyan-900/40 text-cyan-300 text-sm font-medium mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Transparent Pricing - Saudi Market
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
              Saudi-Specific Development Investment
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Clear pricing in Saudi Riyals with localization for regional requirements
          </motion.p>
        </motion.div>

        {/* Saudi Market Overview */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Saudi Arabia Development Market Insights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="text-center p-6 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700 shadow-lg"
              variants={item}
              initial="hidden"
              animate="show"
            >
              <div className="text-2xl font-bold text-cyan-400">20K-750K+ SAR</div>
              <p className="text-sm text-gray-400 mt-2">Typical project range in Saudi Arabia</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700 shadow-lg"
              variants={item}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
            >
              <div className="text-2xl font-bold text-cyan-400">98%</div>
              <p className="text-sm text-gray-400 mt-2">Smartphone penetration rate in KSA</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700 shadow-lg"
              variants={item}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl font-bold text-cyan-400">40%+</div>
              <p className="text-sm text-gray-400 mt-2">Annual e-commerce growth in Saudi</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700 shadow-lg"
              variants={item}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
            >
              <div className="text-2xl font-bold text-cyan-400">2030</div>
              <p className="text-sm text-gray-400 mt-2">Vision driving digital transformation</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Type Selector */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 mb-12 justify-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Object.entries(projectTypes).map(([key, project], index) => (
            <motion.button
              key={key}
              onClick={() => setSelectedProject(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 text-left ${
                selectedProject === key
                  ? `${project.bgColor} ${project.color} border-2 border-current shadow-lg transform scale-105 backdrop-blur-sm`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:shadow-md border-2 border-gray-700 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              variants={item}
              transition={{ delay: 0.1 * index }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedProject === key ? 'bg-white/10' : 'bg-gray-700'}`}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>              </div>
              <div>
                <div className="font-semibold">{project.title}</div>
                <div className={`text-sm ${selectedProject === key ? 'text-current opacity-80' : 'text-gray-500'}`}>
                  {project.priceRange}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Details */}
        <motion.div 
          className="bg-gray-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 lg:p-12 mb-12 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Overview */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${currentProject.bgColor} rounded-xl flex items-center justify-center`}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentProject.title}</h3>
                  <p className="text-gray-400">{currentProject.description}</p>
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="bg-gray-700/50 backdrop-blur rounded-xl p-5 border border-gray-600 shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" size={16} className="text-cyan-400" />
                    <span className="font-semibold text-white">Investment Range</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{currentProject.priceRange}</div>
                  <p className="text-xs text-gray-500 mt-1">All prices in Saudi Riyals (SAR)</p>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-700/50 backdrop-blur rounded-xl p-5 border border-gray-600 shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-emerald-400" />
                    <span className="font-semibold text-white">Timeline</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{currentProject.timeline}</div>
                  <p className="text-xs text-gray-500 mt-1">Including testing & deployment</p>
                </motion.div>
              </div>

              {/* Core Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Icon name="CheckSquare" size={16} className="mr-2 text-cyan-400" />
                  Core Features Included
                </h4>
                <motion.div 
                  className="grid sm:grid-cols-2 gap-2"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {currentProject.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-2 text-sm p-3 hover:bg-gray-700/50 rounded-lg transition-colors"
                      variants={item}
                    >
                      <Icon name="Check" size={14} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              {/* What's Included */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Icon name="Package" size={16} className="mr-2 text-emerald-400" />
                  What's Included
                </h4>
                <motion.div 
                  className="space-y-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {currentProject.includes.map((includeItem, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors"
                      variants={item}
                    >
                      <Icon name="ArrowRight" size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{includeItem}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Icon name="Target" size={16} className="mr-2 text-violet-400" />
                  Ideal For
                </h4>
                <motion.div 
                  className="space-y-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {currentProject.idealFor.map((ideal, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors"
                      variants={item}
                    >
                      <Icon name="Users" size={14} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{ideal}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div 
                className="bg-gradient-to-r from-cyan-900/40 to-emerald-900/40 rounded-xl p-6 border border-cyan-700/30 backdrop-blur"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="font-semibold text-white mb-3">Ready to Get Started?</h5>
                <p className="text-sm text-cyan-100 mb-4">
                  Get a detailed project estimate tailored to Saudi market requirements
                </p>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 focus:ring-cyan-500/50 shadow-lg"
                  onClick={() => console.log('Quote requested')}
                >
                  Request Saudi Market Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Saudi-Specific Pricing Factors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Saudi Market Factors</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Unique considerations that impact development costs in Saudi Arabia
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {saudiMarketFactors.map((factor, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:shadow-xl transition-all"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center">
                    <Icon name="Globe" size={20} className="text-cyan-400" />
                  </div>
                </div>
                
                <h4 className="font-semibold text-white mb-2">{factor.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{factor.description}</p>
                <div className="text-xs font-medium text-cyan-400 bg-cyan-900/30 px-3 py-1.5 rounded-full inline-block">
                  {factor.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* General Pricing Factors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Factors Affecting Investment</h3>
            <p className="text-gray-400">
              Understanding what influences project pricing helps you make informed decisions
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {pricingFactors.map((factor, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:shadow-xl transition-all"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 ${factor.impact === 'High' ? 'bg-red-900/30' : 'bg-amber-900/30'} rounded-lg flex items-center justify-center`}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    factor.impact === 'High' ? 'bg-red-900/30 text-red-400' : 'bg-amber-900/30 text-amber-400'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                
                <h4 className="font-semibold text-white mb-2">{factor.factor}</h4>
                <p className="text-sm text-gray-400">{factor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-900/40 via-gray-900 to-emerald-900/40 rounded-2xl p-8 lg:p-12 text-white text-center overflow-hidden border border-cyan-700/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Why Our Pricing Delivers Value in Saudi Market</h3>
            <p className="text-cyan-100 mb-8 max-w-3xl mx-auto">
              Every riyal invested in your development project is backed by our understanding of the Saudi market, 
              compliance with local regulations, and commitment to long-term success.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-3xl font-bold mb-2 text-cyan-400">95%</div>
                <div className="text-sm text-cyan-200">Client satisfaction rate in KSA</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-3xl font-bold mb-2 text-emerald-400">3.5x</div>
                <div className="text-sm text-emerald-200">Average ROI for Saudi clients</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="text-3xl font-bold mb-2 text-violet-400">100%</div>
                <div className="text-sm text-violet-200">Regulatory compliance</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
              >
                <div className="text-3xl font-bold mb-2 text-amber-400">24/7</div>
                <div className="text-sm text-amber-200">Local support with Arabic speakers</div>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 mx-auto shadow-xl"
                onClick={() => console.log('Schedule consultation')}
              >
                <div className="flex items-center">
                  <Icon name="Calendar" className="mr-2" />
                  Schedule Free Consultation
                </div>
              </Button>
              <p className="text-sm text-cyan-200 mt-4">No obligations • 100% risk-free</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingTransparency;