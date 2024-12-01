import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <X size={24} />
  </motion.button>
);