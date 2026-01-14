import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      
      <div className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-[1400px] w-[95%]' : 'max-w-4xl w-[90%]'}`}>
        <div className={`glass-morphism rounded-full flex items-center justify-between transition-all duration-500 ring-1 ring-white/10 ${scrolled ? 'px-6 py-3 bg-black/60' : 'px-8 py-4 bg-black/30'}`}>
          
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center font-bold font-arabic text-xl shadow-[0_0_20px_rgba(197,160,89,0.4)] group-hover:scale-110 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-[0.2em] text-sm uppercase text-white group-hover:text-accent transition-colors">
                Snorest
              </span>
              <span className="text-[9px] text-white/50 tracking-widest uppercase hidden sm:block">
                Construction
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white font-bold text-xs border border-transparent hover:border-white/10"
              aria-label="Toggle Language"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            
            <button 
              onClick={scrollToFooter}
              className="hidden sm:block px-6 py-2.5 rounded-full hover:bg-white/10 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors text-white/90 border border-transparent hover:border-white/10"
            >
              {t('contact')}
            </button>

            <button className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 text-[10px] font-bold uppercase tracking-[0.15em] transition-all hover:scale-105 shadow-lg shadow-white/10">
              {t('menu')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;