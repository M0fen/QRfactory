import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>CardFactory — Premium NFC Smart Business Cards</title>
        <meta name="description" content="The last business card you'll ever need. Laser-engraved NFC smart cards with dynamic routing, real-time analytics, and premium metal construction." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;