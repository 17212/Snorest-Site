import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAB: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <div className={`fixed bottom-8 z-50 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}>
      <button className="group w-14 h-14 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center transition-transform hover:-translate-y-1 active:scale-95">
        <span className="material-symbols-outlined text-2xl group-hover:hidden">
          call
        </span>
        <span className={`material-symbols-outlined text-2xl hidden group-hover:block animate-pulse ${dir === 'rtl' ? 'rotate-180' : ''}`}>
          arrow_outward
        </span>
        <div className={`absolute mr-4 bg-black/80 backdrop-blur text-white text-[10px] font-bold py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none ${dir === 'rtl' ? 'left-full ml-4 translate-x-[-10px] group-hover:translate-x-0' : 'right-full translate-x-2 group-hover:translate-x-0'}`}>
          {t('contact_us')}
        </div>
      </button>
    </div>
  );
};

export default FAB;