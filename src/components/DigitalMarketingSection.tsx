import React, { useState } from 'react';
import { Zap, Search, Palette, Edit, Video, Check, ArrowRight } from 'lucide-react';

const DigitalMarketingSection = () => {
  const [activeDemo, setActiveDemo] = useState('seo-expert');

  const services = [
    {
      id: 'seo-expert',
      title: 'SEO Optimization Expert',
      description: 'Boost your website rankings with our advanced SEO strategies and technical optimizations.',
      icon: Search,
      status: 'Available Now',
      category: 'Search Engine Optimization',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Backlink Strategy'],
      impact: '50% more organic traffic',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'graphic-designer',
      title: 'Senior Graphic Designer',
      description: 'Stunning visual designs that capture attention and communicate your brand message effectively.',
      icon: Palette,
      status: 'Available Now',
      category: 'Visual Design',
      features: ['Brand Identity', 'Social Media Graphics', 'Print Materials', 'UI/UX Design'],
      impact: 'Higher engagement rates',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'content-writer',
      title: 'Professional Content Writer',
      description: 'Compelling content that resonates with your audience and drives conversions.',
      icon: Edit,
      status: 'Available Now',
      category: 'Content Marketing',
      features: ['Blog Posts', 'Website Copy', 'Product Descriptions', 'Email Campaigns'],
      impact: '3x more conversions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'video-editor',
      title: 'Video Editing Expert',
      description: 'High-quality video content that tells your brand story and engages viewers.',
      icon: Video,
      status: 'Available Now',
      category: 'Video Production',
      features: ['Social Media Videos', 'Product Demos', 'Testimonials', 'Explainer Videos'],
      impact: '5x more engagement',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const demoContent = {
    'seo-expert': {
      title: 'SEO Services in Action',
      description: 'See how our SEO expert can improve your website rankings and organic traffic.',
      metrics: [
        { label: 'Traffic Increase', value: '+50%' },
        { label: 'Keyword Rankings', value: '+85%' },
        { label: 'Conversion Rate', value: '+30%' }
      ],
      videoUrl: 'https://www.youtube.com/embed/_pjCiqg---o'
    },
    'graphic-designer': {
      title: 'Graphic Design Portfolio',
      description: 'Explore our designer\'s stunning visual creations that elevate brands.',
      metrics: [
        { label: 'Engagement Rate', value: '+40%' },
        { label: 'Brand Recall', value: '+60%' },
        { label: 'Client Satisfaction', value: '4.9/5' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    'content-writer': {
      title: 'Content Writing Samples',
      description: 'Discover how our compelling content drives engagement and conversions.',
      metrics: [
        { label: 'Read Time', value: '+70%' },
        { label: 'Shares', value: '+55%' },
        { label: 'Lead Generation', value: '+45%' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    'video-editor': {
      title: 'Video Production Showcase',
      description: 'Watch our video editor\'s work that captivates audiences.',
      metrics: [
        { label: 'View Duration', value: '+80%' },
        { label: 'Click-Through', value: '+65%' },
        { label: 'ROI', value: '4:1' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  };

  const currentDemo = demoContent[activeDemo as keyof typeof demoContent];
  const currentService = services.find(item => item.id === activeDemo);

  return (
    
    <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 relative overflow-hidden">
                 
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2 text-cyan-400" />
            Digital Marketing Team
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Expert Digital Marketing Solutions
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of 4 experts will elevate your online presence and drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services List */}
          <div className="space-y-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeDemo === service.id
                      ? 'bg-white/20 backdrop-blur-md border-white/30' :'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveDemo(service.id)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          service.status === 'Live Demo' ?'bg-green-500 text-white' 
                            : service.status === 'Beta Testing' ?'bg-cyan-500 text-white' :'bg-white/20 text-white/80'
                        }`}>
                          {service.status}
                        </span>
                      </div>

                      <p className="text-white/70 text-sm mb-3">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">
                          {service.category}
                        </span>
                        <span className="text-sm font-medium text-cyan-400">
                          {service.impact}
                        </span>
                      </div>

                      {/* Features (shown when active) */}
                      {activeDemo === service.id && (
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-white/80 text-sm">
                                <Check size={14} className="mr-2 text-green-400" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Demo Area */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentService?.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {currentService && <currentService.icon size={32} className="text-white" />}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentDemo.title}
              </h3>
              
              <p className="text-white/70">
                {currentDemo.description}
              </p>
            </div>

            {/* Demo Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentDemo.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Video Demo Placeholder */}
            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden mb-8">
              <iframe 
                width="100%" 
                height="315" 
                src={currentDemo.videoUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center mx-auto">
                Hire Our Team
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-white/70 text-sm">Dedicated Experts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-white/70 text-sm">Successful Campaigns</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;