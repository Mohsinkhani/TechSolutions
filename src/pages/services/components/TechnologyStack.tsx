import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
  interface Technology {
  name: string;
  description: string;
  icon: string;
  expertise: string;
  projects: string;
}

interface TechnologyCategory {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  technologies: Technology[];
}

const TechnologyStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');

  const technologies: Record<string, TechnologyCategory> = {
    frontend: {
      title: 'Frontend Excellence',
      description: 'Modern, responsive user interfaces that deliver exceptional user experiences',
      icon: 'Monitor',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      technologies: [
        {
          name: 'React',
          description: 'Component-based UI library for building interactive interfaces',
          icon: 'Atom',
          expertise: 'Expert',
          projects: '150+ projects'
        },
        {
          name: 'Next.js',
          description: 'Full-stack React framework with SSR and static generation',
          icon: 'Layers',
          expertise: 'Expert',
          projects: '100+ projects'
        },
        {
          name: 'TypeScript',
          description: 'Type-safe JavaScript for large-scale application development',
          icon: 'Code2',
          expertise: 'Advanced',
          projects: '120+ projects'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development',
          icon: 'Palette',
          expertise: 'Expert',
          projects: '200+ projects'
        },
        {
          name: 'Vue.js',
          description: 'Progressive framework for building user interfaces',
          icon: 'Triangle',
          expertise: 'Advanced',
          projects: '80+ projects'
        },
        {
          name: 'Angular',
          description: 'Platform for building mobile and desktop web applications',
          icon: 'Box',
          expertise: 'Intermediate',
          projects: '60+ projects'
        }
      ]
    },
    backend: {
      title: 'Backend Power',
      description: 'Scalable server-side solutions that handle millions of requests',
      icon: 'Server',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      technologies: [
        {
          name: 'Node.js',
          description: 'JavaScript runtime for building scalable network applications',
          icon: 'Zap',
          expertise: 'Expert',
          projects: '180+ projects'
        },
        {
          name: 'Python',
          description: 'Versatile language for web development and data processing',
          icon: 'Code',
          expertise: 'Expert',
          projects: '140+ projects'
        },
        {
          name: 'Express.js',
          description: 'Fast, unopinionated web framework for Node.js',
          icon: 'Globe',
          expertise: 'Expert',
          projects: '160+ projects'
        },
        {
          name: 'Django',
          description: 'High-level Python web framework for rapid development',
          icon: 'Shield',
          expertise: 'Advanced',
          projects: '90+ projects'
        },
        {
          name: 'GraphQL',
          description: 'Query language and runtime for APIs',
          icon: 'GitBranch',
          expertise: 'Advanced',
          projects: '70+ projects'
        },
        {
          name: 'REST APIs',
          description: 'RESTful web services for seamless data exchange',
          icon: 'Link',
          expertise: 'Expert',
          projects: '200+ projects'
        }
      ]
    },
    database: {
      title: 'Database Solutions',
      description: 'Robust data storage and management systems for any scale',
      icon: 'Database',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
      technologies: [
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database system',
          icon: 'HardDrive',
          expertise: 'Expert',
          projects: '130+ projects'
        },
        {
          name: 'MongoDB',
          description: 'NoSQL document database for flexible data models',
          icon: 'FileText',
          expertise: 'Expert',
          projects: '110+ projects'
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store for caching and sessions',
          icon: 'Zap',
          expertise: 'Advanced',
          projects: '95+ projects'
        },
        {
          name: 'MySQL',
          description: 'Popular relational database management system',
          icon: 'Database',
          expertise: 'Expert',
          projects: '150+ projects'
        },
        {
          name: 'Elasticsearch',
          description: 'Distributed search and analytics engine',
          icon: 'Search',
          expertise: 'Intermediate',
          projects: '45+ projects'
        },
        {
          name: 'Firebase',
          description: 'Real-time NoSQL database with offline support',
          icon: 'Cloud',
          expertise: 'Advanced',
          projects: '80+ projects'
        }
      ]
    },
    cloud: {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud deployment solutions',
      icon: 'Cloud',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      technologies: [
        {
          name: 'AWS',
          description: 'Comprehensive cloud computing platform and services',
          icon: 'CloudLightning',
          expertise: 'Expert',
          projects: '120+ projects'
        },
        {
          name: 'Azure',
          description: 'Microsoft cloud platform for building and deploying apps',
          icon: 'Cloud',
          expertise: 'Advanced',
          projects: '85+ projects'
        },
        {
          name: 'Google Cloud',
          description: 'Google\'s suite of cloud computing services',
          icon: 'Globe',
          expertise: 'Advanced',
          projects: '70+ projects'
        },
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployments',
          icon: 'Package',
          expertise: 'Expert',
          projects: '140+ projects'
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration for automated deployment',
          icon: 'Settings',
          expertise: 'Advanced',
          projects: '60+ projects'
        },
        {
          name: 'Vercel',
          description: 'Platform for frontend frameworks and static sites',
          icon: 'Rocket',
          expertise: 'Expert',
          projects: '90+ projects'
        }
      ]
    }
  };

  const categories = Object.keys(technologies);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Layers" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Technology Stack</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, 
            and future-proof web applications that drive business growth.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const tech = technologies[category];
            const isActive = selectedCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? `${tech.bgColor} ${tech.color} border-2 ${tech.borderColor}`
                    : 'bg-surface text-text-secondary hover:bg-surface-secondary border-2 border-transparent'
                }`}
              >
                {/* <Icon name={tech.icon} size={20} /> */}
                <span>{tech.title}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {technologies[selectedCategory].title}
            </h3>
            <p className="text-text-secondary">
              {technologies[selectedCategory].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies[selectedCategory].technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${technologies[selectedCategory].bgColor} rounded-lg flex items-center justify-center`}>
                    {/* <Icon name={tech.icon} size={24} className={technologies[selectedCategory].color} /> */}
                  </div>
                  <div className="text-right">
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      tech.expertise === 'Expert' ?'bg-success/10 text-success' 
                        : tech.expertise === 'Advanced' ?'bg-warning/10 text-warning' :'bg-secondary/10 text-secondary'
                    }`}>
                      {tech.expertise}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-text-primary mb-2">{tech.name}</h4>
                <p className="text-sm text-text-secondary mb-4">{tech.description}</p>
                
                <div className="flex items-center justify-between text-xs text-text-tertiary">
                  <span>{tech.projects}</span>
                  <Icon name="TrendingUp" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Benefits */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Why These Technologies?</h3>
            <p className="text-text-secondary">
              Our technology choices are driven by performance, scalability, and long-term maintainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Performance</h4>
              <p className="text-sm text-text-secondary">
                Optimized for speed and efficiency with sub-second response times
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Scalability</h4>
              <p className="text-sm text-text-secondary">
                Built to handle growth from startup to enterprise scale
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Security</h4>
              <p className="text-sm text-text-secondary">
                Enterprise-grade security with industry best practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={24} className="text-warning" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Maintainability</h4>
              <p className="text-sm text-text-secondary">
                Clean, documented code that's easy to update and extend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;