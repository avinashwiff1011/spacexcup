import { motion } from 'framer-motion';

const specs = [
  { label: 'Capacity', value: '350 ml / 12 oz' },
  { label: 'Height', value: '10.5 cm / 4.1 in' },
  { label: 'Diameter', value: '8.5 cm / 3.3 in' },
  { label: 'Weight', value: '320 g / 11.3 oz' },
  { label: 'Material', value: 'Double-wall Ceramic' },
  { label: 'Finish', value: 'Matte Black' },
  { label: 'Heat Retention', value: 'Up to 4 hours' },
  { label: 'Cold Retention', value: 'Up to 6 hours' },
];

export const SpecsSection = () => {
  return (
    <section id="specs" className="relative py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label mb-4"
          >
            Technical Data
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title"
          >
            Specifications
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-between py-5 border-b border-border"
            >
              <span className="text-muted-foreground text-sm tracking-wide">
                {spec.label}
              </span>
              <span className="text-foreground font-light">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
