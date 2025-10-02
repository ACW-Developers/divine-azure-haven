import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Target,
  Eye,
  Handshake,
  Sparkles,
  Star,
  ArrowRight,
  Waves,
  Gem,
  Leaf,
  Cloud,
  Sunrise
} from 'lucide-react';

// Hero image
import heroImg from '@/assets/general/b1.jpeg';

// Local images for about page - create these in your assets folder
import compassionateCare from '@/assets/general/c3.jpg';
import professionalTeam from '@/assets/team-image.jpg';
import familySupport from '@/assets/general/f2.jpg';
import elderlyCompanionship from '@/assets/general/g3.jpg';
import caregivingQuality from '@/assets/general/a1.jpeg';
import teamMeeting from '@/assets/general/e3.jpeg';
import director from '@/assets/elderly-walking-assistance.jpg';
import operations from '@/assets/elderly-walking-assistance.jpg';
import coordinator from '@/assets/elderly-walking-assistance.jpg';

const About = () => {
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const storyAnimation = useScrollAnimation(0.2);
  const valuesAnimation = useScrollAnimation(0.2);
  const teamAnimation = useScrollAnimation(0.2);
  const waveCanvasRef = useRef(null);
  const oceanCanvasRef = useRef(null);

  const images = {
    hero: heroImg,
    compassionateCare: compassionateCare,
    professionalTeam: professionalTeam,
    familySupport: familySupport,
    elderlyCompanionship: elderlyCompanionship,
    caregivingQuality: caregivingQuality,
    teamMeeting: teamMeeting,
    director: director,
    operations: operations,
    coordinator: coordinator
  };

  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const waveCount = 4;

    let animationId;

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with empathy, understanding, and genuine care for their well-being.',
      image: images.compassionateCare,
      color: 'from-rose-100 to-pink-100'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through reliability, honesty, and professional excellence.',
      image: images.familySupport,
      color: 'from-blue-100 to-cyan-100'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of care and continuous improvement in our services.',
      image: images.caregivingQuality,
      color: 'from-amber-100 to-orange-100'
    },
    {
      icon: Handshake,
      title: 'Respect',
      description: 'Honoring the dignity, independence, and unique needs of every individual we serve.',
      image: images.elderlyCompanionship,
      color: 'from-emerald-100 to-teal-100'
    },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Director of Care',
      description: 'Licensed RN with extensive experience in home care coordination and family support.',
      image: images.director,
      specialty: 'Geriatric Care'
    },
    {
      name: 'James Thompson',
      role: 'Operations Manager',
      description: 'Ensures seamless service delivery and maintains our high standards of care.',
      image: images.operations,
      specialty: 'Process Excellence'
    },
    {
      name: 'Sarah Wilson',
      role: 'Care Coordinator',
      description: 'Specializes in creating personalized care plans that meet individual needs.',
      image: images.coordinator,
      specialty: 'Personalized Planning'
    },
  ];

  return (
    <Layout>

      {/* Enhanced Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,oklch(0.45_0.24_255.1)_1px,transparent_0)] bg-[size:50px_50px] animate-pulse-slow" />
        </div>

        {/* Floating Gems */}
        <div className="absolute top-20 right-20 animate-float">
          <Gem className="h-12 w-12 text-blue-200/40" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float-delayed">
          <Gem className="h-8 w-8 text-purple-200/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={storyAnimation.elementRef}
              className={`transition-all duration-1000 ${
                storyAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold tracking-wider">OUR JOURNEY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                A Legacy of 
                <span className="text-blue-600"> Compassionate Service</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong className="text-gray-900">DivineAngel Care LLC</strong> was founded in 2024 with a simple yet powerful mission: 
                  to provide exceptional non-medical home care services that allow individuals to age 
                  gracefully and maintain their independence in the comfort of their own homes.
                </p>
                <p>
                  Our journey began when our founder witnessed firsthand the challenges faced by families 
                  seeking quality care for their loved ones. We recognized the need for a care service 
                  that prioritizes not just physical assistance, but emotional well-being and dignity.
                </p>
                <p>
                  Today, we're proud to serve families across Arizona with a team of dedicated, trained 
                  caregivers who share our commitment to excellence and compassion.
                </p>
              </div>

            </div>
            
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={images.professionalTeam}
                  alt="Our professional healthcare team providing compassionate care"
                  className="relative rounded-2xl shadow-2xl w-full group-hover:transform group-hover:scale-105 transition-all duration-700 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl group-hover:opacity-0 transition-opacity duration-700 z-20"></div>
                
                {/* Enhanced Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-8 shadow-2xl animate-float z-30 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1+</div>
                    <div className="text-sm font-medium">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
        {/* Ocean-inspired Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_49%,hsl(220_80%_60%)_49%,hsl(220_80%_60%)_51%,transparent_51%)] bg-[size:20px_20px] animate-shimmer" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:transform hover:-translate-y-2 animate-fade-in-up overflow-hidden">
              <CardContent className="p-12 relative">
                {/* Ocean Wave Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                
                <Target className="absolute -right-8 -top-8 h-32 w-32 text-blue-100 group-hover:text-blue-200 transition-colors duration-500" />
                
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To enhance the quality of life for individuals and families by providing compassionate, 
                  reliable, and personalized non-medical home care services. We strive to support 
                  independence, dignity, and well-being while giving families peace of mind.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:transform hover:-translate-y-2 animate-fade-in-up overflow-hidden">
              <CardContent className="p-12 relative">
                {/* Ocean Wave Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                
                <Eye className="absolute -right-8 -top-8 h-32 w-32 text-purple-100 group-hover:text-purple-200 transition-colors duration-500" />
                
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be Arizona's most trusted and respected provider of home care services, known for 
                  our unwavering commitment to excellence, innovation in care delivery, and the 
                  positive impact we make in our clients' lives every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section with Ocean Themes */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Ocean Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,hsl(220_80%_60%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_80%_60%)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
              <span className="text-cyan-600 font-semibold tracking-wider">WHAT GUIDES US</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our Core 
              <span className="text-blue-600 relative">
                {' '}Values
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These guiding principles shape everything we do and every interaction we have with our clients and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group bg-white/80 backdrop-blur-sm border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2 magnetic-hover"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-${value.color.split('-')[1]}-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  
                  <CardContent className="p-8 md:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 pulse-glow shadow-lg`}>
                        <value.icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{value.description}</p>
                    
                    {/* Ocean Wave Progress Bar */}
                    <div className="mt-4 w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300 transform origin-left" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
              <span className="text-purple-600 font-semibold tracking-wider">MEET OUR TEAM</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Expert 
              <span className="text-purple-600"> Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experienced professionals dedicated to providing exceptional care and support for your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {member.specialty}
                  </div>
                </div>
                
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-cyan-600 font-medium mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-cyan-500" />
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA with Ocean Theme */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-500 to-sky-600 text-white relative overflow-hidden">
        {/* Ocean Particles */}
        <canvas
          ref={oceanCanvasRef}
          className="absolute inset-0 opacity-10"
        />
        
        {/* Multiple Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float-slow blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse-slow blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-float-delayed blur-lg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-cyan-400 rounded-full animate-pulse-glow"></div>
              <span className="text-cyan-400 font-semibold tracking-wider">GET STARTED</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Experience the
              <span className="text-cyan-300 relative block">
                DivineAngel Difference
                <Sparkles className="absolute -top-4 -right-8 h-8 w-8 text-cyan-300 animate-spin" />
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Join hundreds of families who trust us with their most precious loved ones. 
              Schedule your free consultation today and discover how we can make a difference in your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-12 py-6 shadow-2xl magnetic-hover pulse-glow group backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-blue-900 text-lg px-12 py-6 backdrop-blur-sm"
              >
                Call Us: (702)-426-4862
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-white/80 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>Free in-home assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span>24/7 support available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes ring {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-ring {
          animation: ring 1s ease-in-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .magnetic-hover {
          transition: all 0.3s ease;
        }
        .magnetic-hover:hover {
          transform: scale(1.05);
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }
        @keyframes pulse-glow {
          from { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          to { box-shadow: 0 0 30px rgba(34, 211, 238, 0.8); }
        }
      `}</style>
    </Layout>
  );
};

export default About;