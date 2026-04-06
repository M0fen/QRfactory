import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      ...t.testimonials.testimonial1,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
    },
    {
      ...t.testimonials.testimonial2,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
    },
    {
      ...t.testimonials.testimonial3,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia'
    },
    {
      ...t.testimonials.testimonial4,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diego'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-[#dbf3fd]/30 h-full relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-[#dbf3fd]/10 group-hover:text-[#dbf3fd]/20 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#dbf3fd] to-blue-500 p-[2px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full bg-slate-900"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#dbf3fd] text-[#dbf3fd]" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;