import React, { useState } from 'react';
import { Zap, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const softwareServices = [
    { name: 'Web Development', id: 'web-development' },
    { name: 'Mobile App Development', id: 'mobile-development' },
    { name: 'Custom Software', id: 'custom-software' },
    { name: 'API Development', id: 'api-development' },
    { name: 'Cloud Solutions', id: 'cloud-solutions' },
    { name: 'Database Solutions', id: 'database-solutions' },
     { name: 'Custom Ecommerce', id: 'custom-ecommerce' },
      { name: 'Payment Integration', id: 'payment-integration' },
    { name: 'Marketplace Development', id: 'marketplace' }
  ];

  // const ecommerceServices = [
  //   { name: 'Shopify Development', id: 'shopify' },
  //   { name: 'WooCommerce', id: 'woocommerce' },
  //   { name: 'Magento', id: 'magento' },
   
   
  // ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-2"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TechSolutions</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-5">
              <button 
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Home
              </button>
              
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  onMouseEnter={() => setActiveDropdown('software')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Software Development
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg transition-all duration-200 ${
                    activeDropdown === 'software' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('software')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleNavClick('software-development')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    >
                     Our Services
                    </button>
                    {softwareServices.map((service) => (
                      <button 
                        key={service.id}
                        onClick={() => handleNavClick('software-development')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  onMouseEnter={() => setActiveDropdown('ecommerce')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Ecommerce Development
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg transition-all duration-200 ${
                    activeDropdown === 'ecommerce' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('ecommerce')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleNavClick('ecommerce-development')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    >
                      All Ecommerce Services
                    </button>
                    {ecommerceServices.map((service) => (
                      <button 
                        key={service.id}
                        onClick={() => handleNavClick('ecommerce-development')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div> */}
              
              <button 
                onClick={() => handleNavClick('portfolio')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'portfolio' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Portfolio
              </button>
              
              <button 
                onClick={() => handleNavClick('case-study')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'case-study' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Case Study
              </button>
              
              <button 
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                About
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => handleNavClick('consultation')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Free Consultation
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => handleNavClick('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('software-development')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                Software Development
              </button>
              <button 
                onClick={() => handleNavClick('ecommerce-development')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                Ecommerce Development
              </button>
              <button 
                onClick={() => handleNavClick('portfolio')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick('case-study')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                Case Study
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md"
              >
                About
              </button>
              <div className="pt-4 pb-2 space-y-2">
                <button 
                  onClick={() => handleNavClick('consultation')}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Free Consultation
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;