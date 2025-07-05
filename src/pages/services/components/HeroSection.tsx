import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
interface HeroSectionProps {
  onNavigateToConsultation: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToConsultation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles: any[] = [];
    const particleCount = 150;
    const connectionDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(100, 200, 255, ${Math.random() * 0.5 + 0.1})`,
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (ctx) {
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)'); // Navy
        gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.6)'); // Dark blue
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)'); // Navy
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Boundary checks
          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        // Draw connections between particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              const opacity = 1 - distance / connectionDistance;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Animation variants for text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative text-white overflow-hidden h-screen flex items-center">
      {/* Canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-transparent via-blue-900/10 to-transparent animate-gradient-pan">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,200,255,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      {/* Floating spheres */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl animate-float animation-delay-4000"></div>
      
      {/* Shining stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          variants={item}
          transition={{ duration: 0.8 }}
        >
          We Build <motion.span 
            className="text-cyan-400"
            animate={{ 
              textShadow: ["0 0 5px rgba(56,189,248,0)", "0 0 15px rgba(56,189,248,0.5)", "0 0 5px rgba(56,189,248,0)"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >Web</motion.span>, <motion.span 
            className="text-blue-400"
            animate={{ 
              textShadow: ["0 0 5px rgba(96,165,250,0)", "0 0 15px rgba(96,165,250,0.5)", "0 0 5px rgba(96,165,250,0)"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 0.3
            }}
          >Apps</motion.span> & <motion.span 
            className="text-purple-400"
            animate={{ 
              textShadow: ["0 0 5px rgba(192,132,252,0)", "0 0 15px rgba(192,132,252,0.5)", "0 0 5px rgba(192,132,252,0)"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 0.6
            }}
          >Digital Solutions</motion.span>
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          variants={item}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From websites and mobile apps to e-commerce and digital marketing — we turn ideas into scalable solutions.
        </motion.p>

       <motion.div 
  className="mt-10"
  variants={item}
  transition={{ duration: 0.8, delay: 0.4 }}
>
   <Button
      variant="primary"
      size="lg"
      className="relative overflow-hidden group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
      onClick={onNavigateToConsultation}
    >
      <span className="relative z-10">Get Started</span>
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute top-0 left-0 w-full h-0.5 bg-white animate-button-line"></span>
    </Button>
</motion.div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-20 left-10 w-10 h-10 rounded-full bg-cyan-400/20 shadow-lg"
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-purple-400/20 shadow-lg"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute top-20 right-1/4 w-8 h-8 rounded-full bg-blue-400/20 shadow-lg"
        animate={{ 
          y: [0, -25, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll down</span>
        <div className="w-1 h-8 bg-gray-400 rounded-full">
          <motion.div 
            className="w-1 h-4 bg-white rounded-full"
            animate={{ y: [0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;