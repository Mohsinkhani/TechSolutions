import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
 import Image from '../../../components/ui/AppImage';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  project: string;
  results: {
    metric: string;
    value: string;
  }[];
  rating: number;
}

interface ClientLogo {
  name: string;
  logo: string;
}

interface Achievement {
  number: string;
  label: string;
  description: string;
  icon: string;
}

const SocialProof: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The team at Software Developers Pro transformed our outdated e-commerce platform into a modern, lightning-fast solution. Our conversion rates increased by 45% within the first month of launch.",
      author: "Sarah Mitchell",
      position: "CEO",
      company: "TechStyle Boutique",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      project: "E-commerce Platform Redesign",
      results: [
        { metric: "Conversion Rate", value: "+45%" },
        { metric: "Page Load Speed", value: "3x faster" },
        { metric: "Mobile Traffic", value: "+120%" }
      ],
      rating: 5
    },
    {
      id: 2,
      quote: "Working with this team was exceptional. They didn't just code our requirements - they understood our business goals and delivered a solution that exceeded our expectations. The scalability they built in has been crucial as we've grown 10x.",
      author: "Michael Chen",
      position: "CTO",
      company: "DataFlow Analytics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "SaaS Platform Development",
      results: [
        { metric: "User Growth", value: "10x scale" },
        { metric: "System Uptime", value: "99.9%" },
        { metric: "Response Time", value: "<200ms" }
      ],
      rating: 5
    },
    {
      id: 3,
      quote: "The financial dashboard they built for us has revolutionized how we handle client data. The real-time analytics and security features are exactly what we needed for our compliance requirements.",
      author: "Jennifer Rodriguez",
      position: "Head of Technology",
      company: "FinSecure Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "Financial Dashboard Application",
      results: [
        { metric: "Data Processing", value: "60% faster" },
        { metric: "Compliance Score", value: "100%" },
        { metric: "User Satisfaction", value: "4.9/5" }
      ],
      rating: 5
    },
    {
      id: 4,
      quote: "From concept to deployment, the entire process was seamless. Their agile approach kept us informed at every step, and the final product has become the cornerstone of our digital transformation.",
      author: "David Park",
      position: "VP of Digital Innovation",
      company: "RetailMax Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Digital Transformation Platform",
      results: [
        { metric: "Operational Efficiency", value: "+85%" },
        { metric: "Customer Engagement", value: "+150%" },
        { metric: "Cost Reduction", value: "40%" }
      ],
      rating: 5
    }
  ];

  const clientLogos: ClientLogo[] = [
    { name: "TechStyle Boutique", logo: "https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=TechStyle" },
    { name: "DataFlow Analytics", logo: "https://via.placeholder.com/120x60/10B981/FFFFFF?text=DataFlow" },
    { name: "FinSecure Solutions", logo: "https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=FinSecure" },
    { name: "RetailMax Corp", logo: "https://via.placeholder.com/120x60/D97706/FFFFFF?text=RetailMax" },
    { name: "CloudTech Systems", logo: "https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=CloudTech" },
    { name: "InnovateLab", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=InnovateLab" }
  ];

  const achievements: Achievement[] = [
    {
      number: "150+",
      label: "Projects Delivered",
      description: "Successful web applications across industries",
      icon: "CheckCircle"
    },
    {
      number: "98%",
      label: "Client Retention",
      description: "Long-term partnerships built on trust",
      icon: "Heart"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock monitoring and assistance",
      icon: "Clock"
    },
    {
      number: "5.0",
      label: "Average Rating",
      description: "Consistently excellent client feedback",
      icon: "Star"
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Users" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Client Success</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about the impact 
            our web development solutions have had on their businesses.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <p className="text-center text-text-secondary mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div>
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-text-primary mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{currentTestimonial.author}</div>
                  <div className="text-text-secondary">{currentTestimonial.position}</div>
                  <div className="text-primary font-medium">{currentTestimonial.company}</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium text-text-secondary mb-2">Project: {currentTestimonial.project}</div>
                <div className="grid grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary">{result.value}</div>
                      <div className="text-xs text-text-secondary">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-primary text-white' :'bg-white border border-border hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`font-medium ${activeTestimonial === index ? 'text-white' : 'text-text-primary'}`}>
                        {testimonial.author}
                      </div>
                      <div className={`text-sm ${activeTestimonial === index ? 'text-white/80' : 'text-text-secondary'}`}>
                        {testimonial.company}
                      </div>
                    </div>
                    {activeTestimonial === index && (
                      <Icon name="ChevronRight" size={16} color="white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <Icon name={achievement.icon} size={24} className="text-primary" /> */}
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">{achievement.number}</div>
              <div className="font-semibold text-text-primary mb-1">{achievement.label}</div>
              <div className="text-sm text-text-secondary">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Clients Choose Us</h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto">
            Our commitment to excellence, transparency, and results has earned us the trust 
            of businesses from startups to Fortune 500 companies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Award" size={24} color="white" />
              <div>
                <div className="font-semibold">Industry Recognition</div>
                <div className="text-sm text-white/80">Top-rated development partner</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" size={24} color="white" />
              <div>
                <div className="font-semibold">Security First</div>
                <div className="text-sm text-white/80">Enterprise-grade protection</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Icon name="Handshake" size={24} color="white" />
              <div>
                <div className="font-semibold">Long-term Partnership</div>
                <div className="text-sm text-white/80">Ongoing support & growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;