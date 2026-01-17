import { motion } from 'framer-motion';
import { useState } from 'react';
import { Thermometer, Shield, Droplets, Zap } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Thermometer,
    title: 'Vacuum Insulated',
    description: 'Double-wall vacuum technology maintains temperature for hours.',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Impact Resistant',
    description: 'Aerospace-grade ceramic withstands extreme conditions.',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
  },
  {
    id: 3,
    icon: Droplets,
    title: 'Spill-Proof Design',
    description: 'Precision-engineered rim prevents drips in any orientation.',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Rapid Heat Transfer',
    description: 'Optimized thermal conductivity for the perfect drinking experience.',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
  },
];

export const InteractiveFeatures = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-32 md:py-48 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label mb-4 text-titanium"
          >
            Feature Matrix
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title"
          >
            Advanced
            <span className="block text-muted-foreground">Capabilities</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer overflow-hidden border border-border bg-background p-8 md:p-10 transition-all duration-500 hover:border-foreground/30"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500`}
                animate={{ opacity: hoveredId === feature.id ? 1 : 0 }}
              />

              {/* Animated Pattern Overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 transition-opacity duration-500"
                animate={{ opacity: hoveredId === feature.id ? 0.1 : 0 }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="mb-6"
                  animate={{
                    scale: hoveredId === feature.id ? 1.1 : 1,
                    rotate: hoveredId === feature.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon 
                    size={40} 
                    strokeWidth={1} 
                    className="text-titanium group-hover:text-foreground transition-colors duration-500"
                  />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Status Indicator */}
                <motion.div
                  className="flex items-center gap-2 mt-6"
                  animate={{ opacity: hoveredId === feature.id ? 1 : 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                  <span className="text-[10px] font-mono text-titanium uppercase tracking-widest">
                    Active
                  </span>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-4 right-4 w-px h-8 bg-titanium/30 group-hover:bg-foreground/50 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-px bg-titanium/30 group-hover:bg-foreground/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
