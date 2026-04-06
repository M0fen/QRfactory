import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import QRCode from 'qrcode';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, QrCode as QrCodeIcon, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const QRGenerator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [templateType, setTemplateType] = useState('bio');

  const inputRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value.trim());
    }, 600);
    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const { t } = useLanguage();

  const qrData = useMemo(() => {
    if (!debouncedValue) return null;
    try {
      const targetUrl = new URL(window.location.origin);
      targetUrl.pathname = '/card-preview';
      targetUrl.searchParams.set('type', templateType);
      
      let base64Data = '';
      try {
        base64Data = btoa(unescape(encodeURIComponent(debouncedValue)));
      } catch(e) {
        base64Data = btoa(debouncedValue);
      }
      targetUrl.searchParams.set('data', base64Data);
      
      const qr = QRCode.create(targetUrl.toString(), { errorCorrectionLevel: 'H' });
      const size = qr.modules.size;
      const data = qr.modules.data;
      const modules = [];
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (data[r * size + c]) {
            modules.push({ r, c, i: (r * size + c) });
          }
        }
      }
      return { size, modules };
    } catch (e) {
      return null;
    }
  }, [debouncedValue, templateType]);

  const handleDownloadPNG = useCallback(() => {
    if (!qrData) return;
    
    const canvas = document.createElement('canvas');
    const size = 1024;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    
    ctx.fillStyle = '#000000';
    const margin = 64;
    const drawArea = size - (margin * 2);
    const cellSize = drawArea / qrData.size;
    
    qrData.modules.forEach(({ r, c }) => {
      ctx.fillRect(margin + (c * cellSize), margin + (r * cellSize), cellSize + 0.5, cellSize + 0.5);
    });

    // Logo Safe Zone Logic (Center)
    const logoSize = size * 0.18;
    const center = size / 2;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(center - logoSize / 2 - 10, center - logoSize / 2 - 10, logoSize + 20, logoSize + 20);
    ctx.fillStyle = '#0f172a';
    ctx.font = `bold ${logoSize * 0.4}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('QR', center, center);
    
    const pngFile = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.download = 'qrfactory-branded.png';
    downloadLink.href = pngFile;
    downloadLink.click();
  }, [qrData]);

  const handleDownloadSVG = useCallback(() => {
    if (!qrData) return;

    const size = qrData.size;
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges">`;
    svgContent += `<rect width="${size}" height="${size}" fill="white"/>`;
    
    qrData.modules.forEach(({ r, c }) => {
      svgContent += `<rect x="${c}" y="${r}" width="1" height="1" fill="black"/>`;
    });

    // Logo Safe Zone Logic
    const logoSize = size * 0.2;
    const center = size / 2;
    svgContent += `<rect x="${center - logoSize / 2}" y="${center - logoSize / 2}" width="${logoSize}" height="${logoSize}" fill="white"/>`;
    svgContent += `<text x="${center}" y="${center + (logoSize * 0.1)}" font-family="sans-serif" font-size="${logoSize * 0.4}" font-weight="bold" fill="#0f172a" text-anchor="middle">QR</text>`;
    
    svgContent += '</svg>';

    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.download = 'qrfactory-branded.svg';
    downloadLink.href = svgUrl;
    downloadLink.click();
    URL.revokeObjectURL(svgUrl);
  }, [qrData]);

  const emptyMazePattern = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v22H20v-2h20v-2H20v-2h20v-2H20v-2h20v-2H20v-2h20v-2H20v-2h20v-2H20v-2' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E`;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .qr-water-rise {
          clip-path: inset(100% 0 0 0);
          animation: waterRise 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes waterRise {
          0% { clip-path: inset(100% 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
      `}} />

      <motion.button
        type="button"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-50 group cursor-pointer block outline-none border-none bg-transparent p-0 m-0 focus-visible:ring-4 focus-visible:ring-[#dbf3fd]/50 rounded-3xl"
        onClick={() => setIsOpen(true)}
        aria-label={t.hero?.qrPreview || "Open Custom QR Generator"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#dbf3fd] to-blue-500 blur-[80px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 group-hover:border-[#dbf3fd]/30 transition-colors duration-500 pointer-events-none"
        >
          <div className="w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <QrCodeIcon className="w-40 h-40 md:w-56 md:h-56 text-[#dbf3fd] relative z-10 drop-shadow-[0_0_15px_rgba(219,243,253,0.3)] pointer-events-none" />
            
            <div className="absolute top-4 md:top-6 left-4 md:left-6 w-6 md:w-8 h-6 md:h-8 border-t-4 border-l-4 border-[#dbf3fd]/50 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 md:top-6 right-4 md:right-6 w-6 md:w-8 h-6 md:h-8 border-t-4 border-r-4 border-[#dbf3fd]/50 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 w-6 md:w-8 h-6 md:h-8 border-b-4 border-l-4 border-[#dbf3fd]/50 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-6 md:w-8 h-6 md:h-8 border-b-4 border-r-4 border-[#dbf3fd]/50 rounded-br-lg pointer-events-none" />
          </div>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-6 pointer-events-auto"
            onClick={() => setIsOpen(false)}
          >
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 md:top-8 right-6 md:right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10 hover:border-white/20 z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full max-w-lg z-50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full mb-8 md:mb-12 relative">
                <div className="relative group mb-4">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none z-10">
                    <LinkIcon className="w-6 h-6 text-gray-400 group-focus-within:text-[#dbf3fd] transition-colors duration-300" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={t.generator?.inputPlaceholder || "Enter target URL..."}
                    className="w-full pl-14 pr-6 py-4 md:py-5 text-base md:text-lg rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dbf3fd]/50 focus:border-transparent transition-all shadow-inner pointer-events-auto relative z-0"
                  />
                </div>

                {/* Template Selector Segmented Control */}
                <div className="flex w-full bg-white/5 p-1.5 rounded-xl border border-white/10 relative overflow-hidden backdrop-blur-md pointer-events-auto z-10 box-border">
                  {['bio', 'vcard', 'product'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTemplateType(type)}
                      className={`flex-1 py-2.5 text-sm md:text-base font-bold uppercase tracking-wider rounded-lg transition-all z-10 relative cursor-pointer ${
                        templateType === type 
                          ? 'text-slate-900 shadow-md' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {templateType === type && (
                        <motion.div
                          layoutId="activeTabBadge"
                          className="absolute inset-0 bg-[#dbf3fd] rounded-lg -z-10 shadow-[0_0_15px_rgba(219,243,253,0.4)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!debouncedValue ? (
                  <motion.div
                    key="inactive-state"
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center w-full p-6 md:p-10 bg-white rounded-[2rem] shadow-[0_0_80px_rgba(219,243,253,0.15)] mb-8 md:mb-10 h-[280px] md:h-[340px]"
                  >
                    <div className="w-full h-full relative rounded-xl flex items-center justify-center overflow-hidden bg-white border-2 border-dashed border-slate-300">
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("${emptyMazePattern}")`, backgroundSize: '160px' }}></div>
                      <p className="z-10 text-slate-900 font-extrabold tracking-widest uppercase text-center text-sm md:text-base drop-shadow-sm pointer-events-none">{t.generator?.emptyStateText || "Ponga su enlace arriba"}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={debouncedValue}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center w-full p-6 md:p-10 bg-white rounded-[2rem] shadow-[0_0_80px_rgba(219,243,253,0.15)] mb-8 md:mb-10 h-[280px] md:h-[340px]"
                  >
                    {qrData && (
                      <div className="w-full h-full max-w-[200px] max-h-[200px] md:max-w-[260px] md:max-h-[260px] flex items-center justify-center qr-water-rise relative">
                        <svg
                          viewBox={`0 0 ${qrData.size} ${qrData.size}`}
                          className="w-full h-full"
                          shapeRendering="crispEdges"
                        >
                          {qrData.modules.map(({ r, c }) => (
                            <rect
                              key={`${r}-${c}`}
                              x={c}
                              y={r}
                              width={1.05}
                              height={1.05}
                              fill="#000000"
                            />
                          ))}
                          
                          {/* Logo Safe View */}
                          <rect 
                            x={qrData.size / 2 - (qrData.size * 0.2) / 2} 
                            y={qrData.size / 2 - (qrData.size * 0.2) / 2} 
                            width={qrData.size * 0.2} 
                            height={qrData.size * 0.2} 
                            fill="white" 
                          />
                          <text 
                            x={qrData.size / 2} 
                            y={qrData.size / 2 + (qrData.size * 0.05)} 
                            fontFamily="sans-serif" 
                            fontSize={qrData.size * 0.08} 
                            fontWeight="bold" 
                            fill="#0f172a" 
                            textAnchor="middle"
                          >QR</text>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={handleDownloadPNG}
                  disabled={!debouncedValue}
                  whileHover={debouncedValue ? { scale: 1.03 } : {}}
                  whileTap={debouncedValue ? { scale: 0.97 } : {}}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 md:py-5 px-6 md:px-8 rounded-2xl font-bold text-base md:text-lg transition-all pointer-events-auto ${
                    debouncedValue
                      ? 'bg-[#dbf3fd] hover:bg-white text-slate-900 shadow-[0_4px_20px_rgba(219,243,253,0.3)] cursor-pointer'
                      : 'bg-white/10 text-slate-500 cursor-not-allowed border border-white/10'
                  }`}
                >
                  <Download className="w-5 h-5 md:w-6 md:h-6" />
                  {t.generator?.exportButton || "Aquí puede exportar su QR:)"}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleDownloadSVG}
                  disabled={!debouncedValue}
                  whileHover={debouncedValue ? { scale: 1.03 } : {}}
                  whileTap={debouncedValue ? { scale: 0.97 } : {}}
                  className={`flex items-center justify-center p-4 md:p-5 rounded-2xl transition-all pointer-events-auto ${
                    debouncedValue
                      ? 'bg-white/10 hover:bg-white/20 text-white cursor-pointer border border-white/20'
                      : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/10'
                  }`}
                  title="Export SVG"
                >
                  <QrCodeIcon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QRGenerator;