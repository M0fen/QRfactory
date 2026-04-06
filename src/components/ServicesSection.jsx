import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, BookOpen, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: QrCode,
      title: t.services.service1.title,
      description: t.services.service1.description,
      useCases: t.services.service1.useCases,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: t.services.service2.title,
      description: t.services.service2.description,
      useCases: t.services.service2.useCases,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: t.services.service3.title,
      description: t.services.service3.description,
      useCases: t.services.service3.useCases,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-[#dbf3fd]/50 h-full">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-[#dbf3fd]">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#dbf3fd] mt-1">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;