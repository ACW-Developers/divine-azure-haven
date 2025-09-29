import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  ArrowRight,
  Star,
  Coffee,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Import warm, authentic images
import contactHero from '@/assets/meal-preparation.jpg';
import careTeam from '@/assets/services-image.jpg';
import familyMeeting from '@/assets/family-meeting.jpg';

const Contact = () => {
  const { toast } = useToast();
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
        title: "We've received your message!",
        description: "Maria from our team will call you today to discuss your needs.",
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
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Talk with Our Team',
      primary: '(480) 555-1234',
      secondary: 'Always here to listen and help',
      action: 'tel:+14805551234',
      hours: '24/7 for urgent needs'
    },
    {
      icon: Mail,
      title: 'Send Us an Email',
      primary: 'hello@divineangelcare.com',
      secondary: 'We respond within 2 hours',
      action: 'mailto:hello@divineangelcare.com',
      hours: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Serve All of Arizona',
      primary: 'Phoenix & Surrounding Areas',
      secondary: 'In-home consultations available',
      action: null,
      hours: 'Statewide coverage'
    },
    {
      icon: Coffee,
      title: 'Meet for Coffee',
      primary: 'Free Consultation',
      secondary: 'At your home or favorite café',
      action: null,
      hours: 'Schedule anytime'
    }
  ];

  const whyFamiliesChooseUs = [
    {
      icon: Heart,
      title: 'Compassionate Matching',
      description: 'We take time to understand your personality and match you with a caregiver who truly connects with you.'
    },
    {
      icon: Users,
      title: 'Consistent Caregivers',
      description: 'You\'ll work with the same trusted caregivers who become like family over time.'
    },
    {
      icon: Shield,
      title: 'Fully Vetted Team',
      description: 'Every caregiver undergoes thorough background checks and receives ongoing training.'
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: '97% of families would recommend us to their friends and loved ones.'
    }
  ];

  return (
    <Layout>
      {/* Warm Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={heroAnimation.elementRef}
              className={`transition-all duration-700 ${
                heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                Let's start
                <span className="block text-rose-600 mt-2">the conversation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                We know reaching out for care can feel overwhelming. That's why we begin 
                every relationship with a warm, no-pressure conversation to understand 
                your unique situation.
              </p>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-rose-500" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-rose-500" />
                  <span>Free consultation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={contactHero}
                  alt="Warm conversation between caregiver and senior"
                  className="w-full h-[400px] object-cover"
                />
                {/* Testimonial overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "The team at DivineAngel felt like family from our very first call."
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">- The Johnson Family</span>
                    <div className="flex">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={contactAnimation.elementRef}
            className={`text-center mb-16 transition-all duration-700 ${
              contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Choose how you'd like to connect
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you prefer a quick call, email, or meeting in person, we're here to make it comfortable for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-amber-50 rounded-2xl p-6 hover:bg-rose-50 transition-all duration-500 group hover:shadow-md ${
                  contactAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-rose-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                
                {info.action ? (
                  <a 
                    href={info.action}
                    className="text-rose-600 hover:text-rose-700 font-medium text-lg block mb-2 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    {info.primary}
                  </a>
                ) : (
                  <p className="text-rose-600 font-medium text-lg mb-2">{info.primary}</p>
                )}
                
                <p className="text-gray-600 text-sm mb-2">{info.secondary}</p>
                <p className="text-gray-500 text-xs">{info.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Warm Contact Form */}
            <div 
              ref={formAnimation.elementRef}
              className={`transition-all duration-700 ${
                formAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-gray-900">Send us a message</h3>
                    <p className="text-gray-600">We'll get back to you today</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="(480) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700 font-medium">Type of Care Needed</Label>
                      <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500">
                          <SelectValue placeholder="Select care type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="companionship">Companionship & Social Care</SelectItem>
                          <SelectItem value="personal-care">Personal Care Assistance</SelectItem>
                          <SelectItem value="housekeeping">Light Housekeeping</SelectItem>
                          <SelectItem value="meal-prep">Meal Preparation</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-gray-700 font-medium">Care For</Label>
                      <Select onValueChange={(value) => handleSelectChange('careNeeded', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500">
                          <SelectValue placeholder="Who needs care?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">My Parent</SelectItem>
                          <SelectItem value="spouse">My Spouse/Partner</SelectItem>
                          <SelectItem value="grandparent">Grandparent</SelectItem>
                          <SelectItem value="myself">Myself</SelectItem>
                          <SelectItem value="other">Other Family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium">Best Way to Reach You</Label>
                    <Select onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500">
                        <SelectValue placeholder="How should we contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                        <SelectItem value="any">Whatever is Easiest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Tell us about your situation
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px] border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="What's on your mind? We're here to listen and help in any way we can..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending your message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  <p className="text-gray-600 text-sm text-center">
                    We respect your privacy and will never share your information
                  </p>
                </form>
              </div>
            </div>

            {/* Why Families Trust Us */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-gray-900 mb-6">
                  Why families trust us with their loved ones
                </h3>
                
                <div className="space-y-6">
                  {whyFamiliesChooseUs.map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free Consultation Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-rose-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Free In-Home Consultation</h4>
                    <p className="text-gray-600 text-sm">No obligation, just honest advice</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Let us visit your home, meet your family, and provide a personalized care plan at no cost to you.
                </p>
                
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Schedule Free Visit
                </Button>
              </div>

              {/* Team Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={careTeam}
                  alt="Our care team members"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">Meet Our Care Team</p>
                    <p className="text-sm opacity-90">Real people who genuinely care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;