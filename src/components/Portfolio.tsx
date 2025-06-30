import React, { useState } from 'react';
import { Zap, Globe, Smartphone, ShoppingCart, TrendingUp, Code, Palette, Database, Monitor, Filter } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  tech: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
  mockupBg: string;
  mockupContent: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  client: string;
  year: string;
  results: string[];
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Apps / Softwares');

  const filterButtons = [
    'Web Designs',
    'Ecommerce Development', 
    'Digital Marketing',
    'Apps / Softwares'
  ];

  const projects: Project[] = [
    {
      id: 'ziina',
      name: 'ZIINA',
      description: 'For businesses and individuals the fast and secure way to send and receive money in the UAE.',
      category: 'Apps / Softwares',
      tech: 'React',
      url: 'https://ziina.com/',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-teal-500 to-teal-600',
      mockupBg: 'from-orange-400 to-pink-500',
      mockupContent: {
        title: 'Move your money forward',
        subtitle: 'For businesses and individuals - the fast and secure way to send and receive money in the UAE.',
        buttonText: 'Get Started for free'
      },
      client: 'Ziina Financial Services',
      year: '2024',
      results: ['100K+ active users', '99.9% uptime', '4.8 app store rating']
    },
    {
      id: 'shopify-store',
      name: 'LUXE FASHION',
      description: 'Premium e-commerce platform for luxury fashion brands with advanced inventory management and seamless checkout experience.',
      category: 'Ecommerce Development',
      tech: 'Shopify Plus',
      url: 'https://luxefashion.com/',
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: 'from-purple-500 to-purple-600',
      mockupBg: 'from-purple-400 to-indigo-500',
      mockupContent: {
        title: 'Luxury Fashion Redefined',
        subtitle: 'Discover premium collections from world-renowned designers with exclusive member benefits.',
        buttonText: 'Shop Collection'
      },
      client: 'Luxe Fashion Group',
      year: '2024',
      results: ['300% increase in sales', '50% higher conversion rate', '200% mobile traffic growth']
    },
    {
      id: 'portfolio-site',
      name: 'CREATIVE STUDIO',
      description: 'Modern portfolio website for creative agency showcasing stunning visual designs and interactive user experiences.',
      category: 'Web Designs',
      tech: 'Next.js',
      url: 'https://creativestudio.com/',
      icon: <Palette className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-emerald-600',
      mockupBg: 'from-emerald-400 to-teal-500',
      mockupContent: {
        title: 'Creative Excellence',
        subtitle: 'Award-winning design studio creating memorable brand experiences and digital solutions.',
        buttonText: 'View Portfolio'
      },
      client: 'Creative Studio Agency',
      year: '2024',
      results: ['150% more leads', '40% longer session duration', '90% client satisfaction']
    },
    {
      id: 'marketing-dashboard',
      name: 'ANALYTICS PRO',
      description: 'Comprehensive digital marketing dashboard with real-time analytics, campaign management, and ROI tracking.',
      category: 'Digital Marketing',
      tech: 'Vue.js',
      url: 'https://analyticspro.com/',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-blue-500 to-blue-600',
      mockupBg: 'from-blue-400 to-cyan-500',
      mockupContent: {
        title: 'Data-Driven Marketing',
        subtitle: 'Transform your marketing strategy with powerful analytics and automated campaign optimization.',
        buttonText: 'Start Free Trial'
      },
      client: 'Analytics Pro Inc.',
      year: '2024',
      results: ['500% ROI improvement', '80% time savings', '95% accuracy in predictions']
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            TechSolutions is digitalizing the organizational operations with complete Digital Transformation Services and helping to grow 
            businesses online with top of the line digital marketing strategies and implementation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-teal-500 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-teal-600">{filteredProjects.length}</span> projects in <span className="font-semibold">{activeFilter}</span>
          </p>
        </div>

        {/* Portfolio Showcase */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Project Details */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                      {project.icon}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">TECHSOLUTIONS</div>
                  </div>

                  {/* Device Mockups */}
                  <div className="relative">
                    {/* Desktop Mockup */}
                    <div className="bg-gray-900 rounded-lg p-2 shadow-2xl mb-4">
                      <div className="bg-gray-800 rounded-md h-48 flex items-center justify-center relative overflow-hidden">
                        <div className={`absolute inset-4 bg-gradient-to-br ${project.mockupBg} rounded opacity-80`}></div>
                        <div className="absolute inset-6 bg-black bg-opacity-40 rounded flex items-center justify-center">
                          <div className="text-white text-center px-4">
                            <h3 className="text-2xl font-bold mb-2">{project.mockupContent.title}</h3>
                            <p className="text-sm opacity-80 mb-4">{project.mockupContent.subtitle}</p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm transition-colors">
                              {project.mockupContent.buttonText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Mockup */}
                    <div className="absolute -bottom-6 -right-4 w-24 h-48 bg-gray-900 rounded-xl p-1 shadow-2xl">
                      <div className={`bg-gradient-to-br ${project.mockupBg} rounded-lg h-full flex items-center justify-center`}>
                        <div className="text-white text-center px-2">
                          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 text-white">
                              {React.cloneElement(project.icon as React.ReactElement, { className: 'w-4 h-4' })}
                            </div>
                          </div>
                          <div className="text-xs font-medium">{project.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Project Info */}
                <div className={`bg-gradient-to-br ${project.gradient} p-12 flex flex-col justify-center text-white`}>
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      {React.cloneElement(project.icon as React.ReactElement, { className: 'w-8 h-8 mr-3' })}
                      <h2 className="text-3xl font-bold">{project.name}</h2>
                    </div>
                    
                    <p className="text-white text-opacity-90 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Code className="w-5 h-5 mr-3 text-white text-opacity-70" />
                        <span className="text-xl font-semibold">{project.tech}</span>
                      </div>
                      
                      <div>
                        <div className="text-white text-opacity-70 text-sm mb-1">Website URL</div>
                        <a href={project.url} className="text-white hover:text-opacity-80 transition-colors underline">
                          {project.url}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                      View Project
                    </button>
                    <button className="border-2 border-white border-opacity-30 hover:border-opacity-50 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Projects Found</h3>
            <p className="text-gray-500">No projects available in the {activeFilter} category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;