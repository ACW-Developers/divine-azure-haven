import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const ctaAnimation = useScrollAnimation(0.2);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-navy to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ctaAnimation.elementRef}
          className={`transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Heart className="h-16 w-16 text-orange-400 mx-auto mb-6 animate-pulse" fill="currentColor" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how we can support your family with compassionate, 
            professional home care. Call us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
            >
              <Phone className="h-6 w-6 mr-3" />
              Call (480) 555-1234
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy text-xl px-12 py-8 transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
