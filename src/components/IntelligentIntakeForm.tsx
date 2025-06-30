import React, { useState } from 'react';
import { Rocket, Building, Users, Code, Check, MessageSquare, ArrowLeft, ArrowRight, Send, Download } from 'lucide-react';

interface IntelligentIntakeFormProps {
  onSubmit: (formData: any) => void;
}

const IntelligentIntakeForm: React.FC<IntelligentIntakeFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [visitorType, setVisitorType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    visitorType: '',
    companySize: '',
    industry: '',
    currentChallenges: '',
    projectType: '',
    timeline: '',
    budget: '',
    existingSystems: '',
    teamSize: '',
    platforms: [] as string[],
    integrations: [] as string[],
    scalabilityNeeds: '',
    securityRequirements: '',
    businessGoals: '',
    successMetrics: '',
    additionalInfo: ''
  });

  const visitorTypes = [
    { id: 'startup', title: 'Startup Founder', description: 'Building MVP or scaling early-stage product', icon: Rocket },
    { id: 'enterprise', title: 'Enterprise CTO', description: 'Leading digital transformation initiatives', icon: Building },
    { id: 'product', title: 'Product Manager', description: 'Managing product development and roadmap', icon: Users },
    { id: 'technical', title: 'Technical Leader', description: 'Evaluating technology solutions and architecture', icon: Code }
  ];

  const projectTypes = [
    'Web Application Development',
    'Mobile App Development',
    'Enterprise Software Solution',
    'Cloud Migration',
    'System Integration',
    'Digital Transformation',
    'Technical Consulting'
  ];

  const platforms = [
    'Web (React/Angular)',
    'Mobile (Flutter/React Native)',
    'iOS Native',
    'Android Native',
    'Desktop Application',
    'Cloud Platform',
    'API Development',
    'Database Design'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked ? [...(prev[field] as string[]), value] : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleVisitorTypeSelect = (type: string) => {
    setVisitorType(type);
    handleInputChange('visitorType', type);
    setCurrentStep(2);
  };

  const nextStep = () => currentStep < 4 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Tell us about yourself';
      case 2: return 'Business context';
      case 3: return 'Project requirements';
      case 4: return 'Goals & next steps';
      default: return 'Consultation Request';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Help us understand your role and context';
      case 2: return 'Share your business background and challenges';
      case 3: return 'Define your technical requirements and scope';
      case 4: return 'Outline your goals and success criteria';
      default: return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'role', 'visitorType'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setSubmitError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    // Check network connection
    if (!navigator.onLine) {
      setSubmitError('No internet connection. Please check your network and try again.');
      setIsSubmitting(false);
      return;
    }

    // Prepare form data
    const payload = {
      ...formData,
      platforms: formData.platforms.join(', '),
      visitorType: visitorTypes.find(t => t.id === formData.visitorType)?.title || formData.visitorType,
      _subject: `New Consultation Request from ${formData.name || 'a client'}`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: `Thank you for your submission, ${formData.name}! We'll contact you shortly.`
    };

    // Try FormSubmit first
    try {
      const response = await fetch('https://formsubmit.co/ajax/el/sovake', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        onSubmit(formData);
        return;
      }
      throw new Error(result.message || 'Form submission failed');
    } catch (formSubmitError: any) {
      console.warn('FormSubmit failed, trying fallback:', formSubmitError);
      
      // Fallback to email client
      try {
        const subject = `New Consultation Request from ${formData.name || 'a client'}`;
        const body = Object.entries(payload)
          .filter(([key]) => !key.startsWith('_')) // Remove formsubmit specific fields
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n\n');
        
        window.location.href = `mailto:mohsinkhan03061@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Consider this a success since we've opened the email client
        setSubmitSuccess(true);
        onSubmit(formData);
      } catch (fallbackError) {
        console.error('Fallback submission failed:', fallbackError);
        setSubmitError(`
          Error submitting form. Please try again or email us directly at mohsinkhan03061@gmail.com.
          ${formSubmitError.message.includes('Failed to fetch') 
            ? 'Network error occurred. Please check your internet connection.'
            : formSubmitError.message}
        `);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white" data-section="consultation-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <MessageSquare size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Strategic Consultation Request</span>
          </div>
          
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your consultation request has been submitted successfully. We'll contact you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setCurrentStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    phone: '',
                    visitorType: '',
                    companySize: '',
                    industry: '',
                    currentChallenges: '',
                    projectType: '',
                    timeline: '',
                    budget: '',
                    existingSystems: '',
                    teamSize: '',
                    platforms: [],
                    integrations: [],
                    scalabilityNeeds: '',
                    securityRequirements: '',
                    businessGoals: '',
                    successMetrics: '',
                    additionalInfo: ''
                  });
                  setVisitorType('');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {getStepTitle()}
              </h2>
              <p className="text-lg text-gray-600">
                {getStepDescription()}
              </p>
            </>
          )}
        </div>

        {!submitSuccess && (
          <>
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                      step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {step < currentStep ? <Check size={16} className="text-white" /> : step}
                    </div>
                    {step < 4 && <div className={`w-full h-1 mx-4 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-100'}`}></div>}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">Step {currentStep} of 4</span>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Visitor Type Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {visitorTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleVisitorTypeSelect(type.id)}
                          className={`p-6 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-lg ${
                            visitorType === type.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              visitorType === type.id ? 'bg-blue-600' : 'bg-gray-100'
                            }`}>
                              <IconComponent 
                                size={24} 
                                className={visitorType === type.id ? 'text-white' : 'text-gray-600'} 
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                              <p className="text-sm text-gray-600">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Business Context */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Business email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your role/title"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Company Size</label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => handleInputChange('companySize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select company size</option>
                        <option value="startup">Startup (1-10 employees)</option>
                        <option value="small">Small (11-50 employees)</option>
                        <option value="medium">Medium (51-200 employees)</option>
                        <option value="large">Large (201-1000 employees)</option>
                        <option value="enterprise">Enterprise (1000+ employees)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select industry</option>
                        <option value="fintech">FinTech</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="saas">SaaS</option>
                        <option value="education">Education</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Current Challenges</label>
                    <textarea
                      placeholder="Describe your main technology challenges or business objectives..."
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Project Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">Project Type</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <label key={type} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formData.projectType === type}
                            onChange={(e) => handleInputChange('projectType', e.target.value)}
                            className="text-blue-600 focus:ring-blue-500"
                            required
                          />
                          <span className="text-sm text-gray-900">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (1-2 months)</option>
                        <option value="quarter">This quarter (3 months)</option>
                        <option value="half-year">Next 6 months</option>
                        <option value="year">Within a year</option>
                        <option value="planning">Just planning</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="over-500k">Over $500K</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">Platforms & Technologies</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {platforms.map((platform) => (
                        <label key={platform} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.platforms.includes(platform)}
                            onChange={(e) => handleArrayChange('platforms', platform, e.target.checked)}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-900">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Goals & Success Metrics */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Business Goals</label>
                    <textarea
                      placeholder="What are your primary business objectives for this project?"
                      value={formData.businessGoals}
                      onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Success Metrics</label>
                    <textarea
                      placeholder="How will you measure the success of this project?"
                      value={formData.successMetrics}
                      onChange={(e) => handleInputChange('successMetrics', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Additional Information</label>
                    <textarea
                      placeholder="Any additional context, requirements, or questions?"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <ArrowLeft size={16} />
                      <span>Previous</span>
                    </button>
                  )}
                </div>
                
                <div>
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={currentStep === 1 && !visitorType}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 flex items-center space-x-2"
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? 'Sending...' : 'Request Consultation'}</span>
                    </button>
                  )}
                </div>
              </div>

              {submitError && (
                <div className="text-red-500 text-center mt-4">
                  {submitError}
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default IntelligentIntakeForm;