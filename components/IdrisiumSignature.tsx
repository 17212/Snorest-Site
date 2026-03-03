import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Instagram, MessageCircle, Mail, Globe, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const IdrisiumSignature: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 group flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:border-accent/50 transition-colors shadow-lg"
      >
        <Code2 size={14} className="text-accent group-hover:animate-pulse" />
        <span className="text-[10px] text-white/70 font-mono tracking-widest uppercase group-hover:text-white transition-colors">
          Idrisium
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-3xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm sm:max-w-md bg-[#0a0a0c] rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(197,160,89,0.15)] overflow-hidden"
            >
              {/* Header Gradient */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none" />
              
              <button 
                onClick={() => setIsOpen(false)}
                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-10 text-white/50 hover:text-white`}
              >
                <X size={16} />
              </button>

              <div className="p-8 sm:p-10 pt-12 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/20 p-1 shadow-2xl mb-6 relative group">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="https://github.com/IDRISIUM.png" 
                    alt="Idris Ghamid" 
                    className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/><text x="50" y="55" font-family="monospace" font-size="40" fill="%23c5a059" text-anchor="middle">IG</text></svg>';
                    }}
                  />
                </div>

                <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  Idris Ghamid
                </h2>
                <h3 className="text-sm text-apple-gray font-arabic mb-4">
                  إدريس غامد
                </h3>
                
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                  Senior Principal Architect
                </p>

                <div className="w-full space-y-3">
                  <a href="https://github.com/IDRISIUM" target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
                    <Github size={18} className="text-white/50 group-hover:text-white" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">@IDRISIUM</span>
                    <ArrowUpRight size={14} className="ml-auto text-white/30 group-hover:text-white/70" />
                  </a>

                  <a href="http://idrisium.linkpc.net/" target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
                    <Globe size={18} className="text-white/50 group-hover:text-white" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">idrisium.linkpc.net</span>
                    <ArrowUpRight size={14} className="ml-auto text-white/30 group-hover:text-white/70" />
                  </a>
                </div>

                <div className="flex gap-4 mt-8 pt-8 border-t border-white/10 w-full justify-center">
                  <a href="https://tiktok.com/@idris.ghamid" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors text-white/70">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </a>
                  <a href="https://instagram.com/idris.ghamid" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors text-white/70">
                    <Instagram size={16} />
                  </a>
                  <a href="https://t.me/IDRV72" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors text-white/70">
                    <MessageCircle size={16} />
                  </a>
                  <a href="mailto:idris.ghamid@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-colors text-white/70">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper icon component for use specifically in the component
function ArrowUpRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
    </svg>
  );
}

export default IdrisiumSignature;
