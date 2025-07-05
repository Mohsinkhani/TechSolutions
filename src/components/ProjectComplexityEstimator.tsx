import React, { useState, useEffect } from 'react';
import { Calculator, Gauge, Clock, DollarSign, Info, Check, ChevronRight, Undo, RefreshCw, Send, Rocket, Building, Users, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectComplexityEstimator = () => {
  const [selections, setSelections] = useState({
    projectType: '',
    features: [] as string[],
    integrations: [] as string[],
    userBase: '',
    timeline: '',
    platforms: [] as string[]
  });

  const [previousSelections, setPreviousSelections] = useState([] as any[]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const [complexity, setComplexity] = useState({
    score: 0,
    level: 'Simple',
    estimatedTimeline: '',
    estimatedBudget: '',
    recommendations: [] as string[]
  });

  // Saudi market pricing tiers (in SAR)
  const pricingTiers = {
    simple: { min: 100000, max: 300000 },    // ~$27K - $80K
    moderate: { min: 300000, max: 750000 },  // ~$80K - $200K
    complex: { min: 750000, max: 2000000 },  // ~$200K - $530K
    highlyComplex: { min: 2000000, max: 5000000 } // ~$530K+
  };

  const projectTypes = [
    { id: 'mvp', name: 'MVP/Prototype', weight: 1, icon: Rocket },
    { id: 'web-app', name: 'Web Application', weight: 2, icon: Code },
    { id: 'mobile-app', name: 'Mobile Application', weight: 2, icon: Users },
    { id: 'enterprise', name: 'Enterprise Solution', weight: 4, icon: Building },
    { id: 'platform', name: 'Multi-tenant Platform', weight: 5, icon: Building }
  ];

  const features = [
    { id: 'auth', name: 'User Authentication', weight: 1 },
    { id: 'payments', name: 'Payment Processing', weight: 2 },
    { id: 'real-time', name: 'Real-time Features', weight: 3 },
    { id: 'ai-ml', name: 'AI/ML Integration', weight: 4 },
    { id: 'analytics', name: 'Advanced Analytics', weight: 2 },
    { id: 'notifications', name: 'Push Notifications', weight: 1 },
    { id: 'file-handling', name: 'File Upload/Processing', weight: 2 },
    { id: 'multi-language', name: 'Multi-language Support', weight: 2 }
  ];

  const integrations = [
    { id: 'crm', name: 'CRM Integration', weight: 2 },
    { id: 'erp', name: 'ERP Integration', weight: 3 },
    { id: 'social', name: 'Social Media APIs', weight: 1 },
    { id: 'maps', name: 'Maps & Location', weight: 1 },
    { id: 'email', name: 'Email Services', weight: 1 },
    { id: 'sms', name: 'SMS/Communication', weight: 1 },
    { id: 'cloud', name: 'Cloud Services', weight: 2 },
    { id: 'legacy', name: 'Legacy System Integration', weight: 4 }
  ];

  const userBases = [
    { id: 'small', name: 'Small (< 1K users)', weight: 1 },
    { id: 'medium', name: 'Medium (1K - 10K users)', weight: 2 },
    { id: 'large', name: 'Large (10K - 100K users)', weight: 3 },
    { id: 'enterprise', name: 'Enterprise (100K+ users)', weight: 4 }
  ];

  const timelines = [
    { id: 'rush', name: 'Rush (< 3 months)', weight: 3 },
    { id: 'normal', name: 'Normal (3-6 months)', weight: 1 },
    { id: 'extended', name: 'Extended (6+ months)', weight: 0 }
  ];

  const platforms = [
    { id: 'web', name: 'Web Application', weight: 1 },
    { id: 'ios', name: 'iOS App', weight: 2 },
    { id: 'android', name: 'Android App', weight: 2 },
    { id: 'desktop', name: 'Desktop App', weight: 2 },
    { id: 'api', name: 'API/Backend Only', weight: 1 }
  ];

  useEffect(() => {
    if (selections.projectType) {
      setIsCalculating(true);
      const timer = setTimeout(() => {
        calculateComplexity();
        setIsCalculating(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selections]);

  const calculateComplexity = () => {
    let score = 0;
    
    // Project type weight
    const projectType = projectTypes.find(p => p.id === selections.projectType);
    if (projectType) score += projectType.weight;
    
    // Features weight
    selections.features.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) score += feature.weight;
    });
    
    // Integrations weight
    selections.integrations.forEach(integrationId => {
      const integration = integrations.find(i => i.id === integrationId);
      if (integration) score += integration.weight;
    });
    
    // User base weight
    const userBase = userBases.find(u => u.id === selections.userBase);
    if (userBase) score += userBase.weight;
    
    // Timeline weight
    const timeline = timelines.find(t => t.id === selections.timeline);
    if (timeline) score += timeline.weight;
    
    // Platforms weight
    selections.platforms.forEach(platformId => {
      const platform = platforms.find(p => p.id === platformId);
      if (platform) score += platform.weight;
    });
    
    // Determine complexity level with Saudi market pricing
    let level, estimatedTimeline, estimatedBudget, recommendations;
    
    if (score <= 5) {
      level = 'Simple';
      estimatedTimeline = '2-4 months';
      estimatedBudget = `${(pricingTiers.simple.min / 1000).toLocaleString()}K - ${(pricingTiers.simple.max / 1000).toLocaleString()}K SAR`;
      recommendations = [
        'Perfect for MVP or proof of concept',
        'Rapid development with standard technologies',
        'Minimal custom integrations required'
      ];
    } else if (score <= 12) {
      level = 'Moderate';
      estimatedTimeline = '4-8 months';
      estimatedBudget = `${(pricingTiers.moderate.min / 1000).toLocaleString()}K - ${(pricingTiers.moderate.max / 1000).toLocaleString()}K SAR`;
      recommendations = [
        'Balanced feature set with good scalability',
        'Some custom development required',
        'Standard integrations and workflows'
      ];
    } else if (score <= 20) {
      level = 'Complex';
      estimatedTimeline = '8-12 months';
      estimatedBudget = `${(pricingTiers.complex.min / 1000).toLocaleString()}K - ${(pricingTiers.complex.max / 1000).toLocaleString()}K SAR`;
      recommendations = [
        'Enterprise-grade solution required',
        'Significant custom development',
        'Multiple system integrations needed'
      ];
    } else {
      level = 'Highly Complex';
      estimatedTimeline = '12+ months';
      estimatedBudget = `${(pricingTiers.highlyComplex.min / 1000).toLocaleString()}K - ${(pricingTiers.highlyComplex.max / 1000).toLocaleString()}K+ SAR`;
      recommendations = [
        'Large-scale enterprise platform',
        'Extensive custom development',
        'Complex architecture and integrations'
      ];
    }
    
    setComplexity({
      score,
      level,
      estimatedTimeline,
      estimatedBudget,
      recommendations
    });
  };

  const handleSelectionChange = (category: string, value: string, isMultiple = false) => {
    setPreviousSelections([...previousSelections, selections]);
    
    if (isMultiple) {
      setSelections(prev => ({
        ...prev,
        [category]: (prev[category as keyof typeof prev] as string[]).includes(value)
          ? (prev[category as keyof typeof prev] as string[]).filter(item => item !== value)
          : [...(prev[category as keyof typeof prev] as string[]), value]
      }));
    } else {
      setSelections(prev => ({
        ...prev,
        [category]: value
      }));
    }
  };

  const handleReset = () => {
    setPreviousSelections([...previousSelections, selections]);
    setSelections({
      projectType: '',
      features: [],
      integrations: [],
      userBase: '',
      timeline: '',
      platforms: []
    });
    setComplexity({
      score: 0,
      level: 'Simple',
      estimatedTimeline: '',
      estimatedBudget: '',
      recommendations: []
    });
  };

  const handleUndo = () => {
    if (previousSelections.length > 0) {
      const lastSelection = previousSelections[previousSelections.length - 1];
      setSelections(lastSelection);
      setPreviousSelections(previousSelections.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // In a real app, you would send the data to your backend here
    console.log('Estimate submitted:', { selections, complexity });
  };

  const getComplexityColor = () => {
    switch (complexity.level) {
      case 'Simple': return 'text-green-600 bg-green-50 border-green-200';
      case 'Moderate': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Complex': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Highly Complex': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getComplexityGradient = () => {
    switch (complexity.level) {
      case 'Simple': return 'from-green-100 to-green-50';
      case 'Moderate': return 'from-blue-100 to-blue-50';
      case 'Complex': return 'from-orange-100 to-orange-50';
      case 'Highly Complex': return 'from-red-100 to-red-50';
      default: return 'from-gray-100 to-gray-50';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6 shadow-md"
          >
            <Calculator size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Project Complexity Estimator</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Estimate Your Project Scope
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Get instant insights into your project's complexity, timeline, and investment requirements tailored for the Saudi market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Estimator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Type */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">1</span>
                </span>
                Project Type
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <motion.label 
                      key={type.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-start space-x-4 p-4 border rounded-xl cursor-pointer transition-all ${
                        selections.projectType === type.id 
                          ? 'border-blue-500 bg-blue-50 shadow-md' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type.id}
                        checked={selections.projectType === type.id}
                        onChange={(e) => handleSelectionChange('projectType', e.target.value)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-2 rounded-lg ${
                            selections.projectType === type.id ? 'bg-blue-100' : 'bg-gray-100'
                          }`}>
                            <IconComponent size={20} className={
                              selections.projectType === type.id ? 'text-blue-600' : 'text-gray-600'
                            } />
                          </div>
                          <span className="text-gray-900 font-medium">{type.name}</span>
                        </div>
                      </div>
                    </motion.label>
                  );
                })}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">2</span>
                </span>
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <motion.label 
                    key={feature.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-4 p-4 border rounded-xl cursor-pointer transition-all ${
                      selections.features.includes(feature.id)
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selections.features.includes(feature.id)}
                      onChange={(e) => handleSelectionChange('features', feature.id, true)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <span className="text-gray-900 font-medium">{feature.name}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-medium">3</span>
                </span>
                Required Integrations
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <motion.label 
                    key={integration.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-4 p-4 border rounded-xl cursor-pointer transition-all ${
                      selections.integrations.includes(integration.id)
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selections.integrations.includes(integration.id)}
                      onChange={(e) => handleSelectionChange('integrations', integration.id, true)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded"
                    />
                    <span className="text-gray-900 font-medium">{integration.name}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Additional Parameters */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* User Base */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium text-sm">4</span>
                  </span>
                  Expected User Base
                </h3>
                <div className="space-y-3">
                  {userBases.map((userBase) => (
                    <motion.label 
                      key={userBase.id}
                      whileHover={{ x: 2 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                        selections.userBase === userBase.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="userBase"
                        value={userBase.id}
                        checked={selections.userBase === userBase.id}
                        onChange={(e) => handleSelectionChange('userBase', e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900">{userBase.name}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium text-sm">5</span>
                  </span>
                  Desired Timeline
                </h3>
                <div className="space-y-3">
                  {timelines.map((timeline) => (
                    <motion.label 
                      key={timeline.id}
                      whileHover={{ x: 2 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                        selections.timeline === timeline.id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline.id}
                        checked={selections.timeline === timeline.id}
                        onChange={(e) => handleSelectionChange('timeline', e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900">{timeline.name}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`bg-gradient-to-b ${getComplexityGradient()} rounded-2xl p-8 shadow-xl border border-gray-200 sticky top-8`}
            >
              <div className="text-center mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${getComplexityColor()} shadow-sm mb-6`}
                >
                  <Gauge size={18} />
                  <span className="font-semibold">{complexity.level}</span>
                </motion.div>
                
                <AnimatePresence mode="wait">
                  {isCalculating ? (
                    <motion.div
                      key="calculating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-20 flex items-center justify-center"
                    >
                      <div className="animate-pulse flex space-x-2">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="score"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6"
                    >
                      <div className="text-4xl font-bold text-gray-900">{complexity.score}</div>
                      <div className="text-sm text-gray-600">Complexity Score</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Estimates */}
              <div className="space-y-4 mb-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Timeline</span>
                  </div>
                  <span className="font-semibold text-gray-900">{complexity.estimatedTimeline}</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <DollarSign size={18} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">Investment (SAR)</span>
                  </div>
                  <span className="font-semibold text-gray-900">{complexity.estimatedBudget}</span>
                </motion.div>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <ChevronRight size={18} className="text-blue-600 mr-2" />
                  Recommendations
                </h4>
                <div className="space-y-3">
                  {complexity.recommendations.map((rec, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200"
                    >
                      <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  disabled={!selections.projectType}
                  className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg shadow-sm transition-all ${
                    !selections.projectType 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  <RefreshCw size={18} />
                  <span>Reset Estimate</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleUndo}
                  disabled={previousSelections.length === 0}
                  className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg shadow-sm transition-all ${
                    previousSelections.length === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  <Undo size={18} />
                  <span>Undo Estimate</span>
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={!selections.projectType || isSubmitted}
                className={`w-full mt-4 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg shadow-md transition-all ${
                  !selections.projectType || isSubmitted
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Send size={18} />
                <span>{isSubmitted ? 'Submitted!' : 'Submit Your Estimate'}</span>
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700"
                >
                  <p>Thank you for your submission! Our consultant will contact you shortly to discuss your estimate.</p>
                  <p className="mt-1 font-medium">Note: This is a demo estimate. Actual pricing may vary after consultation.</p>
                </motion.div>
              )}

              {/* Disclaimer */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-yellow-50/80 backdrop-blur-sm border border-yellow-200 rounded-lg shadow-sm mt-6"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-yellow-100 rounded-full">
                    <Info size={16} className="text-yellow-600 mt-0.5" />
                  </div>
                  <p className="text-xs text-yellow-800">
                    These are preliminary estimates in Saudi Riyals (SAR). Actual scope and investment may vary based on detailed requirements analysis. Prices include VAT and local compliance requirements.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl text-white"
            >
              <h3 className="text-xl font-semibold mb-3">Need precise pricing?</h3>
              <p className="text-blue-100 mb-4">Get a detailed proposal tailored to your exact requirements.</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Request Custom Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComplexityEstimator;