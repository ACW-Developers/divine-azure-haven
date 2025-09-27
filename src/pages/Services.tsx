import React from 'react';
import Layout from '@/components/Layout';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { 
  Heart, 
  Home, 
  Utensils, 
  Users, 
  Car, 
  Pill, 
  ShoppingBag,
  Bath,
  Shirt,
  Baby,
  Clock,
  CheckCircle,
  Phone,
  Sparkles
} from 'lucide-react';
import servicesImage from '@/assets/services-image.jpg';
import homeInterior from '@/assets/home-interior.jpg';

const Services = () => {
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const servicesAnimation = useScrollAnimation(0.2);
  const processAnimation = useScrollAnimation(0.2);
  const services = [
    {
      icon: Heart,
      title: 'Personal Hygiene & Grooming',
      description: 'Assistance with bathing, oral care, hair care, shaving, and maintaining personal appearance with dignity and respect.',
      features: ['Bathing assistance', 'Oral hygiene care', 'Hair washing & styling', 'Shaving & grooming', 'Nail care']
    },
    {
      icon: Home,
      title: 'Light Housekeeping & Laundry',
      description: 'Maintaining a clean, safe, and organized living environment to support health and well-being.',
      features: ['Dusting & vacuuming', 'Kitchen cleaning', 'Bathroom maintenance', 'Laundry washing & folding', 'Bed making']
    },
    {
      icon: Utensils,
      title: 'Meal Preparation',
      description: 'Planning, preparing, and serving nutritious meals tailored to dietary needs and preferences.',
      features: ['Menu planning', 'Grocery shopping', 'Meal cooking', 'Special diets', 'Feeding assistance']
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Providing engaging social interaction, emotional support, and activities to enhance mental well-being.',
      features: ['Conversation & social interaction', 'Games & activities', 'Reading together', 'Emotional support', 'Entertainment']
    },
    {
      icon: Shirt,
      title: 'Dressing Assistance',
      description: 'Help with selecting appropriate clothing and assistance with dressing and undressing.',
      features: ['Clothing selection', 'Dressing assistance', 'Seasonal wardrobe', 'Special occasion attire', 'Comfort prioritization']
    },
    {
      icon: Bath,
      title: 'Toileting Assistance',
      description: 'Respectful assistance with bathroom needs while maintaining dignity and privacy.',
      features: ['Bathroom assistance', 'Incontinence care', 'Hygiene maintenance', 'Safety supervision', 'Privacy protection']
    },
    {
      icon: Car,
      title: 'Transportation & Errands',
      description: 'Safe transportation to appointments, shopping, and social activities, plus running errands.',
      features: ['Medical appointments', 'Grocery shopping', 'Social outings', 'Pharmacy visits', 'Personal errands']
    },
    {
      icon: Pill,
      title: 'Medication Reminders',
      description: 'Gentle reminders to ensure medications are taken as prescribed by healthcare providers.',
      features: ['Medication scheduling', 'Dosage reminders', 'Pill organization', 'Prescription pickup', 'Doctor coordination']
    },
    {
      icon: Baby,
      title: 'Transfer & Ambulating',
      description: 'Safe assistance with mobility, transfers, and walking support to prevent falls and injuries.',
      features: ['Transfer assistance', 'Walking support', 'Fall prevention', 'Mobility aids', 'Exercise encouragement']
    }
  ];

  const additionalServices = [
    'Light exercise and physical activity',
    'Appointment scheduling and coordination',
    'Pet care assistance',
    'Technology support and training',
    'Holiday and special occasion support',
    'Respite care for family caregivers'
  ];

  const careProcess = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We meet with you and your family to understand your specific needs and preferences.'
    },
    {
      step: '2',
      title: 'Custom Care Plan',
      description: 'Our team creates a personalized care plan tailored to your unique requirements.'
    },
    {
      step: '3',
      title: 'Caregiver Matching',
      description: 'We carefully select and introduce the best caregiver match for your family.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Regular check-ins and adjustments ensure your care plan continues to meet your needs.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 morphing-bg text-primary-foreground overflow-hidden">
        <AnimatedBackground />
        
        <div 
          className="absolute inset-0 opacity-20 parallax-bg"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        >
          <img
            src={servicesImage}
            alt="Home care services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={heroAnimation.elementRef}
            className={`transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-elastic-entrance' : 'opacity-0 transform scale-75'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent relative animate-pulse-glow">
                Care Services
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 animate-bounce" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              Comprehensive non-medical home care services designed to support independence and enhance quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)),transparent)] animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={servicesAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-800 ${
              servicesAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Complete <span className="text-primary relative">
                Care Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From personal care to companionship, our services cover all aspects of daily living support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`group bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-700 h-full magnetic-hover glow-effect ${
                  servicesAnimation.isVisible ? 'animate-rotate-in' : 'opacity-0 transform rotate-12 scale-75'
                }`}
                style={{ 
                  animationDelay: servicesAnimation.isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 pulse-glow relative z-10">
                    <service.icon className="h-8 w-8 text-primary-foreground group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow group-hover:text-foreground transition-colors duration-300 relative z-10">{service.description}</p>
                  
                  <div className="space-y-2 relative z-10">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center text-sm transition-all duration-300 ${
                          servicesAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${index * 0.1 + i * 0.05}s` }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:animate-bounce" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Additional <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a comprehensive range of services that can be customized to fit your unique needs and lifestyle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div 
                    key={service} 
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-light rounded-xl">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Flexible Scheduling
                </h3>
                <p className="text-primary/80 text-sm">
                  Our services are available 24/7, from a few hours a day to round-the-clock care, 
                  tailored to your specific schedule and needs.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img
                src={homeInterior}
                alt="Comfortable home care environment"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We <span className="text-primary">Get Started</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple, four-step process ensures you receive the perfect care solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careProcess.map((step, index) => (
              <div 
                key={step.step} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Serving All of <span className="text-primary">Arizona</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We proudly provide our comprehensive home care services throughout Arizona, 
              bringing quality care directly to your home.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-muted-foreground">
              {[
                'Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Glendale', 'Scottsdale',
                'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Yuma', 'Avondale'
              ].map((city, index) => (
                <div 
                  key={city} 
                  className="p-4 bg-card rounded-lg border border-card-border hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {city}
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground mt-8">
              Don't see your city? <span className="text-primary font-medium">Contact us</span> - we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 morphing-bg text-primary-foreground relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-elastic-entrance">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-typewriter">
                Ready to Start Your Care Journey?
              </h2>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-accent animate-bounce" />
            </div>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-2">
              Contact us today for a free consultation and learn how our personalized care services can help your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in stagger-3">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-hero magnetic-hover pulse-glow group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rotate-hover"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;