import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

export const StarField = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo<Star[]>(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        moveX: (Math.random() - 0.5) * 20,
        moveY: (Math.random() - 0.5) * 20,
      });
    }
    return newStars;
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            x: [0, star.moveX, 0],
            y: [0, star.moveY, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
