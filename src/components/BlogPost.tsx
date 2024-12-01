import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (scrollHeight - scrollTop === clientHeight) {
          onClose();
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
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div
            ref={scrollRef}
            className="blog-scroll-container relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative h-[50vh] overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                {project.title}
              </h1>
            </div>

            <div className="p-8">
              <p className="text-xl text-gray-600 mb-8">{project.description}</p>
              
              <div className="prose prose-lg max-w-none">
                {/* This would be your actual blog content */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* Add more content as needed */}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    className="rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};