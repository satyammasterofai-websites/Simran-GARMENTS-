'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <ShoppingBag className={`w-8 h-8 ${isScrolled ? 'text-pink-600' : 'text-white'}`} />
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
              SIMRAN GARMENTS
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-pink-500 ${isScrolled ? 'text-zinc-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                  : 'bg-white text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              Wholesale Inquiry
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-zinc-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-4 pt-2 pb-6 shadow-xl absolute top-full left-0 w-full"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-600 hover:text-pink-600 font-medium text-lg px-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 text-center bg-pink-600 text-white rounded-full font-medium"
              >
                Wholesale Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
