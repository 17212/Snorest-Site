import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERTISE_ITEMS } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowUpRight, Building2, Compass, HardHat, 
  X, Award, CheckCircle, ArrowRight, ArrowLeft 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  domain: <Building2 size={32} strokeWidth={1.5} />,
  architecture: <Compass size={32} strokeWidth={1.5} />,
  engineering: <HardHat size={32} strokeWidth={1.5} />,
};

const Expertise: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeSection, setActiveSection] = useState<'overview' | 'details'>('overview');
  
  const { t, language, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  const handleCloseModal = () => {
    setSelectedService(null);
    setTimeout(() => {
      setActiveSection('overview');
    }, 400); // reset after animation
  };

  const handleCardClick = (item: Service) => {
    setSelectedService(item);
  };

  return (
    <section className="py-40 px-6 bg-surface relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 relative z-10">
              {t('expertise_title')}
            </h2>
            <p className="text-accent text-2xl font-arabic font-light opacity-90 tracking-wide">
              {t('expertise_subtitle')}
            </p>
          </div>
          <p className={`text-apple-gray text-lg max-w-md hidden md:block leading-relaxed font-light ${isRtl ? 'border-r border-white/10 pr-6' : 'border-l border-white/10 pl-6'}`}>
            {t('expertise_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[380px]">
          {EXPERTISE_ITEMS.map((item, index) => {
            const title = language === 'ar' ? item.title_ar : item.title;
            const description = language === 'ar' ? item.description_ar : item.description;

            if (item.type === 'card-large') {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="md:col-span-2 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-surfaceCard shadow-lg cursor-pointer transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surfaceCard via-surfaceCard/50 to-transparent"></div>
                  
                  <div className={`absolute top-8 w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 z-10 ${isRtl ? 'left-8' : 'right-8'}`}>
                    <ArrowUpRight className={`w-8 h-8 transition-transform duration-500 ${isRtl ? '-scale-x-100 group-hover:-translate-x-1 hover:-translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                  </div>
                  
                  <div className={`absolute bottom-0 p-12 w-full ${isRtl ? 'right-0' : 'left-0'}`}>
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
                </motion.div>
              );
            }

            if (item.type === 'card-tall') {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="md:col-span-1 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-surfaceCard shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-white/10"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-30 group-hover:opacity-20"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surfaceCard/20 to-surfaceCard"></div>
                  
                  <div className={`absolute bottom-0 p-10 w-full ${isRtl ? 'right-0' : 'left-0'}`}>
                    <div className="w-16 h-16 rounded-2xl bg-surfaceHighlight/50 backdrop-blur border border-white/5 flex items-center justify-center mb-8 text-white group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      {item.icon ? iconMap[item.icon] : null}
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white">
                      {title}
                    </h3>
                    <p className="text-apple-gray text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">{description}</p>
                  </div>
                </motion.div>
              );
            }

            // Small cards
            return (
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="md:col-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0f0f0f] p-10 flex flex-col justify-between hover:bg-[#141414] hover:border-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="text-white/20 transition-all duration-500 group-hover:text-accent group-hover:scale-110 group-hover:rotate-6">
                    {item.icon ? iconMap[item.icon] : null}
                  </div>
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Detailed Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              onClick={handleCloseModal}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-[#121212] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row md:h-[750px] border border-white/10 ring-1 ring-white/5"
            >
              <div className="relative md:w-5/12 h-64 md:h-full bg-black group overflow-hidden">
                {selectedService.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110 ease-out"
                    style={{ backgroundImage: `url('${selectedService.imageUrl}')` }}
                  ></div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-surfaceHighlight">
                     <div className="text-white/5 group-hover:scale-110 transition-transform duration-700">
                       {selectedService.icon ? iconMap[selectedService.icon] : null}
                     </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]/80"></div>
                
                <div className="absolute bottom-10 left-10 right-10 flex">
                   <div className="text-[120px] font-bold text-white/5 font-arabic select-none leading-none absolute -bottom-10 -left-4">
                      {selectedService.subtitle?.replace(/\D/g, '') || "0" + selectedService.id}
                   </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col relative bg-[#121212]">
                 <button 
                  onClick={handleCloseModal}
                  className={`absolute top-8 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-20 border border-white/5 ${isRtl ? 'left-8' : 'right-8'}`}
                >
                  <X className="w-6 h-6 text-white/60" />
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
                        {activeSection === 'overview' && (
                          <motion.span layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[1px] bg-accent shadow-glow" />
                        )}
                     </button>
                     <button 
                        onClick={() => setActiveSection('details')}
                        className={`pb-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeSection === 'details' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                     >
                        Deep Dive
                        {activeSection === 'details' && (
                          <motion.span layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[1px] bg-accent shadow-glow" />
                        )}
                     </button>
                  </div>
                </div>
                
                <div className={`px-10 md:px-16 pb-10 overflow-y-auto ${isRtl ? 'text-right' : 'text-left'} flex-grow min-h-0`}>
                  <AnimatePresence mode="wait">
                   {activeSection === 'overview' ? (
                      <motion.div 
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col gap-10"
                      >
                         <p className="text-2xl text-white/80 font-light leading-relaxed">
                           {language === 'ar' ? selectedService.description_ar : selectedService.description}
                         </p>
                         
                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                               <div className="text-accent mb-3">
                                  <Award className="w-8 h-8" />
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1 uppercase tracking-wider">Excellence</h4>
                               <p className="text-white/40 text-xs">Unmatched execution standards</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                               <div className="text-accent mb-3">
                                  <CheckCircle className="w-8 h-8" />
                               </div>
                               <h4 className="text-white text-sm font-bold mb-1 uppercase tracking-wider">Certified</h4>
                               <p className="text-white/40 text-xs">International Compliance</p>
                            </div>
                         </div>
                      </motion.div>
                   ) : (
                      <motion.div 
                        key="details"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                          <p className="text-lg text-apple-gray leading-loose font-light">
                           {language === 'ar' 
                             ? (selectedService.longDescription_ar || selectedService.description_ar) 
                             : (selectedService.longDescription || selectedService.description)}
                          </p>
                      </motion.div>
                   )}
                  </AnimatePresence>
                </div>

                <div className="p-8 md:p-16 pt-8 border-t border-white/5 mt-auto bg-[#121212] relative z-10">
                   <button className="bg-white text-black h-16 w-full rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/90 transition-all shadow-glow flex items-center justify-center gap-3 group active:scale-[0.98]">
                      {t('inquire_now')}
                      {isRtl ? (
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                      ) : (
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      )}
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Expertise;