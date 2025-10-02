import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GetStartedDialog from '@/components/GetStartedDialog';
import { 
  Phone, 
  ArrowRight,
  CheckCircle,
  BadgeCheck,
  Pause,
  Play, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Users,
  Heart,
  Star,
  ChevronDown
} from 'lucide-react';

import heroImage1 from '@/assets/professional-caregiver-assistance.jpg';
import heroImage2 from '@/assets/general/g3.jpg';
import heroImage3 from '@/assets/general/g2.webp';
import heroImage4 from '@/assets/hero-image.jpg';

const HeroSlideshow = ({ 
  images, 
  currentSlide, 
  onSlideChange, 
  isPlaying, 
  onPlayPause 
}: {
  images: Array<{ src: string; alt: string }>;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Images with Enhanced Overlay */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
        </div>
      ))}
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent/30 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-secondary/30 rounded-full animate-pulse-slow blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/20 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full animate-bounce blur-lg" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / images.length) * 100}%` 
          }}
        />
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Play/Pause Button */}
        <button
          onClick={onPlayPause}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 magnetic-hover"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`relative w-2 h-8 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-accent shadow-glow h-12" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => onSlideChange((currentSlide - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 magnetic-hover z-20 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={() => onSlideChange((currentSlide + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 magnetic-hover z-20 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export const HeroSection = () => {
  const heroAnimation = useScrollAnimation(0.1);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Hero slideshow images
  const heroImages = [
    {
      src: heroImage1,
      alt: 'Professional caregiver assisting senior with daily activities'
    },
    {
      src: heroImage2,
      alt: 'Companionship and emotional support for elderly clients'
    },
    {
      src: heroImage3,
      alt: 'Meal preparation and nutrition services for seniors'
    },
    {
      src: heroImage4,
      alt: 'Happy family with professional caregiver in home setting'
    }
  ];

  const typingTexts = [
    "Compassionate Care",
    "Professional Support",
    "Daily Assistance",
    "Companionship",
    "Peace of Mind"
  ];

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const current = typingIndex % typingTexts.length;
      const fullText = typingTexts[current];
      
      if (isDeleting) {
        setTypingText(fullText.substring(0, typingText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setTypingText(fullText.substring(0, typingText.length + 1));
      }
      
      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setTypingIndex(typingIndex + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, typingIndex, typingTexts, typingSpeed]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(74, 222, 128, 0); }
          100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite;
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          width: 3px;
          background-color: #4ade80;
          animation: blink 1s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .text-glow {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.7);
        }
      `}</style>

      {/* Hero Slideshow Component */}
      <HeroSlideshow
        images={heroImages}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
      />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-24 w-full">
        {/* Animated Decorative Elements */}
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <Sparkles className="w-8 h-8 text-accent" />
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
          </div>
        </div>

        <div 
          ref={heroAnimation.elementRef}
          className={`max-w-2xl lg:max-w-3xl xl:max-w-4xl py-24 transition-all duration-1000 ${
            heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 transform -translate-x-10'
          }`}
        >
          {/* Trust Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30">
            <BadgeCheck className="w-5 h-5 text-accent" />
            <span className="text-white font-medium text-sm">Arizona's Most Trusted Home Care Provider</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight text-shadow">
              <span className="block">Compassionate</span>
              <span className="block text-accent text-glow">Care At Home</span>
            </h1>
          </div>
          
          {/* Typing Animation Subheading */}
          <div className="h-12 flex items-center mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-lg leading-snug">
              Professional{" "}
              <span className="text-accent font-medium bg-black/20 px-2 py-1 rounded-lg">
                {typingText}
                <span className="typing-cursor"></span>
              </span>
              {" "}for your loved ones 
            </p>
          </div>

          {/* Enhanced Description */}
          <div className="mb-8">
            <p className="text-md sm:text-xl text-white/85 max-w-2xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/10">
              Helping your loved ones maintain independence and dignity with professional medical &
              non-medical home care services in the comfort of their own home.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
            <Button 
              className="bg-accent hover:bg-accent-hover text-white text-lg px-8 py-4 shadow-elegant hover:shadow-hero transition-all duration-300 magnetic-hover animate-pulse-glow group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Call (702) 426-4862
              <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setDialogOpen(true)}
              className="text-white bg-white/20 hover:bg-white/30 text-lg px-8 py-4 magnetic-hover group backdrop-blur-sm border-white/20"
            >
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="hidden sm:flex flex-wrap items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg border border-white/10">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg border border-white/10">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Background Checked Staff</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg border border-white/10">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Free Consultation</span>
            </div>
          </div>

        </div>
      </div>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;