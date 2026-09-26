import React from 'react';
import { Link } from 'react-router-dom';
import MotionSection from './MotionSection';
import { newsArticles } from '../data/newsData';

const latestArticles = newsArticles.slice(0, 3);

const LatestNews = () => {
  return (
    <MotionSection 
      as="section" 
      className="py-16 md:py-24 bg-slate-50/60 font-sans border-t border-slate-200/80" 
      id="latest-news"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 rounded-none bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-3 font-outfit border border-[#005f9e]/20">
              News & Operational Insights
            </span>
            <h2 className="text-h2 md:text-h2-lg font-bold text-[#0f3a5e] tracking-tight leading-tight font-outfit">
              Latest News & Updates
            </h2>
            <p className="text-body md:text-body-lg mt-3 text-[#1f2937] font-medium leading-relaxed">
              Discover our recent announcements, project mobilisations, workforce training initiatives, and sector achievements across the UK.
            </p>
          </div>

          <div className="hidden md:block shrink-0">
            <Link
              to="/news"
              className="text-nav inline-flex items-center gap-2.5 bg-[#005f9e] hover:bg-[#005f9e] text-white font-bold tracking-wide px-7 py-4 rounded-none transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-outfit group"
            >
              <span>View All News</span>
              <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {latestArticles.map((article) => (
            <Link 
              key={article.id}
              to={`/news/${article.id}`}
              className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image Header - Larger Image Area */}
                <div className="relative h-64 sm:h-72 lg:h-76 overflow-hidden bg-slate-900 shrink-0">
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

                {/* Article Body - Compact Text Area */}
                <div className="p-5 sm:p-6 space-y-3">
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

                  <h3 className="text-h3 md:text-h3-lg font-bold text-[#0f3a5e] font-outfit group-hover:text-[#005f9e] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-body md:text-body-lg text-[#1f2937] font-sans leading-relaxed line-clamp-3">
                    {article.snippet}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#005f9e] tracking-wider font-outfit group-hover:translate-x-1 transition-transform">
                  <span>Read Full Update</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/news"
            className="text-nav inline-flex items-center gap-2.5 bg-[#005f9e] hover:bg-[#005f9e] text-white font-bold tracking-wide px-8 py-4 rounded-none transition-all duration-300 shadow-md font-outfit w-full justify-center group"
          >
            <span>View All News</span>
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default LatestNews;
