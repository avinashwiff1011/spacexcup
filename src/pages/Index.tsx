import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BlueprintSpecs } from '@/components/BlueprintSpecs';
import { LaunchGallery } from '@/components/LaunchGallery';
import { InteractiveFeatures } from '@/components/InteractiveFeatures';
import { TelemetryDashboard } from '@/components/TelemetryDashboard';
import { ShopSection } from '@/components/ShopSection';
import { Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation />
        <main>
          <HeroSection />
          <BlueprintSpecs />
          <LaunchGallery />
          <InteractiveFeatures />
          <TelemetryDashboard />
          <ShopSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
