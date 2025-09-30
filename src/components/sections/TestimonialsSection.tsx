import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonialsAnimation = useScrollAnimation(0.2);

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
  );
};
