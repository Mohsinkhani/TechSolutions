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
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterButtons = [
    'All Projects',
    'Web Designs',
    'Ecommerce Development', 
    'Digital Marketing',
    'Apps / Softwares'
  ];

  const projects: Project[] = [
    {
      id: 'ziina',
      name: 'Exchange App',
      description: "c-Exchange.com is Africa's secure, leading blockchain platform. Our app lets you easily buy, sell, store, and use crypto for payments and shopping. Get great rates, fast service, and earn by referring friends. Support: support@c-exchange.com.",
      category: 'Apps / Softwares',
      tech: 'React',
      url: 'https://play.google.com/store/apps/details?id=com.cexchange.app&hl=en&gl=us',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-teal-500 to-teal-600',
      mockupBg: 'from-orange-400 to-pink-500',
      mockupContent: {
        title: 'Move your money forward',
        subtitle: "Exchange.com:top blockchain platform for secure crypto trading, storage, and payments. Easy app, great rates, refer and earn.",
        buttonText: 'Get Started for free'
      },
      client: 'Exchnage Financial Services',
      year: '2024',
      results: ['100K+ active users', '99.9% uptime', '4.8 app store rating']
    },
    {
      id: 'E-Commerce Store',
      name: 'Mobile Palace',
      description: 'Online Mobile market place for mobile sales and purchase. An e Commerce website.',
      category: 'Ecommerce Development',
      tech: 'React',
      url: 'https://mobilepalace.com.pk/',
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: 'from-purple-500 to-purple-600',
      mockupBg: 'from-purple-400 to-indigo-500',
      mockupContent: {
        title: 'Luxury Fashion Redefined',
        subtitle: 'Online Mobile market place for mobile sales and purchase. An e Commerce website.',
        buttonText: 'Shop Collection'
      },
      client: 'Mobile Palace Group',
      year: '2024',
      results: ['300% increase in sales', '50% higher conversion rate', '200% mobile traffic growth']
    },
    {
      id: 'portfolio-site',
      name: 'Awami Laboratories',
      description: 'A herbal pharmaceutical company. \nInfographic + e commerce',
      category: 'Web Designs',
      tech: 'React.ts',
      url: 'http://awami.com/',
      icon: <Palette className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-emerald-600',
      mockupBg: 'from-emerald-400 to-teal-500',
      mockupContent: {
        title: 'Creative Excellence',
        subtitle: 'A herbal pharmaceutical company. \nInfographic + e commerce',
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
    },
    {
      id: 'restaurant-app',
      name: 'FOODIE DELIVERY',
      description: 'Mobile-first food delivery application with real-time tracking, multiple payment options, and restaurant management.',
      category: 'Apps / Softwares',
      tech: 'React Native',
      url: 'https://foodiedelivery.com/',
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-red-500 to-red-600',
      mockupBg: 'from-red-400 to-orange-500',
      mockupContent: {
        title: 'Food at Your Doorstep',
        subtitle: 'Order from your favorite restaurants with lightning-fast delivery and live tracking.',
        buttonText: 'Order Now'
      },
      client: 'Foodie Delivery Co.',
      year: '2023',
      results: ['50K+ downloads', '4.7 app rating', '30min avg delivery time']
    },
    {
      id: 'saas-platform',
      name: 'WORKFLOW MASTER',
      description: 'Enterprise SaaS platform for project management and team collaboration with advanced automation features.',
      category: 'Apps / Softwares',
      tech: 'Angular',
      url: 'https://workflowmaster.com/',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-indigo-600',
      mockupBg: 'from-indigo-400 to-purple-500',
      mockupContent: {
        title: 'Streamline Your Workflow',
        subtitle: 'Boost team productivity with intelligent project management and automated task distribution.',
        buttonText: 'Get Started'
      },
      client: 'Workflow Solutions Ltd.',
      year: '2023',
      results: ['60% productivity increase', '10K+ active teams', '99.5% customer retention']
    },
    {
      id: 'ecommerce-marketplace',
      name: 'GLOBAL MARKETPLACE',
      description: 'Multi-vendor e-commerce marketplace connecting buyers and sellers worldwide with secure payment processing.',
      category: 'Ecommerce Development',
      tech: 'WooCommerce',
      url: 'https://globalmarketplace.com/',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-orange-500 to-orange-600',
      mockupBg: 'from-orange-400 to-red-500',
      mockupContent: {
        title: 'Shop the World',
        subtitle: 'Connect with sellers globally and discover unique products from every corner of the world.',
        buttonText: 'Explore Market'
      },
      client: 'Global Trade Corp.',
      year: '2023',
      results: ['1000+ vendors', '$5M+ transactions', '150+ countries served']
    },
    {
      id: 'corporate-website',
      name: 'TECH INNOVATIONS',
      description: 'Corporate website for technology company featuring modern design, interactive elements, and comprehensive service showcase.',
      category: 'Web Designs',
      tech: 'WordPress',
      url: 'https://techinnovations.com/',
      icon: <Monitor className="w-8 h-8" />,
      gradient: 'from-gray-700 to-gray-800',
      mockupBg: 'from-gray-600 to-slate-700',
      mockupContent: {
        title: 'Innovation Starts Here',
        subtitle: 'Leading technology solutions for enterprise clients with cutting-edge development expertise.',
        buttonText: 'Learn More'
      },
      client: 'Tech Innovations Inc.',
      year: '2023',
      results: ['200% lead generation', '75% bounce rate reduction', '300% page views increase']
    },
    {
      id: 'social-campaign',
      name: 'VIRAL BOOST',
      description: 'Social media marketing campaign management platform with content scheduling, analytics, and influencer collaboration.',
      category: 'Digital Marketing',
      tech: 'Laravel',
      url: 'https://viralboost.com/',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-pink-500 to-pink-600',
      mockupBg: 'from-pink-400 to-rose-500',
      mockupContent: {
        title: 'Go Viral Today',
        subtitle: 'Amplify your brand reach with strategic social media campaigns and influencer partnerships.',
        buttonText: 'Boost Now'
      },
      client: 'Viral Marketing Agency',
      year: '2023',
      results: ['10M+ impressions', '500% engagement increase', '1000+ influencer partnerships']
    },
    {
      id: 'fintech-app',
      name: 'CRYPTO WALLET',
      description: 'Secure cryptocurrency wallet application with multi-currency support, trading features, and portfolio tracking.',
      category: 'Apps / Softwares',
      tech: 'Flutter',
      url: 'https://cryptowallet.com/',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-yellow-600',
      mockupBg: 'from-yellow-400 to-orange-500',
      mockupContent: {
        title: 'Secure Crypto Trading',
        subtitle: 'Trade, store, and manage your cryptocurrency portfolio with bank-level security.',
        buttonText: 'Download App'
      },
      client: 'CryptoSecure Ltd.',
      year: '2024',
      results: ['500K+ users', '$100M+ transactions', 'Bank-level security']
    },
    {
      id: 'healthcare-platform',
      name: 'MEDCARE CONNECT',
      description: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
      category: 'Web Designs',
      tech: 'React',
      url: 'https://medcareconnect.com/',
      icon: <Monitor className="w-8 h-8" />,
      gradient: 'from-green-500 to-green-600',
      mockupBg: 'from-green-400 to-teal-500',
      mockupContent: {
        title: 'Healthcare at Home',
        subtitle: 'Connect with certified doctors from the comfort of your home with secure video consultations.',
        buttonText: 'Book Consultation'
      },
      client: 'MedCare Health Services',
      year: '2024',
      results: ['50K+ consultations', '98% patient satisfaction', '24/7 availability']
    },
    {
      id: 'education-platform',
      name: 'LEARN ONLINE',
      description: 'Comprehensive online learning platform with interactive courses, progress tracking, and certification programs.',
      category: 'Web Designs',
      tech: 'Django',
      url: 'https://learnonline.com/',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-blue-600',
      mockupBg: 'from-blue-400 to-indigo-500',
      mockupContent: {
        title: 'Learn Anything, Anywhere',
        subtitle: 'Master new skills with our comprehensive online courses and expert instructors.',
        buttonText: 'Start Learning'
      },
      client: 'EduTech Solutions',
      year: '2024',
      results: ['100K+ students', '500+ courses', '95% completion rate']
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full animate-pulse delay-600"></div>
          <div className="absolute top-80 right-60 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-800"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Portfolio
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
              Software Pro is digitalizing the organizational operations with complete Digital Transformation Services and helping to grow 
              businesses online with top of the line digital marketing strategies and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  activeFilter === filter 
                    ? 'bg-teal-500 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border border-gray-200'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-teal-600">{filteredProjects.length}</span> projects
              {activeFilter !== 'All Projects' && (
                <span> in <span className="font-semibold">{activeFilter}</span></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
                {/* Project Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <p className="text-white text-opacity-80">{project.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white text-opacity-80">Year</div>
                      <div className="font-semibold">{project.year}</div>
                    </div>
                  </div>
                  
                  <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-white text-opacity-70" />
                      <span className="font-medium">{project.tech}</span>
                    </div>
                    <div className="text-xs text-white text-opacity-70 uppercase tracking-wide">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Visual */}
                <div className="p-8">
                  {/* Desktop Mockup */}
                  <div className="bg-gray-900 rounded-lg p-3 shadow-2xl mb-6">
                    <div className="bg-gray-800 rounded-md h-48 flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-4 bg-gradient-to-br ${project.mockupBg} rounded opacity-90`}></div>
                      <div className="absolute inset-6 bg-black bg-opacity-30 rounded flex items-center justify-center">
                        <div className="text-white text-center px-4">
                          <h4 className="text-xl font-bold mb-2">{project.mockupContent.title}</h4>
                          <p className="text-sm opacity-80 mb-4">{project.mockupContent.subtitle}</p>
                          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full text-sm transition-colors">
                            {project.mockupContent.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Results */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                      View Project
                    </button>
                    <button className="flex-1 border-2 border-gray-200 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                      Live Demo
                    </button>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Join our portfolio of successful projects. Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;