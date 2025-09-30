import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LocationsSection = () => {
  const locationsAnimation = useScrollAnimation(0.2);

  const locations = [
    {
      city: 'Phoenix',
      counties: ['Maricopa County'],
      phone: '(480) 555-1234',
      coverage: ['Phoenix', 'Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Glendale'],
    },
    {
      city: 'Tucson',
      counties: ['Pima County'],
      phone: '(520) 555-1234',
      coverage: ['Tucson', 'Oro Valley', 'Marana', 'Sahuarita', 'Green Valley'],
    },
    {
      city: 'Northern Arizona',
      counties: ['Coconino & Yavapai Counties'],
      phone: '(928) 555-1234',
      coverage: ['Flagstaff', 'Prescott', 'Sedona', 'Cottonwood', 'Camp Verde'],
    },
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={locationsAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            locationsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-orange-400 animate-bounce" />
            <span className="text-orange-400 font-bold tracking-wider">SERVICE AREAS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serving Communities Across Arizona
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're proud to provide compassionate home care services throughout Arizona. 
            Find your local DivineAngel Care team below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.city}
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-orange-400 hover:bg-white/15 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                <p className="text-white/70 mb-4">{location.counties}</p>

                <div className="flex items-center gap-2 mb-6 text-orange-400">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${location.phone}`} className="font-semibold hover:underline">
                    {location.phone}
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-white/60 font-semibold mb-3">Coverage Areas:</p>
                  {location.coverage.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      <span className="text-white/80">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 mb-4">
            Don't see your city listed? We're always expanding!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call us to check availability in your area
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
