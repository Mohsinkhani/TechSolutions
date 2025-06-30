import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/ui/AppIcon';
import Button from '../../../components/ui/Button';
 
interface NextStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

interface ContactOption {
  title: string;
  description: string;
  action: string;
  icon: string;
  primary: boolean;
  link: string;
}

interface Guarantee {
  title: string;
  description: string;
  icon: string;
}

const CTASection: React.FC = () => {
  const nextSteps: NextStep[] = [
    {
      step: "1",
      title: "Discovery Call",
      description: "30-minute consultation to understand your goals and requirements",
      duration: "30 minutes",
      icon: "Phone"
    },
    {
      step: "2",
      title: "Project Proposal",
      description: "Detailed technical proposal with timeline and investment breakdown",
      duration: "2-3 days",
      icon: "FileText"
    },
    {
      step: "3",
      title: "Development Kickoff",
      description: "Project initiation with team introductions and milestone planning",
      duration: "1 week",
      icon: "Rocket"
    }
  ];

  const contactOptions: ContactOption[] = [
    {
      title: "Schedule Consultation",
      description: "Book a strategic planning session with our technical experts",
      action: "Book Now",
      icon: "Calendar",
      primary: true,
      link: "/consultation-gateway-strategic-planning-portal"
    },
    {
      title: "View Our Work",
      description: "Explore detailed case studies and transformation stories",
      action: "See Portfolio",
      icon: "ExternalLink",
      primary: false,
      link: "/portfolio-case-studies-transformation-stories"
    },
    {
      title: "Technical Discussion",
      description: "Connect directly with our development team for technical questions",
      action: "Contact Team",
      icon: "MessageSquare",
      primary: false,
      link: "/about-team-expertise-company-culture"
    }
  ];

  const guarantees: Guarantee[] = [
    {
      title: "No-Risk Consultation",
      description: "Free initial consultation with no obligations",
      icon: "Shield"
    },
    {
      title: "Transparent Pricing",
      description: "Clear project estimates with no hidden costs",
      icon: "DollarSign"
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction or we'll make it right",
      icon: "CheckCircle"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-conversion-accent mb-4">
            <Icon name="Zap" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Ready to Transform?</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Turn Your Vision Into
            <span className="text-conversion-accent"> Digital Reality</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful businesses who've transformed their operations with our 
            strategic web development solutions. Your competitive advantage starts here.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/consultation-gateway-strategic-planning-portal">
              <Button
                variant="primary"
                size="xl"
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-accent hover:bg-cyan-500 text-white shadow-lg"
              >
                Start Your Project Today
              </Button>
            </Link>
            
            <Link to="/portfolio-case-studies-transformation-stories">
              <Button
                variant="outline"
                size="xl"
                iconName="Play"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10"
              >
                See Success Stories
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-conversion-accent" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-warning" />
              <span>No Obligations</span>
            </div>
          </div>
        </div>

        {/* Next Steps Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Your Journey to Success</h3>
            <p className="text-gray-300">
              Simple, transparent process from initial consultation to project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < nextSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 z-0"></div>
                )}
                
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-conversion-accent rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      {/* <Icon name={step.icon} size={20} color="white" /> */}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                  <div className="text-xs text-conversion-accent font-medium">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <Link key={index} to={option.link} className="block">
              <div className={`h-full p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                option.primary 
                  ? 'bg-conversion-accent border-conversion-accent text-white shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20'
              }`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  option.primary ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {/* <Icon name={option.icon} size={24} color="white" /> */}
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{option.title}</h4>
                <p className={`text-sm mb-4 ${option.primary ? 'text-white/90' : 'text-gray-300'}`}>
                  {option.description}
                </p>
                
                <div className="flex items-center space-x-2 font-medium">
                  <span>{option.action}</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
            <p className="text-gray-300">
              We stand behind our work with concrete guarantees and transparent practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* <Icon name={guarantee.icon} size={24} color="white" /> */}
                </div>
                <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                <p className="text-sm text-gray-300">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to join the ranks of successful businesses we've transformed?
          </p>
          <Link to="/consultation-gateway-strategic-planning-portal">
            <Button
              variant="primary"
              size="xl"
              iconName="Rocket"
              iconPosition="left"
              className="bg-conversion-accent hover:bg-cyan-500 text-white shadow-xl"
            >
              Let's Build Something Amazing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;