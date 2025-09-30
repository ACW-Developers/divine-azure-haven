import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Home, 
  Utensils, 
  Car, 
  Pill,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  MapPin,
  BadgeCheck,
  TrendingUp,
  MessageCircle,
  Video,
  Pause,
  Play, 
  ChevronLeft, 
  ChevronRight,
  ShoppingCart,
  Activity,
  Brain,
  Bed,
  HandHelping,
  Scissors
} from 'lucide-react';

// Import your 4 hero background images
import heroImage1 from '@/assets/professional-caregiver-assistance.jpg';
import heroImage2 from '@/assets/meal-preparation.jpg';
import heroImage3 from '@/assets/companionship-care.jpg';
import heroImage4 from '@/assets/hero-image.jpg';

// Keep your existing imports
import servicesImage from '@/assets/services-image.jpg';
import teamImage from '@/assets/team-image.jpg';
import caregiverHelping from '@/assets/caregiver-helping-senior.jpg';
import elderlyWalking from '@/assets/elderly-walking-assistance.jpg';
import mealPreparation from '@/assets/meal-preparation.jpg';
import companionshipCare from '@/assets/companionship-care.jpg';
import seniorReading from '@/assets/senior-reading.jpg';
import professionalCaregiving from '@/assets/professional-caregiver-assistance.jpg';
import companionActivities from '@/assets/companion-care-activities.jpg';
import arizonaFacility from '@/assets/arizona-care-facility.jpg';

// Hero Slideshow Component
const HeroSlideshow = ({ 
  images, 
  currentSlide, 
  onSlideChange, 
  isPlaying, 
  onPlayPause 
}) => {
  const progress = useScrollAnimation(0.1);

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
            style={{
              transition: 'transform 0.1s ease-out'
            }}
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

const Index = () => {
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const servicesAnimation = useScrollAnimation(0.2);
  const featuresAnimation = useScrollAnimation(0.2);
  const testimonialsAnimation = useScrollAnimation(0.2);

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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Mission-focused caregiving graphics (keep your existing graphics)
  const missionGraphics = {
    heroBackground: professionalCaregiving,
    careTeam: caregiverHelping,
    happyFamily: companionActivities,
    medicalCare: elderlyWalking,
    technology: mealPreparation,
    community: companionshipCare,
    facility: arizonaFacility,
    certification: seniorReading
  };

  // Enhanced Services Data with all 12 services
  const services = [
    {
      icon: Home,
      title: 'Light Housekeeping & Laundry',
      description: 'Maintaining a clean, organized, and safe living environment with regular cleaning and laundry services.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Home Cleaning', 'Laundry Services', 'Organization', 'Sanitization'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      color: 'text-green-600'
    },
    {
      icon: Utensils,
      title: 'Meal Preparations',
      description: 'Nutritious, delicious meal planning and preparation tailored to dietary needs and preferences.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Meal Planning', 'Special Diets', 'Fresh Ingredients', 'Nutrition Focus'],
      gradient: 'from-orange-500/20 to-red-500/20',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Companionship & Social Engagement',
      description: 'Meaningful conversation, activities, and social interaction to promote mental and emotional well-being.',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Social Activities', 'Conversation', 'Hobby Support', 'Community Outings'],
      gradient: 'from-pink-500/20 to-rose-500/20',
      color: 'text-pink-600'
    },
    {
      icon: HandHelping,
      title: 'Transfer & Ambulating Assistance',
      description: 'Safe and gentle assistance with moving, walking, and transferring to prevent falls and maintain mobility.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Safe Transfers', 'Mobility Support', 'Fall Prevention', 'Exercise Assistance'],
      gradient: 'from-indigo-500/20 to-blue-500/20',
      color: 'text-indigo-600'
    },
    {
      icon: Pill,
      title: 'Medication Reminders',
      description: 'Timely medication reminders and organization to ensure proper adherence to prescribed treatments.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Timely Reminders', 'Dosage Tracking', 'Prescription Management', 'Health Monitoring'],
      gradient: 'from-purple-500/20 to-violet-500/20',
      color: 'text-purple-600'
    },
    {
      icon: Scissors,
      title: 'Personal Hygiene & Grooming',
      description: 'Dignified assistance with personal care, grooming, and hygiene to maintain confidence and well-being.',
      image: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Bathing Assistance', 'Grooming Support', 'Oral Care', 'Dressing Help'],
      gradient: 'from-teal-500/20 to-cyan-500/20',
      color: 'text-teal-600'
    },
    {
      icon: Car,
      title: 'Transportation to Appointments',
      description: 'Reliable transportation to medical appointments, social events, and essential errands.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Medical Appointments', 'Social Outings', 'Safe Driving', 'Door-to-Door Service'],
      gradient: 'from-amber-500/20 to-yellow-500/20',
      color: 'text-amber-600'
    },
    {
      icon: ShoppingCart,
      title: 'Errands & Grocery',
      description: 'Assistance with shopping, errands, and daily necessities to maintain independence and comfort.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Grocery Shopping', 'Prescription Pickup', 'Post Office', 'Personal Errands'],
      gradient: 'from-lime-500/20 to-green-500/20',
      color: 'text-lime-600'
    },
    {
      icon: Brain,
      title: 'Dementia & Alzheimer\'s Care',
      description: 'Specialized care and support for individuals with memory challenges, focusing on safety and dignity.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Memory Support', 'Safety Monitoring', 'Cognitive Activities', 'Family Education'],
      gradient: 'from-violet-500/20 to-purple-500/20',
      color: 'text-violet-600'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support when you need it most.',
      stat: '24/7'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.',
      stat: '100%'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every caregiver is carefully selected for their empathy and professionalism.',
      stat: '500+'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in home care services across Arizona.',
      stat: '5★'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Daughter of Client',
      content: 'DivineAngel Care has been a blessing for our family. The caregivers are professional, caring, and truly understand our needs.',
      rating: 5,
      location: 'Phoenix, AZ',
      service: 'Personal Care'
    },
    {
      name: 'Robert Martinez',
      role: 'Family Caregiver',
      content: 'The peace of mind knowing my father is in good hands is priceless. Highly recommend their services.',
      rating: 5,
      location: 'Scottsdale, AZ',
      service: 'Companionship'
    },
    {
      name: 'Linda Chen',
      role: 'Client',
      content: 'The companion care I receive helps me stay active and engaged. The staff feels like family.',
      rating: 5,
      location: 'Tucson, AZ',
      service: 'Daily Assistance'
    },
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with Slideshow */}
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
  

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full animate-pulse-slow blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full animate-float-slow blur-3xl" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Section Header */}
          <div 
            ref={servicesAnimation.elementRef}
            className={`text-center mb-20 transition-all duration-1000 ${
              servicesAnimation.isVisible ? 'animate-slide-down' : 'opacity-0 transform -translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">COMPREHENSIVE CARE SERVICES</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text">Care Solutions</span> for Every Need
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We offer a comprehensive range of professional non-medical home care services designed to support independence, 
              enhance quality of life, and provide peace of mind for families across Arizona.
            </p>
          </div>

          {/* Enhanced Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`group relative transition-all duration-700 hover:transform hover:scale-105 ${
                  servicesAnimation.isVisible ? 'animate-stagger-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl shadow-black/5 hover:shadow-3xl hover:shadow-primary/10 overflow-hidden h-full transition-all duration-500 group-hover:border-primary/30">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <div className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                    </div>

                    {/* Floating Features */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="flex flex-wrap gap-1 justify-end">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <span 
                            key={feature}
                            className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                            style={{ animationDelay: `${featureIndex * 0.1 + 0.3}s` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={feature}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-xl text-xs font-medium transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:shadow-sm transform hover:scale-105 cursor-default"
                          style={{ animationDelay: `${featureIndex * 0.05}s` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Floating Animation Element */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 animate-pulse-slow" />
              </div>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <div className={`mt-20 text-center ${
            servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '1.2s' }}>
            <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-12 backdrop-blur-sm border border-primary/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full animate-float"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Create Your Custom Care Plan?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Every family's needs are unique. Let us work with you to design a personalized care solution that perfectly fits your loved one's requirements and preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 magnetic-hover group">
                    <MessageCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Get Your Personalized Plan
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg group">
                    <MapPin className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Service Areas
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-primary/10">
                  {[
                    { icon: Shield, text: 'Licensed & Insured' },
                    { icon: Clock, text: '24/7 Availability' },
                    { icon: Heart, text: 'Compassionate Care' },
                    { icon: Users, text: 'Trained Professionals' }
                  ].map((badge, index) => (
                    <div 
                      key={badge.text}
                      className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up"
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                    >
                      <badge.icon className="w-4 h-4 text-primary" />
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section - Left Aligned */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src={missionGraphics.certification}
            alt="Care certification and quality background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div 
              ref={featuresAnimation.elementRef}
              className={`transition-all duration-1000 ${
                featuresAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
              }`}
            >
              <div className="inline-flex items-center gap-2 text-primary mb-4 font-semibold">
                <Award className="w-4 h-4" />
                WHY CHOOSE US
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Setting the <span className="text-primary">Standard</span> in Home Care Excellence
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                With years of experience and countless success stories, we've perfected the art of compassionate care that truly makes a difference in people's lives.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 group hover:shadow-card-hover transition-all duration-500 magnetic-hover ${
                      featuresAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <div className="text-white font-bold text-lg">{feature.stat}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Graphics */}
            <div className={`relative group ${
              featuresAnimation.isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-10'
            }`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={missionGraphics.happyFamily}
                  alt="Happy family with caregiver in Arizona"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Families</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Care Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: Shield, text: 'Licensed & Insured' },
                  { icon: BadgeCheck, text: 'Background Checked' },
                  { icon: Award, text: 'Award Winning' },
                  { icon: MapPin, text: 'Serving Arizona' }
                ].map((badge, index) => (
                  <div 
                    key={badge.text}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground magnetic-hover animate-fade-in-up"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <badge.icon className="w-4 h-4 text-primary" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section - Left Aligned */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Left Aligned */}
          <div 
            ref={testimonialsAnimation.elementRef}
            className={`max-w-4xl transition-all duration-800 mb-16 ${
              testimonialsAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4 font-semibold">
              <Star className="w-4 h-4" />
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Trusted by <span className="text-primary">Families</span> Across Arizona
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what families in our community have to say about their experience with DivineAngel Care.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className={`group transition-all duration-500 hover:transform hover:scale-105 ${
                  testimonialsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-gradient-to-br from-white to-muted/50 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover h-full">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110" 
                          style={{ animationDelay: `${i * 0.1}s` }} 
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-foreground text-lg mb-6 leading-relaxed italic relative">
                      <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</div>
                      {testimonial.content}
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="flex items-center gap-2 text-xs text-primary">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location} • {testimonial.service}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom Trust Indicators */}
          <div className={`mt-16 text-center ${
            testimonialsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Hundreds of Satisfied Families
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience the DivineAngel Care difference. Let us show you why we're Arizona's most trusted home care provider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  <Phone className="mr-2 w-5 h-5" />
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Read More Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Left Aligned */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <div className="animate-elastic-entrance">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Ready to Get Started?</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Take the First Step Toward <span className="text-accent-foreground">Better Care</span>
              </h2>
              
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl">
                Contact us today for a free, no-obligation consultation. Let's discuss how we can help your family with compassionate, professional care at home.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  'Free Initial Consultation',
                  'Custom Care Plans',
                  'No Long-Term Contracts',
                  '24/7 Support Available'
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  size="lg" 
                  className="bg-accent-foreground text-primary hover:bg-white text-lg px-8 py-4 shadow-2xl magnetic-hover pulse-glow group"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Call Now: (123) 456-7890
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rotate-hover group"
                >
                  <Video className="mr-2 h-5 w-5 group-hover:scale-110" />
                  Virtual Consultation
                </Button>
                
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-primary-foreground hover:bg-white/20 text-lg px-8 py-4 magnetic-hover group"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-wrap items-center gap-6 mt-12 text-primary-foreground/80 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving All of Arizona</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Same Day Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;