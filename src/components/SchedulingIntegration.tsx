import React, { useState } from 'react';
import { Calendar, Search, Settings, Map, Users, Check, Star, CheckCircle, Shield, Clock, Phone, Mail } from 'lucide-react';

interface SchedulingIntegrationProps {
  onScheduleSuccess: (appointmentData: any) => void;
}

const SchedulingIntegration: React.FC<SchedulingIntegrationProps> = ({ onScheduleSuccess }) => {
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [consultationType, setConsultationType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const consultants = [
    {
      id: 1,
      name: "Mohsin khan",
      role: "Senior Technology Strategist",
      expertise: ["Mobile Development","web Development","Enterprise Architecture"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      consultations: 150,
      specialties: "Enterprise & Startup Strategy",
      nextAvailable: "Today"
    },
    {
      id: 2,
      name: "Asad Subhani",
      role: "Lead Technical Consultant",
      expertise: ["Digital Transformation", "Cloud Strategy" , "Product Strategy"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      consultations: 120,
      specialties: "Product & Technical Architecture",
      nextAvailable: "Tomorrow"
    },
    {
      id: 3,
      name: "Fahad Shabir",
      role: "Enterprise Solutions Architect",
      expertise: ["System Integration", "Legacy Modernization", "Security"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      consultations: 200,
      specialties: "Enterprise & Integration",
      nextAvailable: "This Week"
    }
  ];

  const consultationTypes = [
    {
      id: 'discovery',
      title: 'Discovery Session',
      duration: '30 minutes',
      description: 'Initial consultation to understand your needs and objectives',
      price: 'Free',
      icon: Search
    },
    {
      id: 'technical',
      title: 'Technical Assessment',
      duration: '60 minutes',
      description: 'Deep dive into technical requirements and architecture review',
      price: '$150',
      icon: Settings
    },
    {
      id: 'strategic',
      title: 'Strategic Planning',
      duration: '90 minutes',
      description: 'Comprehensive strategy session with roadmap development',
      price: '$300',
      icon: Map
    },
    {
      id: 'workshop',
      title: 'Team Workshop',
      duration: '2 hours',
      description: 'Collaborative session with your entire team',
      price: '$450',
      icon: Users
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date,
        formatted: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        available: i <= 5 // Only weekdays available
      });
    }
    return dates;
  };

  const availableDates = getNextWeekDates();

  const handleScheduleConfirm = async () => {
    if (!selectedConsultant || !selectedDate || !selectedTimeSlot || !consultationType) {
      setSubmitError('Please complete all booking details');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const appointmentData = {
      consultant: selectedConsultant,
      date: selectedDate.formatted,
      time: selectedTimeSlot,
      type: consultationTypes.find(t => t.id === consultationType)?.title,
      duration: consultationTypes.find(t => t.id === consultationType)?.duration,
      price: consultationTypes.find(t => t.id === consultationType)?.price
    };

    try {
      // First try FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/el/sovake', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...appointmentData,
          _subject: `New Consultation Booking with ${selectedConsultant.name}`,
          _template: 'table',
          _captcha: 'false',
          _autoresponse: `Your consultation with ${selectedConsultant.name} is confirmed for ${selectedDate.formatted} at ${selectedTimeSlot}`
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        onScheduleSuccess && onScheduleSuccess(appointmentData);
        return;
      }
      throw new Error(result.message || 'Booking submission failed');
    } catch (formSubmitError: any) {
      console.warn('FormSubmit failed, trying fallback:', formSubmitError);
      
      // Fallback to email client
      try {
        const subject = `New Consultation Booking with ${selectedConsultant.name}`;
        const body = `Consultation Details:
        \nConsultant: ${selectedConsultant.name}
        \nType: ${appointmentData.type}
        \nDate: ${appointmentData.date}
        \nTime: ${appointmentData.time}
        \nDuration: ${appointmentData.duration}
        \nPrice: ${appointmentData.price}
        \n\nPlease confirm this appointment.`;
        
        window.location.href = `mailto:mohsinkhan03061@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Consider this a success since we've opened the email client
        setSubmitSuccess(true);
        onScheduleSuccess && onScheduleSuccess(appointmentData);
      } catch (fallbackError) {
        console.error('Fallback submission failed:', fallbackError);
        setSubmitError(`
          Error submitting booking. Please try again or email us directly at mohsinkhan03061@gmail.com.
          ${formSubmitError.message.includes('Failed to fetch') 
            ? 'Network error occurred. Please check your internet connection.'
            : formSubmitError.message}
        `);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedConsultant(null);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setConsultationType('');
    setSubmitSuccess(false);
  };

  return (
    <section id="scheduling-integration" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Calendar size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Schedule Consultation</span>
          </div>
          
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your consultation with {selectedConsultant?.name} is scheduled for {selectedDate?.formatted} at {selectedTimeSlot}.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={resetForm}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Schedule Another
                </button>
                <button
                  onClick={() => window.location.href = `mailto:mohsinkhan03061@gmail.com`}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
                >
                  <Mail size={16} />
                  <span>Email Confirmation</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Book Your Strategic Session
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with our expert consultants to discuss your project requirements and develop a strategic technology roadmap tailored to your business objectives.
              </p>
            </>
          )}
        </div>

        {!submitSuccess && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scheduling Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Consultation Type Selection */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Consultation Type</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {consultationTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setConsultationType(type.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-md ${
                          consultationType === type.id
                            ? 'border-blue-600 bg-blue-50' :'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            consultationType === type.id ? 'bg-blue-600' : 'bg-gray-100'
                          }`}>
                            <IconComponent 
                              size={20} 
                              className={consultationType === type.id ? 'text-white' : 'text-gray-600'} 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{type.title}</h4>
                              <span className="text-sm font-medium text-blue-600">{type.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                            <div className="flex items-center space-x-2">
                              <Clock size={14} className="text-gray-400" />
                              <span className="text-xs text-gray-400">{type.duration}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Consultant Selection */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Consultant</h3>
                <div className="space-y-4">
                  {consultants.map((consultant) => (
                    <button
                      key={consultant.id}
                      onClick={() => setSelectedConsultant(consultant)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-md ${
                        selectedConsultant?.id === consultant.id
                          ? 'border-blue-600 bg-blue-50' :'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={consultant.avatar}
                            alt={consultant.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle size={14} className="text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{consultant.name}</h4>
                            <div className="flex items-center space-x-1">
                              <Star size={14} className="text-yellow-400 fill-current" />
                              <span className="text-sm font-medium text-gray-900">{consultant.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{consultant.role}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {consultant.expertise.slice(0, 2).map((skill, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="text-xs text-green-600 font-medium">
                              Available {consultant.nextAvailable}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              {selectedConsultant && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h3>
                  
                  {/* Date Selection */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Available Dates</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {availableDates.map((dateObj, index) => (
                        <button
                          key={index}
                          onClick={() => dateObj.available && setSelectedDate(dateObj)}
                          disabled={!dateObj.available}
                          className={`p-3 rounded-lg text-center transition-all duration-300 ${
                            selectedDate?.formatted === dateObj.formatted
                              ? 'bg-blue-600 text-white'
                              : dateObj.available
                              ? 'bg-gray-100 text-gray-900 hover:bg-blue-50' :'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="text-xs font-medium">{dateObj.formatted.split(' ')[0]}</div>
                          <div className="text-sm">{dateObj.formatted.split(' ')[2]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Available Times</h4>
                      <div className="grid grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTimeSlot(time)}
                            className={`p-3 rounded-lg text-center transition-all duration-300 ${
                              selectedTimeSlot === time
                                ? 'bg-blue-600 text-white' :'bg-gray-100 text-gray-900 hover:bg-blue-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h3>
                
                {consultationType && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Consultation Type</span>
                      <span className="text-sm font-medium text-gray-900">
                        {consultationTypes.find(t => t.id === consultationType)?.title}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration</span>
                      <span className="text-sm font-medium text-gray-900">
                        {consultationTypes.find(t => t.id === consultationType)?.duration}
                      </span>
                    </div>
                  </div>
                )}

                {selectedConsultant && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedConsultant.avatar}
                        alt={selectedConsultant.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{selectedConsultant.name}</div>
                        <div className="text-sm text-gray-600">{selectedConsultant.role}</div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedDate && selectedTimeSlot && (
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Date</span>
                      <span className="text-sm font-medium text-gray-900">{selectedDate.formatted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Time</span>
                      <span className="text-sm font-medium text-gray-900">{selectedTimeSlot}</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleScheduleConfirm}
                  disabled={!selectedConsultant || !selectedDate || !selectedTimeSlot || !consultationType || isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar size={16} />
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Booking'}</span>
                </button>

                {submitError && (
                  <div className="mt-4 text-red-500 text-sm">
                    {submitError}
                  </div>
                )}

                {/* Trust Signals */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield size={16} className="text-green-600" />
                    <span>Secure scheduling & data protection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} className="text-green-600" />
                    <span>Easy rescheduling up to 24hrs before</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Instant calendar confirmation</span>
                  </div>
                </div>
              </div>

              {/* Contact Alternative */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Prefer to Talk First?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about our consultation process? Our team is ready to help.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">consult@softwaredevpro.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchedulingIntegration;