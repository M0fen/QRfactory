import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PricingPage from '@/pages/PricingPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import CardController from '@/components/templates/CardController';
import { mockBioData } from '@/data/templateSchema';
import Dashboard from '@/pages/Dashboard';
import Auth from '@/pages/Auth';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isCardPreview = location.pathname === '/card-preview';
  const isAuth = location.pathname === '/login';
  const isNotFound = !['/', '/services', '/pricing', '/contact', '/card-preview', '/dashboard', '/login'].includes(location.pathname);
  const showLayout = !isNotFound && !isCardPreview && !isAuth;

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Header />}
      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/card-preview" element={<CardController data={mockBioData} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Auth />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </main>
      {showLayout && <Footer />}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;