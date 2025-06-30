import React, { useState } from 'react';
import { ShoppingCart, Smartphone, CreditCard, TrendingUp, Globe, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const EcommerceDevelopment = () => {
  const [activeService, setActiveService] = useState('shopify');

  const services = [
    {
      id: 'shopify',
      title: 'Shopify Development',
      icon: <ShoppingCart className="w-8 h-8" />,
      description: 'Custom Shopify stores with advanced functionality',
      longDescription: 'We create powerful Shopify stores that convert visitors into customers. Our Shopify development services include custom theme development, app integration, and performance optimization to help you build a successful online business.',
      features: [
        'Custom Shopify Theme Development',
        'Shopify Plus Development',
        'Third-party App Integration',
        'Payment Gateway Setup',
        'Inventory Management',
        'Multi-language Support',
        'SEO Optimization',
        'Performance Optimization'
      ],
      technologies: ['Shopify Liquid', 'JavaScript', 'CSS3', 'HTML5', 'Shopify APIs', 'GraphQL'],
      gradient: 'from-green-500 to-green-600',
      projects: [
        { name: 'Fashion Store', client: 'StyleHub', result: '250% increase in sales' },
        { name: 'Electronics Store', client: 'TechMart', result: '180% more conversions' },
        { name: 'Beauty Products', client: 'GlowUp', result: '300% revenue growth' }
      ]
    },
    {
      id: 'woocommerce',
      title: 'WooCommerce Development',
      icon: <Globe className="w-8 h-8" />,
      description: 'WordPress-based e-commerce solutions',
      longDescription: 'Our WooCommerce development services help you create flexible and scalable online stores. We build custom WooCommerce solutions that integrate seamlessly with WordPress and provide extensive customization options.',
      features: [
        'Custom WooCommerce Development',
        'Plugin Development',
        'Theme Customization',
        'Payment Integration',
        'Shipping Configuration',
        'Product Catalog Management',
        'Order Management System',
        'Analytics Integration'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'WooCommerce APIs', 'REST API'],
      gradient: 'from-blue-500 to-blue-600',
      projects: [
        { name: 'Organic Food Store', client: 'GreenMarket', result: '200% order increase' },
        { name: 'Handmade Crafts', client: 'ArtisanHub', result: '150% customer growth' },
        { name: 'Sports Equipment', client: 'SportsPro', result: '220% revenue boost' }
      ]
    },
    {
      id: 'magento',
      title: 'Magento Development',
      icon: <Zap className="w-8 h-8" />,
      description: 'Enterprise-level e-commerce platforms',
      longDescription: 'We develop robust Magento e-commerce solutions for businesses that need advanced features and scalability. Our Magento development services include custom module development, theme creation, and performance optimization.',
      features: [
        'Magento 2 Development',
        'Custom Module Development',
        'Theme Development',
        'Multi-store Setup',
        'B2B E-commerce Solutions',
        'Advanced Catalog Management',
        'Custom Payment Methods',
        'Performance Optimization'
      ],
      technologies: ['Magento 2', 'PHP', 'MySQL', 'Elasticsearch', 'Redis', 'Varnish'],
      gradient: 'from-orange-500 to-orange-600',
      projects: [
        { name: 'B2B Marketplace', client: 'TradePro', result: '400% transaction volume' },
        { name: 'Multi-vendor Store', client: 'MarketPlace', result: '300% vendor growth' },
        { name: 'Enterprise Store', client: 'MegaCorp', result: '500% scalability' }
      ]
    },
    {
      id: 'custom-ecommerce',
      title: 'Custom E-commerce',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Tailored e-commerce solutions from scratch',
      longDescription: 'When off-the-shelf solutions don\'t meet your unique requirements, we build custom e-commerce platforms from the ground up. Our custom solutions are designed specifically for your business needs and can scale with your growth.',
      features: [
        'Custom Platform Development',
        'Unique Business Logic',
        'Advanced Security Features',
        'Custom Admin Panel',
        'API Development',
        'Third-party Integrations',
        'Scalable Architecture',
        'Mobile-first Design'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
      gradient: 'from-purple-500 to-purple-600',
      projects: [
        { name: 'Subscription Platform', client: 'SubBox', result: '1000% user growth' },
        { name: 'Auction Site', client: 'BidWin', result: '500% bid volume' },
        { name: 'Rental Platform', client: 'RentEasy', result: '300% bookings' }
      ]
    },
    {
      id: 'payment-integration',
      title: 'Payment Integration',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Secure payment gateway integration',
      longDescription: 'We integrate secure and reliable payment gateways into your e-commerce platform. Our payment integration services ensure smooth transactions and support multiple payment methods to maximize your conversion rates.',
      features: [
        'Multiple Payment Gateways',
        'Secure Payment Processing',
        'PCI Compliance',
        'Fraud Detection',
        'Recurring Payments',
        'Multi-currency Support',
        'Mobile Payments',
        'Wallet Integration'
      ],
      technologies: ['Stripe', 'PayPal', 'Square', 'Razorpay', 'Braintree', 'Authorize.net'],
      gradient: 'from-teal-500 to-teal-600',
      projects: [
        { name: 'Payment Gateway', client: 'PaySecure', result: '99.9% uptime' },
        { name: 'Multi-currency Store', client: 'GlobalShop', result: '50+ countries' },
        { name: 'Subscription Service', client: 'MonthlyBox', result: '95% retention' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace Development',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Multi-vendor marketplace platforms',
      longDescription: 'We build comprehensive marketplace platforms that connect buyers and sellers. Our marketplace development services include vendor management, commission systems, and advanced search functionality.',
      features: [
        'Multi-vendor Management',
        'Commission System',
        'Vendor Dashboard',
        'Advanced Search & Filters',
        'Review & Rating System',
        'Dispute Resolution',
        'Analytics & Reporting',
        'Mobile App Development'
      ],
      technologies: ['Laravel', 'React', 'Vue.js', 'Node.js', 'MongoDB', 'Redis'],
      gradient: 'from-red-500 to-red-600',
      projects: [
        { name: 'Fashion Marketplace', client: 'StyleMarket', result: '1000+ vendors' },
        { name: 'Food Delivery', client: 'FoodHub', result: '500+ restaurants' },
        { name: 'Service Marketplace', client: 'ServicePro', result: '10K+ services' }
      ]
    }
  ];

  const currentService = services.find(service => service.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-teal-900 relative overflow-hidden py-20">
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
              E-commerce Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build powerful online stores that convert visitors into customers. Our e-commerce development services help you create scalable, secure, and user-friendly online shopping experiences.
            </p>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-gray-300">Trusted by 300+ e-commerce businesses</span>
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
                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
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
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
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

              <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Store Today
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
                    <h4 className="font-semibold text-lg">Success Stories</h4>
                    {currentService.projects.map((project, index) => (
                      <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-white text-opacity-80">{project.client}</div>
                        <div className="text-sm text-green-200 font-medium">{project.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">300+</div>
                <div className="text-sm text-gray-600">Stores Built</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-teal-600">$50M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our E-commerce Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build e-commerce platforms that not only look great but also drive sales and provide exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: 'Conversion Optimized',
                description: 'Every element is designed to maximize conversions and reduce cart abandonment.',
                gradient: 'from-green-500 to-green-600'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Mobile-First Design',
                description: 'Responsive designs that provide seamless shopping experiences on all devices.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: 'Secure Payments',
                description: 'PCI-compliant payment processing with multiple gateway options.',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Analytics & Insights',
                description: 'Comprehensive analytics to track performance and optimize your store.',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'SEO Optimized',
                description: 'Built-in SEO features to help your store rank higher in search results.',
                gradient: 'from-teal-500 to-teal-600'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Fast Performance',
                description: 'Optimized for speed with fast loading times and smooth user experience.',
                gradient: 'from-red-500 to-red-600'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Let's build an e-commerce platform that drives sales and grows your business. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View E-commerce Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopment;