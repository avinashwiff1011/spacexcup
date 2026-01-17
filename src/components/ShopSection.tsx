import { motion } from 'framer-motion';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import heroMug from '@/assets/hero-mug.jpg';

export const ShopSection = () => {
  const [quantity, setQuantity] = useState(1);

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
              alt="Orbit Mug"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-border group-hover:border-foreground/30 transition-colors duration-500" />
          </motion.div>

          {/* Product Details */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label mb-2">Limited Edition</p>
              <h2 className="text-section-title mb-4">Orbit Mug</h2>
              <p className="text-3xl font-light">$49.00</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              The Orbit Mug represents the pinnacle of ceramic engineering. Each
              mug is individually inspected to ensure it meets our exacting
              standards of quality and performance.
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
              <p className="text-label mb-4">Color</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-foreground ring-2 ring-offset-2 ring-offset-background ring-foreground" />
                <button className="w-10 h-10 rounded-full bg-[#fafafa] border border-border hover:border-foreground transition-colors" />
                <button className="w-10 h-10 rounded-full bg-[#404040] border border-border hover:border-foreground transition-colors" />
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-label mb-4">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={decreaseQty}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-16 text-center font-light">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="p-3 hover:bg-secondary transition-colors"
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn-accent flex-1">Add to Cart</button>
              <button className="btn-hero-filled flex-1">Buy Now</button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 text-muted-foreground text-xs tracking-wide pt-4"
            >
              <span>✓ Free Shipping</span>
              <span>✓ 30-Day Returns</span>
              <span>✓ 2-Year Warranty</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
