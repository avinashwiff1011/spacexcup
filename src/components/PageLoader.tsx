import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          {/* Rocket Icon */}
          <motion.div
            initial={{ y: '50vh', opacity: 1 }}
            animate={{ y: '-50vh', opacity: 0 }}
            transition={{ 
              duration: 1.8, 
              ease: [0.43, 0.13, 0.23, 0.96],
              opacity: { delay: 1.2, duration: 0.6 }
            }}
            className="relative"
          >
            {/* Rocket SVG */}
            <svg
              viewBox="0 0 24 48"
              className="w-8 h-16 fill-foreground"
            >
              <path d="M12 0L8 16H16L12 0Z" />
              <rect x="9" y="16" width="6" height="24" />
              <path d="M6 40L9 32V40H6Z" />
              <path d="M18 40L15 32V40H18Z" />
            </svg>
            
            {/* Flame Trail */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: [0, 1, 0.8] }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                opacity: { repeat: Infinity, duration: 0.2 }
              }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-12 origin-top"
              style={{
                background: 'linear-gradient(to bottom, #fff, #A1A1A1, transparent)',
              }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-20 text-label"
          >
            Initializing Launch Sequence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
