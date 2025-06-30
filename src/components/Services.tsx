import React, { useState } from 'react';
import { Code, Smartphone, ShoppingCart, TrendingUp, Database, Palette, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: Globe,
      description: 'Scalable web applications built with modern frameworks and best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js'],
      outcomes: ['40% faster load times', '99.9% uptime', 'SEO optimized'],
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
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
      bgGradient: 'from-purple-50 to-purple-100',
      projects: '35+ Apps',
      avgTimeline: '4-8 months'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Team',
      icon: TrendingUp,
      description: 'A dedicated team of 4 experts to boost your brand: SEO, graphics, content, and video—everything you need for digital growth.',
      technologies: ['SEO Tools', 'Adobe Creative Suite', 'Content Management', 'Video Editing'],
      outcomes: [
        'Higher search rankings',
        'Engaging visuals',
        'Compelling content',
        'Professional video assets'
      ],
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-pink-100',
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
      bgGradient: 'from-cyan-50 to-cyan-100',
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
      bgGradient: 'from-green-50 to-green-100',
      projects: '40+ Stores',
      avgTimeline: '2-5 months'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Beautiful and intuitive user interfaces that enhance user experience and drive conversions.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      outcomes: ['60% better engagement', 'Improved usability', 'Brand consistency'],
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      projects: '80+ Designs',
      avgTimeline: '2-4 weeks'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full text-teal-600 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Services Ecosystem
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology services that transform your business vision into competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-teal-200 transition-all duration-500 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <span className="text-gray-500">{service.projects}</span>
                    <span className="text-gray-500">{service.avgTimeline}</span>
                  </div>

                  {/* Hover Content */}
                  <div className={`transition-all duration-500 ${
                    hoveredService === service.id 
                      ? 'opacity-100 max-h-96 transform translate-y-0' 
                      : 'opacity-0 max-h-0 transform translate-y-4 overflow-hidden'
                  }`}>
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/80 text-gray-600 text-xs rounded-md border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Typical Outcomes:</h4>
                      <ul className="space-y-1">
                        {service.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle size={14} className="mr-2 text-green-600" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>

                  {/* Default CTA (when not hovered) */}
                  <div className={`transition-all duration-500 ${
                    hoveredService === service.id 
                      ? 'opacity-0 max-h-0 overflow-hidden' :'opacity-100 max-h-96'
                  }`}>
                    <button className="w-full border border-gray-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                      Explore Service
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <IconComponent size={64} className="text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our expertise to your specific challenges and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center">
              <ArrowRight size={20} className="mr-2" />
              Schedule Consultation
            </button>
            <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
              <Code size={20} className="mr-2" />
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;