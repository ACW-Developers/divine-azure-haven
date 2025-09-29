import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter */}
      <div className="border-b border-secondary/20 bg-primary-700/40">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-sm text-white/70">
              Subscribe to receive updates and care tips
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-secondary/30 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-4 py-2 rounded-md border border-white/40 bg-secondary text-sm font-medium hover:bg-orange-500 hover:border-orange-600 transition">
              <div className="flex items-center gap-1">
                Subscribe
                <Send className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-base font-bold">DivineAngel Care</h3>
              <p className="text-xs text-white/70">Compassionate Home Care</p>
            </div>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed">
            Providing compassionate, professional non-medical home care services across Arizona.
          </p>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/40 rounded-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-600 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 border-b border-secondary/30 pb-1">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Our Services', 'Contact', 'Testimonials'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange-500 transition"
                >
                  <ArrowRight className="w-3 h-3" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4 border-b border-secondary/30 pb-1">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              'Personal Care Assistance',
              'Companionship Services',
              'Meal Preparation',
              'Housekeeping',
              'Medication Reminders',
              'Transportation',
            ].map((service) => (
              <li key={service} className="hover:text-orange-500 transition">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold mb-4 border-b border-secondary/30 pb-1">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2 hover:text-orange-500 transition">
              <Phone className="w-4 h-4" /> (123) 456-7890
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500 transition">
              <Mail className="w-4 h-4" /> info@divineangelcare.com
            </li>
            <li className="flex items-center gap-2 hover:text-orange-500 transition">
              <MapPin className="w-4 h-4" /> Arizona, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {currentYear} DivineAngel Care LLC. All rights reserved.</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="hover:text-orange-500 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
