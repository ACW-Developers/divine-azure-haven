import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Shield, 
  Heart,
  Award,
  Calendar,
  MapPin,
  BadgeCheck,
  TrendingUp,
  Sparkles,
  Star,
  Users,
  Phone
} from 'lucide-react';

import companionActivities from '@/assets/companion-care-activities.jpg';
import seniorReading from '@/assets/senior-reading.jpg';

export const FeaturesSection = () => {
  const featuresAnimation = useScrollAnimation(0.1);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your complete peace of mind.',
      stat: '100%',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: '0.1s'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Caregivers selected for empathy and professionalism. Family-like treatment.',
      stat: '500+',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      delay: '0.2s'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Care Available', icon: Clock, color: 'text-green-600' },
    { number: '100%', label: 'Screened Staff', icon: BadgeCheck, color: 'text-amber-600' }
  ];

  // Bubble background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();

    const bubbles = Array.from({ length: isMobile ? 8 : 12 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * (isMobile ? 30 : 40) + 15,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.08 + 0.03
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        bubble.y -= bubble.speed;
        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.radius
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${bubble.opacity})`);
        gradient.addColorStop(1, `rgba(147, 197, 253, ${bubble.opacity * 0.3})`);

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, [isMobile]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/10 relative overflow-hidden">
      {/* Animated Bubble Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={seniorReading}
          alt="Care certification and quality background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 lg:left-10 w-48 lg:w-72 h-48 lg:h-72 bg-primary/5 rounded-full animate-float blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 right-5 lg:right-10 w-64 lg:w-96 h-64 lg:h-96 bg-accent/5 rounded-full animate-pulse-slow blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 lg:w-64 h-40 lg:h-64 bg-secondary/5 rounded-full animate-float-slow blur-2xl lg:blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mobile First - Stacked Layout for Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Enhanced for Mobile */}
          <div 
            ref={featuresAnimation.elementRef}
            className={`w-full transition-all duration-1000 ${
              featuresAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            {/* Header Section */}
            <div className="text-center lg:text-left mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6 border border-primary/20 shadow-sm">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                <span className="text-primary font-semibold text-xs lg:text-sm uppercase tracking-wide">
                  WHY CHOOSE US
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Setting the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Standard
                </span>{' '}
                in Home Care
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With years of experience and countless success stories, we've perfected the art of 
                compassionate care that truly makes a difference in people's lives across Arizona.
              </p>
            </div>

            {/* Enhanced Features Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-0">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 ${
                    featuresAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="flex items-start gap-4">
                    {/* Stat Circle - Enhanced */}
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${feature.color} rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                      <div className="text-white font-bold text-sm lg:text-lg z-10">
                        {feature.stat}
                      </div>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                </div>
              ))}
            </div>

            {/* Trust Indicators - Mobile Optimized */}
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start mt-8">
              {[
                { icon: Shield, text: 'Licensed' },
                { icon: BadgeCheck, text: 'Insured' },
                { icon: MapPin, text: 'Arizona' }
              ].map((item, index) => (
                <div 
                  key={item.text}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm text-gray-700 border border-gray-200"
                >
                  <item.icon className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Graphics - Enhanced for Mobile */}
          <div className={`w-full relative group ${
            featuresAnimation.isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-10'
          }`}>
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={companionActivities}
                alt="Happy family with caregiver in Arizona"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced Stats Overlay - Responsive */}
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div 
                        key={stat.label}
                        className="bg-white/95 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
                        style={{ 
                          animationDelay: `${0.5 + index * 0.1}s`,
                          transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
                        }}
                      >
                        <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2 ${stat.color}`} />
                        <div className="text-lg lg:text-xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-xs lg:text-sm text-gray-600 leading-tight">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Animated Sparkles */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-accent animate-pulse" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                <span className="text-white text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Trusted in AZ
                </span>
              </div>
            </div>

            {/* CTA Section Below Image on Mobile */}
            <div className="lg:hidden mt-6 text-center">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Schedule Free Consultation
              </Button>
              <p className="text-gray-600 text-sm mt-2">
                Available 24/7 • No Commitment Required
              </p>
            </div>

            {/* Enhanced Floating Background Element */}
            <div className="absolute -z-10 -inset-2 lg:-inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};