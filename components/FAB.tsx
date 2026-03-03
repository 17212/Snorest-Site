import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAB: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed bottom-8 z-50 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
    >
      <button className="group w-14 h-14 bg-white text-black rounded-full shadow-glow flex items-center justify-center transition-transform hover:-translate-y-1 active:scale-95">
        <span className="group-hover:hidden">
          <Phone size={24} />
        </span>
        <span className={`hidden group-hover:block animate-pulse ${dir === 'rtl' ? 'rotate-180' : ''}`}>
          <ArrowUpRight size={24} />
        </span>
        <div className={`absolute mr-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none ${dir === 'rtl' ? 'left-full ml-4 translate-x-[-10px] group-hover:translate-x-0' : 'right-full translate-x-2 group-hover:translate-x-0'}`}>
          {t('contact_us')}
        </div>
      </button>
    </motion.div>
  );
};

export default FAB;