import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { HERO_BG, HERO_OVERLAY } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-20 bg-surface">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            transformOrigin: 'center bottom',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('${HERO_OVERLAY}')` }}
        />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mb-10">
        <h1 className="text-6xl md:text-8xl lg:text-[140px] font-bold leading-[0.85] tracking-tighter mb-10 text-white font-sans mix-blend-screen">
          <motion.span 
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-glow-accent drop-shadow-2xl text-accent"
          >
            {t('future')}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white/40"
          >
            {t('defined')}
          </motion.span>
        </h1>

        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-12 border-white/10 ${isRtl ? 'md:border-r md:pr-10' : 'md:border-l md:pl-10'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-4xl font-arabic font-light text-white leading-tight mb-6 tracking-wide">
              {t('slogan_title')}
            </h2>
            <p className="text-apple-gray text-base md:text-lg leading-relaxed max-w-md font-light">
              {t('slogan_desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <button className="bg-white text-surfaceCard font-bold py-4 px-8 rounded-full hover:bg-white/90 transition-all active:scale-95 flex items-center gap-3 group shadow-glow">
              <span className="uppercase tracking-widest text-xs">{t('start_project')}</span>
              {isRtl ? (
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:text-white transition-colors text-white/40"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-light">{t('scroll')}</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-10 w-[1px] bg-gradient-to-b from-current to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;