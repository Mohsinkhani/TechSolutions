import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/ui/AppImage';
interface Phase {
  id: string;
  title: string;
  duration: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

const ProcessMethodology: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases: Phase[] = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      duration: '1-2 weeks',
      icon: 'Search',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Deep dive into your business goals, user needs, and technical requirements to create a comprehensive project roadmap.',
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
      icon: 'Layout',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      description: 'Design scalable system architecture and create intuitive user interfaces that align with your brand and business objectives.',
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
      icon: 'Code',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Agile development process with continuous integration, regular testing, and iterative feedback incorporation.',
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
      icon: 'Rocket',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      description: 'Seamless deployment, performance monitoring, and continuous optimization based on real-world usage data.',
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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="GitBranch" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Proven Development Methodology
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our systematic approach ensures every project delivers exceptional results through careful planning, 
            agile execution, and continuous optimization.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

          {/* Phase Cards */}
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10">
                  {/* <Icon name={phase.icon} size={20} color="var(--color-primary)" /> */}
                </div>

                {/* Phase Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-border cursor-pointer transition-all duration-300 ${
                      activePhase === index ? 'ring-2 ring-primary shadow-xl' : 'hover:shadow-xl'
                    }`}
                    onClick={() => setActivePhase(activePhase === index ? -1 : index)}
                  >
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${phase.bgColor} rounded-lg flex items-center justify-center`}>
                          {/* <Icon name={phase.icon} size={24} className={phase.color} /> */}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text-primary">{phase.title}</h3>
                          <p className="text-sm text-text-secondary">{phase.duration}</p>
                        </div>
                      </div>
                      <Icon 
                        name={activePhase === index ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-text-secondary" 
                      />
                    </div>

                    {/* Phase Description */}
                    <p className="text-text-secondary mb-6">{phase.description}</p>

                    {/* Expandable Content */}
                    {activePhase === index && (
                      <div className="space-y-6 border-t border-border pt-6">
                        {/* Activities */}
                        <div>
                          <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                            <Icon name="CheckSquare" size={16} className="mr-2 text-primary" />
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                                <Icon name="ArrowRight" size={14} className="mt-0.5 text-primary flex-shrink-0" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                            <Icon name="Package" size={16} className="mr-2 text-accent" />
                            Deliverables
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                                <Icon name="FileText" size={14} className="text-accent flex-shrink-0" />
                                <span>{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phase Number (Mobile) */}
                <div className="lg:hidden w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Why Our Process Works</h3>
            <p className="text-text-secondary">
              Our methodology has been refined through hundreds of successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Predictable Outcomes</h4>
              <p className="text-sm text-text-secondary">
                Clear milestones and deliverables ensure project success and timeline adherence
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Collaborative Approach</h4>
              <p className="text-sm text-text-secondary">
                Regular feedback loops and stakeholder involvement throughout the development cycle
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Agile Delivery</h4>
              <p className="text-sm text-text-secondary">
                Iterative development with continuous integration and rapid deployment capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessMethodology;