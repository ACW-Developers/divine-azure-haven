import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Clock, 
  Shield, 
  Heart,
  Award,
  Calendar,
  MapPin,
  BadgeCheck,
  TrendingUp
} from 'lucide-react';

import companionActivities from '@/assets/companion-care-activities.jpg';
import seniorReading from '@/assets/senior-reading.jpg';

export const FeaturesSection = () => {
  const featuresAnimation = useScrollAnimation(0.2);

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support when you need it most.',
      stat: '24/7'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.',
      stat: '100%'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every caregiver is carefully selected for their empathy and professionalism.',
      stat: '500+'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in home care services across Arizona.',
      stat: '5★'
    }
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={seniorReading}
          alt="Care certification and quality background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div 
            ref={featuresAnimation.elementRef}
            className={`transition-all duration-1000 ${
              featuresAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4 font-semibold">
              <Award className="w-4 h-4" />
              WHY CHOOSE US
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Setting the <span className="text-primary">Standard</span> in Home Care Excellence
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              With years of experience and countless success stories, we've perfected the art of compassionate care that truly makes a difference in people's lives.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 group hover:shadow-card-hover transition-all duration-500 magnetic-hover ${
                    featuresAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <div className="text-white font-bold text-lg">{feature.stat}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Graphics */}
          <div className={`relative group ${
            featuresAnimation.isVisible ? 'animate-slide-in-right' : 'opacity-0 transform translate-x-10'
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={companionActivities}
                alt="Happy family with caregiver in Arizona"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Families</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Care Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: BadgeCheck, text: 'Background Checked' },
                { icon: Award, text: 'Award Winning' },
                { icon: MapPin, text: 'Serving Arizona' }
              ].map((badge, index) => (
                <div 
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground magnetic-hover animate-fade-in-up"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
