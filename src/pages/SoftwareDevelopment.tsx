import React, { useState } from 'react';
import { Code, Smartphone, Database, Cloud, Globe, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SoftwareDevelopment = () => {
  const [activeService, setActiveService] = useState('web-development');

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Custom web applications built with modern technologies',
      longDescription: 'We create powerful, scalable web applications using cutting-edge technologies like React, Angular, Vue.js, Node.js, and Python. Our web development services focus on creating responsive, fast-loading, and SEO-optimized websites that deliver exceptional user experiences.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'E-commerce Websites',
        'Content Management Systems',
        'API Integration',
        'Performance Optimization',
        'SEO Implementation'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'PHP', 'Laravel', 'Django'],
      gradient: 'from-blue-500 to-blue-600',
      projects: [
        { name: 'E-commerce Platform', client: 'TechMart', result: '300% increase in sales' },
        { name: 'Corporate Website', client: 'GlobalCorp', result: '150% more leads' },
        { name: 'SaaS Dashboard', client: 'DataFlow', result: '50% better user engagement' }
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Our mobile development team creates high-performance native and cross-platform mobile applications for iOS and Android. We use React Native, Flutter, Swift, and Kotlin to build apps that provide seamless user experiences across all devices.',
      features: [
        'Native iOS Development',
        'Native Android Development',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Features',
        'App Analytics Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      gradient: 'from-purple-500 to-purple-600',
      projects: [
        { name: 'Food Delivery App', client: 'QuickEats', result: '100K+ downloads' },
        { name: 'Fitness Tracker', client: 'FitLife', result: '4.8 star rating' },
        { name: 'Banking App', client: 'SecureBank', result: '99.9% uptime' }
      ]
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      icon: <Zap className="w-8 h-8" />,
      description: 'Tailored software solutions for your business',
      longDescription: 'We develop custom software solutions that are specifically designed to meet your unique business requirements. From enterprise applications to specialized tools, our custom software development ensures you get exactly what you need to streamline your operations.',
      features: [
        'Enterprise Software Development',
        'Business Process Automation',
        'Legacy System Modernization',
        'Third-party Integrations',
        'Custom CRM/ERP Systems',
        'Workflow Management Tools',
        'Reporting & Analytics',
        'Multi-platform Compatibility'
      ],
      technologies: ['Java', '.NET', 'Python', 'C#', 'Ruby', 'Go', 'Scala'],
      gradient: 'from-green-500 to-green-600',
      projects: [
        { name: 'Inventory Management', client: 'LogiCorp', result: '40% efficiency gain' },
        { name: 'HR Management System', client: 'PeopleFirst', result: '60% time savings' },
        { name: 'Financial Analytics', client: 'MoneyWise', result: '200% ROI improvement' }
      ]
    },
    {
      id: 'api-development',
      title: 'API Development',
      icon: <Globe className="w-8 h-8" />,
      description: 'RESTful and GraphQL APIs for seamless integration',
      longDescription: 'Our API development services enable seamless communication between different software systems. We create robust, scalable, and secure APIs that facilitate data exchange and integration with third-party services.',
      features: [
        'RESTful API Development',
        'GraphQL API Development',
        'API Documentation',
        'Rate Limiting & Security',
        'API Testing & Monitoring',
        'Microservices Architecture',
        'API Gateway Implementation',
        'Third-party API Integration'
      ],
      technologies: ['Node.js', 'Express', 'FastAPI', 'Django REST', 'Spring Boot', 'GraphQL'],
      gradient: 'from-orange-500 to-orange-600',
      projects: [
        { name: 'Payment Gateway API', client: 'PaySecure', result: '99.99% uptime' },
        { name: 'Social Media API', client: 'ConnectApp', result: '1M+ API calls/day' },
        { name: 'Analytics API', client: 'DataInsights', result: '50ms response time' }
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Scalable cloud infrastructure and deployment',
      longDescription: 'We provide comprehensive cloud solutions including migration, deployment, and management services. Our expertise spans across AWS, Azure, and Google Cloud Platform to ensure your applications are scalable, secure, and cost-effective.',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Load Balancing',
        'Cloud Security Implementation',
        'Disaster Recovery Planning',
        'Cost Optimization',
        'Multi-cloud Strategies'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      gradient: 'from-teal-500 to-teal-600',
      projects: [
        { name: 'Cloud Migration', client: 'TechGiant', result: '50% cost reduction' },
        { name: 'Auto-scaling Platform', client: 'StreamCorp', result: '99.9% availability' },
        { name: 'Multi-cloud Setup', client: 'GlobalTech', result: '30% performance boost' }
      ]
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      icon: <Database className="w-8 h-8" />,
      description: 'Scalable database design and management',
      longDescription: 'Our database experts design and implement robust database solutions that can handle your growing data needs. We work with both SQL and NoSQL databases to ensure optimal performance and scalability.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Database Security',
        'Real-time Data Processing',
        'Data Warehousing',
        'Big Data Solutions'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra'],
      gradient: 'from-red-500 to-red-600',
      projects: [
        { name: 'Data Warehouse', client: 'AnalyticsPro', result: '10x faster queries' },
        { name: 'Real-time Database', client: 'LiveData', result: '<1ms latency' },
        { name: 'Database Migration', client: 'LegacyCorp', result: 'Zero downtime' }
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeService) || services[0];

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
              Software Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with our comprehensive software development services. From web applications to mobile apps, we deliver cutting-edge solutions that drive growth and innovation.
            </p>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-gray-300">Trusted by 500+ clients worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                  activeService === service.id
                    ? 'bg-teal-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className={`w-16 h-16 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                {currentService.icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{currentService.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{currentService.longDescription}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentService.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {currentService.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{currentService.title}</h3>
                  <p className="text-white text-opacity-90 text-center mb-8">{currentService.description}</p>
                  
                  {/* Project Examples */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Recent Projects</h4>
                    {currentService.projects.map((project, index) => (
                      <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-white text-opacity-80">{project.client}</div>
                        <div className="text-sm text-teal-200 font-medium">{project.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven development methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project roadmap.' },
              { step: '02', title: 'Design & Prototyping', description: 'Our designers create intuitive interfaces and interactive prototypes.' },
              { step: '03', title: 'Development & Testing', description: 'Our developers build your solution with rigorous testing at every stage.' },
              { step: '04', title: 'Deployment & Support', description: 'We deploy your solution and provide ongoing maintenance and support.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;