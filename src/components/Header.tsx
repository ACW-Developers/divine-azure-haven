import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Phone, Home, User, Settings, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg">
                <Heart className="h-6 w-6 text-white fill-white" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                  DivineAngel
                </span>
                <span className="text-xs font-semibold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                  Care
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
                <p className="text-xs text-gray-500 font-medium tracking-wide">COMPASSIONATE CARE LLC</p>
                <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-rose-600 bg-rose-50 shadow-sm'
                      : 'text-gray-600 hover:text-rose-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`h-4 w-4 transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span>{item.name}</span>
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-scale-in" />
                  )}
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-600 hover:text-rose-600 transition-all duration-300 group"
              >
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-rose-50 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-semibold">(123) 456-7890</span>
              </a>
              
              <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-2 rounded-xl">
                Get Started
                <Sparkles className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-600 hover:text-rose-600 hover:bg-gray-50 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 mt-2 shadow-xl">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-rose-600 bg-rose-50 shadow-sm'
                        : 'text-gray-600 hover:text-rose-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              <div className="px-4 py-3 space-y-3 border-t border-gray-100 mt-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors py-2"
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-semibold">(123) 456-7890</span>
                </a>
                
                <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg font-semibold py-3 rounded-xl">
                  Get Started
                  <Sparkles className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;