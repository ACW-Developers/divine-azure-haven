import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Sparkles,
  CheckCircle,
  Video,
  MessageCircle,
  Clock,
  MapPin,
  Calendar
} from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <div className="animate-elastic-entrance">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Take the First Step Toward <span className="text-accent-foreground">Better Care</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl">
              Contact us today for a free, no-obligation consultation. Let's discuss how we can help your family with compassionate, professional care at home.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                'Free Initial Consultation',
                'Custom Care Plans',
                'No Long-Term Contracts',
                '24/7 Support Available'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-accent-foreground text-primary hover:bg-white text-lg px-8 py-4 shadow-2xl magnetic-hover pulse-glow group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Call Now: (123) 456-7890
                <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rotate-hover group"
              >
                <Video className="mr-2 h-5 w-5 group-hover:scale-110" />
                Virtual Consultation
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-white/20 text-lg px-8 py-4 magnetic-hover group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center gap-6 mt-12 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Serving All of Arizona</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Same Day Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
