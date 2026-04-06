import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Shirt, Home, ShoppingCart, Briefcase, Megaphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const IndustriesSection = () => {
  const { t } = useLanguage();

  const industries = [
    {
      icon: ShoppingBag,
      name: t.industries.retail.name,
      useCases: t.industries.retail.useCases,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shirt,
      name: t.industries.fashion.name,
      useCases: t.industries.fashion.useCases,
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Home,
      name: t.industries.homeTextiles.name,
      useCases: t.industries.homeTextiles.useCases,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShoppingCart,
      name: t.industries.ecommerce.name,
      useCases: t.industries.ecommerce.useCases,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      name: t.industries.services.name,
      useCases: t.industries.services.useCases,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Megaphone,
      name: t.industries.agencies.name,
      useCases: t.industries.agencies.useCases,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.industries.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.industries.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${industry.gradient} p-[2px] rounded-xl overflow-hidden`}>
                <div className="bg-slate-900 rounded-xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-[#dbf3fd] mt-1">✓</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;