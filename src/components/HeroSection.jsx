import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';
import QRGenerator from './QRGenerator';

const HeroSection = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1563371970-4575cd3d46e2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95" />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#dbf3fd] rounded-lg rotate-12" />
          <div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-[#dbf3fd] rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#dbf3fd] rounded-lg -rotate-6" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Logo in Hero - EXTRA LARGE */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-10 -ml-4 lg:-ml-6"
            >
              <Logo size="xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="gap-2 border-[#dbf3fd]/30 bg-[#dbf3fd]/5 hover:bg-[#dbf3fd]/10 rounded-full px-6"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'Español' : 'English'}
              </Button>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight tracking-tight">
              {t.hero?.title || "Default Title"}
              <br />
              <span className="bg-gradient-to-r from-[#dbf3fd] to-blue-400 bg-clip-text text-transparent">
                {t.hero?.titleHighlight || "Highlight"}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {t.hero?.subtitle || "Subtitle text goes here"}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-[#dbf3fd] to-blue-500 hover:from-[#dbf3fd]/90 hover:to-blue-600 text-slate-900 font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-blue-500/20"
              >
                {t.hero?.ctaPrimary || "Contact"}
              </Button>

              <Button
                onClick={() => navigate('/services')}
                size="lg"
                variant="outline"
                className="border-[#dbf3fd]/30 hover:bg-[#dbf3fd]/10 text-lg h-14 px-8 rounded-xl backdrop-blur-sm"
              >
                {t.hero?.ctaSecondary || "Services"}
              </Button>
            </div>
          </motion.div>

          {/* Animated QR Code Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end lg:pr-12 relative z-20"
          >
            <div className="flex flex-col items-center">
              <QRGenerator />
              
              <div className="mt-6 text-center pointer-events-none">
                <p className="text-white font-bold text-lg tracking-wide">{t.hero?.qrPreview || "Generate Custom QR"}</p>
                <p className="hidden md:block text-[#dbf3fd] text-sm mt-1 animate-pulse">{t.hero?.qrPreviewDesktop || "Clic para generar un codigo de previsualización"}</p>
                <p className="block md:hidden text-[#dbf3fd] text-sm mt-1 animate-pulse">{t.hero?.qrPreviewMobile || "Toca aquí para generar un codigo de previsualización"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;