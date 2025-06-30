import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';
// import Image from '../../../components/ui/AppImage';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-conversion-accent">
                <Icon name="Code2" size={24} />
                <span className="text-sm font-medium uppercase tracking-wider">Web Development Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Scalable Web Solutions That 
                <span className="text-conversion-accent"> Drive Growth</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your business vision into powerful web applications that scale with your success. Our full-stack approach combines cutting-edge technology with strategic business thinking.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="rgb(16, 185, 129)" />
                </div>
                <div>
                  <p className="font-semibold">Lightning Fast</p>
                  <p className="text-sm text-gray-400">Sub-3s load times</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-conversion-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} color="rgb(0, 212, 255)" />
                </div>
                <div>
                  <p className="font-semibold">Enterprise Security</p>
                  <p className="text-sm text-gray-400">Bank-grade protection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} color="rgb(217, 119, 6)" />
                </div>
                <div>
                  <p className="font-semibold">Infinite Scale</p>
                  <p className="text-sm text-gray-400">Grows with you</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-accent hover:bg-cyan-500 text-white"
              >
                Start Your Project
              </Button>
              
              <Link to="/portfolio-case-studies-transformation-stories">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">Modern Web App</span>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                  <div className="text-conversion-accent">// Full-Stack Architecture</div>
                  <div className="text-white mt-2">
                    <span className="text-purple-300">const</span> <span className="text-blue-300">webApp</span> = {"{"}
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-300">frontend</span>: <span className="text-yellow-300">'React + Next.js'</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-300">backend</span>: <span className="text-yellow-300">'Node.js + Express'</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-300">database</span>: <span className="text-yellow-300">'PostgreSQL'</span>,
                  </div>
                  <div className="text-white ml-4">
                    <span className="text-green-300">cloud</span>: <span className="text-yellow-300">'AWS/Azure'</span>
                  </div>
                  <div className="text-white">{"}"}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-success/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-success">99.9%</div>
                    <div className="text-xs text-gray-300">Uptime</div>
                  </div>
                  <div className="bg-conversion-accent/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-conversion-accent">2.1s</div>
                    <div className="text-xs text-gray-300">Load Time</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-conversion-accent/20 rounded-full flex items-center justify-center floating-animation">
              <Icon name="Rocket" size={24} color="rgb(0, 212, 255)" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center floating-animation animation-delay-1000">
              <Icon name="CheckCircle" size={20} color="rgb(16, 185, 129)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;