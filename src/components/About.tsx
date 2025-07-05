import React from 'react';
import { Users, Award, Clock, Target, CheckCircle, Star, Globe, Zap, ChevronRight } from 'lucide-react';
import DigitalMarketingSection from './DigitalMarketingSection';

const About = () => {
  const stats = [
    { 
      icon: <Users className="w-10 h-10" />, 
      number: '50+', 
      label: 'Expert Developers', 
      color: 'text-blue-600',
      bg: 'bg-blue-50/50'
    },
    { 
      icon: <Award className="w-10 h-10" />, 
      number: '500+', 
      label: 'Projects Completed', 
      color: 'text-green-600',
      bg: 'bg-green-50/50'
    },
    { 
      icon: <Clock className="w-10 h-10" />, 
      number: '5+', 
      label: 'Years Experience', 
      color: 'text-purple-600',
      bg: 'bg-purple-50/50'
    },
    { 
      icon: <Target className="w-10 h-10" />, 
      number: '98%', 
      label: 'Client Satisfaction', 
      color: 'text-orange-600',
      bg: 'bg-orange-50/50'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      border: 'border-yellow-100'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure flawless performance and reliability.',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      border: 'border-green-100'
    },
    {
      title: 'Client Partnership',
      description: 'We believe in building long-term partnerships, working closely with clients to understand and exceed their expectations.',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      border: 'border-blue-100'
    },
    {
      title: 'Agile Methodology',
      description: 'Our agile development process ensures faster delivery, better collaboration, and adaptability to changing requirements.',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      border: 'border-purple-100'
    }
  ];

  return (
    <>
      {/* Digital Marketing Section First */}
      {/* <DigitalMarketingSection onNavigateToConsultation={() => {}} /> */}

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who We Are Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 rounded-full">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Developers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate collective of innovators, strategists, and creators dedicated to transforming your digital vision into reality.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`${stat.bg} backdrop-blur-sm rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 rounded-full">
                Our DNA
              </span>
              <h3 className="text-3xl font-bold text-gray-900">Core Values That Define Us</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 border-t-4 ${value.border} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-500/20"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-500/20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Star className="w-10 h-10 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-6">Our Driving Force</h3>
              <p className="text-xl leading-relaxed mb-6">
                To bridge the gap between technology and business needs by creating solutions that are not just functional, but transformative.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Our Story <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;