import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.contact, path: '/contact' }
  ];

  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="mb-8 -ml-3">
              <Logo size="lg" onClick={() => navigate('/')} />
            </div>
            
            <p className="text-base text-gray-400 mb-8 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dbf3fd]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#dbf3fd]" />
                </div>
                <a href={`mailto:${t.footer.email}`} className="text-base hover:text-[#dbf3fd] transition-colors">
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dbf3fd]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#dbf3fd]" />
                </div>
                <a href={`tel:${t.contact.info.phone}`} className="text-base hover:text-[#dbf3fd] transition-colors">
                  {t.contact.info.phone}
                </a>
              </div>
              <p className="text-sm text-gray-500 pl-11">Contact: {t.contact.info.name}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12 pt-4">
            <h3 className="text-lg font-bold text-white mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base hover:text-[#dbf3fd] transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="pt-4">
            <h3 className="text-lg font-bold text-white mb-6">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-slate-900 hover:bg-[#dbf3fd]/10 border border-slate-800 hover:border-[#dbf3fd]/30 transition-all text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-500 p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
              <p>Designed for excellence. Built for scale.</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;