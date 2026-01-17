import { motion } from 'framer-motion';
import { Flame, Shield, Droplets, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Thermal Shield',
    description:
      'Double-wall ceramic construction keeps beverages at optimal temperature for hours.',
  },
  {
    icon: Shield,
    title: 'Indestructible',
    description:
      'Aerospace-grade materials ensure durability that lasts a lifetime.',
  },
  {
    icon: Droplets,
    title: 'Spill Resistant',
    description:
      'Precision-engineered rim prevents drips and spills, even in zero gravity.',
  },
  {
    icon: Sparkles,
    title: 'Easy Clean',
    description:
      'Non-porous surface resists stains and odors. Dishwasher safe.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 md:py-48 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label mb-4"
          >
            Engineered Excellence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title"
          >
            Built for the
            <span className="block text-muted-foreground">Extraordinary</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-feature group"
            >
              <div className="mb-6">
                <feature.icon
                  size={32}
                  strokeWidth={1}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                />
              </div>
              <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
