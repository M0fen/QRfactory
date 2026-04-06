import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { QrCode, BookOpen, BarChart3, Zap, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();

  const detailedServices = [
    {
      icon: QrCode,
      title: t.services.service1.title,
      description: t.services.service1.description,
      features: [
        'Fully customizable landing pages',
        'Mobile-first responsive design',
        'Brand color and logo integration',
        'Fast loading times',
        'SEO optimized',
        'Unlimited QR code generation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: t.services.service2.title,
      description: t.services.service2.description,
      features: [
        'Interactive product galleries',
        'Real-time content updates',
        'Multi-language support',
        'Category organization',
        'Search functionality',
        'PDF export option'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: t.services.service3.title,
      description: t.services.service3.description,
      features: [
        'Real-time scan tracking',
        'Geographic analytics',
        'Device and browser insights',
        'Conversion tracking',
        'Custom date ranges',
        'Export reports'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures instant loading'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for your data'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience on any device'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - QR Factory</title>
        <meta name="description" content="Discover our comprehensive digital solutions: Custom QR Landing Pages, Interactive Digital Catalogs, and Real-time Analytics Dashboards." />
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
              {t.services.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              {t.services.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto space-y-20">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#dbf3fd]">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`bg-gradient-to-br ${service.gradient} p-[2px] rounded-2xl`}>
                    <div className="bg-slate-900 rounded-2xl p-12 h-96 flex items-center justify-center">
                      <service.icon className="w-48 h-48 text-[#dbf3fd]/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#dbf3fd] to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;