import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Star, Globe, Smartphone, ShoppingCart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioShowcaseProps {
  onNavigateToConsultation: () => void;
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onNavigateToConsultation }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const featuredProjects = [
    {
      id: 'exchange-app',
      title: 'Exchange App',
      category: 'Mobile App',
      description: "Africa's leading blockchain platform for secure crypto trading with 100K+ active users",
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&h=600&fit=crop',
      results: ['100K+ Users', '99.9% Uptime', '4.8★ Rating'],
      tech: ['React Native', 'Node.js', 'Blockchain'],
      url: 'https://play.google.com/store/apps/details?id=com.cexchange.app',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'mobile-palace',
      title: 'Mobile Palace',
      category: 'E-commerce',
      description: 'Complete e-commerce solution with 300% sales increase and mobile optimization',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=800&h=600&fit=crop',
      results: ['300% Sales ↑', '50% Conversion ↑', '200% Mobile Traffic'],
      tech: ['React', 'Node.js', 'MongoDB'],
      url: 'https://mobilepalace.com.pk/',
      icon: <ShoppingCart className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'awami-labs',
      title: 'Awami Laboratories',
      category: 'Healthcare',
      description: 'Medical laboratory platform with appointment booking and patient portal',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=600&fit=crop',
      results: ['150% More Leads', '40% Longer Visits', '90% Satisfaction'],
      tech: ['React', 'TypeScript', 'Tailwind'],
      url: 'http://mkportfoli.netlify.app/',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Pro',
      category: 'SaaS Platform',
      description: 'Data analytics platform processing 10M+ data points daily with real-time insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop',
      results: ['10M+ Data Points', '500% ROI', '99.9% Uptime'],
      tech: ['Vue.js', 'Node.js', 'MongoDB'],
      url: '#',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium text-teal-600">Featured Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Projects That <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Drive Results</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how we've helped businesses like yours achieve remarkable growth through innovative digital solutions
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2`}>
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* View Project Button */}
                <div className="absolute top-4 right-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{result}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  animate={{
                    x: hoveredProject === project.id ? 5 : 0
                  }}
                  className="flex items-center text-teal-600 font-medium cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <span>View Live Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution that drives similar results for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onNavigateToConsultation}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Quote
            </button>
            <button
              onClick={() => window.location.href = '/portfolio'}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;