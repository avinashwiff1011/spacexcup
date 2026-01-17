import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroMug from '@/assets/hero-mug.jpg';
import mugDetail from '@/assets/mug-detail.jpg';
import mugSteam from '@/assets/mug-steam.jpg';

const galleryItems = [
  {
    id: 1,
    image: heroMug,
    title: 'Mission Control',
    subtitle: 'Ready for liftoff',
  },
  {
    id: 2,
    image: mugDetail,
    title: 'Workshop Edition',
    subtitle: 'Precision engineering',
  },
  {
    id: 3,
    image: mugSteam,
    title: 'Field Operations',
    subtitle: 'Any environment',
  },
  {
    id: 4,
    image: heroMug,
    title: 'Zero Gravity',
    subtitle: 'Tested in orbit',
  },
  {
    id: 5,
    image: mugDetail,
    title: 'Night Shift',
    subtitle: 'Always ready',
  },
];

export const LaunchGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-60%']);

  return (
    <section ref={containerRef} id="gallery" className="relative py-32 md:py-48 overflow-hidden">
      <div className="px-6 lg:px-12 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label mb-4 text-titanium"
        >
          Launch Sequence
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-section-title"
        >
          Mission
          <span className="block text-muted-foreground">Gallery</span>
        </motion.h2>
      </div>

      {/* Horizontal Scroll Gallery */}
      <motion.div 
        style={{ x }} 
        className="flex gap-6 pl-6 lg:pl-12"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[35vw] aspect-[4/5] group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <p className="text-label text-titanium mb-2">{item.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-light">{item.title}</h3>
              </motion.div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-foreground/10 group-hover:border-foreground/30 transition-colors duration-500 pointer-events-none" />
            
            {/* Index */}
            <div className="absolute top-6 right-6 text-[10px] font-mono text-titanium/60">
              {String(index + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mt-12 px-6 lg:px-12"
      >
        <div className="w-24 h-px bg-titanium/30" />
        <span className="text-[10px] font-mono text-titanium">SCROLL HORIZONTALLY</span>
      </motion.div>
    </section>
  );
};
