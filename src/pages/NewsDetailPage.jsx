import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsArticles } from '../data/newsData';

const NewsDetailPage = () => {
  const { articleId } = useParams();
  const numericId = parseInt(articleId, 10);
  
  // Find current article or fallback to first
  const article = newsArticles.find(art => art.id === numericId) || newsArticles[0];
  
  // Filter 3 other related news articles
  const otherNews = newsArticles.filter(art => art.id !== article.id).slice(0, 3);

  return (
    <div className="font-sans bg-white min-h-screen pb-24 text-left">
      
      {/* Container for Article Header, Image & Content - Expanded max-w-[1400px] for reduced side margins */}
      <article className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10">
        
        {/* Back Link */}
        <Link 
          to="/news"
          className="inline-flex items-center gap-2 text-xs font-bold font-outfit text-slate-500 hover:text-[#005f9e] mb-6 transition-colors group"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span>Back to Newsroom</span>
        </Link>

        {/* 1. Article Title Header on White Background */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.2] font-outfit mb-6 max-w-5xl">
          {article.title}
        </h1>

        {/* Meta Info & Category Badge */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8 text-xs font-semibold font-outfit text-slate-500">
          <span className="px-3.5 py-1.5 bg-[#d9ea9a] text-slate-900 font-bold uppercase tracking-wider text-xs rounded-none">
            {article.categoryLabel}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#005f9e]">calendar_today</span>
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#005f9e]">schedule</span>
            {article.readTime}
          </span>
          {article.author && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#005f9e]">person</span>
                {article.author}
              </span>
            </>
          )}
        </div>

        {/* 2. Main Featured Article Image - Expanded Width & Height */}
        <div className="w-full h-[380px] sm:h-[500px] md:h-[620px] lg:h-[720px] overflow-hidden mb-12 bg-slate-100">
          <img 
            src={article.img} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Brief Description & Content Paragraphs */}
        <div className="max-w-5xl space-y-6 text-slate-700 text-base md:text-xl leading-relaxed font-sans font-normal mb-14">
          {/* Brief Summary Lead */}
          <p className="text-slate-900 font-medium text-xl md:text-2xl leading-relaxed">
            {article.description || article.snippet}
          </p>

          {/* Body Content */}
          {article.content && article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Key Operational Takeaways */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="max-w-5xl py-8 border-y border-slate-200 mb-14 space-y-5">
            <h3 className="text-xl font-bold font-outfit text-slate-900 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005f9e] text-2xl">verified</span>
              Key Operational Highlights
            </h3>
            <ul className="space-y-3 text-slate-700 text-base md:text-lg font-medium">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#005f9e] mt-2.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Large Image Gallery Grid */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="my-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-outfit mb-6">
              Operational Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.gallery.map((item, idx) => (
                <div key={idx} className="w-full h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden bg-slate-100">
                  <img 
                    src={item.img} 
                    alt={`News Image ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </article>

      {/* 5. Show More News Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16 mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <span className="text-[11px] font-black text-[#005f9e] tracking-widest uppercase font-outfit">
              Keep Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-outfit mt-1">
              More News & Operational Updates
            </h2>
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#005f9e] hover:text-[#004c80] tracking-wider font-outfit shrink-0"
          >
            <span>View All News</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Related News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {otherNews.map((rel) => (
            <Link
              key={rel.id}
              to={`/news/${rel.id}`}
              className="bg-white border border-slate-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img 
                    src={rel.img} 
                    alt={rel.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#005f9e] text-white text-[10px] font-bold tracking-wider font-outfit shadow">
                      {rel.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 font-outfit">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#005f9e]">calendar_today</span>
                      {rel.date}
                    </span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-outfit group-hover:text-[#005f9e] transition-colors leading-snug">
                    {rel.title}
                  </h3>

                  <p className="text-slate-600 text-xs font-sans leading-relaxed line-clamp-2">
                    {rel.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-1">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#005f9e] tracking-wider font-outfit group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default NewsDetailPage;
