import React from 'react';
import { Star, MessageCircle, CheckCircle, Briefcase, ArrowRight, Award, Clock, Info, TrendingUp, Target, Check } from 'lucide-react';

const ConsultationTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammed Ayub",
      role: "Founder & CEO",
      company: "Saudi Project Support",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `The strategic consultation completely transformed our approach to digital transformation. Instead of jumping into development, we gained clarity on our technology roadmap and made informed decisions that saved us months of development time and significant budget.`,
      metrics: {
        clarity: "95%",
        timelineSaved: "4 months",
        budgetOptimized: "60%"
      },
      projectType: "Enterprise Platform",
      consultationOutcome: "Proceeded to full development"
    },
    {
      id: 2,
      name: "Sultan Zeb",
      role: "Senior HR Manager",
      company: "Danah Real Estate",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `As a non-technical founder, I was overwhelmed by technology decisions. The consultation process broke down complex technical concepts into business terms I could understand. The strategic recommendations gave me confidence to move forward with the right technology stack.`,
      metrics: {
        clarity: "100%",
        timelineSaved: "2 months",
        budgetOptimized: "25%"
      },
      projectType: "Healthcare MVP",
      consultationOutcome: "Strategic partnership established"
    },
    {
      id: 3,
      name: "Muhammed Fatima",
      role: "Senior supervisor",
      company: "Shifa Medical Services",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `The technical assessment revealed critical scalability issues we hadn't considered. The consultation team provided a comprehensive architecture review and helped us prioritize features based on user impact and technical complexity. Invaluable strategic guidance.`,
      metrics: {
        clarity: "90%",
        timelineSaved: "6 months",
        budgetOptimized: "50%"
      },
      projectType: "EdTech Platform",
      consultationOutcome: "Architecture redesign completed"
    },
    {
      id: 4,
      name: "Wajid Ali Khan",
      role: "Project Manager",
      company: "RetailTech Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Even as a technical leader, the consultation provided fresh perspectives on our integration challenges. The team's expertise in enterprise systems helped us identify the optimal approach for connecting our legacy systems with modern cloud infrastructure.`,
      metrics: {
        clarity: "85%",
        timelineSaved: "3 months",
        budgetOptimized: "30%"
      },
      projectType: "System Integration",
      consultationOutcome: "Implementation roadmap delivered"
    }
  ];

  const consultationStats = [
    {
      metric: "98%",
      label: "Client Satisfaction",
      description: "Consultation quality rating",
      icon: Star
    },
    {
      metric: "87%",
      label: "Proceed Rate",
      description: "Clients who move to implementation",
      icon: TrendingUp
    },
    {
      metric: "45%",
      label: "Average Savings",
      description: "Time and budget optimization",
      icon: Target
    },
    {
      metric: "72hrs",
      label: "Response Time",
      description: "Strategic recommendations delivery",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <MessageCircle size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Strategic Value Delivered</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Consultation Success Stories
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover how our strategic consultation process has helped leaders make informed technology decisions and accelerate their digital transformation initiatives.
          </p>
        </div>

        {/* Consultation Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {consultationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-blue-600 font-medium text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-green-600">{testimonial.metrics.clarity}</div>
                  <div className="text-xs text-gray-600">Clarity Gained</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-blue-600">{testimonial.metrics.timelineSaved}</div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="text-xl font-bold text-green-600">{testimonial.metrics.budgetOptimized}</div>
                  <div className="text-xs text-gray-600">Budget Optimized</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Briefcase size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{testimonial.projectType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowRight size={14} className="text-green-600" />
                  <span className="text-sm text-green-600 font-medium">{testimonial.consultationOutcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Strategic Consultation Value
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Clarity & Confidence",
                    description: "Transform technical uncertainty into strategic clarity with actionable recommendations."
                  },
                  {
                    title: "Risk Mitigation",
                    description: "Identify potential challenges early and develop mitigation strategies before development begins."
                  },
                  {
                    title: "Optimized Investment",
                    description: "Make informed decisions that maximize ROI and minimize unnecessary development costs."
                  },
                  {
                    title: "Accelerated Timeline",
                    description: "Proper planning and architecture decisions significantly reduce overall project duration."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col items-center space-y-4 bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Strategic Value Delivered</div>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  Every consultation provides actionable insights and strategic recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTestimonials;