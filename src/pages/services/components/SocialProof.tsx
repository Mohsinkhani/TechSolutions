import React, { useState, useEffect, useRef } from 'react';
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
  const [autoPlay, setAutoPlay] = useState(true);
  const testimonialRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Software Developers Pro transformed our outdated e-commerce platform into a modern solution. Conversion rates increased by 45% within the first month.",
      author: "Sarah Mitchell",
      position: "CEO",
      company: "TechStyle Boutique",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      project: "E-commerce Platform Redesign",
      results: [
        { metric: "Conversion", value: "+45%" },
        { metric: "Page Speed", value: "3x faster" },
        { metric: "Mobile Traffic", value: "+120%" }
      ],
      rating: 5
    },
    {
      id: 2,
      quote: "They didn't just code requirements - they understood our business goals. The scalability they built has been crucial as we've grown 10x.",
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
      quote: "The financial dashboard they built revolutionized how we handle client data. Real-time analytics and security features exceeded our compliance requirements.",
      author: "Jennifer Rodriguez",
      position: "Head of Technology",
      company: "FinSecure Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      project: "Financial Dashboard Application",
      results: [
        { metric: "Processing", value: "60% faster" },
        { metric: "Compliance", value: "100%" },
        { metric: "User Satisfaction", value: "4.9/5" }
      ],
      rating: 5
    },
    {
      id: 4,
      quote: "From concept to deployment, the entire process was seamless. The final product has become the cornerstone of our digital transformation.",
      author: "David Park",
      position: "VP of Digital Innovation",
      company: "RetailMax Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Digital Transformation Platform",
      results: [
        { metric: "Efficiency", value: "+85%" },
        { metric: "Engagement", value: "+150%" },
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
    { name: "InnovateLab", logo: "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=InnovateLab" },
    { name: "Nexus Ventures", logo: "https://via.placeholder.com/120x60/8B5CF6/FFFFFF?text=Nexus" },
    { name: "Quantum Industries", logo: "https://via.placeholder.com/120x60/0EA5E9/FFFFFF?text=Quantum" }
  ];

  const achievements: Achievement[] = [
    {
      number: "150+",
      label: "Projects Delivered",
      description: "Successful applications across industries",
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
      label: "Global Support",
      description: "Round-the-clock assistance",
      icon: "Clock"
    },
    {
      number: "5.0",
      label: "Avg. Rating",
      description: "Consistent excellence in feedback",
      icon: "Star"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (autoPlay) {
      testimonialRef.current = setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 7000);
    }
    
    return () => {
      if (testimonialRef.current) {
        clearTimeout(testimonialRef.current);
      }
    };
  }, [activeTestimonial, autoPlay, testimonials.length]);

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 15000);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-4">
            <Icon name="ThumbsUp" size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">Proven Results</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500+ companies accelerating growth with our development expertise
          </p>
        </div>

        {/* Client Logos Marquee */}
        <div className="mb-20">
          <div 
            ref={logoContainerRef}
            className="flex space-x-10 overflow-hidden py-5 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10"
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="md:flex">
              {/* Testimonial Content */}
              <div className="md:w-7/12 p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {currentTestimonial.rating}.0 Rating
                  </span>
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{currentTestimonial.author}</div>
                    <div className="text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="text-sm font-semibold text-gray-500 mb-3">PROJECT HIGHLIGHTS: {currentTestimonial.project}</div>
                  <div className="grid grid-cols-3 gap-4">
                    {currentTestimonial.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="md:w-5/12 p-8 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-6">More Success Stories</h3>
                
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => handleTestimonialChange(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                        activeTestimonial === index
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-gray-200 hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`font-semibold truncate ${activeTestimonial === index ? 'text-primary' : 'text-gray-900'}`}>
                            {testimonial.author}
                          </div>
                          <div className={`text-sm truncate ${activeTestimonial === index ? 'text-primary' : 'text-gray-600'}`}>
                            {testimonial.company}
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTestimonialChange(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === index ? 'bg-primary w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
              <div className="font-bold text-gray-900 mb-1">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-5/12 p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Why Industry Leaders Choose Us
              </h3>
              <p className="text-white/90 mb-6">
                Our commitment to excellence, transparency, and measurable results has earned us partnerships with innovative companies worldwide.
              </p>
              <button className="bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
            </div>
            
            <div className="md:w-7/12 p-8 lg:p-12 bg-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" size={24} color="white" />
                    <div>
                      <div className="font-semibold text-white">Industry Recognition</div>
                      <div className="text-sm text-white/80">Top-rated development partner 2023</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="ShieldCheck" size={24} color="white" />
                    <div>
                      <div className="font-semibold text-white">Enterprise Security</div>
                      <div className="text-sm text-white/80">Military-grade data protection</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="Rocket" size={24} color="white" />
                    <div>
                      <div className="font-semibold text-white">Rapid Deployment</div>
                      <div className="text-sm text-white/80">30% faster project delivery</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="BarChart" size={24} color="white" />
                    <div>
                      <div className="font-semibold text-white">Proven ROI</div>
                      <div className="text-sm text-white/80">Average 4x return on investment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;