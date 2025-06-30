import React, { useState, useEffect } from 'react';
import { Calculator, Gauge, Clock, DollarSign, Info, Check } from 'lucide-react';

const ProjectComplexityEstimator = () => {
  const [selections, setSelections] = useState({
    projectType: '',
    features: [] as string[],
    integrations: [] as string[],
    userBase: '',
    timeline: '',
    platforms: [] as string[]
  });
  
  const [complexity, setComplexity] = useState({
    score: 0,
    level: 'Simple',
    estimatedTimeline: '',
    estimatedBudget: '',
    recommendations: [] as string[]
  });

  const projectTypes = [
    { id: 'mvp', name: 'MVP/Prototype', weight: 1 },
    { id: 'web-app', name: 'Web Application', weight: 2 },
    { id: 'mobile-app', name: 'Mobile Application', weight: 2 },
    { id: 'enterprise', name: 'Enterprise Solution', weight: 4 },
    { id: 'platform', name: 'Multi-tenant Platform', weight: 5 }
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
    calculateComplexity();
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
    
    // Determine complexity level
    let level, estimatedTimeline, estimatedBudget, recommendations;
    
    if (score <= 5) {
      level = 'Simple';
      estimatedTimeline = '2-4 months';
      estimatedBudget = '$25K - $75K';
      recommendations = [
        'Perfect for MVP or proof of concept',
        'Rapid development with standard technologies',
        'Minimal custom integrations required'
      ];
    } else if (score <= 12) {
      level = 'Moderate';
      estimatedTimeline = '4-8 months';
      estimatedBudget = '$75K - $200K';
      recommendations = [
        'Balanced feature set with good scalability',
        'Some custom development required',
        'Standard integrations and workflows'
      ];
    } else if (score <= 20) {
      level = 'Complex';
      estimatedTimeline = '8-12 months';
      estimatedBudget = '$200K - $500K';
      recommendations = [
        'Enterprise-grade solution required',
        'Significant custom development',
        'Multiple system integrations needed'
      ];
    } else {
      level = 'Highly Complex';
      estimatedTimeline = '12+ months';
      estimatedBudget = '$500K+';
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

  const getComplexityColor = () => {
    switch (complexity.level) {
      case 'Simple': return 'text-green-600 bg-green-50 border-green-200';
      case 'Moderate': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Complex': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Highly Complex': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Calculator size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Project Complexity Estimator</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Estimate Your Project Scope
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Get instant insights into your project's complexity, timeline, and investment requirements with our intelligent estimation tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Estimator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Type */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Type</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <label key={type.id} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="projectType"
                      value={type.id}
                      checked={selections.projectType === type.id}
                      onChange={(e) => handleSelectionChange('projectType', e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{type.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <label key={feature.id} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selections.features.includes(feature.id)}
                      onChange={(e) => handleSelectionChange('features', feature.id, true)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{feature.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Integrations</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <label key={integration.id} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selections.integrations.includes(integration.id)}
                      onChange={(e) => handleSelectionChange('integrations', integration.id, true)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{integration.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Parameters */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* User Base */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected User Base</h3>
                <div className="space-y-2">
                  {userBases.map((userBase) => (
                    <label key={userBase.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="userBase"
                        value={userBase.id}
                        checked={selections.userBase === userBase.id}
                        onChange={(e) => handleSelectionChange('userBase', e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">{userBase.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Desired Timeline</h3>
                <div className="space-y-2">
                  {timelines.map((timeline) => (
                    <label key={timeline.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline.id}
                        checked={selections.timeline === timeline.id}
                        onChange={(e) => handleSelectionChange('timeline', e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">{timeline.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Complexity Score */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-8">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${getComplexityColor()}`}>
                  <Gauge size={16} />
                  <span className="font-semibold">{complexity.level}</span>
                </div>
                
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-900">{complexity.score}</div>
                  <div className="text-sm text-gray-600">Complexity Score</div>
                </div>
              </div>

              {/* Estimates */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-600">Timeline</span>
                  </div>
                  <span className="font-semibold text-gray-900">{complexity.estimatedTimeline}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-600">Investment</span>
                  </div>
                  <span className="font-semibold text-gray-900">{complexity.estimatedBudget}</span>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                <div className="space-y-2">
                  {complexity.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-yellow-700">
                    These are preliminary estimates. Actual scope and investment may vary based on detailed requirements analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComplexityEstimator;