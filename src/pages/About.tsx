import React from 'react';
import Layout from '@/components/Layout';
import AnimatedBackground from '@/components/AnimatedBackground';
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
  ArrowRight
} from 'lucide-react';

import caregivingHero from '@/assets/caregiver.jpg';
import compassionateCare from '@/assets/caregiver.jpg';
import professionalTeam from '@/assets/caregiver.jpg';
import familySupport from '@/assets/caregiver.jpg';
import elderlyCompanionship from '@/assets/caregiver.jpg';
import caregivingQuality from '@/assets/caregiver.jpg';
import teamMeeting from '@/assets/caregiver.jpg';

const About = () => {
  const parallaxOffset = useParallax();
  const heroAnimation = useScrollAnimation(0.1);
  const storyAnimation = useScrollAnimation(0.2);
  const valuesAnimation = useScrollAnimation(0.2);
  const teamAnimation = useScrollAnimation(0.2);
  
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with empathy, understanding, and genuine care for their well-being.',
      image: compassionateCare
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through reliability, honesty, and professional excellence.',
      image: familySupport
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of care and continuous improvement in our services.',
      image: caregivingQuality
    },
    {
      icon: Handshake,
      title: 'Respect',
      description: 'Honoring the dignity, independence, and unique needs of every individual we serve.',
      image: elderlyCompanionship
    },
  ];

  const stats = [
    { number: '500+', label: 'Families Served', icon: Users },
    { number: '50+', label: 'Trained Caregivers', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '24/7', label: 'Available Support', icon: Shield },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Director of Care',
      experience: '15+ years in healthcare',
      description: 'Licensed RN with extensive experience in home care coordination and family support.',
      image: professionalTeam
    },
    {
      name: 'James Thompson',
      role: 'Operations Manager',
      experience: '12+ years in operations',
      description: 'Ensures seamless service delivery and maintains our high standards of care.',
      image: teamMeeting
    },
    {
      name: 'Sarah Wilson',
      role: 'Care Coordinator',
      experience: '8+ years in care planning',
      description: 'Specializes in creating personalized care plans that meet individual needs.',
      image: compassionateCare
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 morphing-bg text-primary-foreground overflow-hidden">
        <AnimatedBackground />
        
        {/* Multiple Parallax Background Images */}
        <div 
          className="absolute inset-0 opacity-15 parallax-bg"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        >
          <img
            src={caregivingHero}
            alt="Professional caregiving service"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div 
          className="absolute inset-0 opacity-10 parallax-bg"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          <img
            src={familySupport}
            alt="Family support and care"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.elementRef}
            className={`transition-all duration-1000 ${
              heroAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <div className="w-2 h-8 bg-accent rounded-full animate-pulse-glow"></div>
                <span className="text-accent font-semibold tracking-wider">ABOUT DIVINEANGEL CARE</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Compassionate
                <span className="text-accent relative block mt-2">
                  Care That
                  <Sparkles className="absolute -top-4 -right-8 h-8 w-8 animate-bounce text-accent" />
                </span>
                <span className="text-primary-foreground">Truly Matters</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
                Founded on the belief that everyone deserves compassionate, dignified care 
                in the comfort of their own home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-6 shadow-hero magnetic-hover pulse-glow animate-zoom-in"
                >
                  <span>Learn About Our Services</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 animate-fade-in-up"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow" />
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
                <div className="w-2 h-8 bg-primary rounded-full"></div>
                <span className="text-primary font-semibold tracking-wider">OUR JOURNEY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                A Legacy of 
                <span className="text-primary"> Compassionate Service</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  <strong>DivineAngel Care LLC</strong> was founded in 2014 with a simple yet powerful mission: 
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

              {/* Enhanced Stats Grid */}
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <stat.icon className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative group">
                <img
                  src={professionalTeam}
                  alt="Our professional healthcare team providing compassionate care"
                  className="rounded-3xl shadow-2xl w-full group-hover:transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-700"></div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-2xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm font-medium">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(45deg,hsl(var(--primary))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--primary))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--primary))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--primary))_75%)] bg-[size:20px_20px] animate-shimmer" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="bg-background border-border shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:transform hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-12 relative overflow-hidden">
                {/* Background Icon */}
                <Target className="absolute -right-8 -top-8 h-32 w-32 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" />
                
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Target className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To enhance the quality of life for individuals and families by providing compassionate, 
                  reliable, and personalized non-medical home care services. We strive to support 
                  independence, dignity, and well-being while giving families peace of mind.
                </p>
                
                <div className="mt-8 flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-background border-border shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:transform hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-12 relative overflow-hidden">
                {/* Background Icon */}
                <Eye className="absolute -right-8 -top-8 h-32 w-32 text-secondary/5 group-hover:text-secondary/10 transition-colors duration-500" />
                
                <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="h-10 w-10 text-secondary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be Arizona's most trusted and respected provider of home care services, known for 
                  our unwavering commitment to excellence, innovation in care delivery, and the 
                  positive impact we make in our clients' lives every day.
                </p>
                
                <div className="mt-8 flex items-center text-secondary font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Our future goals</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-left mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-accent rounded-full"></div>
              <span className="text-accent font-semibold tracking-wider">WHAT GUIDES US</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Our Core 
              <span className="text-primary relative">
                {' '}Values
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full animate-shimmer" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These guiding principles shape everything we do and every interaction we have with our clients and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group bg-background border-border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:transform hover:-translate-y-2 magnetic-hover"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <CardContent className="p-8 md:w-3/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 pulse-glow">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                    
                    {/* Progress Bar Effect */}
                    <div className="mt-4 w-full bg-muted rounded-full h-1">
                      <div className="bg-gradient-primary h-1 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold tracking-wider">MEET OUR TEAM</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Expert 
              <span className="text-primary"> Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experienced professionals dedicated to providing exceptional care and support for your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="bg-background border-border shadow-xl hover:shadow-2xl transition-all duration-500 group hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                        <Users className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-accent font-medium mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-accent" />
                    {member.experience}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">{member.description}</p>
                  
                  <Button variant="ghost" className="mt-6 p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn">
                    <span className="flex items-center gap-2">
                      View Profile
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-accent rounded-full"></div>
              <span className="text-accent font-semibold tracking-wider">OUR CREDENTIALS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Licensed & 
              <span className="text-primary"> Accredited</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We maintain the highest standards of professionalism and quality in all aspects of our care services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <div className="flex flex-col items-start p-8 bg-primary/5 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Arizona Licensed</h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                Fully licensed by the Arizona Department of Health Services with regular inspections and compliance verification.
              </p>
            </div>
            
            <div className="flex flex-col items-start p-8 bg-secondary/5 rounded-3xl border border-secondary/20 hover:border-secondary/40 transition-all duration-500 group hover:transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Award className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Insured & Bonded</h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                Comprehensive insurance coverage and bonding for complete protection and peace of mind for our clients.
              </p>
            </div>
            
            <div className="flex flex-col items-start p-8 bg-accent/5 rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-500 group hover:transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality Assured</h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                Committed to the highest standards of care delivery with continuous training and quality improvement programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 morphing-bg text-primary-foreground relative overflow-hidden">
        {/* Multiple Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse-slow blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full animate-float-delayed blur-lg" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-accent rounded-full animate-pulse-glow"></div>
              <span className="text-accent font-semibold tracking-wider">GET STARTED</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Experience the
              <span className="text-accent relative block">
                DivineAngel Difference
                <Sparkles className="absolute -top-4 -right-8 h-8 w-8 text-accent animate-bounce" />
              </span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl">
              Join hundreds of families who trust us with their most precious loved ones. 
              Schedule your free consultation today and discover how we can make a difference in your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-12 py-6 shadow-2xl magnetic-hover pulse-glow group"
              >
                <span className="flex items-center gap-3">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-12 py-6 backdrop-blur-sm"
              >
                Call Us: (480) 555-1234
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free in-home assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;