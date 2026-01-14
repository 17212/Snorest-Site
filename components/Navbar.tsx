import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[500px]">
      <div className="glass-morphism rounded-full px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300 ring-1 ring-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent text-black flex items-center justify-center font-bold font-arabic text-lg shadow-glow">
            S
          </div>
          <span className="font-medium tracking-wide text-xs uppercase hidden sm:block opacity-90">
            Snorest
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white font-bold text-xs"
            aria-label="Toggle Language"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          
          <button 
            onClick={scrollToFooter}
            className="hidden sm:block px-4 py-2 rounded-full hover:bg-white/10 text-[10px] font-semibold uppercase tracking-wider transition-colors text-white/80"
          >
            {t('contact')}
          </button>

          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-semibold uppercase tracking-wider transition-colors border border-white/5 ring-1 ring-white/5">
            {t('menu')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;