import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  ArrowRight
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import servicesImage from '@/assets/services-image.jpg';
import teamImage from '@/assets/team-image.jpg';

const Index = () => {
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
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional elderly care services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Compassionate Care
              <span className="block text-accent">At Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional non-medical home care services in Arizona. 
              Helping your loved ones maintain independence and dignity in the comfort of their own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-elegant hover:shadow-hero transition-all duration-300 animate-scale-in"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 animate-scale-in"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-pulse-slow" />
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Care Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive home care services designed to support independence and enhance quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-card-hover transition-all duration-300 border-card-border bg-gradient-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src={servicesImage}
                alt="Professional healthcare services"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Why Choose <span className="text-primary">DivineAngel Care?</span>
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title} 
                    className="flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-light rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Families <span className="text-primary">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from the families we've had the privilege to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and learn how we can help your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-hero"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
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