import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border">
      {/* Subtle Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-foreground">
                <path d="M20 4L6 36h8l2-4h8l2 4h8L20 4zm0 10l4 12h-8l4-12z" />
              </svg>
              <span className="text-sm font-medium tracking-[0.2em] uppercase">
                SpaceX
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Engineered for explorers. Built for those who dare to reach beyond 
              the boundaries of the ordinary.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] font-mono text-titanium hover:text-foreground transition-colors uppercase tracking-widest"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-label text-titanium mb-6">Mission</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {['About', 'Careers', 'Press', 'Launches'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label text-titanium mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {['FAQ', 'Shipping', 'Returns', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="divider-line my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-titanium">
            <span>© 2026 SpaceX</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-mono text-titanium">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-mono text-titanium/50 tracking-[0.3em] uppercase">
            Making life multiplanetary, one mug at a time
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
