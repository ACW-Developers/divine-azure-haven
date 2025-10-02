import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  Send, 
  ChevronUp,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Users,
  Calendar,
  Award,
  Sparkles
} from 'lucide-react';

// Import logo
import Logo from '@/assets/logo/divineangel-logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    company: [
      { label: 'Home', href: '/', icon: ArrowRight },
      { label: 'About Us', href: '/about', icon: ArrowRight },
      { label: 'Our Services', href: '/services', icon: ArrowRight },
      { label: 'Testimonials', href: '/testimonials', icon: ArrowRight },
      { label: 'Contact', href: '/contact', icon: ArrowRight }
    ],
    services: [
      { label: 'Personal Care Assistance', href: '/services', icon: Users },
      { label: 'Companionship Services', href: '/services', icon: Heart },
      { label: 'Meal Preparation', href: '/services', icon: Calendar },
      { label: 'Housekeeping', href: '/services', icon: Shield },
      { label: 'Medication Reminders', href: '/services', icon: CheckCircle },
      { label: 'Transportation', href: '/services', icon: MapPin }
    ],
    resources: [
      { label: 'Care Tips & Resources', href: '/resources', icon: Star },
      { label: 'FAQ', href: '/faq', icon: Award },
      { label: 'Blog', href: '/blog', icon: Sparkles },
      { label: 'Caregiver Resources', href: '/caregivers', icon: Users }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: CheckCircle, text: 'Background Checked' },
    { icon: Award, text: 'Award Winning Care' },
    { icon: Users, text: 'Trained Professionals' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Premium Wave Top */}
      <div className="w-full h-20 -mb-1 relative">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor" 
            opacity="0.1"
          ></path>
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            opacity="0.2"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor"
          ></path>
        </svg>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 left-1/4 w-8 h-8 bg-blue-400/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute -top-6 right-1/3 w-6 h-6 bg-indigo-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -top-2 left-2/3 w-4 h-4 bg-cyan-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  DivineAngel Care
                </h3>
                <p className="text-white/70 text-sm">Compassionate Home Care • Arizona's Trusted Provider</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md text-sm">
              Providing exceptional non-medical home care services across Arizona. 
              We're committed to enhancing quality of life with compassionate, professional care 
              that allows seniors to maintain independence and dignity in their own homes.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <IconComponent className="w-5 h-5 mx-auto mb-2 text-amber-400" />
                    <p className="text-xs text-white/80 leading-tight">{badge.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">(702)-426-4862</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">info@divineangelcare.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">Serving All of Arizona, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/5 border border-white/10 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2 text-amber-400">
              <Sparkles className="w-5 h-5" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-white/80 transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 hover:text-white group"
                    >
                      <IconComponent className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2 text-amber-400">
              <Heart className="w-5 h-5" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-white/80 transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 hover:text-white group"
                    >
                      <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2 text-amber-400">
              <Star className="w-5 h-5" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-white/80 transition-all duration-300 text-sm flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 hover:text-white group"
                    >
                      <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 pb-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {currentYear} DivineAngel Care LLC. All rights reserved.</span>
            <span className="hidden lg:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Available 24/7 for Emergencies
            </span>
          </div>
          <div className="flex gap-6 flex-wrap">
            <Link to="/privacy" className="text-white/70 transition-colors hover:text-white flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-white/70 transition-colors hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;