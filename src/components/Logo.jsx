import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const LOGO_URL = "https://horizons-cdn.hostinger.com/1e2849ea-1bbe-40b1-bab2-0b28d56da98c/25bc41ec1b13d6d4ae311b7184e1b206.png";

const Logo = ({ size = 'md', className, onClick }) => {
  const sizeClasses = {
    sm: 'h-8 md:h-10',      // Compact (Header mobile)
    md: 'h-12 md:h-16',     // Standard (Header desktop / Footer mobile)
    lg: 'h-20 md:h-24',     // Large (Footer desktop)
    xl: 'h-32 md:h-48',     // Extra Large (Hero section)
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn("relative inline-block cursor-pointer select-none", className)}
      onClick={onClick}
    >
      <img 
        src={LOGO_URL} 
        alt="QR Factory" 
        className={cn(
          "w-auto object-contain transition-all duration-300 filter invert brightness-0", 
          sizeClasses[size] || sizeClasses.md
        )}
      />
    </motion.div>
  );
};

export default Logo;