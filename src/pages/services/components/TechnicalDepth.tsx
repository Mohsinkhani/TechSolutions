import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
 

interface Principle {
  title: string;
  description: string;
  benefits: string[];
}

interface TechnicalArea {
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  content: {
    overview: string;
    principles: Principle[];
    technologies: string[];
    bestPractices: string[];
  };
}

const TechnicalDepth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('architecture');

  const technicalAreas: Record<string, TechnicalArea> = {
    architecture: {
      title: 'System Architecture',
      icon: 'Building',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      content: {
        overview: 'We design scalable, maintainable architectures that grow with your business needs, ensuring optimal performance and reliability.',
        principles: [
          {
            title: 'Microservices Design',
            description: 'Decompose applications into loosely coupled services for better scalability and maintainability',
            benefits: ['Independent deployment', 'Technology diversity', 'Fault isolation', 'Team autonomy']
          },
          {
            title: 'Event-Driven Architecture',
            description: 'Implement asynchronous communication patterns for responsive and resilient systems',
            benefits: ['Real-time processing', 'Loose coupling', 'Scalability', 'Fault tolerance']
          },
          {
            title: 'API-First Approach',
            description: 'Design robust APIs that serve multiple clients and enable seamless integrations',
            benefits: ['Multi-platform support', 'Third-party integrations', 'Future-proofing', 'Developer experience']
          }
        ],
        technologies: ['Docker', 'Kubernetes', 'API Gateway', 'Message Queues', 'Load Balancers', 'CDN'],
        bestPractices: [
          'Domain-driven design principles',
          'SOLID design patterns implementation',
          'Separation of concerns',
          'Dependency injection',
          'Configuration management',
          'Environment parity'
        ]
      }
    },
    security: {
      title: 'Security Implementation',
      icon: 'Shield',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      content: {
        overview: 'Enterprise-grade security measures protecting your data, users, and business operations from modern threats.',
        principles: [
          {
            title: 'Zero Trust Security',
            description: 'Never trust, always verify - comprehensive security model for modern applications',
            benefits: ['Identity verification', 'Least privilege access', 'Continuous monitoring', 'Threat detection']
          },
          {
            title: 'Data Protection',
            description: 'End-to-end encryption and secure data handling practices',
            benefits: ['Encryption at rest', 'Encryption in transit', 'Key management', 'Data anonymization']
          },
          {
            title: 'Compliance Standards',
            description: 'Adherence to industry regulations and security frameworks',
            benefits: ['GDPR compliance', 'SOC 2 Type II', 'HIPAA ready', 'PCI DSS standards']
          }
        ],
        technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'WAF', 'SIEM', 'Vault'],
        bestPractices: [
          'Multi-factor authentication',
          'Regular security audits',
          'Vulnerability assessments',
          'Secure coding practices',
          'Incident response planning',
          'Security awareness training'
        ]
      }
    },
    scalability: {
      title: 'Scalability Planning',
      icon: 'TrendingUp',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      content: {
        overview: 'Future-proof your application with scalability strategies that handle growth from startup to enterprise scale.',
        principles: [
          {
            title: 'Horizontal Scaling',
            description: 'Scale out by adding more servers rather than upgrading existing hardware',
            benefits: ['Cost efficiency', 'Fault tolerance', 'Unlimited growth', 'Geographic distribution']
          },
          {
            title: 'Database Optimization',
            description: 'Implement efficient data storage and retrieval strategies',
            benefits: ['Query optimization', 'Indexing strategies', 'Caching layers', 'Read replicas']
          },
          {
            title: 'Performance Monitoring',
            description: 'Continuous monitoring and optimization of application performance',
            benefits: ['Real-time metrics', 'Bottleneck identification', 'Proactive scaling', 'Cost optimization']
          }
        ],
        technologies: ['Auto Scaling', 'Load Balancers', 'CDN', 'Caching', 'Database Sharding', 'Monitoring'],
        bestPractices: [
          'Performance budgets',
          'Lazy loading strategies',
          'Code splitting',
          'Image optimization',
          'Database query optimization',
          'Caching strategies'
        ]
      }
    }
  };

  const currentArea = technicalAreas[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Settings" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Technical Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Deep Technical Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our technical depth ensures your web application is built on solid foundations 
            with enterprise-grade architecture, security, and scalability.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {Object.entries(technicalAreas).map(([key, area]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                activeTab === key
                  ? `${area.bgColor} ${area.color} border-2 border-current`
                  : 'bg-surface text-text-secondary hover:bg-surface-secondary border-2 border-transparent'
              }`}
            >
              {/* <Icon name={area.icon} size={20} /> */}
              <span>{area.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          {/* Overview */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 ${currentArea.bgColor} rounded-lg flex items-center justify-center`}>
                {/* <Icon name={currentArea.icon} size={24} className={currentArea.color} /> */}
              </div>
              <h3 className="text-2xl font-bold text-text-primary">{currentArea.title}</h3>
            </div>
            <p className="text-text-secondary text-lg">{currentArea.content.overview}</p>
          </div>

          {/* Core Principles */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-text-primary mb-6">Core Principles</h4>
            <div className="grid lg:grid-cols-3 gap-8">
              {currentArea.content.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-border">
                  <h5 className="font-semibold text-text-primary mb-3">{principle.title}</h5>
                  <p className="text-sm text-text-secondary mb-4">{principle.description}</p>
                  
                  <div className="space-y-2">
                    {principle.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Best Practices */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="Code" size={20} className="mr-2" />
                Key Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentArea.content.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="bg-white border border-border rounded-lg p-3 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-sm font-medium text-text-primary">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                <Icon name="CheckSquare" size={20} className="mr-2" />
                Best Practices
              </h4>
              <div className="space-y-3">
                {currentArea.content.bestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="ArrowRight" size={16} className={`${currentArea.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-text-secondary">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Guarantees */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Technical Guarantees</h3>
            <p className="text-white/90">
              We stand behind our technical expertise with concrete commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold mb-2">&lt; 3s</div>
              <div className="text-sm text-white/80">Load Time Guarantee</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-white/80">Uptime SLA</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold mb-2">10x</div>
              <div className="text-sm text-white/80">Scalability Capacity</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/80">Security Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDepth;