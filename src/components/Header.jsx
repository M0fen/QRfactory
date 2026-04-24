import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-2xl border-b border-white/[0.04] h-16 md:h-20 flex items-center transition-all duration-300">
      <nav className="container mx-auto max-w-7xl px-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => navigate('/')} className="flex items-center">
            <Logo size="sm" className="py-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 text-xs font-medium tracking-[0.12em] uppercase ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors text-xs tracking-wider uppercase"
            >
              <Globe className="w-3.5 h-3.5" />
              {language.toUpperCase()}
            </button>

            <Button
              onClick={() => navigate('/login')}
              className="bg-transparent hover:bg-white/[0.05] text-white/60 hover:text-white font-medium text-xs tracking-[0.1em] uppercase h-9 px-5 rounded-lg border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/60 hover:text-white p-2 transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/[0.04] bg-black/95 backdrop-blur-2xl absolute left-0 right-0 top-full px-4 py-6 shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-all text-sm tracking-wider uppercase ${
                      isActive(link.path)
                        ? 'text-white font-semibold'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-sm tracking-wider uppercase w-fit"
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </button>

                <Button
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="bg-white/[0.05] hover:bg-white/10 text-white border border-white/[0.08] font-medium w-full rounded-xl py-5 mt-2 text-sm tracking-wider uppercase transition-all"
                >
                  Sign In
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;