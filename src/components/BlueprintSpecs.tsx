import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const specLabels = [
  { id: 1, text: 'Heat Shield Coating', x: '75%', y: '15%', lineX: '-40px' },
  { id: 2, text: 'Ergonomic Payload Handle', x: '85%', y: '45%', lineX: '-60px' },
  { id: 3, text: 'Thermal Barrier Wall', x: '15%', y: '35%', lineX: '40px', alignRight: true },
  { id: 4, text: 'Vacuum Insulated Core', x: '20%', y: '55%', lineX: '50px', alignRight: true },
  { id: 5, text: 'Anti-Spill Rim Design', x: '65%', y: '8%', lineX: '-30px' },
  { id: 6, text: 'Weighted Stability Base', x: '55%', y: '92%', lineX: '-20px' },
];

export const BlueprintSpecs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const assembleProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} id="specs" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label mb-4 text-titanium"
          >
            Technical Blueprint
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title"
          >
            Engineering
            <span className="block text-muted-foreground">Breakdown</span>
          </motion.h2>
        </div>

        {/* Blueprint Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] max-w-4xl mx-auto">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(161,161,161,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(161,161,161,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Blueprint Mug Drawing */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.svg
              viewBox="0 0 300 400"
              className="w-48 md:w-64 h-auto"
              style={{ opacity: assembleProgress }}
            >
              {/* Mug Body - Animates in */}
              <motion.path
                d="M80 50 L80 320 Q80 360 150 360 Q220 360 220 320 L220 50"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.5"
                style={{
                  pathLength: assembleProgress,
                }}
              />
              
              {/* Inner Wall */}
              <motion.path
                d="M95 65 L95 310 Q95 340 150 340 Q205 340 205 310 L205 65"
                fill="none"
                stroke="hsl(var(--titanium))"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                style={{
                  pathLength: assembleProgress,
                }}
              />

              {/* Rim */}
              <motion.ellipse
                cx="150"
                cy="50"
                rx="70"
                ry="15"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.5"
                style={{
                  pathLength: assembleProgress,
                }}
              />

              {/* Handle */}
              <motion.path
                d="M220 100 Q280 100 280 185 Q280 270 220 270"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.5"
                style={{
                  pathLength: assembleProgress,
                }}
              />

              {/* Handle Inner */}
              <motion.path
                d="M220 120 Q260 120 260 185 Q260 250 220 250"
                fill="none"
                stroke="hsl(var(--titanium))"
                strokeWidth="0.5"
                style={{
                  pathLength: assembleProgress,
                }}
              />

              {/* Base */}
              <motion.ellipse
                cx="150"
                cy="360"
                rx="60"
                ry="12"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.5"
                style={{
                  pathLength: assembleProgress,
                }}
              />

              {/* Cross-section indicators */}
              <motion.line
                x1="85"
                y1="180"
                x2="95"
                y2="180"
                stroke="hsl(var(--titanium))"
                strokeWidth="0.5"
                style={{ opacity: labelOpacity }}
              />
              <motion.line
                x1="205"
                y1="180"
                x2="215"
                y2="180"
                stroke="hsl(var(--titanium))"
                strokeWidth="0.5"
                style={{ opacity: labelOpacity }}
              />
            </motion.svg>

            {/* Spec Labels */}
            {specLabels.map((label, index) => (
              <motion.div
                key={label.id}
                className={`absolute flex items-center gap-2 ${label.alignRight ? 'flex-row-reverse' : ''}`}
                style={{
                  left: label.x,
                  top: label.y,
                  opacity: labelOpacity,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div
                  className="h-px bg-titanium/50"
                  style={{ width: Math.abs(parseInt(label.lineX)) }}
                />
                <span className="text-[10px] md:text-xs font-mono text-titanium whitespace-nowrap">
                  {label.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Corner Markers */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-titanium/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-titanium/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-titanium/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-titanium/30" />
        </div>

        {/* Spec Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { label: 'Wall Thickness', value: '8mm' },
            { label: 'Vacuum Gap', value: '4mm' },
            { label: 'Handle Angle', value: '15°' },
            { label: 'Base Diameter', value: '72mm' },
          ].map((spec, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-light mb-2">{spec.value}</p>
              <p className="text-label text-titanium">{spec.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
