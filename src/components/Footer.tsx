import React from 'react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateToPortfolio: (filter: string | null) => void;
  onNavigateToAbout: () => void;
  onNavigateToCaseStudy?: () => void;
  onNavigateToContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToPortfolio,
  onNavigateToAbout,
  onNavigateToCaseStudy,
  onNavigateToContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'Web Development', filter: 'Web Designs' },
      { label: 'Mobile App Development', filter: 'Apps / Softwares' },
      { label: 'E-commerce Development', filter: 'E-commerce' },
      { label: 'Digital Marketing', filter: 'Digital Marketing' },
      { label: 'UI/UX Design', filter: 'UI/UX' },
      { label: 'Custom Software', filter: 'Custom Software' }
    ],
    company: [
      { label: 'About Us', action: onNavigateToAbout },
      { label: 'Our Team' },
      { label: 'Careers' },
      { label: 'Case Studies', action: onNavigateToCaseStudy },
      { label: 'Blog' },
      { label: 'Contact Us', action: onNavigateToContact }
    ],
    resources: [
      'Documentation',
      'Help Center',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Sitemap'
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TechSolutions</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. We specialize in web development, mobile apps, and digital marketing strategies that drive growth.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-teal-500" />
                <span>info@saudips.org</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-teal-500" />
                <span>+966 53 556 0431</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-teal-500" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none p-0 m-0 cursor-pointer"
                    onClick={() => onNavigateToPortfolio(service.filter)}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  {item.action ? (
                    <button
                      type="button"
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none p-0 m-0 cursor-pointer"
                      onClick={item.action}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-gray-400">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates on technology trends and our services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TechSolutions. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;