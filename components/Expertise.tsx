import React, { useState } from 'react';
import { EXPERTISE_ITEMS } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Expertise: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { t, language, dir } = useLanguage();

  return (
    <section className="py-32 px-4 bg-surface relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-3">
              {t('expertise_title')}
            </h2>
            <p className="text-accent text-xl font-arabic font-light opacity-90">
              {t('expertise_subtitle')}
            </p>
          </div>
          <p className="text-apple-gray text-base max-w-sm hidden md:block leading-relaxed">
            {t('expertise_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[340px]">
          {EXPERTISE_ITEMS.map((item) => {
            const handleCardClick = () => setSelectedService(item);
            const title = language === 'ar' ? item.title_ar : item.title;
            const description = language === 'ar' ? item.description_ar : item.description;

            if (item.type === 'card-large') {
              return (
                <div
                  key={item.id}
                  onClick={handleCardClick}
                  className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface-card shadow-apple-card cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[0.99] active:scale-[0.97]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-50"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent"></div>
                  
                  <div className={`absolute top-8 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}>
                    <span className={`material-symbols-outlined text-2xl ${dir === 'rtl' ? 'rotate-180' : ''}`}>
                      north_east
                    </span>
                  </div>
                  
                  <div className={`absolute bottom-0 p-10 w-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                    {item.subtitle && (
                      <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
                        {item.subtitle}
                      </span>
                    )}
                    <h3 className="text-4xl font-semibold mb-3 text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="text-[#d1d1d6] text-base font-light max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {description}
                    </p>
                  </div>
                </div>
              );
            }

            if (item.type === 'card-tall') {
              return (
                <div
                  key={item.id}
                  onClick={handleCardClick}
                  className="md:col-span-1 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface-card shadow-apple-card cursor-pointer transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-40 group-hover:opacity-30"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-card/10 to-surface-card"></div>
                  <div className={`absolute bottom-0 p-8 w-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                    <div className="w-12 h-12 rounded-2xl bg-surface-highlight flex items-center justify-center mb-6 text-white group-hover:bg-accent group-hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-2xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {title}
                    </h3>
                    <p className="text-apple-gray text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              );
            }

            // Small cards
            return (
              <div
                key={item.id}
                onClick={handleCardClick}
                className="md:col-span-1 group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#151515] p-8 flex flex-col justify-between hover:bg-[#1a1a1a] transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/30 text-4xl group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-white/20 text-xs font-mono">
                    {item.subtitle}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-apple-gray text-xs leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Detailed Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in"
              onClick={() => setSelectedService(null)}
            ></div>
            <div className="relative w-full max-w-5xl bg-[#1c1c1e] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-modal-enter md:h-[650px] border border-white/10">
              <div className="relative md:w-1/2 h-72 md:h-full bg-black group">
                {selectedService.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                    style={{ backgroundImage: `url('${selectedService.imageUrl}')` }}
                  ></div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-highlight">
                     <span className="material-symbols-outlined text-8xl text-white/10">{selectedService.icon}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c1c1e]/10"></div>
              </div>
              
              <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center relative bg-[#1c1c1e]">
                 <button 
                  onClick={() => setSelectedService(null)}
                  className={`absolute top-8 w-10 h-10 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center transition-colors ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
                >
                  <span className="material-symbols-outlined text-white/80">close</span>
                </button>

                <div className="mb-8">
                  {selectedService.subtitle && (
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3 block">
                      {selectedService.subtitle}
                    </span>
                  )}
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                    {language === 'ar' ? selectedService.title_ar : selectedService.title}
                  </h2>
                </div>
                
                <div className={`space-y-6 text-[#d1d1d6] leading-relaxed font-light text-lg ${dir === 'rtl' ? 'border-r border-white/10 pr-6' : 'border-l border-white/10 pl-6'}`}>
                  <p>
                    {language === 'ar' ? selectedService.description_ar : selectedService.description}
                  </p>
                  <p className="text-base text-apple-gray">
                    {language === 'ar' 
                      ? (selectedService.longDescription_ar || selectedService.description_ar) 
                      : (selectedService.longDescription || selectedService.description)}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5">
                   <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
                      {t('inquire_now')}
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expertise;