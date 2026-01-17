import { motion } from 'framer-motion';
import { StarField } from './StarField';
import { ChevronDown } from 'lucide-react';
import heroMug from '@/assets/hero-mug.jpg';

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.span
      className={`glitch-text inline-block ${className}`}
      data-text={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {text}
    </motion.span>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Star Background */}
      <StarField />

      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroMug}
          alt="Interstellar Flight Mug"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-label mb-8 text-titanium"
        >
          Mission Control Edition
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-hero-title mb-4"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="block"
          >
            <GlitchText text="INTERSTELLAR" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="block text-muted-foreground"
          >
            FLIGHT MUG
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-hero-subtitle max-w-lg mx-auto mb-12"
        >
          Engineered for zero-gravity performance. Built for those who dare to explore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#shop" className="btn-glow">
            Add to Manifest — $79
          </a>
          <a href="#specs" className="btn-hero">
            View Telemetry
          </a>
        </motion.div>
      </div>

      {/* Scroll to Launch Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-label text-titanium">Scroll to Launch</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-titanium" />
        </motion.div>
      </motion.div>

      {/* Telemetry Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-32 left-8 hidden lg:block"
      >
        <div className="text-[10px] font-mono text-titanium/60 space-y-1">
          <p>SYS: OPERATIONAL</p>
          <p>LAT: 28.5620° N</p>
          <p>LON: 80.5770° W</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-32 right-8 hidden lg:block text-right"
      >
        <div className="text-[10px] font-mono text-titanium/60 space-y-1">
          <p>MODEL: IFM-X1</p>
          <p>CAPACITY: 350ML</p>
          <p>STATUS: READY</p>
        </div>
      </motion.div>
    </section>
  );
};
