import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Home, Users, Utensils, Car, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const servicesAnimation = useScrollAnimation(0.2);

  const services = [
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Assistance with daily activities including bathing, grooming, and dressing with dignity and respect.',
      color: 'from-orange-100 to-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: Users,
      title: 'Companionship',
      description: 'Meaningful social interaction, conversation, and activities to combat loneliness and isolation.',
      color: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Utensils,
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
      color: 'from-orange-100 to-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: Home,
      title: 'Light Housekeeping',
      description: 'Maintaining a clean, safe, and comfortable living environment for your loved ones.',
      color: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Safe and reliable transportation to appointments, errands, and social activities.',
      color: 'from-orange-100 to-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: Clock,
      title: 'Medication Reminders',
      description: 'Timely medication reminders to ensure proper medication management and compliance.',
      color: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,hsl(217_91%_60%)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={servicesAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <span className="text-orange-600 font-bold tracking-wider">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Comprehensive Care Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From personal care to companionship, we provide the support your loved ones need 
            to live safely and comfortably at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-orange-200 animate-fade-in bg-white`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
