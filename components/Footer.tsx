import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-surface pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-white/10 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
          <span className="material-symbols-outlined text-accent text-4xl">
            handshake
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          {t('lets_build')} <br />
          {t('the_extraordinary')}
        </h2>
        <p className="text-gray-400 mb-12 leading-relaxed font-light text-lg">
          {t('footer_desc')}
        </p>

        <button 
          onClick={scrollToTop}
          className="bg-accent text-black font-bold py-5 px-12 rounded-2xl w-full md:w-auto hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(197,160,89,0.3)] mb-20 text-sm uppercase tracking-widest"
        >
          {t('start_consultation')}
        </button>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 ${dir === 'rtl' ? 'text-right' : 'text-left'} md:text-center`}>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              {t('social')}
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a className="hover:text-accent transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:text-accent transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-accent transition-colors" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="hover:text-accent transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              {t('company')}
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a className="hover:text-accent transition-colors" href="#">
                  {t('about_us')}
                </a>
              </li>
              <li>
                <a className="hover:text-accent transition-colors" href="#">
                  {t('careers')}
                </a>
              </li>
              <li>
                <a className="hover:text-accent transition-colors" href="#">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 text-right md:text-center">
            <p className="text-xs text-gray-600 mb-2">
              © 2024 Snorest Construction. <br />
              {t('rights_reserved')}
            </p>
            <p className="text-xs text-gray-700 font-mono">
              CAIRO — NEW CAPITAL — SAHEL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;