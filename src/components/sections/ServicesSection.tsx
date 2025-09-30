import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Utensils, 
  Users, 
  Car, 
  Pill,
  Sparkles,
  Shield,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  HandHelping,
  Scissors,
  ShoppingCart,
  Brain,
  ArrowRight,
  CalendarDays,
  Star,
  CheckCircle
} from 'lucide-react';

// Import local service images
import housekeepingImg from '@/assets/general/a.jpg';
import mealPrepImg from '@/assets/services-image.jpg';
import companionshipImg from '@/assets/caregiver.jpg';
import transferAssistanceImg from '@/assets/general/d.jpg';
import medicationImg from '@/assets/general/b.jpeg';
import hygieneImg from '@/assets/general/c.jpeg';
import transportationImg from '@/assets/hero-image.jpg';
import errandsImg from '@/assets/meal-preparation.jpg';
import dementiaCareImg from '@/assets/professional-caregiver-assistance.jpg';

export const ServicesSection = () => {
  const servicesAnimation = useScrollAnimation(0.2);
  const [currentFeatured, setCurrentFeatured] = useState(0);

  const featuredServices = [
    {
      title: 'Comprehensive Dementia Care',
      description: 'Specialized memory care with personalized activities and safety monitoring',
      image: dementiaCareImg,
      color: 'text-violet-600'
    },
    {
      title: '24/7 Personal Care Assistance',
      description: 'Round-the-clock support for daily living activities and personal hygiene',
      image: hygieneImg,
      color: 'text-teal-600'
    },
    {
      title: 'Medical Transportation',
      description: 'Safe, reliable transportation to appointments and medical facilities',
      image: transportationImg,
      color: 'text-amber-600'
    },
    {
      title: 'Nutrition & Meal Preparation',
      description: 'Healthy, delicious meals tailored to dietary needs and preferences',
      image: mealPrepImg,
      color: 'text-orange-600'
    }
  ];

  const services = [
    {
      icon: Home,
      title: 'Light Housekeeping & Laundry',
      description: 'Maintaining a clean, organized, and safe living environment with regular cleaning and laundry services.',
      image: housekeepingImg,
      features: ['Home Cleaning', 'Laundry Services', 'Organization', 'Sanitization'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Utensils,
      title: 'Meal Preparations',
      description: 'Nutritious, delicious meal planning and preparation tailored to dietary needs and preferences.',
      image: mealPrepImg,
      features: ['Meal Planning', 'Special Diets', 'Fresh Ingredients', 'Nutrition Focus'],
      gradient: 'from-orange-500/20 to-red-500/20',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Users,
      title: 'Companionship & Social Engagement',
      description: 'Meaningful conversation, activities, and social interaction to promote mental and emotional well-being.',
      image: companionshipImg,
      features: ['Social Activities', 'Conversation', 'Hobby Support', 'Community Outings'],
      gradient: 'from-pink-500/20 to-rose-500/20',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: HandHelping,
      title: 'Transfer & Ambulating Assistance',
      description: 'Safe and gentle assistance with moving, walking, and transferring to prevent falls and maintain mobility.',
      image: transferAssistanceImg,
      features: ['Safe Transfers', 'Mobility Support', 'Fall Prevention', 'Exercise Assistance'],
      gradient: 'from-indigo-500/20 to-blue-500/20',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Pill,
      title: 'Medication Reminders',
      description: 'Timely medication reminders and organization to ensure proper adherence to prescribed treatments.',
      image: medicationImg,
      features: ['Timely Reminders', 'Dosage Tracking', 'Prescription Management', 'Health Monitoring'],
      gradient: 'from-purple-500/20 to-violet-500/20',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Scissors,
      title: 'Personal Hygiene & Grooming',
      description: 'Dignified assistance with personal care, grooming, and hygiene to maintain confidence and well-being.',
      image: hygieneImg,
      features: ['Bathing Assistance', 'Grooming Support', 'Oral Care', 'Dressing Help'],
      gradient: 'from-teal-500/20 to-cyan-500/20',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Car,
      title: 'Transportation to Appointments',
      description: 'Reliable transportation to medical appointments, social events, and essential errands.',
      image: transportationImg,
      features: ['Medical Appointments', 'Social Outings', 'Safe Driving', 'Door-to-Door Service'],
      gradient: 'from-amber-500/20 to-yellow-500/20',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: ShoppingCart,
      title: 'Errands & Grocery',
      description: 'Assistance with shopping, errands, and daily necessities to maintain independence and comfort.',
      image: errandsImg,
      features: ['Grocery Shopping', 'Prescription Pickup', 'Post Office', 'Personal Errands'],
      gradient: 'from-lime-500/20 to-green-500/20',
      color: 'text-lime-600',
      bgColor: 'bg-lime-100'
    },
    {
      icon: Brain,
      title: 'Dementia & Alzheimer\'s Care',
      description: 'Specialized care and support for individuals with memory challenges, focusing on safety and dignity.',
      image: dementiaCareImg,
      features: ['Memory Support', 'Safety Monitoring', 'Cognitive Activities', 'Family Education'],
      gradient: 'from-violet-500/20 to-purple-500/20',
      color: 'text-violet-600',
      bgColor: 'bg-violet-100'
    }
  ];

  // Auto-rotate featured services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredServices.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full animate-pulse-slow blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full animate-float-slow blur-3xl" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Section Header */}
        <div 
          ref={servicesAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
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

        {/* Featured Services Carousel */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-16">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentFeatured ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  <Star className={`w-8 h-8 mr-3 ${service.color}`} />
                  <h3 className="text-2xl lg:text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="text-lg opacity-90 mb-6 max-w-2xl">{service.description}</p>
              </div>
            </div>
          ))}

          {/* Featured Service Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatured(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentFeatured ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Services Grid with Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group transition-all duration-500 hover:transform hover:scale-105 ${
                servicesAnimation.isVisible ? 'animate-stagger-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full rounded-2xl">
                {/* Image Container */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`w-4 h-4 mt-0.5 mr-3 ${service.color}`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground flex items-center">
            <CalendarDays className="w-8 h-8 mr-3 text-primary" />
            Service Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Personal Care', 
                services: ['Hygiene', 'Grooming', 'Dressing'], 
                icon: Heart,
                color: 'text-pink-600'
              },
              { 
                title: 'Home Support', 
                services: ['Cleaning', 'Meals', 'Laundry'], 
                icon: Home,
                color: 'text-green-600'
              },
              { 
                title: 'Companionship', 
                services: ['Social Activities', 'Conversation', 'Outings'], 
                icon: Users,
                color: 'text-blue-600'
              },
              { 
                title: 'Specialized Care', 
                services: ['Dementia', 'Mobility', 'Medication'], 
                icon: Brain,
                color: 'text-purple-600'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <category.icon className={`w-8 h-8 mr-3 ${category.color}`} />
                  <h4 className="font-semibold text-foreground text-lg">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${category.color.replace('text', 'bg')}`}></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center ${
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
  );
};