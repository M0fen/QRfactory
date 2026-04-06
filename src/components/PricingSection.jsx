import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
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

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      features: t.pricing.starter.features,
      cta: t.pricing.starter.cta,
      highlighted: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      recommended: t.pricing.professional.recommended,
      features: t.pricing.professional.features,
      cta: t.pricing.professional.cta,
      highlighted: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      features: t.pricing.enterprise.features,
      cta: t.pricing.enterprise.cta,
      highlighted: false,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02 }}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#dbf3fd] to-blue-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {plan.recommended}
                  </div>
                </div>
              )}

              <div className={`${plan.highlighted ? 'bg-gradient-to-br ' + plan.gradient + ' p-[2px]' : 'bg-slate-800'} rounded-xl h-full`}>
                <div className="bg-slate-800 rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#dbf3fd] to-blue-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400 ml-2">/{t.pricing.monthly}</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#dbf3fd] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePlanClick(plan.name)}
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#dbf3fd] to-blue-500 hover:from-[#dbf3fd]/90 hover:to-blue-600 text-slate-900'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    } font-semibold`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;