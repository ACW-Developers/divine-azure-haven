import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  MapPin, 
  Phone, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Award,
  Sparkles,
  Play,
  Pause
} from 'lucide-react';

// Import local images
import testimonialBg from '@/assets/meal-preparation.jpg';
import familyPhoto1 from '@/assets/companion-care-activities.jpg';
import familyPhoto2 from '@/assets/caregiver.jpg';
import familyPhoto3 from '@/assets/hero-image.jpg';

export const TestimonialsSection = () => {
  const testimonialsAnimation = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Daughter of Client',
      content: 'DivineAngel Care has been a blessing for our family. The caregivers are professional, caring, and truly understand our needs. My mother looks forward to their visits every day.',
      rating: 5,
      location: 'Phoenix, AZ',
      service: 'Personal Care & Companionship',
      duration: '6 months of service',
      image: familyPhoto1,
      highlight: 'Professional & Caring'
    },
    {
      name: 'Robert Martinez',
      role: 'Family Caregiver',
      content: 'The peace of mind knowing my father is in good hands is priceless. The team goes above and beyond to ensure his comfort and safety. Highly recommend their services!',
      rating: 5,
      location: 'Scottsdale, AZ',
      service: '24/7 Care & Support',
      duration: '1 year of service',
      image: familyPhoto2,
      highlight: 'Peace of Mind'
    },
    {
      name: 'Linda Chen',
      role: 'Client',
      content: 'The companion care I receive helps me stay active and engaged. The staff feels like family. They remember all the little details that make me feel special and cared for.',
      rating: 5,
      location: 'Tucson, AZ',
      service: 'Daily Assistance & Activities',
      duration: '8 months of service',
      image: familyPhoto3,
      highlight: 'Like Family'
    },
    {
      name: 'Michael Thompson',
      role: 'Son of Client',
      content: 'Outstanding service! The caregivers are punctual, professional, and show genuine care. My dad\'s quality of life has improved significantly since we started with DivineAngel.',
      rating: 5,
      location: 'Mesa, AZ',
      service: 'Medication Management & Mobility',
      duration: '4 months of service',
      image: familyPhoto1,
      highlight: 'Quality of Life'
    },
    {
      name: 'Jennifer Williams',
      role: 'Family Member',
      content: 'We tried several agencies before finding DivineAngel. Their attention to detail and personalized approach sets them apart. Truly exceptional care.',
      rating: 5,
      location: 'Chandler, AZ',
      service: 'Dementia Care & Support',
      duration: '1.5 years of service',
      image: familyPhoto2,
      highlight: 'Exceptional Care'
    },
    {
      name: 'David Rodriguez',
      role: 'Client',
      content: 'As a veteran, I appreciate the respect and dignity shown by the caregivers. They understand my needs and help me maintain my independence at home.',
      rating: 5,
      location: 'Glendale, AZ',
      service: 'Veteran Care Services',
      duration: '10 months of service',
      image: familyPhoto3,
      highlight: 'Respect & Dignity'
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const scrollToTestimonial = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 400;
      container.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    scrollToTestimonial(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToTestimonial(newIndex);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={testimonialBg}
          alt="Compassionate care background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-700/85 to-sky-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            ref={testimonialsAnimation.elementRef}
            className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 transition-all duration-1000 ${
              testimonialsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              HEARTFELT TESTIMONIALS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Stories of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">
              Compassion & Care
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover why Arizona families trust DivineAngel Care for their loved ones. 
            Real stories from real people who have experienced our exceptional home care services.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className={`mb-16 transition-all duration-1000 ${
          testimonialsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Testimonial Image */}
                <div className="relative h-80 lg:h-full">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {testimonials[currentIndex].highlight}
                    </span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <Quote className="w-12 h-12 text-accent/30 mb-4" />
                  
                  <blockquote className="text-white text-xl lg:text-2xl leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{testimonials[currentIndex].name}</div>
                        <div className="text-white/80">{testimonials[currentIndex].role}</div>
                        <div className="flex items-center gap-2 text-accent text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-white/70">
                      <span className="bg-white/10 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].service}
                      </span>
                      <span className="bg-white/10 px-3 py-1 rounded-full">
                        {testimonials[currentIndex].duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-20">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-16"
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group backdrop-blur-sm border-white/20 flex-shrink-0 w-80 transition-all duration-500 cursor-pointer ${
                  index === currentIndex 
                    ? 'bg-white/20 shadow-2xl scale-105' 
                    : 'bg-white/10 hover:bg-white/15 hover:scale-102'
                }`}
                onClick={() => scrollToTestimonial(index)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/90 leading-relaxed mb-6 flex-1 text-sm line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-accent text-xs font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-white/70 text-xs flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};