import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - QR Experience</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-9xl font-bold mb-8 bg-gradient-to-r from-[#dbf3fd] to-blue-400 bg-clip-text text-transparent"
          >
            404
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.notFound.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            {t.notFound.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="bg-gradient-to-r from-[#dbf3fd] to-blue-500 hover:from-[#dbf3fd]/90 hover:to-blue-600 text-slate-900 font-semibold"
            >
              <Home className="w-5 h-5 mr-2" />
              {t.notFound.backHome}
            </Button>

            <Button
              onClick={() => navigate(-1)}
              size="lg"
              variant="outline"
              className="border-[#dbf3fd]/30 hover:bg-[#dbf3fd]/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;