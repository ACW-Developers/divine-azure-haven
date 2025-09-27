import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-300 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badges */}
        <div className="py-8 border-b border-navy-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-emerald-400" />
              <div className="text-left">
                <p className="font-semibold text-sm">Licensed & Bonded</p>
                <p className="text-navy-300 text-xs">Fully Insured</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-8 w-8 text-cyan-400" />
              <div className="text-left">
                <p className="font-semibold text-sm">24/7 Availability</p>
                <p className="text-navy-300 text-xs">Always Here for You</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-amber-400" />
              <div className="text-left">
                <p className="font-semibold text-sm">5-Star Rated</p>
                <p className="text-navy-300 text-xs">Exceptional Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-navy-200 bg-clip-text text-transparent">
                  DivineAngel Care
                </h3>
                <p className="text-navy-300 text-sm font-medium">Compassionate Home Care</p>
              </div>
            </Link>
            <p className="text-navy-300 leading-relaxed">
              Providing compassionate, professional non-medical home care services across Arizona. 
              We're dedicated to helping your loved ones maintain independence and dignity.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Twitter, color: 'hover:bg-sky-500' },
                { Icon: Instagram, color: 'hover:bg-gradient-to-r from-purple-500 to-pink-500' },
                { Icon: Linkedin, color: 'hover:bg-blue-700' }
              ].map(({ Icon, color }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`w-10 h-10 bg-navy-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${color} border border-navy-700/50`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-navy-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Personal Care', 'Companionship', 'Meal Preparation', 
                'Light Housekeeping', 'Medication Reminders', 'Transportation'
              ].map((service) => (
                <li key={service} className="flex items-center text-navy-300 group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold">(123) 456-7890</p>
                  <p className="text-sm text-navy-300">24/7 Support Available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">info@divineangelcare.com</p>
                  <p className="text-sm text-navy-300">Email us anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">Arizona, USA</p>
                  <p className="text-sm text-navy-300">Serving all of Arizona</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-navy-400 text-sm">
              © {currentYear} DivineAngel Care LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-navy-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;