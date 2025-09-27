import React, { useState } from 'react';
import Layout from '@/components/Layout';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const contactAnimation = useScrollAnimation(0.2);
  const formAnimation = useScrollAnimation(0.2);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    careNeeded: '',
    message: '',
    preferredContact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you within 24 hours to discuss your care needs.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        careNeeded: '',
        message: '',
        preferredContact: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      primary: '(123) 456-7890',
      secondary: 'Always available for emergencies',
      action: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@divineangelcare.com',
      secondary: 'Response within 4 hours',
      action: 'mailto:info@divineangelcare.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      primary: 'Arizona, USA',
      secondary: 'Statewide coverage available',
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      primary: 'Mon-Fri: 8AM-6PM',
      secondary: 'Sat-Sun: 9AM-3PM',
      action: null
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every team member is selected for their empathy and dedication to client well-being.'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Full licensing, bonding, and insurance coverage for complete peace of mind.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our caregivers undergo thorough background checks and continuous training.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 morphing-bg text-primary-foreground overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={heroAnimation.elementRef}
            className={`transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-elastic-entrance' : 'opacity-0 transform scale-75'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="text-accent relative animate-pulse-glow">
                Touch
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 animate-bounce" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              Ready to start your care journey? We're here to answer your questions and help create the perfect care plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(45deg,hsl(var(--primary))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--secondary))_1px,transparent_1px)] bg-[size:2rem_2rem] animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div 
            ref={contactAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-800 ${
              contactAnimation.isVisible ? 'animate-bounce-in' : 'opacity-0 transform scale-75'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How to <span className="text-primary relative">
                Reach Us
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with our care team for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className={`group text-center bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-700 magnetic-hover glow-effect ${
                  contactAnimation.isVisible ? 'animate-rotate-in' : 'opacity-0 transform rotate-12 scale-75'
                }`}
                style={{ 
                  animationDelay: contactAnimation.isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 pulse-glow relative z-10">
                    <info.icon className="h-8 w-8 text-primary-foreground group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10">{info.title}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-primary hover:text-primary-hover font-medium text-lg block mb-2 transition-colors relative z-10"
                    >
                      {info.primary}
                    </a>
                  ) : (
                    <p className="text-primary font-medium text-lg mb-2 relative z-10">{info.primary}</p>
                  )}
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 relative z-10">{info.secondary}</p>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-4 w-4 text-accent animate-pulse-glow" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div 
              ref={formAnimation.elementRef}
              className={`transition-all duration-1000 ${
                formAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
              }`}
            >
              <Card className="bg-gradient-card border-card-border shadow-card glow-effect">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
                  
                  <div className="flex items-center space-x-3 mb-6 relative z-10">
                    <MessageCircle className="h-8 w-8 text-primary animate-bounce" />
                    <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-foreground font-medium">Service Type</Label>
                        <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-care">Personal Care</SelectItem>
                            <SelectItem value="companionship">Companionship</SelectItem>
                            <SelectItem value="housekeeping">Light Housekeeping</SelectItem>
                            <SelectItem value="meal-prep">Meal Preparation</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-foreground font-medium">Care Needed For</Label>
                        <Select onValueChange={(value) => handleSelectChange('careNeeded', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Who needs care?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="spouse">Spouse/Partner</SelectItem>
                            <SelectItem value="grandparent">Grandparent</SelectItem>
                            <SelectItem value="myself">Myself</SelectItem>
                            <SelectItem value="other">Other Family Member</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-foreground font-medium">Preferred Contact Method</Label>
                      <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                          <SelectItem value="any">Any Method</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Tell Us About Your Needs</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 min-h-[120px]"
                        placeholder="Please describe your care needs, schedule preferences, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground text-lg py-4 shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-muted-foreground text-sm text-center">
                      * Required fields. We'll respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Why Families Choose <span className="text-primary">DivineAngel Care</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-accent-light rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-accent">Free Consultation</span>
                </div>
                <p className="text-accent/80 text-sm mb-4">
                  We offer a complimentary in-home consultation to assess your needs and create a personalized care plan.
                </p>
                <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/10 rounded-full animate-pulse-slow blur-xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-elastic-entrance">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Need <span className="text-accent animate-pulse-glow">Immediate</span> Assistance?
              </h2>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-accent animate-bounce" />
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-2">
              For urgent care needs or emergencies, our support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoom-in stagger-3">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-hero magnetic-hover pulse-glow group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Emergency: (123) 456-7890
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 rotate-hover"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;