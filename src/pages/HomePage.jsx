import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>QR Factory - Transform QR Codes into Branded Experiences</title>
        <meta name="description" content="Create stunning QR landing pages, interactive catalogs, and real-time analytics dashboards that elevate your brand and engage your customers." />
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;