import React, { useRef, useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language, dir } = useLanguage();

  // Combine Categories and Tags into one filter list
  const filters = useMemo(() => {
    const cats = new Set(PORTFOLIO_ITEMS.map((item) => language === 'ar' ? item.category_ar : item.category));
    const tags = new Set(PORTFOLIO_ITEMS.flatMap((item) => language === 'ar' ? (item.tags_ar || []) : (item.tags || [])));
    return ['All', ...Array.from(cats), ...Array.from(tags)];
  }, [language]);

  // Dynamic Counts for each filter
  const getCount = (filter: string) => {
    if (filter === 'All' || filter === t('all')) return PORTFOLIO_ITEMS.length;
    return PORTFOLIO_ITEMS.filter(item => {
      const category = language === 'ar' ? item.category_ar : item.category;
      const projectTags = language === 'ar' ? (item.tags_ar || []) : (item.tags || []);
      return category === filter || projectTags.includes(filter);
    }).length;
  };

  // Filter items based on active filter (Category OR Tag)
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All' || activeFilter === t('all')) return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => {
      const category = language === 'ar' ? item.category_ar : item.category;
      const projectTags = language === 'ar' ? (item.tags_ar || []) : (item.tags || []);
      return category === activeFilter || projectTags.includes(activeFilter);
    });
  }, [activeFilter, language]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      const multiplier = direction === 'left' ? -1 : 1;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount * multiplier,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-surface border-t border-white/5 overflow-hidden">
      <div className="px-6 mb-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="text-apple-gray text-xs font-bold tracking-[0.2em] uppercase block mb-3 pl-1">
              {t('selected_works')}
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
              {t('portfolio')}
            </h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll(dir === 'rtl' ? 'right' : 'left')}
              className="w-12 h-12 rounded-full bg-surface-highlight border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              <span className={`material-symbols-outlined ${dir === 'rtl' ? 'rotate-180' : ''}`}>arrow_back</span>
            </button>
            <button 
              onClick={() => scroll(dir === 'rtl' ? 'left' : 'right')}
              className="w-12 h-12 rounded-full bg-surface-highlight border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              <span className={`material-symbols-outlined ${dir === 'rtl' ? 'rotate-180' : ''}`}>arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Unified Apple-style Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
              onClick={() => setActiveFilter('All')}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === 'All'
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-surface-highlight text-apple-gray hover:text-white hover:bg-surface-card'
              }`}
            >
              {t('all')} <span className="opacity-60 ml-1">({PORTFOLIO_ITEMS.length})</span>
          </button>
          {filters.filter(f => f !== 'All').map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-surface-highlight text-apple-gray hover:text-white hover:bg-surface-card'
              }`}
            >
              {filter} <span className="opacity-60 ml-1">({getCount(filter)})</span>
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 px-6 pb-20 no-scrollbar snap-x snap-mandatory max-w-[1800px] mx-auto perspective-container"
      >
        {filteredItems.map((item, index) => {
          const title = language === 'ar' ? item.title_ar : item.title;
          const description = language === 'ar' ? item.description_ar : item.description;
          const location = language === 'ar' ? item.location_ar : item.location;
          const category = language === 'ar' ? item.category_ar : item.category;
          const tags = language === 'ar' ? (item.tags_ar || []) : (item.tags || []);

          return (
            <div
              key={item.id}
              className="min-w-[85vw] md:min-w-[500px] snap-center group preserve-3d animate-reveal-card cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(item)}
            >
              <div className="relative h-[650px] rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] transform group-hover:scale-[1.02] shadow-apple-card bg-surface-card border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                <div className={`absolute top-8 ${dir === 'rtl' ? 'left-8' : 'right-8'} flex flex-col items-end gap-2`}>
                   <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase">
                    {category}
                  </span>
                  {/* Display tags on card */}
                   <div className="flex gap-1">
                      {tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-black/40 backdrop-blur-md text-white/70 text-[9px] px-3 py-1 rounded-full border border-white/5">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                <div className={`absolute bottom-0 w-full p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
                  <h3 className="text-4xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-apple-gray text-xs font-medium uppercase tracking-wide">
                     <span className="material-symbols-outlined text-sm">location_on</span>
                     {location}
                  </div>
                  <p className={`text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100`}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {filteredItems.length === 0 && (
          <div className="w-full text-center py-20 text-gray-500">
            {t('no_projects')}
          </div>
        )}
      </div>

       {/* Enhanced Project Modal */}
       {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in"
              onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative w-full max-w-6xl bg-[#1c1c1e] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-modal-enter md:h-[80vh] border border-white/10">
              
              {/* Media Section (Video or Image) */}
              <div className="relative md:w-2/3 h-[40vh] md:h-full bg-black group">
                {selectedProject.videoUrl ? (
                   <iframe 
                    src={selectedProject.videoUrl} 
                    className="w-full h-full object-cover" 
                    title={selectedProject.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                    style={{ backgroundImage: `url('${selectedProject.imageUrl}')` }}
                  ></div>
                )}
                
                {!selectedProject.videoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c1c1e]/10"></div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-10 md:p-16 md:w-1/3 flex flex-col relative bg-[#1c1c1e] overflow-y-auto no-scrollbar">
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-8 w-10 h-10 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center transition-colors z-10 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
                >
                  <span className="material-symbols-outlined text-white/80">close</span>
                </button>

                <div className="mt-8 mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                     <span className="text-accent text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-accent/10">
                        {language === 'ar' ? selectedProject.category_ar : selectedProject.category}
                     </span>
                     {(language === 'ar' ? (selectedProject.tags_ar || []) : (selectedProject.tags || [])).map(tag => (
                        <span key={tag} className="text-apple-gray text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">
                          {tag}
                        </span>
                     ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight">
                    {language === 'ar' ? selectedProject.title_ar : selectedProject.title}
                  </h2>
                   <div className="flex items-center gap-2 text-apple-gray text-sm font-medium">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    {language === 'ar' ? selectedProject.location_ar : selectedProject.location}
                  </div>
                </div>
                
                <div className={`space-y-6 text-[#d1d1d6] text-lg leading-relaxed font-light flex-grow ${dir === 'rtl' ? 'border-r border-white/10 pr-6' : 'border-l border-white/10 pl-6'}`}>
                  <p>
                    {language === 'ar' ? selectedProject.description_ar : selectedProject.description}
                  </p>
                  <p className="text-base text-apple-gray">
                    {language === 'ar' 
                      ? (selectedProject.longDescription_ar || "") 
                      : (selectedProject.longDescription || "")}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5">
                   <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all w-full shadow-lg">
                      {t('start_project')}
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}

    </section>
  );
};

export default Portfolio;