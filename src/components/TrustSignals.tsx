import React from 'react';
import { Star, Shield, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSignals: React.FC = () => {
  const clientLogos = [
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png',
      width: '120px'
    },
    { 
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png',
      width: '100px'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png',
      width: '100px'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/80px-Apple_logo_black.svg.png',
      width: '40px'
    },
    { 
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png',
      width: '120px'
    },
    { 
      name: 'Netflix', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png',
      width: '100px'
    },
    { 
      name: 'Spotify', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/80px-Spotify_logo_without_text.svg.png',
      width: '40px'
    },
    { 
      name: 'Uber', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/200px-Uber_logo_2018.png',
      width: '80px'
    },
    { 
      name: 'Airbnb', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/80px-Airbnb_Logo_Bélo.svg.png',
      width: '40px'
    },
    { 
      name: 'Tesla', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/80px-Tesla_T_symbol.svg.png',
      width: '40px'
    }
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
            className="text-center text-gray-600 mb-8 font-medium text-lg"
          >
            Trusted by 500+ businesses worldwide
          </motion.p>
          
          {/* Scrolling Logo Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ width: client.width, height: 'auto' }}
                    className="object-contain max-h-12"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ width: client.width, height: 'auto' }}
                    className="object-contain max-h-12"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
            </div>
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
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustSignals;