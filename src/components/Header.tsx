import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Phone, 
  Home, 
  User, 
  Settings, 
  Mail, 
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Clock,
  Heart,
  Sparkles
} from 'lucide-react';
import logo2 from "@/assets/logos/logo2.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTopSectionVisible, setIsTopSectionVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      setIsTopSectionVisible(scrollTop < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Settings,
      submenu: [
        { name: 'Web Design', href: '/services/web-design' },
        { name: 'Development', href: '/services/development' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-500' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Section - Social & Contact Info */}
      <div className={`fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-primary via-primary-dark to-primary text-white transition-all duration-500 ${
        isTopSectionVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 space-y-2 sm:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-white/90">Arizona, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-white/90">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-white/90">24/7 Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white/90 font-medium">Follow Us:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-white/90 hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-elegant border-b border-accent/20' 
          : 'bg-white/90 backdrop-blur-md shadow-card'
      } ${isTopSectionVisible ? 'mt-12' : 'mt-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group relative"
            >
              {/* Logo */}
            <Link to="/" className="flex items-center ">
              <img src={logo2} alt="Local Icon" className="w-10 h-10 rounded-xl shadow" />

            </Link>
              
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-900/90  to-secondary bg-clip-text text-transparent">
                    DivineAngel
                  </span>
                  <span className="text-xs font-semibold bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent animate-shimmer">
                    Care
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse"></div>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">LLC</p>
                  <div className="w-1 h-1 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                const hasSubmenu = item.submenu;
                
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={`relative flex items-center space-x-2 px-5 py-2 rounded-xl font-semibold transition-all duration-300 group magnetic-hover ${
                        isActive(item.href)
                          ? 'text-accent bg-gradient-to-r from-accent/10 to-secondary/10 shadow-card border border-accent/20 glow-effect'
                          : 'text-foreground hover:text-accent hover:bg-gradient-to-r hover:from-accent/5 hover:to-secondary/5'
                      }`}
                    >
                      <IconComponent className={`h-4 w-4 transition-transform duration-300 ${
                        isActive(item.href) ? 'scale-110' : 'group-hover:scale-110'
                      }`} />
                      <span>{item.name}</span>
                      {hasSubmenu && (
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}

                    </Link>

                    {/* Dropdown Menu */}
                    {hasSubmenu && (
                      <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-all duration-200 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-teal-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* CTA Button */}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-accent/20">
                <Button className="bg-gradient-to-r from-accent via-accent-hover to-accent hover:from-accent-hover hover:to-accent text-white shadow-elegant hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-2 rounded-xl relative overflow-hidden group magnetic-hover glow-effect">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <Sparkles className="h-4 w-4 ml-2 animate-spin" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-slate-50 transition-all duration-300 relative border border-slate-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              {!isMenuOpen && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden animate-fade-in-up">
              <div className="px-3 pt-3 pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 mt-2 shadow-xl mb-4">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                          isActive(item.href)
                            ? 'text-amber-600 bg-amber-50 shadow-sm border-amber-100'
                            : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50 border-transparent'
                        }`}
                        onClick={() => !item.submenu && setIsMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-4 w-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.submenu && <ChevronDown className="h-4 w-4" />}
                      </Link>
                      
                      {/* Mobile Submenu */}
                      {item.submenu && (
                        <div className="ml-8 space-y-1 mt-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center px-4 py-2 text-slate-600 hover:text-amber-600 rounded-lg transition-colors duration-200 border-l-2 border-slate-200 hover:border-amber-400"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-teal-500 rounded-full mr-3" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <div className="px-4 py-3 space-y-3 border-t border-slate-200 mt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors py-2 px-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-sm">Call Us</span>
                    </a>
                    
                    <a
                      href="mailto:info@company.com"
                      className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 transition-colors py-2 px-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-sm">Email Us</span>
                    </a>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg font-semibold py-3 rounded-xl border border-amber-600">
                    Get Started
                    <Sparkles className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;