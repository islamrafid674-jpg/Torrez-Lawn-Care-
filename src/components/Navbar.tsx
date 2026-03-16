import { motion, AnimatePresence } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div 
          className={`transition-all duration-500 rounded-full px-4 py-3 flex justify-between items-center ${
            isScrolled ? 'glass shadow-xl shadow-stone-900/5' : 'bg-transparent'
          }`}
        >
          <Link to="/" className="flex items-center pl-2">
            <img 
              src="https://i.imgur.com/x5jBMMf.png" 
              alt="Torrez Lawn Care Logo" 
              className="h-12 md:h-14 w-auto object-contain drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium text-sm tracking-wide transition-colors ${
                  location.pathname === link.href 
                    ? 'text-emerald-600' 
                    : 'text-stone-600 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-stone-900 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Estimate</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden pr-2 ${isScrolled ? 'text-stone-900' : 'text-stone-100'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 glass rounded-3xl shadow-2xl pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display font-medium text-xl ${
                    location.pathname === link.href 
                      ? 'text-emerald-600' 
                      : 'text-stone-800 hover:text-emerald-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-5 py-4 rounded-2xl font-medium text-center flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get a Free Estimate</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
