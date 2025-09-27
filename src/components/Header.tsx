import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-card-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Heart className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DivineAngel Care
              </h1>
              <p className="text-xs text-muted-foreground font-medium">LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary animate-scale-in" />
                )}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(123) 456-7890</span>
              </a>
              
              <Button className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground shadow-card hover:shadow-card-hover transition-all duration-300">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-lg rounded-lg border border-card-border mt-2 shadow-card">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary-light'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(123) 456-7890</span>
                </a>
                
                <Button className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground">
                  Get Started
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