import React, { useState } from 'react';
import { Code, Smartphone, ShoppingCart, TrendingUp, Database, Palette, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServicesProps {
  onNavigateToConsultation: () => void;
  onNavigateToPortfolio?: () => void;
  onNavigateToContact?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigateToConsultation, onNavigateToPortfolio, onNavigateToContact }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleLearnMore = () => {
    onNavigateToConsultation();
    setTimeout(() => {
      const formSection = document.getElementById('sectionform');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  const handleViewPortfolio = () => {
    if (onNavigateToPortfolio) {
      onNavigateToPortfolio();
    }
  };

  const handleGetQuote = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    }
  };
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      description: 'Scalable web applications built with modern frameworks and best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js'],
      outcomes: ['40% faster load times', '99.9% uptime', 'SEO optimized'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50/80 to-blue-100/80',
      projects: '50+ Projects',
      avgTimeline: '3-6 months'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      icon: Smartphone,
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      technologies: ['Flutter', 'React Native', 'Kotlin'],
      outcomes: ['4.8+ App Store rating', 'Cross-platform compatibility', 'Offline functionality'],
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50/80 to-purple-100/80',
      projects: '35+ Apps',
      avgTimeline: '4-8 months'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: TrendingUp,
      description: 'A dedicated team of experts to boost your brand with SEO, graphics, content, and video production.',
      technologies: ['SEO Tools', 'Adobe Creative Suite', 'Content Management', 'Video Editing'],
      outcomes: ['Higher search rankings', 'Engaging visuals', 'Compelling content', 'Professional videos'],
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50/80 to-pink-100/80',
      projects: '30+ Campaigns',
      avgTimeline: '1-3 months'
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture',
      icon: Database,
      description: 'Scalable cloud infrastructure with automated deployment and monitoring.',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform'],
      outcomes: ['50% cost reduction', 'Auto-scaling', '24/7 monitoring'],
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50/80 to-cyan-100/80',
      projects: '70+ Deployments',
      avgTimeline: '1-3 months'
    },
    {
      id: 'ecommerce-development',
      title: 'E-commerce Development',
      icon: ShoppingCart,
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      technologies: ['Shopify Plus', 'WooCommerce', 'Magento', 'Custom Solutions'],
      outcomes: ['300% sales increase', 'Secure payments', 'Mobile optimized'],
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50/80 to-green-100/80',
      projects: '40+ Stores',
      avgTimeline: '2-5 months'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Beautiful and intuitive user interfaces that enhance experience and drive conversions.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      outcomes: ['60% better engagement', 'Improved usability', 'Brand consistency'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50/80 to-orange-100/80',
      projects: '80+ Designs',
      avgTimeline: '2-4 weeks'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating particles/animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-[90px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-[70px] opacity-10 animate-blob animation-delay-6000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-400" />
          </svg>
        </div>
        
        {/* Subtle animated lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-line-x"></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-line-x animation-delay-3000"></div>
          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-line-x animation-delay-6000"></div>
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-line-y"></div>
          <div className="absolute left-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-line-y animation-delay-2000"></div>
          <div className="absolute left-2/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-line-y animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full text-teal-600 text-sm font-medium mb-6 shadow-sm">
            <Zap size={16} className="mr-2" />
            Our Services Ecosystem
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Digital Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft technology solutions that drive growth, enhance efficiency, and create exceptional digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-transparent transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm`}></div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-500 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-5 text-sm text-gray-500">
                    <span>{service.projects}</span>
                    <span>{service.avgTimeline}</span>
                  </div>

                  {/* Hover Content */}
                  <div className={`transition-all duration-500 ${
                    hoveredService === service.id 
                      ? 'opacity-100 max-h-96 transform translate-y-0' 
                      : 'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'
                  }`}>
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-white/90 text-gray-600 text-xs rounded-full border border-gray-200 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle size={14} className="mt-0.5 mr-2 flex-shrink-0 text-teal-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={handleLearnMore}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>

                  {/* Default CTA (when not hovered) */}
                  <div className={`transition-all duration-500 ${
                    hoveredService === service.id 
                      ? 'opacity-0 max-h-0 overflow-hidden' 
                      : 'opacity-100 max-h-96'
                  }`}>
                    <button 
                      onClick={handleLearnMore}
                      className="w-full border border-gray-300 hover:border-transparent bg-white/80 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-teal-500/10 text-gray-700 hover:text-gray-900 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                    >
                      Explore Service
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${service.gradient.replace('to', 'from')} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 shadow-sm relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-blue-50/30 opacity-60"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's collaborate to build a custom solution tailored to your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleLearnMore}
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ArrowRight size={20} className="mr-2" />
                Schedule Consultation
              </button>
              <button 
                onClick={handleViewPortfolio}
                className="border-2 border-gray-300 hover:border-blue-500 bg-white/80 hover:bg-blue-50/50 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              >
                View Portfolio
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes line-x {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes line-y {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-blob {
          animation: blob 12s infinite ease-in-out;
        }
        .animate-line-x {
          animation: line-x 15s infinite linear;
        }
        .animate-line-y {
          animation: line-y 15s infinite linear;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default Services;