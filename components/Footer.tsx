import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-surface pt-40 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 w-full text-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
         <h1 className="text-[20vw] font-bold text-white leading-none tracking-tighter">SNOREST</h1>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-10 rounded-3xl border border-white/10 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
          <span className="material-symbols-outlined text-accent text-5xl">
            handshake
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-[0.9]">
          {t('lets_build')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">{t('the_extraordinary')}</span>
        </h2>
        
        <p className="text-apple-gray mb-16 leading-relaxed font-light text-xl max-w-xl mx-auto">
          {t('footer_desc')}
        </p>

        <button 
          onClick={scrollToTop}
          className="bg-accent text-black font-bold py-6 px-16 rounded-full w-full md:w-auto hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(197,160,89,0.25)] mb-24 text-sm uppercase tracking-[0.2em]"
        >
          {t('start_consultation')}
        </button>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="md:col-span-1">
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent mb-6">S</div>
             <p className="text-xs text-white/40 leading-relaxed">
               Redefining skylines with <br/> precision and luxury.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] text-accent">
              {t('social')}
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>
                <a className="hover:text-white transition-colors flex items-center gap-2" href="#" target="_blank">
                  Instagram <span className="material-symbols-outlined text-[10px] opacity-50">north_east</span>
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors flex items-center gap-2" href="#" target="_blank">
                  LinkedIn <span className="material-symbols-outlined text-[10px] opacity-50">north_east</span>
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors flex items-center gap-2" href="#" target="_blank">
                  WhatsApp <span className="material-symbols-outlined text-[10px] opacity-50">north_east</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] text-accent">
              {t('company')}
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a className="hover:text-white transition-colors" href="#">{t('about_us')}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t('careers')}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t('contact')}</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1 text-right md:text-right flex flex-col justify-between h-full">
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
              CAIRO — NEW CAPITAL — SAHEL
            </p>
            <p className="text-[10px] text-gray-700 mt-4">
              © 2024 Snorest.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;