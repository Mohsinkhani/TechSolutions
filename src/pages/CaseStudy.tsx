import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle, Star, BarChart3 } from 'lucide-react';

const CaseStudy = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 'ziina-fintech',
      title: 'ZIINA - Fintech Revolution',
      subtitle: 'Transforming Digital Payments in the UAE',
      client: 'Ziina Financial Services',
      industry: 'Fintech',
      duration: '8 months',
      team: '12 developers',
      challenge: 'Create a secure, user-friendly digital payment platform that complies with UAE financial regulations while providing seamless money transfer experiences for both businesses and individuals.',
      solution: 'We developed a comprehensive fintech platform using React Native for mobile apps and React for web dashboard, integrated with secure payment gateways and real-time transaction processing.',
      results: [
        { metric: 'User Growth', value: '100K+', description: 'Active users within 6 months' },
        { metric: 'Transaction Volume', value: '$50M+', description: 'Processed in first year' },
        { metric: 'App Rating', value: '4.8/5', description: 'Average rating on app stores' },
        { metric: 'Processing Time', value: '<3 sec', description: 'Average transaction time' }
      ],
      technologies: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      testimonial: {
        text: "Software Pro delivered beyond our expectations. The platform they built has revolutionized how people transfer money in the UAE. Their attention to security and user experience is exceptional.",
        author: "Ahmed Al-Rashid",
        position: "CEO, Ziina Financial Services"
      },
      gradient: 'from-orange-500 to-pink-500',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'luxe-ecommerce',
      title: 'Luxe Fashion - E-commerce Excellence',
      subtitle: 'Premium Fashion Marketplace Success',
      client: 'Luxe Fashion Group',
      industry: 'E-commerce',
      duration: '6 months',
      team: '8 developers',
      challenge: 'Build a high-end e-commerce platform that reflects luxury brand values while providing exceptional user experience and handling high-volume transactions during peak seasons.',
      solution: 'We created a custom Shopify Plus solution with advanced inventory management, personalized shopping experiences, and integrated marketing automation to drive conversions.',
      results: [
        { metric: 'Sales Increase', value: '300%', description: 'Year-over-year growth' },
        { metric: 'Conversion Rate', value: '8.5%', description: 'Above industry average' },
        { metric: 'Mobile Traffic', value: '200%', description: 'Increase in mobile sales' },
        { metric: 'Page Speed', value: '2.1 sec', description: 'Average load time' }
      ],
      technologies: ['Shopify Plus', 'JavaScript', 'Liquid', 'CSS3', 'Klaviyo', 'Google Analytics'],
      testimonial: {
        text: "The e-commerce platform Software Pro built for us has transformed our business. Sales have tripled, and our customers love the seamless shopping experience.",
        author: "Sarah Mitchell",
        position: "Director of Digital, Luxe Fashion Group"
      },
      gradient: 'from-purple-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'analytics-saas',
      title: 'Analytics Pro - SaaS Platform',
      subtitle: 'Data-Driven Marketing Intelligence',
      client: 'Analytics Pro Inc.',
      industry: 'SaaS',
      duration: '10 months',
      team: '15 developers',
      challenge: 'Develop a comprehensive analytics platform that processes millions of data points in real-time while providing intuitive dashboards and actionable insights for marketing teams.',
      solution: 'We built a scalable SaaS platform using microservices architecture with Vue.js frontend, Node.js backend, and advanced data processing pipelines for real-time analytics.',
      results: [
        { metric: 'Data Processing', value: '10M+', description: 'Data points per day' },
        { metric: 'Customer ROI', value: '500%', description: 'Average improvement' },
        { metric: 'Platform Uptime', value: '99.9%', description: 'Service availability' },
        { metric: 'User Retention', value: '95%', description: 'Monthly active users' }
      ],
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS'],
      testimonial: {
        text: "Analytics Pro has become the backbone of our marketing operations. The insights we get from this platform have increased our ROI by 500%. Software Pro's expertise in data visualization is unmatched.",
        author: "Michael Chen",
        position: "VP of Marketing, Analytics Pro Inc."
      },
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'foodie-delivery',
      title: 'Foodie Delivery - Mobile App Success',
      subtitle: 'On-Demand Food Delivery Platform',
      client: 'Foodie Delivery Co.',
      industry: 'Food Tech',
      duration: '7 months',
      team: '10 developers',
      challenge: 'Create a comprehensive food delivery ecosystem including customer app, restaurant dashboard, and delivery partner app with real-time tracking and seamless payment integration.',
      solution: 'We developed a complete food delivery solution using React Native for mobile apps, React for web dashboards, with real-time GPS tracking and integrated payment systems.',
      results: [
        { metric: 'App Downloads', value: '50K+', description: 'In first 3 months' },
        { metric: 'Restaurant Partners', value: '500+', description: 'Active restaurants' },
        { metric: 'Delivery Time', value: '30 min', description: 'Average delivery time' },
        { metric: 'User Rating', value: '4.7/5', description: 'Customer satisfaction' }
      ],
      technologies: ['React Native', 'React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
      testimonial: {
        text: "Software Pro built us a world-class food delivery platform. The real-time tracking and seamless user experience have made us the preferred choice for food delivery in our city.",
        author: "David Rodriguez",
        position: "Founder, Foodie Delivery Co."
      },
      gradient: 'from-red-500 to-orange-500',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 relative overflow-hidden py-20">
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
              Case Studies
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable growth through innovative digital solutions.
            </p>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-gray-300">500+ successful projects delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-indigo-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {currentCase.industry} • {currentCase.duration} • {currentCase.team}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentCase.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentCase.subtitle}</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Content */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{currentCase.challenge}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{currentCase.solution}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {currentCase.technologies.map((tech, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentCase.gradient} rounded-2xl p-8 text-white relative overflow-hidden h-96`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-2xl"
                />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4">{currentCase.client}</h4>
                  <p className="text-white text-opacity-90 text-lg mb-6">{currentCase.industry} Industry</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Duration: {currentCase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3" />
                      <span>Team Size: {currentCase.team}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Results & Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentCase.results.map((result, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <TrendingUp className="w-8 h-8 text-white" />}
                    {index === 1 && <BarChart3 className="w-8 h-8 text-white" />}
                    {index === 2 && <Star className="w-8 h-8 text-white" />}
                    {index === 3 && <Clock className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{result.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-gray-600 text-sm">{result.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="w-8 h-8" />
              </div>
              <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                "{currentCase.testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <div className="font-bold text-xl">{currentCase.testimonial.author}</div>
                  <div className="text-white text-opacity-80">{currentCase.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful project follows our time-tested methodology that ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery & Analysis', 
                description: 'We deep-dive into your business requirements, analyze market conditions, and define project scope.',
                icon: <BarChart3 className="w-8 h-8" />
              },
              { 
                step: '02', 
                title: 'Strategy & Planning', 
                description: 'Create detailed project roadmap, technical architecture, and resource allocation plan.',
                icon: <CheckCircle className="w-8 h-8" />
              },
              { 
                step: '03', 
                title: 'Development & Testing', 
                description: 'Agile development with continuous testing, regular updates, and quality assurance.',
                icon: <Users className="w-8 h-8" />
              },
              { 
                step: '04', 
                title: 'Launch & Optimization', 
                description: 'Smooth deployment, performance monitoring, and continuous optimization for best results.',
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-indigo-600 mb-2">STEP {process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Join our portfolio of successful clients. Let's discuss how we can help transform your business and achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;