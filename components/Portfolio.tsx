import React, { useRef, useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

// --- Custom Video Player Component ---
const CustomVideoPlayer: React.FC<{ src: string, poster: string, title: string }> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(false);

  // Check if it's a direct file or embed
  const isEmbed = src.includes('youtube.com') || src.includes('vimeo.com') || src.includes('embed');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(formatTime(video.currentTime));
      }
    };

    const updateDuration = () => {
      setDuration(formatTime(video.duration));
    };

    const onEnd = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', onEnd);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', onEnd);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (videoRef.current) {
      const newTime = (val / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(val);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
    }
  };

  if (isEmbed) {
    return (
      <iframe 
        src={`${src}&autoplay=1`}
        className="w-full h-full object-cover" 
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="relative w-full h-full bg-black group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        playsInline
      />
      
      {/* Custom Controls Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress Bar */}
        <div className="mb-4 relative h-1 bg-white/30 rounded-full cursor-pointer group/seek">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div 
            className="absolute top-0 left-0 h-full bg-accent rounded-full pointer-events-none"
            style={{ width: `${progress}%` }}
          >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover/seek:scale-100 transition-transform shadow"></div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors text-white"
            >
              <span className="material-symbols-outlined text-2xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <span className="text-white text-xs font-mono tracking-wider">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white text-lg">volume_up</span>
            <input 
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolume}
              className="w-20 accent-white h-1 bg-white/30 rounded-full appearance-none"
            />
          </div>
        </div>
      </div>

      {/* Big Play Button (centered) - hidden when playing */}
      {!isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-colors"
        >
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300">
             <span className="material-symbols-outlined text-5xl text-white ml-1">play_arrow</span>
          </div>
        </div>
      )}
    </div>
  );
};
// ------------------------------------

const Portfolio: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  
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

  // Smooth scroll to start when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [activeFilter]);

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

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 400); // Match animation duration
  };

  const handleProjectClick = (item: Project) => {
    setSelectedProject(item);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  // Navigation Logic
  const currentIndex = selectedProject 
    ? filteredItems.findIndex(p => p.id === selectedProject.id) 
    : 0;

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedProject(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedProject(filteredItems[prevIndex]);
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
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 border border-transparent ${
                activeFilter === 'All'
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-surface-highlight text-apple-gray hover:text-white hover:bg-surface-card hover:border-white/10'
              }`}
            >
              {t('all')} <span className="opacity-60 ml-1">({PORTFOLIO_ITEMS.length})</span>
          </button>
          {filters.filter(f => f !== 'All').map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 border border-transparent ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-surface-highlight text-apple-gray hover:text-white hover:bg-surface-card hover:border-white/10'
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
        key={activeFilter} // Trigger animation on filter change
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
              className="min-w-[85vw] md:min-w-[500px] snap-center group preserve-3d animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(item)}
            >
              <div className="relative h-[650px] rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] transform group-hover:scale-[1.02] shadow-apple-card bg-surface-card border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Video Play Overlay */}
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                      <span className="material-symbols-outlined text-5xl text-white ml-2">play_arrow</span>
                      <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></div>
                    </div>
                  </div>
                )}

                <div className={`absolute top-8 ${dir === 'rtl' ? 'left-8' : 'right-8'} flex flex-col items-end gap-2`}>
                   <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase">
                    {category}
                  </span>
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
              className={`absolute inset-0 bg-black/60 backdrop-blur-3xl transition-opacity duration-400 ease-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
              onClick={handleCloseModal}
            ></div>
            <div className={`relative w-full max-w-7xl bg-[#1c1c1e] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row md:h-[85vh] border border-white/10 ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}>
              
              {/* Media Section (Video or Image) */}
              <div className="relative md:w-7/12 h-[40vh] md:h-full bg-black group">
                {selectedProject.videoUrl ? (
                   <CustomVideoPlayer 
                      src={selectedProject.videoUrl} 
                      poster={selectedProject.imageUrl} 
                      title={selectedProject.title} 
                   />
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                    style={{ backgroundImage: `url('${selectedProject.imageUrl}')` }}
                  ></div>
                )}
                
                {!selectedProject.videoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c1c1e]/20"></div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="flex-1 flex flex-col relative bg-[#1c1c1e]">
                 <button 
                  onClick={handleCloseModal}
                  className={`absolute top-8 w-10 h-10 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center transition-colors z-20 ${dir === 'rtl' ? 'left-8' : 'right-8'}`}
                >
                  <span className="material-symbols-outlined text-white/80">close</span>
                </button>

                {/* Share Button */}
                <button 
                  onClick={handleShare}
                  className={`absolute top-8 w-10 h-10 rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] flex items-center justify-center transition-colors z-20 ${dir === 'rtl' ? 'left-20' : 'right-20'}`}
                >
                  <span className="material-symbols-outlined text-white/80 text-sm">ios_share</span>
                  {showCopied && (
                    <div className="absolute top-full mt-2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded-md shadow-lg whitespace-nowrap">
                      Copied!
                    </div>
                  )}
                </button>

                {/* Navigation Buttons (Floating over Content) */}
                <div className={`absolute top-1/2 -translate-y-1/2 z-30 w-full px-4 flex justify-between pointer-events-none ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    {filteredItems.length > 1 && (
                      <>
                        <button 
                          onClick={handlePrev} 
                          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center pointer-events-auto -ml-16 md:ml-0"
                        >
                           <span className={`material-symbols-outlined ${dir === 'rtl' ? 'rotate-180' : ''}`}>chevron_left</span>
                        </button>
                        <button 
                          onClick={handleNext} 
                          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center pointer-events-auto -mr-16 md:mr-0"
                        >
                           <span className={`material-symbols-outlined ${dir === 'rtl' ? 'rotate-180' : ''}`}>chevron_right</span>
                        </button>
                      </>
                    )}
                </div>

                {/* Header Area */}
                <div className="p-10 md:p-14 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-accent text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-accent/10">
                        {language === 'ar' ? selectedProject.category_ar : selectedProject.category}
                     </span>
                     <span className="text-apple-gray text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-apple-gray"></span>
                        {language === 'ar' ? selectedProject.location_ar : selectedProject.location}
                     </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-0 leading-[1.1]">
                    {language === 'ar' ? selectedProject.title_ar : selectedProject.title}
                  </h2>
                </div>
                
                {/* Scrollable Content */}
                <div className={`overflow-y-auto no-scrollbar flex-grow p-10 md:p-14 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  
                   {/* Specs Grid */}
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                         <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Status</span>
                         <span className="text-white text-sm font-medium">Completed</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                         <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Year</span>
                         <span className="text-white text-sm font-medium">2024</span>
                      </div>
                       <div className="p-4 rounded-xl bg-white/5 border border-white/5 col-span-2 md:col-span-1">
                         <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Type</span>
                         <span className="text-white text-sm font-medium">{language === 'ar' ? selectedProject.category_ar : selectedProject.category}</span>
                      </div>
                   </div>

                   {/* Main Description */}
                   <div className="mb-10">
                      <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-80 border-b border-white/10 pb-2 inline-block">Overview</h4>
                      <p className="text-xl text-white/90 font-light leading-relaxed">
                         {language === 'ar' ? selectedProject.description_ar : selectedProject.description}
                      </p>
                   </div>

                   {/* Deep Dive */}
                   <div className="mb-8">
                       <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-80 border-b border-white/10 pb-2 inline-block">In-Depth</h4>
                       <p className="text-base text-apple-gray leading-loose">
                         {language === 'ar' 
                            ? (selectedProject.longDescription_ar || "") 
                            : (selectedProject.longDescription || "")}
                       </p>
                   </div>

                   {/* Tags */}
                   <div className="flex flex-wrap gap-2">
                      {(language === 'ar' ? (selectedProject.tags_ar || []) : (selectedProject.tags || [])).map(tag => (
                        <span key={tag} className="text-white/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                          {tag}
                        </span>
                     ))}
                   </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 md:p-14 pt-6 border-t border-white/5 bg-[#1c1c1e] z-10">
                   <button className="bg-white text-black h-14 w-full rounded-full font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all shadow-lg flex items-center justify-center gap-2 group">
                      {t('start_project')}
                      <span className={`material-symbols-outlined text-lg transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
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