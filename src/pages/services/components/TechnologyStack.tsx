import React, { useState, useEffect } from 'react';

type CategoryKey = 'frontend' | 'backend' | 'database';

interface TechnologyStack {
  name: string;
  description: string;
  level: string;
}

interface CategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  technologies: TechnologyStack[];
}

const technologyData: Record<CategoryKey, CategoryData> = {
  frontend: {
    title: 'Frontend Excellence',
    description: 'Modern, responsive user interfaces for seamless experiences across all devices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    color: 'text-pink-500',
    bgColor: 'from-pink-500 via-red-500 to-yellow-500',
    technologies: [
      { name: 'React', description: 'Component-based UI library for dynamic, interactive apps.', level: 'Expert' },
      { name: 'Next.js', description: 'SSR React framework for SEO-friendly, fast sites.', level: 'Expert' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS for rapid, consistent styling.', level: 'Expert' },
      { name: 'TypeScript', description: 'Typed JavaScript for robust, maintainable code.', level: 'Advanced' }
    ]
  },
  backend: {
    title: 'Backend Power',
    description: 'Scalable, secure server-side logic and APIs for any business need.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <circle cx="12" cy="10" r="1"></circle>
        <path d="M12 14v4"></path>
      </svg>
    ),
    color: 'text-indigo-500',
    bgColor: 'from-indigo-500 via-purple-500 to-pink-500',
    technologies: [
      { name: 'Node.js', description: 'Event-driven runtime for fast, scalable servers.', level: 'Expert' },
      { name: 'Express', description: 'Minimal web framework for RESTful APIs.', level: 'Expert' },
      { name: 'GraphQL', description: 'Flexible API query language for efficient data.', level: 'Advanced' },
      { name: 'REST APIs', description: 'Standard API interfaces for easy integration.', level: 'Expert' }
    ]
  },
  database: {
    title: 'Database Layer',
    description: 'Efficient, secure data storage and management for every scale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    color: 'text-emerald-500',
    bgColor: 'from-green-400 via-blue-500 to-purple-600',
    technologies: [
      { name: 'PostgreSQL', description: 'Advanced relational DBMS for complex data.', level: 'Expert' },
      { name: 'MongoDB', description: 'Flexible NoSQL document database.', level: 'Expert' },
      { name: 'Firebase', description: 'Realtime database and hosting for modern apps.', level: 'Advanced' }
    ]
  }
};

function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency with sub-second response times.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="13 3 13 10 19 10"></polyline>
          <polyline points="19 17 13 17 13 21"></polyline>
          <polyline points="11 21 11 17 5 17"></polyline>
          <polyline points="5 14 11 14 11 3"></polyline>
        </svg>
      ),
      color: 'bg-yellow-500/20 text-yellow-400'
    },
    {
      title: 'Scalability',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      color: 'bg-pink-500/20 text-pink-400'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with industry best practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      color: 'bg-green-500/20 text-green-400'
    },
    {
      title: 'Maintainability',
      description: 'Clean, documented code that\'s easy to update and extend.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      color: 'bg-blue-500/20 text-blue-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-[50%] h-[50%] bg-gradient-to-r from-yellow-500/5 to-red-500/5 blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-800/50 backdrop-blur border border-gray-700 text-gray-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Tools We Master
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We build scalable, high-performance solutions using modern and reliable technologies
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologyData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as CategoryKey)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group
                ${key === activeCategory 
                  ? `bg-gradient-to-r ${category.bgColor} text-white shadow-lg scale-[1.02] shadow-purple-500/20` 
                  : 'bg-gray-800/50 backdrop-blur border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'}`}
            >
              <div className={`p-2 rounded-lg ${key === activeCategory ? 'bg-white/10' : 'bg-gray-700/50 group-hover:bg-gray-600/50'}`}>
                {category.icon}
              </div>
              {category.title}
            </button>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologyData[activeCategory].technologies.map((tech, idx) => (
            <div 
              key={idx}
              className={`bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDelay: `${idx * 100}ms`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  tech.level === 'Expert' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {tech.level}
                </span>
              </div>
              <p className="text-gray-300 mb-5">{tech.description}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    tech.level === 'Expert' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: tech.level === 'Expert' ? '90%' : '75%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Our Stack?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our technology choices are driven by performance, scalability, and long-term maintainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/40 backdrop-blur rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:bg-gray-700/30 hover:border-gray-600"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-5`}>
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 text-lg">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-3xl -z-10"></div>
      </div>
    </section>
  );
}

export default TechnologyStack;