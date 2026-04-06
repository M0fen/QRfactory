import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Contact Us - QR Factory</title>
        <meta name="description" content="Get in touch with us. We're here to help transform your digital presence." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {t.contact.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Map Placeholder */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-slate-800 rounded-2xl h-96 flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <p className="text-2xl font-bold mb-2 text-[#dbf3fd]">Interactive Map</p>
                <p className="text-gray-400">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;