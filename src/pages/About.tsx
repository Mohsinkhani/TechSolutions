import React, { useEffect } from 'react';
import { motion, useAnimation, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Clock, Target, CheckCircle, ArrowRight, Star, Globe, Zap } from 'lucide-react';

const About = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut }
    }
  };

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Expert Developers', color: 'text-blue-500' },
    { icon: <Award className="w-8 h-8" />, number: '500+', label: 'Projects Completed', color: 'text-green-500' },
    { icon: <Clock className="w-8 h-8" />, number: '5+', label: 'Years Experience', color: 'text-purple-500' },
    { icon: <Target className="w-8 h-8" />, number: '98%', label: 'Client Satisfaction', color: 'text-amber-500' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: <Zap className="w-10 h-10 text-cyan-500" />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures flawless performance and reliability.',
      icon: <CheckCircle className="w-10 h-10 text-emerald-500" />
    },
    {
      title: 'Client Partnership',
      description: 'Building long-term partnerships to exceed expectations.',
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      title: 'Agile Methodology',
      description: 'Faster delivery and adaptability to changing requirements.',
      icon: <Globe className="w-10 h-10 text-purple-500" />
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified',
    'Microsoft Gold Partner',
    'AWS Advanced Consulting',
    'Google Cloud Partner',
    'Shopify Plus Partner',
    'Top Rated on Upwork'
  ];

  const timeline = [
    { year: '2022', title: 'Company Founded', description: 'Established with a vision to transform businesses through innovation.' },
    { year: '2023', title: 'First 50 Projects', description: 'Delivered 100+ projects across various industries.' },
    { year: '2024', title: 'Team Expansion', description: 'Grew to 25+ expert developers and expanded services.' },
    // { year: '202', title: 'International Recognition', description: 'Received multiple industry awards and certifications.' },
    // { year: '2023', title: 'Global Reach', description: 'Serving clients across 50+ countries with 24/7 support.' },
    { year: '2025', title: 'Innovation Hub', description: 'Launched lab focusing on AI and emerging technologies.' }
  ];

  const team = [
    {
      name: 'Mohsin khan',
      position: 'CEO & Founder',
      bio: '15+ years in software development and strategy'
    },
    {
      name: 'Asad Subhani',
      position: 'CTO',
      bio: 'Expert in cloud architecture and scalable systems'
    },
    {
      name: 'Fahad Shabir',
      position: 'Lead Developer',
      bio: 'Full-stack developer with modern framework expertise'
    },
    {
      name: 'Waqar ul hassan',
      position: 'Design Director',
      bio: 'UI/UX specialist creating beautiful designs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl animate-float animation-delay-4000"></div>
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                TechSolutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We transform businesses through innovative technology solutions
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-gray-300">Trusted by 500+ clients worldwide</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
            ref={ref}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group"
                variants={item}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  backgroundColor: '#f9fafb'
                }}
              >
                <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Digital Reality</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2024, TechSolutions has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals. Our team combines technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
              
              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all"
                    whileHover={{ scale: 1.03 }}
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="relative overflow-hidden group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-2xl h-96 flex items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="text-white text-center z-10 px-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="text-white/80">
                    Empowering businesses through innovative digital solutions
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl p-5 shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-2xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Journey</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              From a small startup to a global technology partner
            </motion.p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-300 to-blue-300"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div 
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                      whileHover={{ 
                        y: -10,
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <div className="text-teal-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-lg"></div>
                    <div className="absolute w-16 h-16 border-2 border-teal-300 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Leadership</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Decades of expertise in technology, business, and innovation
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-32 h-32 rounded-full mx-auto flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-28 h-28" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md text-teal-600 font-semibold">
                    {member.position}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Values</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Guiding principles that shape how we work with clients
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-500">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-12 text-white text-center overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-700/20 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-blue-300 animate-line-sweep"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Global Presence, Local Expertise</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Serving clients across 50+ countries with 24/7 support
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { number: '50+', label: 'Countries Served' },
                  { number: '24/7', label: 'Support Available' },
                  { number: '5', label: 'Global Offices' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of satisfied clients who transformed their businesses
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              className="relative overflow-hidden group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
            
            <motion.button 
              className="relative overflow-hidden group border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;