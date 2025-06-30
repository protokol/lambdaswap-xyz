import { createFileRoute } from '@tanstack/react-router';

import { HeroSection } from '@composed/landing/hero-section';
import { HowItWorksSection } from '@composed/landing/how-it-works-section';
import { LandingFooter } from '@composed/landing/landing-footer';
import { SupportedNetworksSection } from '@composed/landing/supported-networks-section';

export const Route = createFileRoute('/')({
  component: LandingPage
});

function LandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <SupportedNetworksSection />
        <HowItWorksSection />
      </main>
      <LandingFooter />
    </>
  );
}
