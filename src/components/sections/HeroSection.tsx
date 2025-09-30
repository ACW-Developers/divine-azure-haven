import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Phone, 
  ArrowRight,
  CheckCircle,
  BadgeCheck,
  Pause,
  Play, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

import heroImage1 from '@/assets/professional-caregiver-assistance.jpg';
import heroImage2 from '@/assets/meal-preparation.jpg';
import heroImage3 from '@/assets/companionship-care.jpg';
import heroImage4 from '@/assets/hero-image.jpg';

// Hero Slideshow Component
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
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
        </div>
      ))}
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent/30 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-secondary/30 rounded-full animate-pulse-slow blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/20 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full animate-bounce blur-lg" style={{ animationDelay: '1s' }} />
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
              className={`w-3 h-3 rounded-full transition-all duration-300 magnetic-hover ${
                index === currentSlide 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
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

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

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
      {/* Hero Slideshow Component */}
      <HeroSlideshow
        images={heroImages}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div 
          ref={heroAnimation.elementRef}
          className={`max-w-4xl transition-all duration-1000 ${
            heroAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
          }`}
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-4 mt-6 border border-white/30 animate-glow-pulse">
            <BadgeCheck className="w-5 h-5 text-accent" />
            <span className="text-white font-medium text-sm">Arizona's Most Trusted Home Care Provider</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-slide-up">Compassionate</span>
            <span className="block text-accent animate-slide-up stagger-2">Care At Home</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl animate-fade-in-up stagger-3">
            Professional non-medical home care services in Arizona. Helping your loved ones maintain independence and dignity in the comfort of their own home.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-8 animate-fade-in-up stagger-4">
            <div className="text-white">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-white/80">Families Served</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-white/80">Care Available</div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start animate-zoom-in stagger-5">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-white text-lg px-8 py-4 shadow-elegant hover:shadow-hero transition-all duration-300 magnetic-hover glow-effect group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Call (123) 456-7890
              <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white bg-white/40 hover:bg-white/20 text-lg px-8 py-4 magnetic-hover group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-8 text-white/80 text-sm animate-fade-in-up stagger-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Background Checked Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
