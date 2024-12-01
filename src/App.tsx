import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GlowingCursor } from './components/GlowingCursor';
import { NavigationMenu } from './components/NavigationMenu';
import { HeroSection } from './components/HeroSection';
import { CasesSection } from './components/CasesSection';
import { TeamSection } from './components/TeamSection';
import { PricingSection } from './components/PricingSection';
import { AdditionalServices } from './components/AdditionalServices';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Brittocharette - Luxury Interior Design</title>
        <meta name="description" content="Experience luxury interior and industrial design with Brittocharette. Modern, minimalist, and sophisticated spaces crafted by expert designers." />
        <meta name="keywords" content="luxury interior design, industrial design, modern interiors, minimalist design" />
        <meta property="og:title" content="Brittocharette - Luxury Interior Design" />
        <meta property="og:description" content="Experience luxury interior and industrial design with Brittocharette." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-white relative overflow-x-hidden">
        <div className="fixed inset-0 grunge-bg opacity-50" />
        <GlowingCursor />
        <NavigationMenu />
        <main className="relative">
          <HeroSection />
          <CasesSection />
          <TeamSection />
          <AdditionalServices />
          <PricingSection />
        </main>
      </div>
    </>
  );
};

export default App;