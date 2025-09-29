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
  Sparkles
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
  const services = [
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Assistance with bathing, grooming, dressing, and personal hygiene needs.',
    },
    {
      icon: Home,
      title: 'Light Housekeeping',
      description: 'Maintaining a clean, safe living environment with laundry and organization.',
    },
    {
      icon: Utensils,
      title: 'Meal Preparation',
      description: 'Nutritious meal planning, preparation, and assistance with eating.',
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Engaging conversation, activities, and emotional support for mental well-being.',
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Safe transportation to appointments, shopping, and social activities.',
    },
    {
      icon: Pill,
      title: 'Medication Reminders',
      description: 'Gentle reminders to ensure medications are taken as prescribed.',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support when you need it most.',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every caregiver is carefully selected for their empathy and professionalism.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Daughter of Client',
      content: 'DivineAngel Care has been a blessing for our family. The caregivers are professional, caring, and truly understand our needs.',
      rating: 5,
    },
    {
      name: 'Robert Martinez',
      role: 'Family Caregiver',
      content: 'The peace of mind knowing my father is in good hands is priceless. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Linda Chen',
      role: 'Client',
      content: 'The companion care I receive helps me stay active and engaged. The staff feels like family.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Parallax Hero Image */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        >
          <img
            src={heroImage}
            alt="Professional elderly care services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 morphing-bg opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={heroAnimation.elementRef}
            className={`transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`}
          >
            {/* Animated Title with Typewriter Effect */}
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                <span className="inline-block animate-slide-up">Compassionate</span>{' '}
                <span className="inline-block animate-slide-up stagger-2">Care</span>
                <span className="block text-accent animate-elastic-entrance stagger-3">At Home</span>
              </h1>
              
              {/* Sparkle Effects */}
              <div className="absolute -top-4 -right-4">
                <Sparkles className="h-8 w-8 text-accent animate-pulse-glow" />
              </div>
              <div className="absolute top-1/2 -left-6">
                <Sparkles className="h-6 w-6 text-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-4">
              Professional non-medical home care services in Arizona. 
              Helping your loved ones maintain independence and dignity in the comfort of their own home.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-zoom-in stagger-5">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-elegant hover:shadow-hero transition-all duration-300 magnetic-hover glow-effect group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 magnetic-hover rotate-hover"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-float pulse-glow" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-pulse-slow glow-effect" />
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-secondary/25 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-gradient-morph" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={servicesAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-800 ${
              servicesAnimation.isVisible ? 'animate-slide-up' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary relative">
                Care Services
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive home care services designed to support independence and enhance quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Service Card 1 */}
            <div className={`bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover p-8 magnetic-hover group ${
              servicesAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`} style={{ animationDelay: '0.1s' }}>
              <img 
                src={caregiverHelping} 
                alt="Professional caregiver assisting elderly client with daily activities" 
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-elegant group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 animate-fade-in-up">Personal Care Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Our certified caregivers provide compassionate assistance with daily activities, ensuring dignity and comfort in every interaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Personal Hygiene</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Mobility Support</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">24/7 Care</span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className={`bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover p-8 magnetic-hover group ${
              servicesAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`} style={{ animationDelay: '0.2s' }}>
              <img 
                src={mealPreparation} 
                alt="Caregiver preparing nutritious meal for elderly client" 
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-elegant group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 animate-fade-in-up">Nutritional Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Specialized meal preparation services ensuring proper nutrition and dietary requirements are met with delicious, healthy meals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Meal Planning</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Special Diets</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Fresh Ingredients</span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className={`bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover p-8 magnetic-hover group ${
              servicesAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`} style={{ animationDelay: '0.3s' }}>
              <img 
                src={companionshipCare} 
                alt="Elderly person enjoying companionship with caregiver" 
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-elegant group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 animate-fade-in-up">Emotional Support</h3>
              <p className="text-muted-foreground mb-4">
                Beyond physical care, we provide meaningful companionship to enhance quality of life and emotional wellbeing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Companionship</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Social Activities</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Mental Wellness</span>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className={`bg-card/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-card-hover p-8 magnetic-hover group ${
              servicesAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`} style={{ animationDelay: '0.4s' }}>
              <img 
                src={elderlyWalking} 
                alt="Caregiver assisting elderly person with safe walking and mobility" 
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-elegant group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-primary mb-4 animate-fade-in-up">Mobility & Safety</h3>
              <p className="text-muted-foreground mb-4">
                Professional assistance with walking, transfers, and daily mobility to ensure safety and maintain independence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Safe Transfers</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Fall Prevention</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Exercise Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/0.1),transparent)] animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              className={`transition-all duration-1000 ${
                featuresAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
              }`}
            >
              <div className="relative group">
                <img
                  src={servicesImage}
                  alt="Professional healthcare services"
                  className="rounded-2xl shadow-elegant w-full group-hover:scale-105 transition-transform duration-700 glow-effect"
                />
                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 group-hover:animate-bounce">
                  <Heart className="h-8 w-8 text-accent opacity-80" />
                </div>
              </div>
            </div>
            
            <div 
              ref={featuresAnimation.elementRef}
              className={`transition-all duration-1000 ${
                featuresAnimation.isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Why Choose <span className="text-primary relative">
                  DivineAngel Care?
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
                </span>
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className={`flex items-start space-x-4 group transition-all duration-500 ${
                      featuresAnimation.isVisible ? 'animate-fade-in magnetic-hover' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 pulse-glow">
                      <feature.icon className="h-6 w-6 text-secondary-foreground group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-8 p-6 bg-primary-light rounded-xl group hover:shadow-card-hover transition-all duration-500 magnetic-hover ${
                featuresAnimation.isVisible ? 'animate-zoom-in' : 'opacity-0 scale-75'
              }`} style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary group-hover:animate-bounce" />
                  <span className="font-semibold text-primary">Arizona Licensed</span>
                </div>
                <p className="text-primary/80 text-sm">
                  Fully licensed by the state of Arizona and compliant with all regulations for non-medical home care services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-800 ${
              testimonialsAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Families <span className="text-primary relative">
                Say About Us
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from the families we've had the privilege to serve across Arizona
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  text: "DivineAngel Care has been a blessing for our family. Their caregivers are not only professional but genuinely caring. Mom loves spending time with her caregiver, Sarah.",
                  author: "Maria Rodriguez",
                  location: "Phoenix, AZ",
                  rating: 5,
                  service: "Personal Care & Companionship"
                },
                {
                  text: "The meal preparation service has made such a difference in Dad's nutrition and overall health. He actually looks forward to every meal now!",
                  author: "James Wilson", 
                  location: "Scottsdale, AZ",
                  rating: 5,
                  service: "Meal Preparation & Nutrition"
                },
                {
                  text: "Professional, reliable, and truly caring. The peace of mind knowing my father is in good hands while I'm at work is invaluable.",
                  author: "Linda Chen",
                  location: "Tucson, AZ", 
                  rating: 5,
                  service: "Daily Living Assistance"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className={`
                    bg-gradient-card backdrop-blur-lg rounded-2xl p-8 
                    shadow-card hover:shadow-card-hover border-card-border
                    transition-all duration-500 group magnetic-hover
                    ${testimonialsAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'}
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent animate-bounce-in group-hover:animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-foreground text-lg mb-6 leading-relaxed italic group-hover:text-primary transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div className="border-l-4 border-gradient-primary pl-6 relative">
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
                    <p className="font-bold text-primary text-lg">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    <p className="text-secondary text-sm font-medium">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`relative group ${testimonialsAnimation.isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-10'}`} style={{ animationDelay: '0.6s' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={seniorReading} 
                  alt="Happy senior enjoying quality time with professional caregiver" 
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent group-hover:from-primary/40 transition-all duration-500"></div>
                
                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center animate-bounce-in">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Families Served</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                      <div className="text-2xl font-bold text-accent">99%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-primary-foreground text-sm font-semibold shadow-card animate-pulse-glow">
                  <Shield className="w-4 h-4" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-secondary px-4 py-2 rounded-full text-secondary-foreground text-sm font-semibold shadow-card animate-pulse-glow" style={{ animationDelay: '0.3s' }}>
                  <Heart className="w-4 h-4" />
                  <span>Compassionate Care</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-semibold shadow-card animate-pulse-glow" style={{ animationDelay: '0.6s' }}>
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 morphing-bg text-primary-foreground relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float blur-xl" />
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow blur-lg" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-elastic-entrance">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-typewriter">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-2">
              Contact us today for a free consultation and learn how we can help your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in stagger-3">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-hero magnetic-hover pulse-glow group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call Now: (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rotate-hover"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;