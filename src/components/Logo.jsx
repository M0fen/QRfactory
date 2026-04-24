import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Logo = ({ size = 'md', className, onClick }) => {
  const sizeClasses = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-4xl md:text-6xl',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn("relative inline-block cursor-pointer select-none", className)}
      onClick={onClick}
    >
      <span className={cn(
        "font-extrabold tracking-[0.1em] uppercase",
        sizeClasses[size] || sizeClasses.md
      )}>
        <span className="text-white">CARD</span>
        <span className="text-chrome">FACTORY</span>
      </span>
    </motion.div>
  );
};

export default Logo;