import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import MetalCard3D from '@/components/MetalCard3D';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background — subtle radial vignette */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-32 mt-16 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
                <Sparkles className="w-3.5 h-3.5 text-white/40" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
                  {t.hero?.badge || 'Premium NFC Technology'}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
            >
              <span className="block text-white">
                {t.hero?.title || 'Elite Networking'}
              </span>
              <span className="block text-chrome mt-1">
                {t.hero?.titleHighlight || 'Without Friction.'}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-white/50 mb-10 max-w-lg leading-relaxed"
            >
              {t.hero?.subtitle || 'Share your identity or portfolio instantly with NFC technology. Update your destination in real time — no reprints, no limits.'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
            >
              {/* Primary — Shop Cards */}
              <Button
                onClick={() => navigate('/pricing')}
                size="lg"
                className="shimmer-btn bg-white hover:bg-white/90 text-black font-bold text-sm tracking-wider uppercase h-13 px-8 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]"
              >
                {t.hero?.ctaPrimary || 'Shop Cards'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Secondary — QR Builder */}
              <Button
                onClick={() => navigate('/services')}
                size="lg"
                variant="outline"
                className="border border-white/10 hover:border-white/25 bg-transparent hover:bg-white/[0.03] text-white/70 hover:text-white text-sm tracking-wider uppercase h-13 px-8 rounded-xl transition-all duration-300"
              >
                {t.hero?.ctaSecondary || 'Go to QR Builder'}
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-6 text-white/20 text-xs tracking-wider uppercase"
            >
              <span>Laser Engraved</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>NFC Enabled</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Dynamic Links</span>
            </motion.div>
          </motion.div>

          {/* Right — 3D Metal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end relative z-20"
          >
            <MetalCard3D
              name="YOUR NAME"
              title="cardfactory.co"
              logoText="CF"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;