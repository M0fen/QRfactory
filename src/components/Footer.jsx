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
    <footer className="bg-black text-white/40 pt-20 pb-10 border-t border-white/[0.04] relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <Logo size="md" onClick={() => navigate('/')} />
            </div>

            <p className="text-sm text-white/30 mb-8 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-white/30" />
                </div>
                <a href={`mailto:${t.footer.email}`} className="text-sm hover:text-white/60 transition-colors">
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white/30" />
                </div>
                <a href={`tel:${t.contact.info.phone}`} className="text-sm hover:text-white/60 transition-colors">
                  {t.contact.info.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12 pt-2">
            <h3 className="text-xs font-bold text-white/50 mb-6 tracking-[0.2em] uppercase">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/30 hover:text-white/60 transition-all duration-200 hover:translate-x-1 inline-block tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="pt-2">
            <h3 className="text-xs font-bold text-white/50 mb-6 tracking-[0.2em] uppercase">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.08] transition-all text-white/30 hover:text-white/60"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 tracking-wider">
            {t.footer.copyright}
          </p>
          <p className="text-[10px] text-white/10 tracking-wider uppercase">
            Designed for excellence. Built for scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;