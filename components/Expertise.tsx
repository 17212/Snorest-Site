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
    <section className="py-40 px-6 bg-surface relative z-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 relative z-10">
              {t('expertise_title')}
            </h2>
            <p className="text-accent text-2xl font-arabic font-light opacity-90 tracking-wide">
              {t('expertise_subtitle')}
            </p>
          </div>
          <p className="text-apple-gray text-lg max-w-md hidden md:block leading-relaxed font-light border-l border-white/10 pl-6">
            {t('expertise_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[380px]">
          {EXPERTISE_ITEMS.map((item) => {
            const title = language === 'ar' ? item.title_ar : item.title;
            const description = language === 'ar' ? item.description_ar : item.description;

            if (item.type === 'card-large') {
              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="md:col-span-2 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-surface-card shadow-lg cursor-pointer transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] hover:scale-[0.99]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/10 to-transparent opacity-90"></div>
                  
                  <div className={`absolute top-8 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 z-10 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}>
                    <span className={`material-symbols-outlined text-3xl transition-transform duration-500 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`}>
                      arrow_outward
                    </span>
                  </div>
                  
                  <div className={`absolute bottom-0 p-12 w-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                    {item.subtitle && (
                      <span className="text-accent/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 block border-l-2 border-accent pl-3">
                        {item.subtitle}
                      </span>
                    )}
                    <h3 className="text-5xl font-semibold mb-4 text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="text-[#d1d1d6] text-lg font-light max-w-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
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
                  className="md:col-span-1 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-surface-card shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-white/10"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-30 group-hover:opacity-20"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-card/20 to-surface-card"></div>
                  
                  <div className={`absolute bottom-0 p-10 w-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                    <div className="w-16 h-16 rounded-2xl bg-surface-highlight/50 backdrop-blur border border-white/5 flex items-center justify-center mb-8 text-white group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <span className="material-symbols-outlined text-3xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white">
                      {title}
                    </h3>
                    <p className="text-apple-gray text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">{description}</p>
                  </div>
                </div>
              );
            }

            // Small cards
            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="md:col-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0f0f0f] p-10 flex flex-col justify-between hover:bg-[#141414] hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/20 text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </span>
                  <span className="text-white/10 text-xs font-mono font-bold">
                    {item.subtitle}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-apple-gray text-xs leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
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
              className={`absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity duration-400 ease-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
              onClick={handleCloseModal}
            ></div>
            <div className={`relative w-full max-w-6xl bg-[#121212] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row md:h-[750px] border border-white/10 ring-1 ring-white/5 ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}>
              <div className="relative md:w-5/12 h-64 md:h-full bg-black group overflow-hidden">
                {selectedService.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110 ease-out"
                    style={{ backgroundImage: `url('${selectedService.imageUrl}')` }}
                  ></div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-highlight">
                     <span className="material-symbols-outlined text-9xl text-white/5 group-hover:scale-110 transition-transform duration-700">{selectedService.icon}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]/80"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="text-[120px] font-bold text-white/5 font-arabic select-none leading-none absolute -bottom-10 -left-4">
                      {selectedService.subtitle?.replace(/\D/g, '') || "0" + selectedService.id}
                   </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col relative bg-[#121212]">
                 <button 
                  onClick={handleCloseModal}
                  className={`absolute top-8 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-20 border border-white/5 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
                >
                  <span className="material-symbols-outlined text-white/60">close</span>
                </button>

                <div className="p-10 md:p-16 pb-0">
                  {selectedService.subtitle && (
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.25em] mb-6 block">
                      {selectedService.subtitle}
                    </span>
                  )}
                  <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-[1.05] tracking-tight">
                    {language === 'ar' ? selectedService.title_ar : selectedService.title}
                  </h2>
                  
                  <div className="flex gap-8 border-b border-white/5 mb-10">
                     <button 
                        onClick={() => setActiveSection('overview')}
                        className={`pb-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeSection === 'overview' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                     >
                        Overview
                        {activeSection === 'overview' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_10px_#C5A059]"></span>}
                     </button>
                     <button 
                        onClick={() => setActiveSection('details')}
                        className={`pb-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeSection === 'details' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                     >
                        Deep Dive
                        {activeSection === 'details' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_10px_#C5A059]"></span>}
                     </button>
                  </div>
                </div>
                
                <div className={`px-10 md:px-16 pb-10 overflow-y-auto no-scrollbar flex-grow ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                   {activeSection === 'overview' ? (
                      <div className="animate-fade-in">
                         <p className="text-2xl text-white/80 font-light leading-relaxed mb-10">
                           {language === 'ar' ? selectedService.description_ar : selectedService.description}
                         </p>
                         
                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                               <div className="text-accent text-3xl mb-3">
                                  <span className="material-symbols-outlined">award_star</span>
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1 uppercase tracking-wider">Excellence</h4>
                               <p className="text-white/40 text-xs">Unmatched execution standards</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                               <div className="text-accent text-3xl mb-3">
                                  <span className="material-symbols-outlined">verified</span>
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1 uppercase tracking-wider">Certified</h4>
                               <p className="text-white/40 text-xs">International Compliance</p>
                            </div>
                         </div>
                      </div>
                   ) : (
                      <div className="animate-fade-in">
                          <p className="text-lg text-apple-gray leading-loose font-light">
                           {language === 'ar' 
                             ? (selectedService.longDescription_ar || selectedService.description_ar) 
                             : (selectedService.longDescription || selectedService.description)}
                          </p>
                      </div>
                   )}
                </div>

                <div className="p-8 md:p-16 pt-8 border-t border-white/5 mt-auto bg-[#121212] relative z-10">
                   <button className="bg-white text-black h-16 w-full rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#e6e6e6] transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 group">
                      {t('inquire_now')}
                      <span className={`material-symbols-outlined text-xl transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
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