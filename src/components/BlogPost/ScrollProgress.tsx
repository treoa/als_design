import React from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  progress: number;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ progress }) => (
  <div className="fixed top-0 left-0 right-0 h-1 bg-black/10">
    <motion.div
      className="h-full bg-black"
      style={{ width: `${progress}%` }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  </div>
);