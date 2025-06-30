import React from 'react';
import { Users, Award, Clock, Target, CheckCircle, ArrowRight, Star, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Expert Developers', color: 'text-blue-600' },
    { icon: <Award className="w-8 h-8" />, number: '500+', label: 'Projects Completed', color: 'text-green-600' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Years Experience', color: 'text-purple-600' },
    { icon: <Target className="w-8 h-8" />, number: '98%', label: 'Client Satisfaction', color: 'text-orange-600' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
      icon: '🚀'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure flawless performance and reliability.',
      icon: '✨'
    },
    {
      title: 'Client Partnership',
      description: 'We believe in building long-term partnerships, working closely with clients to understand and exceed their expectations.',
      icon: '🤝'
    },
    {
      title: 'Agile Methodology',
      description: 'Our agile development process ensures faster delivery, better collaboration, and adaptability to changing requirements.',
      icon: '⚡'
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified Company',
    'Microsoft Gold Partner',
    'AWS Advanced Consulting Partner',
    'Google Cloud Partner',
    'Shopify Plus Partner',
    'Top Rated on Upwork & Freelancer'
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Software Pro was established with a vision to transform businesses through innovative digital solutions.'
    },
    {
      year: '2020',
      title: 'First 100 Projects',
      description: 'Successfully delivered 100+ projects across various industries, establishing our reputation for quality.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ expert developers and expanded our service offerings to include mobile development.'
    },
    {
      year: '2022',
      title: 'International Recognition',
      description: 'Received multiple industry awards and became certified partners with major technology platforms.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded operations globally, serving clients across 50+ countries with 24/7 support.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on AI, blockchain, and emerging technologies.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '15+ years in software development and business strategy'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in cloud architecture and scalable systems'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack developer with expertise in modern frameworks'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Design Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'UI/UX specialist creating beautiful and functional designs'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 relative overflow-hidden py-20">
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
              About Software Pro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Our Story
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a team of passionate developers and digital strategists committed to transforming businesses through innovative technology solutions.
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Ideas into Digital Reality
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Software Pro has been at the forefront of digital transformation, helping businesses of all sizes leverage technology to achieve their goals. Our team combines technical expertise with creative thinking to deliver solutions that not only meet requirements but exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From startups to enterprise clients, we've successfully delivered over 500 projects across various industries including fintech, e-commerce, healthcare, and education. Our commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses worldwide.
              </p>
              
              {/* Achievements */}
              <div className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-colors duration-300">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-purple-600 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-white text-center z-10">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="text-white text-opacity-80 px-8">
                    Empowering businesses through innovative digital solutions that drive growth and success.
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global technology partner, here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-teal-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, business, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Global Presence, Local Expertise</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              With clients across 50+ countries and 24/7 support, we're always here to help you succeed, no matter where you are in the world.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white text-opacity-80">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white text-opacity-80">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-white text-opacity-80">Global Offices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;