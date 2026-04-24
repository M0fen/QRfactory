import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      ...t.testimonials.testimonial1,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      initials: 'MG',
    },
    {
      ...t.testimonials.testimonial2,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
      initials: 'CM',
    },
    {
      ...t.testimonials.testimonial3,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
      initials: 'SM',
    },
    {
      ...t.testimonials.testimonial4,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diego',
      initials: 'DR',
    },
  ];

  // Duplicate for seamless loop
  const row1 = [...testimonials, ...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  const FlipCard = ({ testimonial, index }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 w-[320px] md:w-[360px] h-[220px] group"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── Front Face ── */}
        <div
          className="absolute inset-0 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col justify-between group-hover:[transform:rotateY(180deg)] transition-transform duration-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Top: avatar + info */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold tracking-wider text-white/50">{testimonial.initials}</span>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
              <p className="text-xs text-white/30">{testimonial.role}</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-white/20 text-white/20" />
            ))}
          </div>

          {/* Card label */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium">CardFactory Client</span>
            <div className="w-8 h-5 rounded-sm border border-white/[0.06] flex items-center justify-center">
              <span className="text-[7px] font-bold tracking-wider text-white/20">NFC</span>
            </div>
          </div>
        </div>

        {/* ── Back Face ── */}
        <div
          className="absolute inset-0 rounded-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.08] p-6 flex flex-col justify-center group-hover:[transform:rotateY(0deg)] [transform:rotateY(-180deg)] transition-transform duration-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Stars */}
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-white/40 text-white/40" />
            ))}
          </div>

          <p className="text-sm text-white/60 leading-relaxed italic">
            "{testimonial.text}"
          </p>

          <p className="text-xs text-white/25 mt-4 tracking-wider">— {testimonial.name}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Section Header */}
      <div className="container mx-auto max-w-7xl px-4 mb-14 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/30 mb-4">
            {t.testimonials?.eyebrow || 'SOCIAL PROOF'}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {t.testimonials.title}
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 — Left to right */}
      <div className="relative mb-5 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="flex gap-5 marquee-track" style={{ width: 'max-content' }}>
          {row1.map((testimonial, index) => (
            <FlipCard key={`r1-${index}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — Right to left */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="flex gap-5 marquee-track-reverse" style={{ width: 'max-content' }}>
          {row2.map((testimonial, index) => (
            <FlipCard key={`r2-${index}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;