import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AboutBanner from '../components/AboutBanner';

import trainingImg from '../assets/images/Training coordination and deployment planning.jpg';
import complianceImg from '../assets/images/Workforce onboarding and compliance verification.jpg';
import utilityInfraImg from '../assets/images/Utility infrastructure support.jpg';
import projectCoordImg from '../assets/images/Project coordination and reporting.jpg';
import skylineImg from '../assets/images/Urban Skyline View.jpeg';
import ukWorkersSiteImg from '../assets/images/uk_utility_workers_site.png';
import utilityGridImg from '../assets/images/utility_grid_work.png';
import environmentalPolicyBg from '../assets/images/environmental_policy_bg.png';
import safetyBg from '../assets/images/safety_bg.png';

const newsCategories = [
  { id: "all", label: "All News" },
  { id: "company-updates", label: "Company Updates" },
  { id: "training", label: "Training" },
  { id: "mobilisation", label: "Mobilisation" },
  { id: "recruitment", label: "Recruitment" },
  { id: "accreditations", label: "Accreditations" },
  { id: "community", label: "Community" },
  { id: "projects", label: "Projects" },
  { id: "office-expansion", label: "Office Expansion" }
];

const newsArticles = [
  {
    id: 1,
    category: "company-updates",
    categoryLabel: "Company Updates",
    title: "Bluegrid Utilities Expands Operational Delivery Infrastructure Across UK",
    date: "July 24, 2026",
    readTime: "4 min read",
    img: utilityGridImg,
    snippet: "Bluegrid Utilities announces a strategic expansion of its utility support logistics, enabling faster operative dispatch and enhanced project coordination across England and Wales."
  },
  {
    id: 2,
    category: "training",
    categoryLabel: "Training",
    title: "Launch of Enhanced EUSR & NRSWA Workforce Training Framework",
    date: "July 18, 2026",
    readTime: "5 min read",
    img: trainingImg,
    snippet: "Our workforce development team has launched a comprehensive continuous professional development initiative providing fully funded EUSR cards, cable avoidance refreshers, and NRSWA supervisor tickets."
  },
  {
    id: 3,
    category: "mobilisation",
    categoryLabel: "Mobilisation",
    title: "Rapid Field Mobilisation Completed for Major Clean Water Contract",
    date: "July 12, 2026",
    readTime: "3 min read",
    img: ukWorkersSiteImg,
    snippet: "Bluegrid successfully deployed 40+ accredited meter operatives within 72 hours for a regional water authority, maintaining 100% compliance and zero downtime during rollout."
  },
  {
    id: 4,
    category: "recruitment",
    categoryLabel: "Recruitment",
    title: "Workforce Recruitment Drive Launched for Metering & Groundwork Operatives",
    date: "July 05, 2026",
    readTime: "4 min read",
    img: complianceImg,
    snippet: "Bluegrid Utilities opens applications for skilled meter installers, pipe layers, groundworkers, and NRSWA supervisors to support our growing UK operational portfolio."
  },
  {
    id: 5,
    category: "accreditations",
    categoryLabel: "Accreditations",
    title: "ISO 45001 & ISO 9001 Compliance Milestones Re-certified",
    date: "June 28, 2026",
    readTime: "3 min read",
    img: safetyBg,
    snippet: "Our operational systems successfully passed independent quality and health & safety audits, reaffirming our commitment to compliance-led utility delivery."
  },
  {
    id: 6,
    category: "community",
    categoryLabel: "Community",
    title: "Investing in Regional Skills & Local Supply Chain Partnerships",
    date: "June 20, 2026",
    readTime: "4 min read",
    img: environmentalPolicyBg,
    snippet: "As part of our commitment to sustainable operations, Bluegrid partners with regional supply chains to recruit locally and reduce logistical carbon footprints."
  },
  {
    id: 7,
    category: "projects",
    categoryLabel: "Projects",
    title: "Successful Delivery of Smart Water Metering Rollout Framework",
    date: "June 14, 2026",
    readTime: "5 min read",
    img: projectCoordImg,
    snippet: "Over 1,000+ planned smart meter installations completed safely with full telemetry verification and positive resident feedback."
  },
  {
    id: 8,
    category: "office-expansion",
    categoryLabel: "Office Expansion",
    title: "Peterborough Operations Hub Capacity Doubled to Support Growth",
    date: "June 02, 2026",
    readTime: "3 min read",
    img: utilityInfraImg,
    snippet: "Our Stuart House headquarters expansion provides enhanced dispatch capabilities, dedicated training facilities, and expanded logistics support."
  },
  {
    id: 9,
    category: "company-updates",
    categoryLabel: "Company Updates",
    title: "Annual Operational Performance Review Highlights Zero Harm Achievements",
    date: "May 25, 2026",
    readTime: "4 min read",
    img: utilityInfraImg,
    snippet: "A summary of our annual operational review demonstrating industry-leading audit scores, workforce retention metrics, and strong utility client partnerships."
  }
];

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleCategorySelect = (id) => {
    if (id === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: id });
    }
  };

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(art => art.category === activeCategory);

  return (
    <div className="font-sans bg-slate-50/40 min-h-screen pb-24">
      
      {/* 1. News Main Hero Banner */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-6 md:pt-10">
        <AboutBanner 
          badgeText="News & Operational Insights"
          title="Bluegrid Newsroom"
          description="Company announcements, project mobilisations, workforce training updates, and regional growth developments across the UK utility sector."
          bgImage={skylineImg}
        />
      </section>

      {/* 2. Selection Box / Filter Bar (Exact Match to Image Design) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div className="bg-white border border-slate-200/90 rounded-none p-4 md:p-6 shadow-sm">
          <div className="flex flex-nowrap items-center gap-1.5 lg:gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {newsCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 py-2.5 lg:px-4 lg:py-3 whitespace-nowrap shrink-0 rounded-none text-xs font-bold font-outfit tracking-wider transition-all duration-200 border ${
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
                <div 
                  key={article.id}
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

                      <h3 className="text-lg md:text-xl font-bold text-brand-dark font-outfit group-hover:text-[#005f9e] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 text-sm font-sans leading-relaxed">
                        {article.snippet}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <button className="inline-flex items-center gap-2 text-xs font-bold text-[#005f9e] tracking-wider font-outfit group-hover:translate-x-1 transition-transform">
                      <span>Read Full Update</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-white border border-slate-200 rounded-none p-12 text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-slate-300">article</span>
                <p className="text-lg font-bold font-outfit text-brand-dark">No updates in this category yet</p>
                <p className="text-sm text-slate-500 font-sans">Check back soon for new announcements.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

    </div>
  );
};

export default NewsPage;
