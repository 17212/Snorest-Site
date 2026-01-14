import React from 'react';
import { HERO_BG, HERO_OVERLAY } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, dir, language } = useLanguage();

  const isRtl = dir === 'rtl';

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-pan"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            transformOrigin: 'center bottom',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-black/30" />
        <div
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
          style={{ backgroundImage: `url('${HERO_OVERLAY}')` }}
        />
      </div>

      <div className="relative z-10 px-6 max-w-[1400px] mx-auto w-full mb-10">
        <h1 className="text-6xl md:text-[140px] font-bold leading-[0.85] tracking-tighter mb-10 text-white font-sans mix-blend-screen">
          <span className="block animate-slide-in-left text-glow drop-shadow-2xl">
            {t('future')}
          </span>
          <span className="block text-white opacity-0 animate-slide-in-right [animation-delay:0.3s] text-white/40">
            {t('defined')}
          </span>
        </h1>

        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-12 border-l border-white/10 pl-6 md:pl-10 ${isRtl ? 'md:border-l-0 md:border-r md:pl-0 md:pr-10' : ''}`}>
          <div className="max-w-xl animate-fade-in [animation-delay:0.6s] opacity-0">
            <h2
              className="text-2xl md:text-4xl font-arabic font-light text-white leading-tight mb-6 tracking-wide"
              dir="rtl"
            >
              {t('slogan_title')}
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-light">
              {t('slogan_desc')}
            </p>
          </div>
          <div className="flex items-center gap-6 animate-fade-in [animation-delay:0.8s] opacity-0">
            <button className="bg-white text-surface font-bold py-5 px-10 rounded-full hover:bg-[#e0e0e0] transition-all active:scale-95 flex items-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="uppercase tracking-[0.2em] text-xs">{t('start_project')}</span>
              <span className={`material-symbols-outlined text-lg transition-transform duration-500 ${isRtl ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`}>
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-4 animate-pulse-slow cursor-pointer hover:text-white/60 transition-colors" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-[10px] uppercase tracking-[0.5em] font-light">{t('scroll')}</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-current to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;