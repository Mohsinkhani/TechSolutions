import React from 'react';
import { Star, Shield, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSignals: React.FC = () => {
  const clientLogos = [
    { name: 'Exchange App', logo: 'https://via.placeholder.com/120x60/1E3A8A/FFFFFF?text=Exchange' },
    { name: 'Mobile Palace', logo: 'https://via.placeholder.com/120x60/10B981/FFFFFF?text=Mobile+Palace' },
    { name: 'Awami Labs', logo: 'https://via.placeholder.com/120x60/3B82F6/FFFFFF?text=Awami+Labs' },
    { name: 'Saudi PS', logo: 'https://via.placeholder.com/120x60/D97706/FFFFFF?text=Saudi+PS' },
    { name: 'Solar Solutions', logo: 'https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=Solar' },
    { name: 'KIU University', logo: 'https://via.placeholder.com/120x60/DC2626/FFFFFF?text=KIU' }
  ];

  const trustMetrics = [
    {
      icon: <Star className="w-6 h-6" />,
      value: '4.9/5',
      label: 'Client Rating',
      color: 'text-yellow-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: '100%',
      label: 'Project Success',
      color: 'text-green-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '500+',
      label: 'Projects Delivered',
      color: 'text-blue-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '98%',
      label: 'Client Retention',
      color: 'text-purple-600'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'Google Cloud Partner',
    'AWS Certified',
    'Microsoft Partner'
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 ${metric.color} bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-8 font-medium"
          >
            Trusted by 500+ businesses worldwide
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
            >
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;