import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "🚧 Form Submission Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });

    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '573212826388';
    const message = encodeURIComponent(
      `Hi! I'm interested in ${formData.service || 'your services'}. My name is ${formData.name || '[Name]'}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const inputClasses = "w-full px-4 py-3 bg-cf-surface border border-white/[0.06] rounded-xl focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all text-white text-sm placeholder-white/20 tracking-wide";

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/30 mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-medium mb-2 text-white/30 tracking-[0.15em] uppercase">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-medium mb-2 text-white/30 tracking-[0.15em] uppercase">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[10px] font-medium mb-2 text-white/30 tracking-[0.15em] uppercase">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">{t.contact.form.servicePlaceholder}</option>
                  {t.contact.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-medium mb-2 text-white/30 tracking-[0.15em] uppercase">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 shimmer-btn bg-white hover:bg-white/90 text-black font-bold text-xs tracking-[0.1em] uppercase h-12 rounded-xl transition-all"
                >
                  {isSubmitting ? (
                    t.contact.form.sending
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-transparent border border-white/[0.06] hover:border-white/20 text-white/50 hover:text-white font-medium text-xs tracking-[0.1em] uppercase h-12 rounded-xl transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-2" />
                  {t.contact.form.whatsapp}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-cf-surface rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-xs font-bold mb-6 text-white/50 tracking-[0.2em] uppercase">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white/30" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm mb-0.5">Email</p>
                    <a href={`mailto:${t.contact.info.email}`} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white/30" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm mb-0.5">Phone</p>
                    <a href={`tel:${t.contact.info.phone}`} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                      {t.contact.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white/30" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm mb-0.5">{t.contact.info.name}</p>
                    <p className="text-sm text-white/30">
                      Pereira, Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-8 border border-white/[0.04]">
              <h4 className="text-xs font-bold mb-4 text-white/40 tracking-[0.15em] uppercase">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-white/25">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;