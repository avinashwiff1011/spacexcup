import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Specs', href: '#specs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Features', href: '#features' },
  { label: 'Telemetry', href: '#telemetry' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > window.innerHeight * 0.8);
  });

  return (
    <>
      {/* Initial Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <motion.svg 
                viewBox="0 0 40 40" 
                className="w-10 h-10 fill-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <path d="M20 4L6 36h8l2-4h8l2 4h8L20 4zm0 10l4 12h-8l4-12z" />
              </motion.svg>
              <span className="text-xs font-medium tracking-[0.3em] uppercase hidden md:block">
                SpaceX
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#shop" className="btn-glow block text-center text-xs py-3">
                Add to Manifest
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Sticky Glassmorphism Header - Appears after hero */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 0 : -100,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-foreground">
                <path d="M20 4L6 36h8l2-4h8l2 4h8L20 4zm0 10l4 12h-8l4-12z" />
              </svg>
              <span className="text-sm font-medium tracking-wider">
                Interstellar Flight Mug
              </span>
            </div>
            <a href="#shop" className="btn-shimmer text-xs py-2 px-6">
              Buy Now — $79
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
