import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/AppImage';

 

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    loadTime?: string;
    userEngagement?: string;
    revenue?: string;
    performance?: string;
    trafficHandling?: string;
    conversionRate?: string;
    pageSpeed?: string;
    availability?: string;
    bounceRate?: string;
    userRetention?: string;
    loadSpeed?: string;
    mobileUsage?: string;
  };
  technologies: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  metrics: {
    label: string;
    value: string;
    icon: 
      | 'Zap'
      | 'TrendingUp'
      | 'DollarSign'
      | 'Shield'
      | 'BarChart3'
      | 'Target'
      | 'CheckCircle'
      | 'TrendingDown'
      | 'Users'
      | 'Rocket'
      | 'Smartphone'
      | 'ShoppingCart'
      | 'Layers';
  }[];
}

const CaseStudySpotlights: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-dashboard',
      title: 'FinTech Trading Dashboard',
      industry: 'Financial Technology',
      client: 'TradePro Analytics',
      challenge: 'Legacy trading platform with 8-second load times causing user abandonment and lost revenue',
      solution: 'Complete rebuild with React, WebSocket real-time data, and optimized backend architecture',
      results: {
        loadTime: '60% faster load times (8s → 3.2s)',
        userEngagement: '85% increase in daily active users',
        revenue: '$2.4M additional annual revenue',
        performance: '99.9% uptime achievement'
      },
      technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      testimonial: {
        quote: "The new dashboard transformed our business. Users can now execute trades instantly, and our customer satisfaction scores have never been higher.",
        author: 'Sarah Chen',
        position: 'CTO, TradePro Analytics'
      },
      metrics: [
        { label: 'Load Time Reduction', value: '60%', icon: 'Zap' },
        { label: 'User Engagement', value: '+85%', icon: 'TrendingUp' },
        { label: 'Revenue Impact', value: '$2.4M', icon: 'DollarSign' },
        { label: 'Uptime', value: '99.9%', icon: 'Shield' }
      ]
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Scaling Solution',
      industry: 'Retail & E-commerce',
      client: 'StyleHub Fashion',
      challenge: 'Platform crashed during Black Friday sale, unable to handle 10x traffic surge',
      solution: 'Microservices architecture with auto-scaling, CDN optimization, and database sharding',
      results: {
        trafficHandling: '10x traffic capacity increase',
        conversionRate: '32% improvement in conversion rate',
        pageSpeed: '45% faster page load speeds',
        availability: 'Zero downtime during peak sales'
      },
      technologies: ['Next.js', 'Microservices', 'Docker', 'Kubernetes', 'MongoDB', 'CloudFront'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      testimonial: {
        quote: "Our Black Friday sales broke all records. The platform handled 10x our normal traffic without a single hiccup.",
        author: 'Michael Rodriguez',
        position: 'CEO, StyleHub Fashion'
      },
      metrics: [
        { label: 'Traffic Capacity', value: '10x', icon: 'BarChart3' },
        { label: 'Conversion Rate', value: '+32%', icon: 'Target' },
        { label: 'Page Speed', value: '+45%', icon: 'Zap' },
        { label: 'Uptime', value: '100%', icon: 'CheckCircle' }
      ]
    },
    {
      id: 'saas-application',
      title: 'SaaS Platform Optimization',
      industry: 'Software as a Service',
      client: 'ProjectFlow Pro',
      challenge: 'High bounce rate (65%) and poor user retention due to complex, slow interface',
      solution: 'Complete UX redesign with progressive web app features and performance optimization',
      results: {
        bounceRate: '45% reduction in bounce rate',
        userRetention: '78% improvement in 30-day retention',
        loadSpeed: '3x faster initial load times',
        mobileUsage: '120% increase in mobile usage'
      },
      technologies: ['Vue.js', 'PWA', 'Service Workers', 'GraphQL', 'PostgreSQL', 'Azure'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      testimonial: {
        quote: "The transformation was incredible. Our users love the new interface, and our retention rates have skyrocketed.",
        author: 'Emily Watson',
        position: 'Product Manager, ProjectFlow Pro'
      },
      metrics: [
        { label: 'Bounce Rate', value: '-45%', icon: 'TrendingDown' },
        { label: 'User Retention', value: '+78%', icon: 'Users' },
        { label: 'Load Speed', value: '3x', icon: 'Rocket' },
        { label: 'Mobile Usage', value: '+120%', icon: 'Smartphone' }
      ]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Award" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover how we've transformed businesses through strategic web development, 
            delivering measurable results that drive growth and success.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 text-left ${
                activeCase === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-white hover:shadow-md border border-border'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                activeCase === index ? 'bg-white/20' : 'bg-primary/10'
              }`}>
                <Icon 
                  name={study.industry === 'Financial Technology' ? 'TrendingUp' : 
                        study.industry === 'Retail & E-commerce' ? 'ShoppingCart' : 'Layers'} 
                  size={20} 
                  className={activeCase === index ? 'text-white' : 'text-primary'} 
                />
              </div>
              <div>
                <div className="font-semibold">{study.title}</div>
                <div className={`text-sm ${activeCase === index ? 'text-white/80' : 'text-text-tertiary'}`}>
                  {study.industry}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-medium mb-1">{currentCase.client}</div>
                <div className="text-xs opacity-80">{currentCase.industry}</div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">{currentCase.title}</h3>
                
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="AlertTriangle" size={16} className="mr-2 text-warning" />
                    Challenge
                  </h4>
                  <p className="text-text-secondary text-sm">{currentCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                    Solution
                  </h4>
                  <p className="text-text-secondary text-sm">{currentCase.solution}</p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Code" size={16} className="mr-2 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-surface rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-secondary italic mb-4">"{currentCase.testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-text-primary">{currentCase.testimonial.author}</div>
                      <div className="text-sm text-text-tertiary">{currentCase.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="border-t border-border p-8 lg:p-12">
            <h4 className="font-semibold text-text-primary mb-6 text-center">Key Results Achieved</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentCase.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={metric.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-text-secondary">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Ready to achieve similar results for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio-case-studies-transformation-stories">
              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View All Case Studies
              </Button>
            </Link>
            <Link to="/consultation-gateway-strategic-planning-portal">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySpotlights;