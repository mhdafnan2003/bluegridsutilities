import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AboutBanner from '../components/AboutBanner';
import skylineImg from '../assets/images/Urban Skyline View.jpeg';
import { newsCategories, newsArticles } from '../data/newsData';

const NewsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(() => searchParams.get('category') || 'all');

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
  };

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(art => art.category === activeCategory);

  return (
    <div className="font-sans bg-slate-50/40 min-h-screen pb-24">
      
      {/* 1. News Main Hero Banner - Full Width Edge-to-Edge like Hero */}
      <AboutBanner 
        badgeText="News & Operational Updates"
        title="News and operational updates"
        description="Updates, announcements and operational developments from Bluegrid Utilities."
        bgImage={skylineImg}
      />

      {/* 2. Selection Box / Filter Bar */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div className="bg-white border border-slate-200/90 rounded-none p-4 md:p-6 shadow-sm">
          <div className="flex flex-nowrap items-center gap-1.5 lg:gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {newsCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`text-nav px-3.5 py-2.5 lg:px-4 lg:py-3 whitespace-nowrap shrink-0 rounded-none font-bold font-outfit tracking-wide transition-all duration-200 border ${
 isSelected 
 ? 'bg-[#005f9e] text-white border-[#005f9e] shadow-sm' 
 : 'bg-white text-[#0f3a5e] border-slate-200/80 hover:border-[#005f9e] hover:text-[#005f9e] hover:bg-slate-50'
 }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. News Articles Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link 
                  key={article.id}
                  to={`/news/${article.id}`}
                  className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Article Image Header */}
                    <div className="relative h-[220px] overflow-hidden bg-slate-900">
                      <img 
                        src={article.img} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#005f9e] text-white text-[10px] font-bold tracking-wider font-outfit rounded-none shadow">
                          {article.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 font-outfit">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#005f9e]">calendar_today</span>
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm text-[#005f9e]">schedule</span>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-h3 md:text-h3-lg font-bold text-brand-dark font-outfit group-hover:text-[#005f9e] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-body md:text-body-lg text-[#1f2937] font-sans leading-relaxed">
                        {article.snippet}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-[#005f9e] tracking-wider font-outfit group-hover:translate-x-1 transition-transform">
                      <span>Read Full Update</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full bg-white border border-slate-200 p-12 text-center max-w-2xl mx-auto space-y-4 shadow-sm border-l-4 border-l-[#005f9e]">
                <span className="material-symbols-outlined text-4xl text-[#005f9e]">campaign</span>
                <h3 className="text-h3 md:text-h3-lg font-bold font-outfit text-[#0f3a5e]">No Operational Updates Published Yet</h3>
                <p className="text-body md:text-body-lg text-[#1f2937] font-medium leading-relaxed">
                  Operational announcements, recruitment campaigns, and verified milestones from Bluegrid Utilities will appear here as approved events occur.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:enquiries@bluegridutilities.com"
                    className="text-nav inline-flex items-center gap-2 px-6 py-3 bg-[#0f3a5e] hover:bg-[#005f9e] text-white font-bold font-outfit uppercase tracking-wide transition-colors"
                  >
                    <span>General Enquiries</span>
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

    </div>
  );
};

export default NewsPage;
