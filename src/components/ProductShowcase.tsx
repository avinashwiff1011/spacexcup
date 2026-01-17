import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import mugDetail from '@/assets/mug-detail.jpg';
import mugSteam from '@/assets/mug-steam.jpg';

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* First Product Block */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 lg:mb-48">
          <motion.div
            style={{ y, opacity }}
            className="relative aspect-square"
          >
            <img
              src={mugDetail}
              alt="Orbit Mug Detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label"
            >
              Design Philosophy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-section-title"
            >
              Form Follows
              <span className="block text-muted-foreground">Function</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Every curve, every angle has been meticulously designed. The Orbit
              Mug isn't just a vessel—it's a statement of precision engineering
              and minimalist beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <div className="divider-line mb-6" />
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-light">350</p>
                  <p className="text-label mt-1">ML Capacity</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-light">8</p>
                  <p className="text-label mt-1">Layers</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-light">∞</p>
                  <p className="text-label mt-1">Reusable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Product Block */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label"
            >
              Thermal Technology
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-section-title"
            >
              Holds Heat
              <span className="block text-muted-foreground">For Hours</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Advanced double-wall ceramic construction ensures your coffee
              stays at the perfect temperature, whether you're on a late-night
              mission or an early morning launch.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-muted-foreground"
            >
              {[
                'Double-wall insulation',
                'Heat retention up to 4 hours',
                'Cold drinks stay cold for 6 hours',
                'Condensation-free exterior',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square order-1 lg:order-2"
          >
            <img
              src={mugSteam}
              alt="Orbit Mug with Steam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
