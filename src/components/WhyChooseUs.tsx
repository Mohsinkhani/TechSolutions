import React from 'react';
import { Shield, Clock, Award, Users, Zap, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyChooseUsProps {
  onNavigateToConsultation: () => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigateToConsultation }) => {
  const differentiators = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '100% Satisfaction Guarantee',
      description: 'Not happy with the results? We work until you are, or your money back.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      stat: '98% Client Retention'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Lightning Fast Delivery',
      description: 'We deliver projects 40% faster than industry average without compromising quality.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      stat: '40% Faster Delivery'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award-Winning Team',
      description: 'Our developers are certified experts with 5+ years of experience in cutting-edge technologies.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      stat: '50+ Expert Developers'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock support with Arabic and English speaking team members.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      stat: '24/7 Support'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Users className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const guarantees = [
    'On-time delivery guaranteed',
    'Fixed price - no hidden costs',
    'Free revisions until satisfied',
    'Post-launch support included',
    'Source code ownership',
    'NDA & confidentiality protection'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-teal-100 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-medium text-teal-600">Why Choose TechSolutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Different</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We don't just build software - we create digital solutions that transform businesses and drive measurable results
          </motion.p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow`}>
                <div className={item.color}>
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.color} ${item.bgColor}`}>
                {item.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 mb-20 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Businesses Worldwide</h3>
            <p className="text-teal-100 text-lg">Our track record speaks for itself</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-teal-100">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees & CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Ironclad Guarantees</h3>
            
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-teal-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-8">
              Join 500+ satisfied clients who chose TechSolutions for their digital transformation
            </p>
            
            <div className="space-y-4">
              <button
                onClick={onNavigateToConsultation}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Quote Now
              </button>
              
              <p className="text-sm text-gray-500">
                ✓ Free consultation ✓ No obligations ✓ Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;