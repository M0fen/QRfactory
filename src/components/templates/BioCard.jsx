import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Music, Link as LinkIcon, ExternalLink } from 'lucide-react';

const iconMap = {
  Twitter,
  Github,
  Music
};

const BioCard = ({ payload }) => {
  const { avatar, title, subtitle, bio, links } = payload;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_80px_rgba(219,243,253,0.06)] relative z-10"
      >
        {/* Neon Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-40 bg-gradient-to-b from-[#dbf3fd]/20 to-transparent blur-[60px] rounded-full pointer-events-none opacity-60" />

        <div className="flex flex-col items-center relative z-20">
          <motion.div
            initial={{ scale: 0.8, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
            className="mb-8 relative group"
          >
            <div className="absolute inset-0 bg-[#dbf3fd] blur-2xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            <img 
              src={avatar} 
              alt={title} 
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border border-[#dbf3fd]/30 shadow-[0_0_30px_rgba(219,243,253,0.15)] relative z-10"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase text-center mb-2"
          >
            {title}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#dbf3fd] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 opacity-90 text-center"
          >
            {subtitle}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-center text-sm leading-relaxed mb-10 max-w-[280px]"
          >
            {bio}
          </motion.p>

          <div className="w-full flex flex-col gap-4">
            {links?.map((link, idx) => {
              const IconComponent = iconMap[link.icon] || LinkIcon;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (0.1 * idx), ease: "easeOut" }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between w-full p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#dbf3fd]/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(219,243,253,0.1)] transition-all group backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#dbf3fd]/0 via-[#dbf3fd]/5 to-[#dbf3fd]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 group-hover:bg-[#dbf3fd]/10 transition-colors border border-white/5 group-hover:border-[#dbf3fd]/20">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-[#dbf3fd] transition-colors" />
                    </div>
                    <span className="text-slate-200 font-bold tracking-wider text-sm md:text-base group-hover:text-white transition-colors">{link.platform}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-[#dbf3fd] opacity-0 shadow-sm group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 relative z-10" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BioCard;
