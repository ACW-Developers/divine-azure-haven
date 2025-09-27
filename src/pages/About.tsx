import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Target,
  Eye,
  Handshake
} from 'lucide-react';
import teamImage from '@/assets/team-image.jpg';
import homeInterior from '@/assets/home-interior.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with empathy, understanding, and genuine care for their well-being.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through reliability, honesty, and professional excellence.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of care and continuous improvement in our services.',
    },
    {
      icon: Handshake,
      title: 'Respect',
      description: 'Honoring the dignity, independence, and unique needs of every individual we serve.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Families Served' },
    { number: '50+', label: 'Trained Caregivers' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Available Support' },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Director of Care',
      experience: '15+ years in healthcare',
      description: 'Licensed RN with extensive experience in home care coordination and family support.',
    },
    {
      name: 'James Thompson',
      role: 'Operations Manager',
      experience: '12+ years in operations',
      description: 'Ensures seamless service delivery and maintains our high standards of care.',
    },
    {
      name: 'Sarah Wilson',
      role: 'Care Coordinator',
      experience: '8+ years in care planning',
      description: 'Specializes in creating personalized care plans that meet individual needs.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={homeInterior}
            alt="Comfortable home environment"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">DivineAngel Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that everyone deserves compassionate care in the comfort of their own home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  DivineAngel Care LLC was founded in 2014 with a simple yet powerful mission: to provide 
                  exceptional non-medical home care services that allow individuals to age gracefully and 
                  maintain their independence in the comfort of their own homes.
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
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img
                src={teamImage}
                alt="Our professional healthcare team"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <Card className="bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To enhance the quality of life for individuals and families by providing compassionate, 
                  reliable, and personalized non-medical home care services. We strive to support 
                  independence, dignity, and well-being while giving families peace of mind.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Arizona's most trusted and respected provider of home care services, known for 
                  our unwavering commitment to excellence, innovation in care delivery, and the 
                  positive impact we make in our clients' lives every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These guiding principles shape everything we do and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group text-center bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to providing exceptional care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="bg-gradient-card border-card-border shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-accent font-medium mb-4">{member.experience}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Licensed & <span className="text-primary">Accredited</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-primary-light rounded-xl">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold text-primary mb-2">Arizona Licensed</h3>
                <p className="text-primary/80 text-sm text-center">
                  Fully licensed by the Arizona Department of Health Services
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-secondary-light rounded-xl">
                <Award className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-bold text-secondary mb-2">Insured & Bonded</h3>
                <p className="text-secondary/80 text-sm text-center">
                  Comprehensive insurance coverage for your protection
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-accent-light rounded-xl">
                <CheckCircle className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-bold text-accent mb-2">Quality Assured</h3>
                <p className="text-accent/80 text-sm text-center">
                  Committed to the highest standards of care delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience the DivineAngel Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of families who trust us with their most precious loved ones.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground text-lg px-8 py-4 shadow-hero"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;