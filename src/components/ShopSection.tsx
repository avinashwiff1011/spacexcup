import { motion } from 'framer-motion';
import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import heroMug from '@/assets/hero-mug.jpg';

const colors = [
  { id: 'black', name: 'Deep Space Black', hex: '#000000' },
  { id: 'white', name: 'Lunar White', hex: '#FAFAFA' },
  { id: 'titanium', name: 'Titanium Silver', hex: '#A1A1A1' },
];

export const ShopSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => Math.min(10, q + 1));

  return (
    <section id="shop" className="relative py-32 md:py-48 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square group"
          >
            <img
              src={heroMug}
              alt="Interstellar Flight Mug"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-border group-hover:border-foreground/30 transition-colors duration-500" />
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-foreground/30" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-foreground/30" />
          </motion.div>

          {/* Product Details */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-titanium mb-3">Mission Control Edition</p>
              <h2 className="text-section-title mb-6">Interstellar Flight Mug</h2>
              <p className="text-4xl font-light">$79.00</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              Precision-engineered for those who demand excellence. The Interstellar Flight Mug 
              represents the pinnacle of beverage containment technology, tested in the most 
              extreme conditions known to humanity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divider-line"
            />

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p className="text-label text-titanium mb-4">Finish</p>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.id 
                        ? 'border-foreground ring-2 ring-offset-2 ring-offset-background ring-foreground/50' 
                        : 'border-border hover:border-foreground/50'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.id && (
                      <Check 
                        size={16} 
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                          color.id === 'white' ? 'text-background' : 'text-foreground'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {colors.find(c => c.id === selectedColor)?.name}
              </p>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-label text-titanium mb-4">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={decreaseQty}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-20 text-center font-light text-lg">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-4 pt-4"
            >
              <button className="btn-glow w-full text-center">
                Add to Manifest
              </button>
              <button className="btn-hero w-full text-center">
                Buy Now — ${(79 * quantity).toFixed(2)}
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 text-center pt-6"
            >
              {[
                { icon: '🚀', label: 'Free Shipping' },
                { icon: '↩️', label: '30-Day Returns' },
                { icon: '🛡️', label: 'Lifetime Warranty' },
              ].map((badge, index) => (
                <div key={index} className="p-4 border border-border">
                  <span className="text-xl mb-2 block">{badge.icon}</span>
                  <span className="text-[10px] font-mono text-titanium uppercase tracking-widest">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
