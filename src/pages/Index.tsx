import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { FeaturesSection } from '@/components/FeaturesSection';
import { SpecsSection } from '@/components/SpecsSection';
import { ShopSection } from '@/components/ShopSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <SpecsSection />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
