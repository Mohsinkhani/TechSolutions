import React from 'react';
import { Users, Award, Clock, Target, CheckCircle, ArrowRight, Star, Globe, Zap } from 'lucide-react';
import DigitalMarketingSection from './DigitalMarketingSection';

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
      description: 'TechSolutions was established with a vision to transform businesses through innovative digital solutions.'
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechSolutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers and digital strategists committed to transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Digital Marketing Section */}
        <DigitalMarketingSection />

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;