import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Play, 
  BookOpen, 
  Calculator, 
  Layout, 
  CheckSquare, 
  Mail, 
  Video, 
  Users, 
  Check, 
  Phone, 
  MessageCircle, 
  Star,
  ArrowRight
} from 'lucide-react';

const AlternativeEngagement = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [emailSubscription, setEmailSubscription] = useState('');
  const [downloadRequests, setDownloadRequests] = useState<string[]>([]);

  const resources = [
    {
      id: 'tech-whitepaper',
      title: 'Technology Strategy Whitepaper',
      description: 'Comprehensive guide to aligning technology decisions with business objectives',
      type: 'PDF Guide',
      pages: 24,
      downloadCount: '2.3K',
      icon: FileText,
      category: 'Strategy',
      preview: 'Learn how to evaluate technology options, create implementation roadmaps, and measure success metrics for digital transformation initiatives.'
    },
    {
      id: 'recorded-sessions',
      title: 'Recorded Strategy Sessions',
      description: 'Real consultation sessions with anonymized client scenarios',
      type: 'Video Series',
      duration: '45 min',
      downloadCount: '1.8K',
      icon: Play,
      category: 'Learning',
      preview: 'Watch actual strategic planning sessions to understand our consultation methodology and see how we approach complex technology challenges.'
    },
    {
      id: 'industry-guides',
      title: 'Industry-Specific Consultation Guides',
      description: 'Tailored consultation frameworks for different industries',
      type: 'Guide Collection',
      pages: 36,
      downloadCount: '1.5K',
      icon: BookOpen,
      category: 'Industry',
      preview: 'Specialized consultation approaches for FinTech, HealthTech, E-commerce, SaaS, and Enterprise sectors with industry-specific considerations.'
    },
    {
      id: 'roi-calculator',
      title: 'Technology ROI Calculator',
      description: 'Interactive tool to calculate potential returns on technology investments',
      type: 'Interactive Tool',
      duration: '10 min',
      downloadCount: '3.1K',
      icon: Calculator,
      category: 'Tools',
      preview: 'Calculate potential cost savings, efficiency gains, and revenue increases from technology investments with our comprehensive ROI framework.'
    },
    {
      id: 'architecture-templates',
      title: 'System Architecture Templates',
      description: 'Proven architecture patterns for common business scenarios',
      type: 'Template Pack',
      pages: 18,
      downloadCount: '2.7K',
      icon: Layout,
      category: 'Technical',
      preview: 'Ready-to-use architecture diagrams and documentation templates for web applications, mobile apps, and enterprise systems.'
    },
    {
      id: 'consultation-checklist',
      title: 'Pre-Consultation Preparation Checklist',
      description: 'Comprehensive checklist to maximize your consultation value',
      type: 'Checklist',
      pages: 8,
      downloadCount: '4.2K',
      icon: CheckSquare,
      category: 'Preparation',
      preview: 'Ensure you get maximum value from your consultation by preparing key information, stakeholders, and questions in advance.'
    }
  ];

  const engagementOptions = [
    {
      id: 'newsletter',
      title: 'Strategic Technology Newsletter',
      description: 'Weekly insights on technology trends, best practices, and strategic decision-making',
      frequency: 'Weekly',
      subscribers: '12K+',
      icon: Mail,
      benefits: [
        'Technology trend analysis',
        'Strategic decision frameworks',
        'Case study insights',
        'Industry best practices'
      ]
    },
    {
      id: 'webinar',
      title: 'Monthly Strategy Webinars',
      description: 'Live sessions covering technology strategy topics with Q&A',
      frequency: 'Monthly',
      subscribers: '3.5K+',
      icon: Video,
      benefits: [
        'Live expert presentations',
        'Interactive Q&A sessions',
        'Recorded session access',
        'Networking opportunities'
      ]
    },
    {
      id: 'community',
      title: 'Technology Leaders Community',
      description: 'Private community for CTOs, technical leaders, and decision makers',
      frequency: 'Ongoing',
      subscribers: '1.2K+',
      icon: Users,
      benefits: [
        'Peer networking',
        'Expert office hours',
        'Resource sharing',
        'Strategic discussions'
      ]
    }
  ];

  const handleResourceDownload = (resourceId: string) => {
    if (!downloadRequests.includes(resourceId)) {
      setDownloadRequests([...downloadRequests, resourceId]);
      // Simulate download process
      setTimeout(() => {
        alert(`${resources.find(r => r.id === resourceId)?.title} download started!`);
      }, 500);
    }
  };

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSubscription) {
      alert(`Successfully subscribed ${emailSubscription} to our strategic technology newsletter!`);
      setEmailSubscription('');
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Download size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Alternative Engagement</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Strategic Resources & Community
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Access valuable strategic resources, join our community of technology leaders, and stay informed with the latest insights while you consider your consultation options.
          </p>
        </div>

        {/* Resource Library */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Strategic Resource Library</h3>
            <div className="text-sm text-gray-600">
              <Download size={16} className="inline mr-1" />
              {resources.reduce((sum, r) => sum + parseFloat(r.downloadCount.replace('K', '')), 0).toFixed(1)}K+ Downloads
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{resource.category}</div>
                      <div className="text-sm text-gray-600">{resource.downloadCount} downloads</div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {resource.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {resource.description}
                  </p>

                  <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                    <p className="text-xs text-gray-600">
                      {resource.preview}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FileText size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">
                        {resource.type} • {'pages' in resource ? resource.pages : resource.duration}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleResourceDownload(resource.id)}
                    disabled={downloadRequests.includes(resource.id)}
                    className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                      downloadRequests.includes(resource.id)
                        ? 'bg-green-100 text-green-700 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {downloadRequests.includes(resource.id) ? (
                      <>
                        <Check size={16} />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        <span>Download Free</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay Connected & Informed
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of technology leaders and stay updated with strategic insights, best practices, and industry trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {engagementOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.title}</h4>
                      <div className="text-sm text-gray-600">{option.frequency} • {option.subscribers} members</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {option.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {option.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check size={14} className="text-green-600" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Join Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Strategic Technology Insights
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Get weekly strategic insights, technology trend analysis, and decision-making frameworks delivered to your inbox. Join 12,000+ technology leaders who rely on our insights.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-white" />
                  <span className="text-sm">12K+ Subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-white" />
                  <span className="text-sm">4.8/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <form onSubmit={handleNewsletterSubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={emailSubscription}
                  onChange={(e) => setEmailSubscription(e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail size={16} />
                  <span>Subscribe to Strategic Insights</span>
                </button>
              </form>
              
              <p className="text-xs text-blue-200 mt-3 text-center">
                Unsubscribe anytime. We respect your privacy and never share your information.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-900">+1 (555) 123-4567</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-900">consult@softwaredevpro.com</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeEngagement;