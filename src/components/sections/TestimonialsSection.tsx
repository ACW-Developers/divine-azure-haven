import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const testimonialsAnimation = useScrollAnimation(0.2);

  const testimonials = [
    {
      name: 'Margaret Johnson',
      relationship: 'Daughter of Client',
      text: 'DivineAngel Care has been a blessing for our family. The caregiver they matched with my mother is patient, kind, and treats her like family. We finally have peace of mind.',
      rating: 5,
      location: 'Phoenix, AZ',
    },
    {
      name: 'Robert Martinez',
      relationship: 'Son of Client',
      text: 'After my father\'s stroke, we needed reliable care. The team at DivineAngel stepped in immediately and provided exceptional support. They truly care about their clients.',
      rating: 5,
      location: 'Scottsdale, AZ',
    },
    {
      name: 'Susan Williams',
      relationship: 'Client',
      text: 'I was hesitant about having someone help me at home, but my caregiver has become a dear friend. She respects my independence while ensuring I\'m safe and well cared for.',
      rating: 5,
      location: 'Tucson, AZ',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_48%,hsl(24_100%_50%)_48%,hsl(24_100%_50%)_52%,transparent_52%)] bg-[size:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={testimonialsAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            testimonialsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="h-8 w-8 text-orange-500 fill-orange-500 animate-pulse" />
            <span className="text-orange-600 font-bold tracking-wider">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Trusted by Arizona Families
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear what families across Arizona have to say 
            about their experience with DivineAngel Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-orange-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-orange-200 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.relationship}</p>
                  <p className="text-sm text-orange-600 mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
