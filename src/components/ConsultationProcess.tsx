import React from 'react';
import { Search, Settings, Map, Handshake, Check, Clock, Route, Lightbulb, BarChart2, Users, Zap, Calendar, Phone } from 'lucide-react';

const ConsultationProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      duration: "30-45 min",
      description: "We start by deeply understanding your business goals, pain points, and vision. This collaborative session helps us align our approach with your strategic objectives.",
      icon: Search,
      features: [
        "Business objectives alignment",
        "Current challenges analysis",
        "Success metrics definition",
        "Stakeholder identification"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Technical Deep Dive",
      duration: "1-2 days",
      description: "Our experts analyze your existing tech stack, infrastructure, and workflows to identify optimization opportunities and integration requirements.",
      icon: Settings,
      features: [
        "System architecture review",
        "Technology stack evaluation",
        "Performance assessment",
        "Security audit"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Solution Design",
      duration: "3-5 days",
      description: "We craft a tailored technology roadmap with architecture diagrams, implementation phases, and risk mitigation strategies.",
      icon: Map,
      features: [
        "Custom solution architecture",
        "Implementation roadmap",
        "Innovation opportunities",
        "ROI projections"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      step: "04",
      title: "Partnership Proposal",
      duration: "1 day",
      description: "Receive a comprehensive proposal with clear scope, timeline, team structure, and investment details to move forward with confidence.",
      icon: Handshake,
      features: [
        "Detailed project scope",
        "Phased implementation plan",
        "Dedicated team structure",
        "Transparent pricing"
      ],
      color: "from-amber-500 to-amber-600"
    }
  ];

  const benefits = [
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Innovative Solutions",
      description: "Leverage cutting-edge technologies tailored to your specific needs"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
      title: "Data-Driven Approach",
      description: "Decisions based on comprehensive analysis and industry benchmarks"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: "Expert Team",
      description: "Access to specialized consultants with proven track records"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Rapid Implementation",
      description: "Streamlined process to move from strategy to execution quickly"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Route className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide">STRATEGIC CONSULTATION</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Vision Into <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Actionable Strategy</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our proven 4-phase consultation process delivers clarity, confidence, and a competitive edge through strategic technology planning.
          </p>
        </div>

        {/* Enhanced Process Steps */}
        <div className="relative space-y-20 lg:space-y-24">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-100 via-purple-100 to-teal-100 z-0"></div>
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`relative z-10 group ${isEven ? 'lg:pr-20' : 'lg:pl-20'}`}
                data-aos="fade-up"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                          <span className="text-white font-bold text-lg">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-800">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="w-full lg:w-1/2">
                    <div className={`relative ${isEven ? 'lg:left-10' : 'lg:right-10'}`}>
                      <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 text-white shadow-xl transform transition-all duration-500 group-hover:scale-105`}>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                            <IconComponent className="w-10 h-10" />
                          </div>
                          <h4 className="text-xl font-bold mb-3">{step.title} Phase</h4>
                          
                          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                            <div 
                              className="bg-white h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${(index + 1) * 25}%` }}
                            ></div>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Completion</span>
                              <span className="text-sm font-semibold">{step.duration}</span>
                            </div>
                            <div className="text-xs text-white/80">
                              {index === 0 && "Quick start to understand your needs"}
                              {index === 1 && "Detailed technical analysis"}
                              {index === 2 && "Custom solution design"}
                              {index === 3 && "Clear partnership terms"}
                            </div>
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

        {/* Key Benefits Section */}
        <div className="mt-24 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Our Consultation <span className="text-blue-600">Delivers Value</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-10 lg:p-12 text-white overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-white"></div>
            <div className="absolute bottom-10 -right-10 w-60 h-60 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Technology Strategy?
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-lg">
                Schedule your free initial consultation today and discover how our strategic approach can accelerate your digital transformation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Discovery Call
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ConsultationProcess;