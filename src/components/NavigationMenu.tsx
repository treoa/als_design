import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Users, CreditCard, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { icon: Home, label: 'About', href: '#' },
    { icon: Briefcase, label: 'Projects', href: '#' },
    { icon: Users, label: 'Team', href: '#' },
    { icon: CreditCard, label: 'Pricing', href: '#' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 px-6 sm:px-8 py-4 rounded-2xl flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        
        <a href="#" className="text-2xl font-bold tracking-tight">
          Brittocharette
        </a>
        
        <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:gap-4">
          <Phone size={18} />
          <span>Contact Us</span>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-white/90 backdrop-blur-lg shadow-2xl md:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium text-black hover:text-gray-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
                  <Phone size={18} />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};