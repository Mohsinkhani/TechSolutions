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

const guarantees: Guarantee[] = [
  {
    title: "On-Time Delivery",
    description: "We guarantee your project will be delivered on schedule, every time.",
    icon: "Clock"
  },
  {
    title: "Satisfaction Promise",
    description: "Not happy? We'll work until you are, or your money back.",
    icon: "Smile"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, ever. You get clear, upfront pricing.",
    icon: "DollarSign"
  }
];

const contactOptions: ContactOption[] = [
  {
    title: "Book a Free Consultation",
    description: "Schedule a 1:1 strategy session with our experts to discuss your goals.",
    action: "Book Now",
    icon: "Calendar",
    primary: true,
    link: "/consultation-gateway-strategic-planning-portal"
  },
  {
    title: "Request a Quote",
    description: "Get a detailed, no-obligation quote tailored to your project.",
    action: "Get Quote",
    icon: "FileText",
    primary: false,
    link: "/request-quote"
  },
  {
    title: "Contact Support",
    description: "Have questions? Our team is here to help you every step of the way.",
    action: "Contact Us",
    icon: "MessageCircle",
    primary: false,
    link: "/contact"
  }
];

const nextSteps: NextStep[] = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We learn about your business, goals, and challenges to tailor our approach.",
    duration: "30 min",
    icon: "Phone"
  },
  {
    step: "2",
    title: "Strategy & Proposal",
    description: "Receive a custom strategy and transparent proposal for your project.",
    duration: "1-2 days",
    icon: "ClipboardList"
  },
  {
    step: "3",
    title: "Kickoff & Delivery",
    description: "We execute, iterate, and deliver your solution with ongoing support.",
    duration: "2-6 weeks",
    icon: "Rocket"
  }
];

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black py-24 text-white">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA - Enhanced */}
        <div className="mb-20 text-center">
          <div className="mb-5 flex items-center justify-center space-x-2 text-cyan-400">
            <div className="animate-pulse rounded-full bg-cyan-400/20 p-1.5">
              <Icon name="Zap" size={20} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Ready to Transform?
            </span>
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">
            Turn Your Vision Into <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
            Join hundreds of successful businesses who've transformed their operations with our 
            strategic web solutions. Your competitive advantage starts now.
          </p>
          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/consultation-gateway-strategic-planning-portal">
              <Button
                variant="primary"
                // iconName="Calendar"
                iconPosition="left"
                className="group bg-gradient-to-r from-cyan-600 to-blue-500 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start Your Project Today
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Button>
            </Link>
            <Link to="/portfolio-case-studies-transformation-stories">
              <Button
                variant="outline"
                // iconName="Play"
                iconPosition="left"
                className="border-white/30 text-white backdrop-blur-sm hover:bg-white/10"
              >
                See Success Stories
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { icon: "CheckCircle", text: "Free Consultation", color: "text-green-400" },
              { icon: "Clock", text: "Quick Response", color: "text-cyan-400" },
              { icon: "Shield", text: "No Obligations", color: "text-yellow-400" },
              { icon: "Award", text: "Industry Experts", color: "text-purple-300" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
 
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>
               <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section - Enhanced */}
        <div className="mb-20">
          <div className="mb-16 text-center">
            <h3 className="mb-3 text-2xl font-bold">Your Success Blueprint</h3>
            <p className="mx-auto max-w-xl text-gray-300">
              Our proven 3-step process for digital transformation success
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-12 hidden h-1 w-4/5 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 md:block"></div>
            <div className="grid gap-10 md:grid-cols-3">
              {nextSteps.map((step, index) => (
                <div key={index} className="relative z-10" >
                  <div className="flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:shadow-lg">
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 font-bold text-white shadow">
                        {step.step}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>                      </div>
                    </div>
                    <div className="mt-auto">
                      <h4 className="mb-3 text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mb-4 text-gray-300">{step.description}</p>
                      <div className="flex items-center text-sm font-medium text-cyan-400">
                        <Icon name="Clock" size={14} className="mr-2" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Options - Enhanced */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {contactOptions.map((option, index) => (
            <Link key={index} to={option.link} className="block">
              <div className={`h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                option.primary 
                  ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-600/90 to-blue-500 shadow-lg' 
                  : 'border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/30'
              }`}>
                <div className="p-6">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                    option.primary ? 'bg-white/20' : 'bg-gray-700/50'
                  }`}>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-white">{option.title}</h4>
                  <p className={`mb-5 ${option.primary ? 'text-white/90' : 'text-gray-300'}`}>
                    {option.description}
                  </p>
                  <div className={`flex items-center font-medium ${
                    option.primary ? 'text-white' : 'text-cyan-400'
                  }`}>
                    <span>{option.action}</span>
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="ml-2 transition-transform group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Guarantees - Enhanced */}
        <div className="mb-16 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/30 p-8 backdrop-blur-lg">
          <div className="mb-12 text-center">
            <h3 className="mb-3 text-2xl font-bold text-white">Our Ironclad Promises</h3>
            <p className="mx-auto max-w-xl text-gray-300">
              We stand behind our work with concrete commitments to your success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-blue-500">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
  <Icon name="Star" size={24} className="text-cyan-400 drop-shadow" />
</div>                </div>
                <h4 className="mb-3 text-lg font-semibold text-white">{guarantee.title}</h4>
                <p className="text-gray-300">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="mx-auto mb-8 max-w-xl">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300">
              Let's build something extraordinary together
            </p>
          </div>
          <Link to="/consultation-gateway-strategic-planning-portal">
            <Button
              variant="primary"
              size="xl"
              // iconName="Rocket"
              iconPosition="left"
              className="group bg-gradient-to-r from-cyan-600 to-blue-500 py-5 text-lg shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Launch Your Project Now
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </Button>
          </Link>
          <p className="mt-8 text-gray-400">
            No obligations • 100% risk-free • Confidential consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;