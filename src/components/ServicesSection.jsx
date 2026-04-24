import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Smartphone, BarChart3, Layers, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/30 mb-4">
            {t.services?.eyebrow || 'THE PROCESS'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {t.services?.title || 'How It Works'}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {/* ── Cell 1: DESIGN — Large Card (spans 2 cols, 2 rows) ── */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 bg-cf-surface rounded-2xl border border-white/[0.06] p-8 md:p-10 relative overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]"
          >
            {/* Laser animation line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-white/10 transition-colors">
                  <Layers className="w-6 h-6 text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/25 mb-3">
                  {t.services?.step1Label || 'STEP 01'}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {t.services?.service1?.title || 'Design'}
                </h3>
                <p className="text-sm text-white/40 max-w-sm leading-relaxed">
                  {t.services?.service1?.description || 'Laser-engraved with your brand. Immediate production available.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {(t.services?.service1?.tags || ['PVC', 'Metal', 'Laser Engraved']).map((tag, i) => (
                  <span key={i} className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/[0.06] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/[0.01] rounded-full blur-3xl group-hover:bg-white/[0.02] transition-all duration-700" />
          </motion.div>

          {/* ── Cell 2: TAP — Wide Card (spans 2 cols, 1 row) ── */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-cf-surface rounded-2xl border border-white/[0.06] p-8 relative overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/25 mb-3">
                    {t.services?.step2Label || 'STEP 02'}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t.services?.service2?.title || 'Tap'}
                  </h3>
                  <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                    {t.services?.service2?.description || 'One touch transfers your entire digital identity instantly.'}
                  </p>
                </div>

                {/* Phone + card animation */}
                <div className="relative flex items-center gap-1 mr-4 flex-shrink-0">
                  <motion.div
                    className="w-8 h-14 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center"
                    animate={{ x: [10, 0, 10] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Smartphone className="w-4 h-4 text-white/30" />
                  </motion.div>

                  {/* Haptic pulse */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/20"
                    animate={{
                      scale: [1, 3, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="w-10 h-6 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center">
                    <Wifi className="w-3 h-3 text-white/30 rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Cell 3: CONNECT — 1 col, 1 row ── */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-cf-surface rounded-2xl border border-white/[0.06] p-8 relative overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/25 mb-3">
                  {t.services?.step3Label || 'STEP 03'}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.services?.service3?.title || 'Connect'}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {t.services?.service3?.description || 'Update your destination in real time from your dashboard.'}
                </p>
              </div>

              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-white/10 transition-colors">
                <BarChart3 className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* ── Cell 4: STATS — 1 col, 1 row ── */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-cf-surface rounded-2xl border border-white/[0.06] p-8 relative overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] flex flex-col justify-center items-center text-center"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-5 h-5 text-white/40" />
            </motion.div>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              {t.services?.statsNumber || '10K+'}
            </p>
            <p className="text-xs text-white/30 tracking-wider uppercase mt-1">
              {t.services?.statsLabel || 'Taps Tracked'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;