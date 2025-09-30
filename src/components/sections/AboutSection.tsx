import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Shield, 
  Users, 
  Sparkles, 
  Target, 
  Eye,
  Award,
  Star,
  Clock,
  MapPin,
  BadgeCheck,
  ChevronRight,
  Ribbon,
  Gem,
  Home,
  HandHelping
} from 'lucide-react';

// Import local images for DivineAngel Care
import aboutHero from '@/assets/general/g3.jpg';
import missionImage from '@/assets/companion-care-activities.jpg';
import teamImage from '@/assets/general/c3.jpg';
import valuesImage from '@/assets/Caregiver.jpeg';
import arizonaService from '@/assets/meal-preparation.jpg';

export const AboutSection = () => {
  const sectionAnimation = useScrollAnimation(0.1);
  const [currentImage, setCurrentImage] = useState(0);
  const canvasRef = useRef(null);

  const galleryImages = [
    {
      src: aboutHero,
      alt: 'Compassionate caregiver assisting senior in Arizona home'
    },
    {
      src: missionImage,
      alt: 'Senior enjoying companionship and conversation'
    },
    {
      src: teamImage,
      alt: 'Professional caregiving team providing quality care'
    },
    {
      src: valuesImage,
      alt: 'Family receiving supportive care services'
    }
  ];

  // Core Values for DivineAngel Care
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      initial: 'C',
      description: 'We treat every client with the same empathy, dignity, and respect we would show our own family members.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      initial: 'T',
      description: 'Your loved one\'s safety is our highest priority. All caregivers are thoroughly screened and insured.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Family Partnership',
      initial: 'F',
      description: 'We work closely with families to create personalized care plans that meet unique needs and preferences.',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Star,
      title: 'Excellence',
      initial: 'E',
      description: 'Committed to the highest standards of care through continuous training and quality improvement.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Clock,
      title: 'Reliability',
      initial: 'R',
      description: '24/7 dependable service you can count on. We show up when you need us most.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Gem,
      title: 'Integrity',
      initial: 'I',
      description: 'Honest, transparent communication and ethical practices in everything we do.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: HandHelping,
      title: 'Dignity',
      initial: 'D',
      description: 'Preserving and enhancing the dignity and independence of every individual we serve.',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-orange-500'
    },
    {
      icon: Home,
      title: 'Comfort',
      initial: 'C',
      description: 'Enabling seniors to remain in the comfort of their own homes with quality support.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500'
    }
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Animated background bubbles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 50 + 20,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.08 + 0.02
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
        gradient.addColorStop(1, `rgba(147, 197, 253, ${bubble.opacity * 0.2})`);

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fade animation component
  const FadeIn = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10">
      {/* Animated Bubble Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric shapes */}
        <div className="absolute left-0 top-1/4 w-32 h-32 opacity-5">
          <svg viewBox="0 0 200 200" className="text-blue-500 w-full h-full">
            <polygon points="100,0 0,200 200,200" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-0 bottom-1/3 w-40 h-40 opacity-5">
          <svg viewBox="0 0 200 200" className="text-indigo-500 w-full h-full">
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            ))}

            {/* Gallery indicators */}
            <div className="absolute bottom-8 left-8 z-10 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Floating badges */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-blue-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Serving Arizona
              </span>
            </div>
            <div className="absolute top-20 right-8 bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-white flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                State Licensed
              </span>
            </div>
          </div>

          <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  ABOUT DIVINEANGEL CARE
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Compassionate Care{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  That Feels Like Family
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

              <p className="text-xl text-gray-600 leading-relaxed">
                DivineAngel Care LLC was founded with a simple yet powerful mission: to provide exceptional 
                non-medical home care that allows seniors and individuals in need to maintain their independence 
                and dignity in the comfort of their own homes. Based in Arizona, we've become the trusted choice 
                for families seeking compassionate, reliable care for their loved ones.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Our Full Story
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 group">
                  Meet Our Team
                  <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/30 transition-all duration-500 h-full group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide exceptional, compassionate non-medical home care that enhances the quality of life 
                for seniors and individuals in need throughout Arizona. We enable our clients to maintain independence 
                and dignity in the comfort of their own homes through personalized care plans and dedicated support.
              </p>
              
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-blue-100/50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Serving All of Arizona</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BadgeCheck className="w-4 h-4 text-green-600" />
                  <span>State Licensed</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-6 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Our Vision</h3>
                    <div className="w-12 h-1 bg-white/60 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 flex-grow">
                  "To be Arizona's most trusted and innovative non-medical home care provider, 
                  setting new standards for compassionate care while building stronger, healthier 
                  communities where every individual can age with grace, purpose, and connection."
                </blockquote>
                
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Innovation Driven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-300" />
                    <span>Community Focused</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/5 rounded-full animate-pulse"></div>
              </div>
            </div>
        </div>

        {/* Core Values Section */}
        <div className="hidden sm:block mb-20">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200/50">
            <Ribbon className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                OUR FOUNDATION
            </span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Core Values
            </span>
            </h3>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every aspect of our care and define who we are as Arizona's premier home care provider.
            </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
            <Card
                key={value.title}
                className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden h-full"
            >
                {/* Initial badge with orange background */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full ${value.bgColor} flex items-center justify-center shadow-md`}>
                <span className="text-white font-bold text-sm">{value.initial}</span>
                </div>

                <CardContent className="p-8 text-center">
                {/* Icon container with orange background */}
                <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${value.bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                    <value.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                </p>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>

        {/* Arizona Commitment Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 backdrop-blur-sm border border-blue-100/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full animate-float"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-600 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Proudly Serving{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Arizona Communities
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    As an Arizona-based company, we understand the unique needs of our local communities. 
                    We're committed to providing accessible, quality care across the state, from Phoenix and 
                    Tucson to rural communities throughout Arizona.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Statewide Service Area</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span>Local Expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span>Arizona Licensed</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={arizonaService}
                    alt="Arizona landscape representing statewide service"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};