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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 h-20 md:h-24 flex items-center transition-all duration-300">
      <nav className="container mx-auto px-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => navigate('/')} className="flex items-center">
            {/* Desktop uses md size, Mobile uses sm size implicitly via CSS classes in Logo component or explicitly if needed */}
            <Logo size="md" className="py-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-[#dbf3fd]'
                    : 'text-gray-300 hover:text-[#dbf3fd]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="gap-2 border-[#dbf3fd]/30 hover:bg-[#dbf3fd]/10 h-9"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>

            <Button
              onClick={() => navigate('/login')}
              className="bg-[#dbf3fd] hover:bg-white text-slate-900 font-bold h-9 px-6 rounded-full shadow-[0_0_15px_rgba(219,243,253,0.3)] transition-all"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-900 absolute left-0 right-0 top-full px-4 shadow-xl border-b"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors text-lg ${
                      isActive(link.path)
                        ? 'text-[#dbf3fd] font-semibold'
                        : 'text-gray-300 hover:text-[#dbf3fd]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Button
                  onClick={toggleLanguage}
                  variant="outline"
                  size="sm"
                  className="gap-2 border-[#dbf3fd]/30 hover:bg-[#dbf3fd]/10 w-fit"
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </Button>

                <Button
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#dbf3fd] hover:bg-white text-slate-900 font-bold w-full rounded-xl py-6 mt-2 shadow-[0_0_15px_rgba(219,243,253,0.2)]"
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