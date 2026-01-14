import React, { useState } from 'react';
import { EXPERTISE_ITEMS } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Expertise: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'details'>('overview');
  
  const { t, language, dir } = useLanguage();

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsClosing(false);
      setActiveSection('overview');
    }, 400);
  };

  const handleCardClick = (item: Service) => {
    setSelectedService(item);
  };

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
            const title = language === 'ar' ? item.title_ar : item.title;
            const description = language === 'ar' ? item.description_ar : item.description;

            if (item.type === 'card-large') {
              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
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
                  onClick={() => handleCardClick(item)}
                  className="md:col-span-1 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface-card shadow-apple-card cursor-pointer transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-40 group-hover:opacity-30"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-card/10 to-surface-card"></div>
                  <div className={`absolute bottom-0 p-8 w-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                    <div className="w-12 h-12 rounded-2xl bg-surface-highlight flex items-center justify-center mb-6 text-white group-hover:bg-accent group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
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
                onClick={() => handleCardClick(item)}
                className="md:col-span-1 group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#151515] p-8 flex flex-col justify-between hover:bg-[#1a1a1a] transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/30 text-4xl transition-all duration-500 group-hover:text-accent group-hover:rotate-12 group-hover:scale-110">
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
              className={`absolute inset-0 bg-black/60 backdrop-blur-3xl transition-opacity duration-400 ease-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
              onClick={handleCloseModal}
            ></div>
            <div className={`relative w-full max-w-5xl bg-[#1c1c1e] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row md:h-[700px] border border-white/10 ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}>
              <div className="relative md:w-5/12 h-64 md:h-full bg-black group overflow-hidden">
                {selectedService.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110"
                    style={{ backgroundImage: `url('${selectedService.imageUrl}')` }}
                  ></div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-highlight">
                     <span className="material-symbols-outlined text-9xl text-white/5 group-hover:scale-110 transition-transform duration-700">{selectedService.icon}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c1c1e]/40"></div>
                
                {/* Visual Accent in Image */}
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="text-6xl font-bold text-white/10 font-arabic select-none">
                      {selectedService.subtitle || "0" + selectedService.id}
                   </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col relative bg-[#1c1c1e]">
                 <button 
                  onClick={handleCloseModal}
                  className={`absolute top-8 w-10 h-10 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center transition-colors z-20 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
                >
                  <span className="material-symbols-outlined text-white/80">close</span>
                </button>

                <div className="p-10 md:p-14 pb-0">
                  {selectedService.subtitle && (
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">
                      {selectedService.subtitle}
                    </span>
                  )}
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.1]">
                    {language === 'ar' ? selectedService.title_ar : selectedService.title}
                  </h2>
                  
                  {/* Tabs / Sections */}
                  <div className="flex gap-6 border-b border-white/10 mb-8">
                     <button 
                        onClick={() => setActiveSection('overview')}
                        className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${activeSection === 'overview' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                     >
                        Overview
                        {activeSection === 'overview' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"></span>}
                     </button>
                     <button 
                        onClick={() => setActiveSection('details')}
                        className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${activeSection === 'details' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                     >
                        Methodology
                        {activeSection === 'details' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"></span>}
                     </button>
                  </div>
                </div>
                
                <div className={`px-10 md:px-14 pb-10 overflow-y-auto no-scrollbar flex-grow ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                   {activeSection === 'overview' ? (
                      <div className="animate-fade-in">
                         <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
                           {language === 'ar' ? selectedService.description_ar : selectedService.description}
                         </p>
                         
                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                               <div className="text-accent text-2xl mb-2">
                                  <span className="material-symbols-outlined">award_star</span>
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1">Premium Quality</h4>
                               <p className="text-white/40 text-xs">Best in class execution</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                               <div className="text-accent text-2xl mb-2">
                                  <span className="material-symbols-outlined">verified</span>
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1">Certified</h4>
                               <p className="text-white/40 text-xs">ISO & LEED Standards</p>
                            </div>
                         </div>
                      </div>
                   ) : (
                      <div className="animate-fade-in">
                          <p className="text-base text-apple-gray leading-loose">
                           {language === 'ar' 
                             ? (selectedService.longDescription_ar || selectedService.description_ar) 
                             : (selectedService.longDescription || selectedService.description)}
                          </p>
                      </div>
                   )}
                </div>

                <div className="p-8 md:p-14 pt-6 border-t border-white/5 mt-auto">
                   <button className="bg-white text-black h-14 w-full rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center gap-2 group">
                      {t('inquire_now')}
                      <span className={`material-symbols-outlined text-lg transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
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