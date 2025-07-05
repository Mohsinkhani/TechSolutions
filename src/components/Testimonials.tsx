import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onNavigateToScheduling?: () => void;
}
const Testimonials: React.FC<TestimonialsProps> = ({ onNavigateToScheduling }) => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Software Pro transformed our business with their exceptional web development services. The team delivered beyond our expectations, creating a platform that increased our conversion rate by 150%. Their attention to detail and commitment to quality is unmatched.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, Digital Solutions',
      company: 'Digital Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Software Pro was a game-changer for our startup. They developed our mobile app from concept to launch in just 3 months. The app has received over 10,000 downloads in the first month. Highly recommended!',
      project: 'Mobile App Development'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Fashion Hub',
      company: 'Fashion Hub',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The digital marketing strategy implemented by Software Pro increased our online visibility by 300%. Their SEO and social media campaigns brought us qualified leads and significantly improved our ROI. Professional and results-driven team.',
      project: 'Digital Marketing Campaign'
    },
    {
      name: 'David Thompson',
      position: 'CTO, FinanceFlow',
      company: 'FinanceFlow',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Software Pro delivered a complex financial management system that handles millions of transactions daily. Their expertise in backend development and security implementation is outstanding. The system has been running flawlessly for over a year.',
      project: 'Enterprise Software'
    },
    {
      name: 'Lisa Wang',
      position: 'Owner, Boutique Store',
      company: 'Boutique Store',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Our Shopify store redesign by Software Pro resulted in a 200% increase in sales. The new design is not only beautiful but also highly functional. Customer checkout time reduced by 40%. Excellent work!',
      project: 'Shopify Store Design'
    },
    {
      name: 'James Wilson',
      position: 'VP Operations, LogiTech',
      company: 'LogiTech',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The custom CRM solution developed by Software Pro streamlined our entire sales process. Lead management became 10x more efficient, and our sales team productivity increased by 60%. Worth every penny!',
      project: 'Custom CRM System'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Software Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-teal-500 opacity-20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Project Tag */}
              <div className="mb-6">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-teal-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                Start Your Project
              </button> */}
             <button
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={onNavigateToScheduling}
            >
              Schedule Consultation
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;