import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handlePlanClick = (planName) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: `The ${planName} plan checkout is not yet implemented. You can request this feature in your next prompt! 🚀`
    });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      features: t.pricing.starter.features,
      cta: t.pricing.starter.cta,
      highlighted: false,
      material: 'PVC',
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      recommended: t.pricing.professional.recommended,
      features: t.pricing.professional.features,
      cta: t.pricing.professional.cta,
      highlighted: true,
      material: 'METAL',
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      features: t.pricing.enterprise.features,
      cta: t.pricing.enterprise.cta,
      highlighted: false,
      stealth: true,
      material: 'CUSTOM',
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/30 mb-4">
            {t.pricing?.eyebrow || 'PRICING'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`relative group ${plan.highlighted ? 'md:-mt-6' : ''}`}
            >
              {/* Best Value Badge */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <div className="shimmer-btn flex items-center gap-1.5 bg-white text-black px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Sparkles className="w-3 h-3" />
                    {plan.recommended}
                  </div>
                </div>
              )}

              <div
                className={`rounded-2xl h-full flex flex-col transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-cf-surface border border-white/[0.12] shadow-[0_0_40px_rgba(255,255,255,0.04)]'
                    : plan.stealth
                    ? 'bg-[#0a0a0a] border border-white/[0.04] hover:border-white/[0.06]'
                    : 'bg-cf-surface border border-white/[0.06] hover:border-white/[0.08]'
                } p-8 md:p-9`}
              >
                {/* Material Badge */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <span
                    className={`text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border ${
                      plan.highlighted
                        ? 'text-chrome border-white/[0.15] bg-white/[0.04]'
                        : 'text-white/30 border-white/[0.06]'
                    }`}
                  >
                    {plan.material}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                    plan.highlighted ? 'text-chrome' : plan.stealth ? 'text-white/60' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && plan.price !== 'Personalizado' && (
                    <span className="text-white/20 text-sm ml-2">/{t.pricing.monthly}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white/60' : 'text-white/25'
                      }`} />
                      <span className={`text-sm leading-relaxed ${
                        plan.highlighted ? 'text-white/60' : plan.stealth ? 'text-white/30' : 'text-white/40'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Enterprise copy */}
                {plan.stealth && (
                  <p className="text-xs text-white/20 mb-6 leading-relaxed">
                    {t.pricing?.enterpriseNote || 'For sales teams and real estate agencies.'}
                  </p>
                )}

                {/* CTA Button */}
                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full h-12 text-xs font-bold tracking-[0.12em] uppercase rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'shimmer-btn bg-white hover:bg-white/90 text-black shadow-[0_0_25px_rgba(255,255,255,0.1)]'
                      : plan.stealth
                      ? 'bg-transparent border border-white/[0.08] hover:border-white/20 text-white/50 hover:text-white/80'
                      : 'bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.06] text-white/60 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  {plan.highlighted && <ArrowRight className="w-3.5 h-3.5 ml-2" />}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;