import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GetStartedDialog from '@/components/GetStartedDialog';
import { 
  Heart, 
  Home, 
  Utensils, 
  Users, 
  Car, 
  Pill, 
  Bath,
  Shirt,
  Baby,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Coffee,
  BookOpen,
  Music,
  Sprout
} from 'lucide-react';

import grandmaSmiling from '@/assets/meal-preparation.jpg';
import cookingTogether from '@/assets/companion-care-activities.jpg';
import walkingInGarden from '@/assets/walking-garden.jpg';
import familyMeal from '@/assets/services-image.jpg';
import readingBook from '@/assets/general/b2.jpeg';
import groceryHelp from '@/assets/general/g.jpg';
import medicationHelp from '@/assets/medication-help.jpg';
import dressingHelp from '@/assets/general/c2.jpg';
import teamPhoto from '@/assets/caregiver.jpg';

const Services = () => {
  const heroAnimation = useScrollAnimation(0.1);
  const servicesAnimation = useScrollAnimation(0.2);
  const [dialogOpen, setDialogOpen] = useState(false);

  const services = [
    {
      icon: Heart,
      title: 'Personal Care with Dignity',
      description: 'Gentle assistance with bathing, grooming, and personal hygiene that preserves dignity and independence.',
      features: ['Respectful bathing assistance', 'Hair care and styling', 'Oral hygiene support', 'Shaving and nail care'],
      image: dressingHelp,
      testimonial: "Sarah helps me feel beautiful every day"
    },
    {
      icon: Home,
      title: 'Homemaking Support',
      description: 'Keeping your living space clean, organized, and comfortable—just the way you like it.',
      features: ['Light housekeeping', 'Laundry and ironing', 'Bed making', 'Kitchen cleaning'],
      image: cookingTogether,
      testimonial: "My home has never felt more peaceful"
    },
    {
      icon: Utensils,
      title: 'Nourishing Meals',
      description: 'Preparing favorite recipes and nutritious meals together in your kitchen.',
      features: ['Meal planning together', 'Grocery shopping', 'Cooking favorite foods', 'Special diet support'],
      image: familyMeal,
      testimonial: "We cook my mother's recipes together"
    },
    {
      icon: Users,
      title: 'Genuine Companionship',
      description: 'Real conversations, shared activities, and meaningful connection.',
      features: ['Conversation and stories', 'Games and puzzles', 'Reading together', 'Social outings'],
      image: readingBook,
      testimonial: "Finally someone who listens"
    },
    {
      icon: Shirt,
      title: 'Dressing Assistance',
      description: 'Help choosing outfits and getting dressed while respecting personal style.',
      features: ['Clothing selection', 'Dressing support', 'Seasonal wardrobe help', 'Special occasions'],
      image: dressingHelp,
      testimonial: "I still get to wear my favorite clothes"
    },
    {
      icon: Car,
      title: 'Getting Out & About',
      description: 'Companionship for appointments, errands, and social visits.',
      features: ['Doctor appointments', 'Grocery shopping', 'Visiting friends', 'Community events'],
      image: groceryHelp,
      testimonial: "I can still visit my granddaughter"
    }
  ];

  const littleExtras = [
    { icon: Coffee, text: 'Morning coffee chat' },
    { icon: BookOpen, text: 'Reading the newspaper together' },
    { icon: Music, text: 'Listening to favorite music' },
    { icon: Sprout, text: 'Watering plants together' },
    { icon: Users, text: 'Family photo organizing' },
    { icon: Heart, text: 'Birthday and holiday celebrations' }
  ];

  const howWeWork = [
    {
      step: "We Listen",
      description: "We start by understanding your story, your routines, and what matters most to you."
    },
    {
      step: "We Match",
      description: "We carefully match you with a caregiver who shares your interests and understands your needs."
    },
    {
      step: "We Care",
      description: "Your caregiver becomes a trusted companion who's there for you consistently."
    },
    {
      step: "We Adapt",
      description: "As your needs change, we adjust our care to ensure you're always comfortable and supported."
    }
  ];

  return (
    <Layout>
      {/* Warm Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
        {/* Hand-drawn style background elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className="w-32 h-32 bg-rose-200 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-20 opacity-10">
          <div className="w-48 h-48 bg-amber-200 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                ref={heroAnimation.elementRef}
                className={`transition-all duration-700 ${
                  heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                  Care that feels
                  <span className="block text-rose-600 mt-2">like family</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  At DivineAngel, we believe care should be personal, compassionate, 
                  and built on genuine relationships. Our caregivers become trusted 
                  companions who honor your stories and support your independence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="flex items-center gap-2">
                      Meet our caregivers
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call us anytime
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={grandmaSmiling}
                  alt="Happy senior woman with her caregiver"
                  className="w-full h-[500px] object-cover"
                />
                {/* Handwritten style note */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Maria feels like the daughter I never had"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
            How we care for you
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howWeWork.map((item, index) => (
              <div 
                key={item.step}
                className="text-left p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 group"
              >
                <div className="text-2xl font-serif text-rose-600 mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {item.step}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Real Photos */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Everyday support, extraordinary care
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From helping with daily tasks to providing meaningful companionship, 
              we're here to make life easier and more joyful.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-serif text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {service.testimonial && (
                    <div className="bg-white rounded-lg p-4 border-l-4 border-rose-500">
                      <p className="text-gray-700 italic">
                        "{service.testimonial}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Little Things */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            It's the little things that matter
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Beyond the essential care, our caregivers bring warmth, laughter, 
            and companionship to everyday moments.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {littleExtras.map((extra, index) => (
              <div 
                key={extra.text}
                className="bg-amber-50 rounded-xl p-6 hover:bg-rose-50 transition-all duration-300 group hover:shadow-sm"
              >
                <extra.icon className="h-8 w-8 text-rose-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 font-medium">{extra.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Caregivers */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Meet people who care like you do
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our caregivers are carefully selected for their compassion, 
              experience, and genuine desire to make a difference.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img
              src={teamPhoto}
              alt="Our caregiving team"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8 text-white">
                <p className="text-xl font-serif mb-4">
                  Real people, real relationships
                </p>
                <p className="opacity-90">
                  Every caregiver joins our team because they believe in the power 
                  of human connection and making a difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Ready to find your perfect caregiver?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's have a conversation about how we can help you or your loved one 
              live life to the fullest at home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702)-426-4862
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setDialogOpen(true)}
                className="border-gray-300 text-gray-700 hover:bg-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Send us a message
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-600">
              <p>No pressure, just a friendly conversation to see if we're the right fit</p>
            </div>
          </div>
        </div>
      </section>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </Layout>
  );
};

export default Services;