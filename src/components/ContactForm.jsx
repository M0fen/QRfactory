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
    const phoneNumber = '573212826388'; // Updated phone number
    const message = encodeURIComponent(
      `Hi! I'm interested in ${formData.service || 'your services'}. My name is ${formData.name || '[Name]'}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dbf3fd] focus:border-transparent transition-all text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dbf3fd] focus:border-transparent transition-all text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-300">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dbf3fd] focus:border-transparent transition-all text-white"
                >
                  <option value="">{t.contact.form.servicePlaceholder}</option>
                  {t.contact.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dbf3fd] focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-[#dbf3fd] to-blue-500 hover:from-[#dbf3fd]/90 hover:to-blue-600 text-slate-900 font-semibold"
                >
                  {isSubmitting ? (
                    t.contact.form.sending
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="flex-1 border-[#dbf3fd]/30 hover:bg-[#dbf3fd]/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
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
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-[#dbf3fd]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#dbf3fd] to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a href={`mailto:${t.contact.info.email}`} className="text-gray-400 hover:text-[#dbf3fd] transition-colors">
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a href={`tel:${t.contact.info.phone}`} className="text-gray-400 hover:text-[#dbf3fd] transition-colors">
                      {t.contact.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{t.contact.info.name}</p> {/* Display name here */}
                    <p className="text-gray-400">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#dbf3fd]/10 to-blue-500/10 rounded-xl p-8 border border-[#dbf3fd]/20">
              <h4 className="text-xl font-bold mb-4 text-white">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-300">
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