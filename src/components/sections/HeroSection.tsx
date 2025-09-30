import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Heart, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const heroAnimation = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={heroAnimation.elementRef}
            className={`transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <Heart className="h-8 w-8 text-orange-500 animate-pulse" fill="currentColor" />
              <span className="text-orange-600 font-bold text-lg tracking-wide">Compassionate Care Since 2014</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-navy bg-clip-text text-transparent bg-gradient-to-r from-navy to-blue-900">
                Professional
              </span>
              <span className="block text-orange-500 mt-2 animate-shimmer">
                Home Care
              </span>
              <span className="block text-navy/80 text-4xl md:text-5xl mt-2">
                Across Arizona
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
              Providing compassionate, dignified non-medical care that allows your loved ones 
              to thrive in the comfort of their own home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl magnetic-hover pulse-glow group"
              >
                <span>Start Your Care Journey</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-6 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                (480) 555-1234
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" fill="currentColor" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">500+</div>
                  <div className="text-gray-600">Families Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-blue-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>
              <img
                src={heroImage}
                alt="Compassionate caregiver providing home care services"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl animate-float z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">5.0</div>
                    <div className="text-gray-600 text-sm">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
