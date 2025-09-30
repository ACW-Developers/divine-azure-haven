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
  Brain
} from 'lucide-react';

export const ServicesSection = () => {
  const servicesAnimation = useScrollAnimation(0.2);

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

  return (
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

        {/* Enhanced Services Grid */}
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
  );
};
