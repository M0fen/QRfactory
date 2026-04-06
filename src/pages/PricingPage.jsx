import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PricingSection from '@/components/PricingSection';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - QR Factory</title>
        <meta name="description" content="Choose the perfect plan for your business. Simple, transparent pricing with no hidden fees." />
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
              {t.pricing.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              {t.pricing.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <PricingSection />

        {/* All Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">All Plans Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '24/7 Customer Support',
                'SSL Security',
                'Regular Backups',
                'Mobile Apps',
                '99.9% Uptime',
                'Free Updates',
                'No Setup Fees',
                'Cancel Anytime'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg"
                >
                  <Check className="w-5 h-5 text-[#dbf3fd]" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-2 text-[#dbf3fd]">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;