import React from 'react';
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
  Video
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import servicesImage from '@/assets/services-image.jpg';
import teamImage from '@/assets/team-image.jpg';
import caregiverHelping from '@/assets/caregiver-helping-senior.jpg';
import elderlyWalking from '@/assets/elderly-walking-assistance.jpg';
import mealPreparation from '@/assets/meal-preparation.jpg';
import companionshipCare from '@/assets/companionship-care.jpg';
import seniorReading from '@/assets/senior-reading.jpg';

const Index = () => {
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const servicesAnimation = useScrollAnimation(0.2);
  const featuresAnimation = useScrollAnimation(0.2);
  const testimonialsAnimation = useScrollAnimation(0.2);

  // Online graphics and icons
  const onlineGraphics = {
    careTeam: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    happyFamily: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    medicalCare: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technology: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    certification: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  };

  const services = [
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Assistance with bathing, grooming, dressing, and personal hygiene needs.',
      graphic: onlineGraphics.careTeam,
      features: ['Personal Hygiene', 'Mobility Support', '24/7 Care']
    },
    {
      icon: Home,
      title: 'Light Housekeeping',
      description: 'Maintaining a clean, safe living environment with laundry and organization.',
      graphic: onlineGraphics.medicalCare,
      features: ['Home Cleaning', 'Laundry Services', 'Organization']
    },
    {
      icon: Utensils,
      title: 'Meal Preparation',
      description: 'Nutritious meal planning, preparation, and assistance with eating.',
      graphic: onlineGraphics.technology,
      features: ['Meal Planning', 'Special Diets', 'Fresh Ingredients']
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Engaging conversation, activities, and emotional support for mental well-being.',
      graphic: onlineGraphics.community,
      features: ['Companionship', 'Social Activities', 'Mental Wellness']
    },
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
      {/* Enhanced Hero Section - Left Aligned */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background with Multiple Layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 parallax-bg"
            style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
          >
            <img
              src={onlineGraphics.careTeam}
              alt="Professional elderly care services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent/20 rounded-full animate-float blur-2xl" />
            <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-secondary/20 rounded-full animate-pulse-slow blur-xl" />
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }} />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div 
            ref={heroAnimation.elementRef}
            className={`max-w-4xl transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 animate-glow-pulse">
              <BadgeCheck className="w-5 h-5 text-accent" />
              <span className="text-white font-medium text-sm">Arizona's Most Trusted Home Care Provider</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-slide-up">Compassionate</span>
              <span className="block text-accent animate-slide-up stagger-2">Care At Home</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl animate-fade-in-up stagger-3">
              Professional non-medical home care services in Arizona. Helping your loved ones maintain independence and dignity in the comfort of their own home.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-12 animate-fade-in-up stagger-4">
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
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 magnetic-hover rotate-hover group"
              >
                <Video className="mr-2 h-5 w-5 group-hover:scale-110" />
                Virtual Consultation
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/20 text-lg px-8 py-4 magnetic-hover group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12 text-white/80 text-sm animate-fade-in-up stagger-6">
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

        {/* Enhanced Floating Elements */}
        <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white/80 animate-bounce">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-sm">Scroll to explore</span>
        </div>
      </section>

      {/* Enhanced Services Section - Left Aligned */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <img 
            src={onlineGraphics.technology}
            alt="Care technology background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header - Left Aligned */}
          <div 
            ref={servicesAnimation.elementRef}
            className={`max-w-4xl transition-all duration-800 mb-16 ${
              servicesAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4 font-semibold">
              <Sparkles className="w-4 h-4" />
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive <span className="text-primary">Care Solutions</span> for Every Need
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide personalized non-medical home care services designed to support independence and enhance quality of life for seniors across Arizona.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`group cursor-pointer transition-all duration-500 hover:transform hover:scale-105 ${
                  servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={service.graphic} 
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                            style={{ animationDelay: `${featureIndex * 0.05}s` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="ghost" className="group/btn text-primary hover:text-primary-foreground hover:bg-primary px-0">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-16 text-left ${
            servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Need Custom Care Solutions?
                  </h3>
                  <p className="text-muted-foreground">
                    Every family is unique. Let's create a personalized care plan that fits your specific needs.
                  </p>
                </div>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get Personalized Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section - Left Aligned */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src={onlineGraphics.certification}
            alt="Certification background"
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
                  src={onlineGraphics.happyFamily}
                  alt="Happy family with caregiver"
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