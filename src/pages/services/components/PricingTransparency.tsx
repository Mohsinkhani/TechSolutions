import React, { useState } from 'react';
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

  const projectTypes: Record<string, ProjectType> = {
    startup: {
      title: 'Startup MVP',
      description: 'Perfect for validating your business idea with a minimum viable product',
      priceRange: '$15,000 - $35,000',
      timeline: '6-10 weeks',
      icon: 'Rocket',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
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
      priceRange: '$35,000 - $75,000',
      timeline: '10-16 weeks',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
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
      priceRange: '$75,000 - $200,000+',
      timeline: '16-24 weeks',
      icon: 'Building',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
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

  const currentProject = projectTypes[selectedProject];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="DollarSign" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Investment Levels & Value
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Clear, honest pricing based on project scope and complexity. 
            No hidden fees, no surprises - just transparent value for your investment.
          </p>
        </div>

        {/* Project Type Selector */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
          {Object.entries(projectTypes).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 text-left ${
                selectedProject === key
                  ? `${project.bgColor} ${project.color} border-2 border-current`
                  : 'bg-white text-text-secondary hover:bg-white hover:shadow-md border-2 border-border'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                selectedProject === key ? 'bg-white/20' : project.bgColor
              }`}>
                {/* <Icon 
                  name={project.icon} 
                  size={20} 
                  className={selectedProject === key ? 'text-current' : project.color} 
                /> */}
              </div>
              <div>
                <div className="font-semibold">{project.title}</div>
                <div className={`text-sm ${selectedProject === key ? 'text-current opacity-80' : 'text-text-tertiary'}`}>
                  {project.priceRange}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Overview */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${currentProject.bgColor} rounded-lg flex items-center justify-center`}>
                  {/* <Icon name={currentProject.icon} size={24} className={currentProject.color} /> */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">{currentProject.title}</h3>
                  <p className="text-text-secondary">{currentProject.description}</p>
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="DollarSign" size={16} className="text-primary" />
                    <span className="font-semibold text-text-primary">Investment Range</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{currentProject.priceRange}</div>
                </div>
                
                <div className="bg-surface rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-accent" />
                    <span className="font-semibold text-text-primary">Timeline</span>
                  </div>
                  <div className="text-2xl font-bold text-accent">{currentProject.timeline}</div>
                </div>
              </div>

              {/* Core Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="CheckSquare" size={16} className="mr-2 text-primary" />
                  Core Features Included
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              {/* What's Included */}
              <div className="mb-8">
                <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Package" size={16} className="mr-2 text-accent" />
                  What's Included
                </h4>
                <div className="space-y-3">
                  {currentProject.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="ArrowRight" size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Target" size={16} className="mr-2 text-secondary" />
                  Ideal For
                </h4>
                <div className="space-y-3">
                  {currentProject.idealFor.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Users" size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-surface rounded-lg p-6">
                <h5 className="font-semibold text-text-primary mb-3">Ready to Get Started?</h5>
                <p className="text-sm text-text-secondary mb-4">
                  Get a detailed project estimate tailored to your specific requirements
                </p>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  iconName="Calculator"
                  iconPosition="left"
                >
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Factors */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Factors Affecting Investment</h3>
            <p className="text-text-secondary">
              Understanding what influences project pricing helps you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    {/* <Icon name={factor.icon} size={20} className="text-primary" /> */}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    factor.impact === 'High' ?'bg-error/10 text-error' :'bg-warning/10 text-warning'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                
                <h4 className="font-semibold text-text-primary mb-2">{factor.factor}</h4>
                <p className="text-sm text-text-secondary">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Our Pricing Delivers Value</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">
            Every dollar invested in your web development project is backed by our commitment to quality, 
            performance, and long-term success. We don't just build websites - we build competitive advantages.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-sm text-white/80">Average ROI within 12 months</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-white/80">Client satisfaction rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-white/80">Ongoing support & monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;