import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollProgress } from './ScrollProgress';
import { CloseButton } from './CloseButton';
import { useScrollLock } from '../../hooks/useScrollLock';

interface BlogPostProps {
  project: {
    title: string;
    description: string;
    content?: string;
    images: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ project, isOpen, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollLock(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);

        // Only trigger close when fully scrolled and not already closing
        if (scrollHeight - scrollTop === clientHeight && progress === 100 && !isClosing) {
          handleClose();
        }
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isClosing]);

  const handleClose = () => {
    setIsClosing(true);
    // Delay the actual close to allow for animation
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  const variants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            ref={scrollRef}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ScrollProgress progress={scrollProgress} />
            <CloseButton onClick={handleClose} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-[50vh] overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-8 left-8 text-4xl font-bold text-white"
                >
                  {project.title}
                </motion.h1>
              </div>

              <div className="p-8">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  {project.description}
                </motion.p>
                
                <div className="prose prose-lg max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <motion.img
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      src={image}
                      alt={`${project.title} detail ${index + 1}`}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};