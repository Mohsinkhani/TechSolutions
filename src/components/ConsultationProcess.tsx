import React from 'react';
import { Search, Settings, Map, Handshake, Check, Clock, Route } from 'lucide-react';

const ConsultationProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Initial Discovery",
      duration: "30-minute call",
      description: "Understanding your business objectives, current challenges, and technology landscape. We explore your vision, timeline, and success metrics to establish a foundation for strategic planning.",
      icon: Search,
      features: [
        "Business goals assessment",
        "Current system evaluation",
        "Stakeholder identification",
        "Success criteria definition"
      ]
    },
    {
      step: "02",
      title: "Technical Assessment",
      duration: "Architecture review",
      description: "Deep dive into your existing technical infrastructure, team capabilities, and constraints. We analyze integration requirements and identify optimization opportunities.",
      icon: Settings,
      features: [
        "System architecture analysis",
        "Technology stack evaluation",
        "Integration requirements",
        "Performance bottlenecks"
      ]
    },
    {
      step: "03",
      title: "Strategic Recommendations",
      duration: "Technology roadmap",
      description: "Comprehensive technology strategy document outlining recommended approaches, architecture decisions, and implementation phases aligned with your business objectives.",
      icon: Map,
      features: [
        "Technology roadmap creation",
        "Architecture recommendations",
        "Implementation phases",
        "Risk mitigation strategies"
      ]
    },
    {
      step: "04",
      title: "Partnership Proposal",
      duration: "Project scoping",
      description: "Detailed project proposal including scope, timeline, team structure, and investment requirements. Clear next steps for moving forward with implementation.",
      icon: Handshake,
      features: [
        "Detailed project scope",
        "Timeline and milestones",
        "Team composition",
        "Investment breakdown"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Route size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Consultation Process</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Vision to Executable Strategy
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Our structured consultation process transforms complex business requirements into clear, actionable technology strategies that drive measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-blue-600 to-blue-300"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-blue-600 font-medium">{step.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check size={16} className="text-green-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      
                      <div className="text-center space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {step.title} Phase
                        </h4>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Completion Time</span>
                            <span className="text-sm font-medium text-gray-900">{step.duration}</span>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${(index + 1) * 25}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Complete Strategic Technology Assessment
              </h3>
              <p className="text-lg text-gray-600">
                By the end of our consultation process, you'll have a comprehensive understanding of your technology needs, clear implementation roadmap, and confidence in your next steps.
              </p>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
                <Clock size={20} className="text-blue-600" />
                <span className="font-semibold text-gray-900">2-3 Week Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;