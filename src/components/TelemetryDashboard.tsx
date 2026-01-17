import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const telemetryData = [
  { id: 1, label: 'Height', value: 10.5, unit: 'cm', max: 15, icon: '↕' },
  { id: 2, label: 'Weight', value: 320, unit: 'g', max: 500, icon: '⚖' },
  { id: 3, label: 'Capacity', value: 350, unit: 'ml', max: 500, icon: '◉' },
  { id: 4, label: 'Heat Retention', value: 4, unit: 'hrs', max: 6, icon: '🔥' },
  { id: 5, label: 'Cold Retention', value: 6, unit: 'hrs', max: 8, icon: '❄' },
  { id: 6, label: 'Thermal Rating', value: 98, unit: '%', max: 100, icon: '⚡' },
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const ProgressBar = ({ value, max, delay }: { value: number; max: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className="progress-bar">
      <motion.div
        className="progress-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${percentage}%` : 0 }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      />
    </div>
  );
};

export const TelemetryDashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="telemetry" className="relative py-32 md:py-48 overflow-hidden">
      {/* Starfield for dark sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label mb-4 text-titanium"
          >
            Performance Metrics
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title"
          >
            Mug
            <span className="block text-muted-foreground">Telemetry</span>
          </motion.h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {telemetryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 border border-border bg-card/50 backdrop-blur-sm group hover:border-foreground/30 transition-all duration-500"
            >
              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-titanium/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-titanium/30" />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[10px] font-mono text-titanium uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
                <span className="text-2xl opacity-50">{item.icon}</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-light">
                  <AnimatedCounter value={item.value} />
                </span>
                <span className="text-xl text-muted-foreground ml-2">{item.unit}</span>
              </div>

              <ProgressBar value={item.value} max={item.max} delay={0.3 + index * 0.1} />

              {/* Status */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-[10px] font-mono text-titanium">
                  {Math.round((item.value / item.max) * 100)}% optimal
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                  <span className="text-[10px] font-mono text-titanium">LIVE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-4 border border-border flex flex-wrap items-center justify-center gap-8 text-[10px] font-mono text-titanium"
        >
          <span>SYS_CHECK: PASSED</span>
          <span>THERMAL_CORE: STABLE</span>
          <span>VACUUM_SEAL: INTACT</span>
          <span>READY_FOR_LAUNCH: TRUE</span>
        </motion.div>
      </div>
    </section>
  );
};
