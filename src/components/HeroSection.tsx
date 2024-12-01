import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CircularImage = ({ src, className = "", delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      className={`rounded-full overflow-hidden transition-transform duration-700 hover:scale-110 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt="Interior"
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-700 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <div className="relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-center leading-tight"
        >
          <span className="relative inline-block">
            Luxurious Interior
            <div className="absolute inset-0 border-2 border-black/10 rounded-2xl -rotate-1" />
          </span>
          <div className="flex items-center justify-center gap-4 my-4">
            <CircularImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              className="w-24 h-24 sm:w-32 sm:h-32"
              delay={300}
            />
            <span className="text-4xl sm:text-6xl lg:text-8xl">And</span>
            <CircularImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              className="w-24 h-24 sm:w-32 sm:h-32"
              delay={600}
            />
          </div>
          <span className="relative inline-block">
            Industrial Design
            <div className="absolute inset-0 border-2 border-black/10 rounded-2xl rotate-1" />
          </span>
        </motion.h1>

        <div className="relative mt-12 mb-24">
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-48 h-24 bg-white" />
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 -top-6 z-10 px-8 py-3 bg-black text-white rounded-full transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110"
          >
            Best Of Year
          </motion.button>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 animate-rgb-border border-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
              alt="Luxury Interior"
              loading="lazy"
              className="w-full h-[50vh] sm:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-6 right-6 flex -space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Founder"
                loading="lazy"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Principal"
                loading="lazy"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>

            <div className="absolute bottom-6 right-28 text-right">
              <p className="text-sm font-medium text-black bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full">
                Founder and Principal
              </p>
              <p className="text-sm font-medium text-black bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full mt-1">
                Brittocharette
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};