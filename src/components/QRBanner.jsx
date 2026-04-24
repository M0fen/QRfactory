import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QrCode, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const QRBanner = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/80 via-purple-900/30 to-slate-800/80 border border-slate-700/50 p-8 md:p-12"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbf3fd]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
            >
              <QrCode className="w-10 h-10 text-white" />
            </motion.div>

            {/* Text */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t.qrBanner?.title || 'Looking to create custom QR codes?'}
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl">
                {t.qrBanner?.subtitle || 'Our QR Engine lets you generate branded, trackable QR codes in seconds.'}
              </p>
            </div>

            {/* CTA */}
            <Button
              onClick={() => navigate('/services')}
              size="lg"
              className="flex-shrink-0 bg-gradient-to-r from-[#dbf3fd] to-blue-500 hover:from-[#dbf3fd]/90 hover:to-blue-600 text-slate-900 font-bold text-lg h-14 px-8 rounded-xl shadow-lg shadow-blue-500/20 gap-2"
            >
              {t.qrBanner?.cta || 'Open QR Builder'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRBanner;
