import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Nfc } from 'lucide-react';

const MetalCard3D = ({ name = 'YOUR NAME', title = 'cardfactory.co', logoText = 'CF' }) => {
  const cardRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 150, damping: 20 });

  // Metallic sheen position
  const sheenX = useTransform(mouseX, [0, 1], [0, 100]);
  const sheenY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Card Container with perspective */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[340px] h-[210px] md:w-[420px] md:h-[260px] cursor-card"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="w-full h-full"
        >
          {/* Card body — Matte Black Metal */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(255,255,255,0.06)]">
            {/* Base material */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#080808]" />

            {/* Subtle brushed metal texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 1px,
                  rgba(255,255,255,0.1) 1px,
                  rgba(255,255,255,0.1) 2px
                )`,
                backgroundSize: '4px 100%',
              }}
            />

            {/* Metallic sheen overlay — follows mouse */}
            <motion.div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                background: useTransform(
                  [sheenX, sheenY],
                  ([x, y]) => `radial-gradient(ellipse at ${x}% ${y}%, rgba(255,255,255,0.5) 0%, transparent 60%)`
                ),
              }}
            />

            {/* Card border — thin chrome edge */}
            <div className="absolute inset-0 rounded-2xl border border-white/[0.08]" />

            {/* NFC Chip — gold contact pad */}
            <div className="absolute top-6 left-6 md:top-7 md:left-7">
              <div className="w-10 h-7 md:w-12 md:h-8 rounded-md bg-gradient-to-br from-amber-300/70 to-amber-600/50 border border-amber-400/30 flex items-center justify-center shadow-sm">
                <div className="w-6 h-4 md:w-7 md:h-5 rounded-[2px] border border-amber-500/40">
                  <div className="w-full h-full grid grid-cols-3 gap-[1px] p-[2px]">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-amber-400/30 rounded-[0.5px]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* NFC Radio Icon */}
            <motion.div
              className="absolute top-6 right-6 md:top-7 md:right-7"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Nfc className="w-5 h-5 md:w-6 md:h-6 text-white/30" />
            </motion.div>

            {/* ── Laser Trace Beam ── */}
            <motion.div
              className="absolute top-0 h-full w-[2px] z-20"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 70%, transparent 100%)',
                boxShadow: '0 0 15px 5px rgba(255,255,255,0.3), 0 0 30px 10px rgba(255,255,255,0.1)',
              }}
              initial={{ left: '-5%', opacity: 0 }}
              animate={{ left: '105%', opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
              onAnimationComplete={() => setHasRevealed(true)}
            />

            {/* Laser trace glow line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[1px] z-10"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
              }}
              initial={{ left: 0, width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
            />

            {/* ── Revealed Content (after laser pass) ── */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <div className="flex items-end justify-between">
                <div>
                  {/* Card type label */}
                  <motion.p
                    className="text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #888 0%, #ccc 50%, #888 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Smart Card
                  </motion.p>

                  {/* Name — laser-etched silver */}
                  <motion.p
                    className="text-lg md:text-xl font-bold tracking-[0.08em]"
                    style={{
                      background: 'linear-gradient(135deg, #d4d4d4 0%, #a0a0a0 30%, #e8e8e8 60%, #b0b0b0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {name}
                  </motion.p>

                  {/* URL */}
                  <motion.p
                    className="text-xs md:text-sm text-white/30 tracking-wide mt-0.5"
                    initial={{ opacity: 0, y: 8 }}
                    animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {title}
                  </motion.p>
                </div>

                {/* CF Logo Badge */}
                <motion.div
                  className="flex items-center gap-1.5 bg-white/[0.04] rounded-full px-3 py-1.5 border border-white/[0.08]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasRevealed ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
                >
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-chrome">{logoText}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Pulsing NFC ripple rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="absolute w-[360px] h-[230px] md:w-[440px] md:h-[280px] rounded-3xl border border-white/[0.04]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[380px] h-[250px] md:w-[460px] md:h-[300px] rounded-3xl border border-white/[0.02]"
          animate={{ scale: [1, 1.04, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>
    </div>
  );
};

export default MetalCard3D;
