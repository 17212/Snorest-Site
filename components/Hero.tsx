import React from 'react';
import { HERO_BG, HERO_OVERLAY } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, dir, language } = useLanguage();

  const isRtl = dir === 'rtl';

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-12">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-pan"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            transformOrigin: 'center bottom',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-black/20" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: `url('${HERO_OVERLAY}')` }}
        />
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
            {t('vision')}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6 text-white">
          <span className="block animate-[fadeIn_1s_ease-out] text-glow">
            {t('future')}
          </span>
          <span className="block text-white opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards] text-white/80">
            {t('defined')}
          </span>
        </h1>

        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 border-l border-white/20 pl-6 md:pl-8 ${isRtl ? 'md:border-l-0 md:border-r md:pl-0 md:pr-8' : ''}`}>
          <div className="max-w-md">
            <h2
              className="text-3xl md:text-5xl font-arabic font-extralight text-white leading-tight mb-4"
              dir="rtl"
            >
              {t('slogan_title')}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              {t('slogan_desc')}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white text-surface font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {t('start_project')}
              <span className={`material-symbols-outlined text-sm transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-[9px] uppercase tracking-[0.3em]">{t('scroll')}</span>
        <span className="material-symbols-outlined text-lg">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;