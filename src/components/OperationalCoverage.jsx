import React, { useState } from 'react';
import ukMapImg from '../assets/images/uk_service_map.png';

const serviceAreas = [
  { id: 'london',      label: 'London',          nation: 'England' },
  { id: 'midlands',    label: 'Midlands',        nation: 'England' },
  { id: 'southeast',   label: 'South East',      nation: 'England' },
  { id: 'southwest',   label: 'South West',      nation: 'England' },
  { id: 'eastengland', label: 'East of England', nation: 'England' },
  { id: 'northwest',   label: 'North West',      nation: 'England' },
  { id: 'northeast',   label: 'North East',      nation: 'England' },
  { id: 'yorkshire',   label: 'Yorkshire',       nation: 'England' },
  { id: 'scotland',    label: 'Scotland',        nation: 'Scotland' },
  { id: 'wales',       label: 'Wales',           nation: 'Wales'   },
];

const OperationalCoverage = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  const active = serviceAreas.find(r => r.id === activeRegion);

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] font-sans relative overflow-hidden" id="coverage">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#005f9e]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0066ff]/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl text-left mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#005f9e]/10 text-[#005f9e] text-xs font-black tracking-widest mb-4 border border-[#005f9e]/20">
            Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f3a5e] tracking-tight leading-tight mb-5">
            Our Nationwide Coverage
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Delivering safe, reliable utility infrastructure services across England, Scotland and Wales — with regional teams strategically positioned for rapid response.
          </p>
        </div>

        {/* Main Layout: Map + Info Panel */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

          {/* Left: UK Map Image */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden flex-1 flex flex-col">
              {/* Map Header */}
              <div className="bg-[#0f3a5e] px-6 py-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#60a5fa] text-lg">map</span>
                <div>
                  <p className="text-white font-black text-xs tracking-widest">Service Coverage Map</p>
                  <p className="text-slate-400 text-[10px] font-medium mt-0.5">England · Scotland · Wales</p>
                </div>
                {active && (
                  <div className="ml-auto flex items-center gap-2 bg-[#005f9e]/40 border border-[#0066ff]/40 px-3 py-1.5">
                    <span className="material-symbols-outlined text-[#60a5fa] text-sm">location_on</span>
                    <div>
                      <p className="text-white text-xs font-black tracking-wider">{active.label}</p>
                      <p className="text-slate-400 text-[10px]">{active.nation}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Map Image */}
              <div className="flex-1 relative overflow-hidden bg-[#e8f4f8] min-h-[380px] sm:min-h-[460px]">
                <img
                  src={ukMapImg}
                  alt="Bluegrid Utilities UK service coverage map showing England, Scotland and Wales regions"
                  className="w-full h-full object-contain p-4 md:p-8"
                  style={{ transition: 'transform 0.4s ease' }}
                />
                {/* Overlay hint */}
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  10 Regions Active
                </div>
              </div>
            </div>
          </div>

          {/* Right: Region List + Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '10',   label: 'Service Regions',  icon: 'grid_view' },
                { value: '3',    label: 'Nations Covered',  icon: 'public' },
                { value: '120+', label: 'Active Field Teams', icon: 'groups' },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-200 shadow-md p-4 md:p-5 text-center">
                  <span className="material-symbols-outlined text-[#005f9e] text-xl mb-1 block">{stat.icon}</span>
                  <p className="text-2xl md:text-3xl font-black text-[#0f3a5e] leading-none mb-1">{stat.value}</p>
                  <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* England Regions */}
            <div className="bg-white border border-slate-200 shadow-md overflow-hidden flex-1">
              <div className="bg-[#0f3a5e] px-5 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#60a5fa] text-sm">flag</span>
                <span className="text-white font-black text-xs tracking-widest">England — Regional Areas</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                {serviceAreas.filter(a => a.nation === 'England').map((area) => {
                  const isActive = activeRegion === area.id;
                  return (
                    <div
                      key={area.id}
                      className={`px-4 py-3.5 flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                        isActive ? 'bg-[#005f9e]/10' : 'hover:bg-slate-50'
                      }`}
                      onMouseEnter={() => setActiveRegion(area.id)}
                      onMouseLeave={() => setActiveRegion(null)}
                    >
                      <span className={`w-2 h-2 rounded-none shrink-0 transition-colors duration-200 ${isActive ? 'bg-[#0066ff]' : 'bg-[#005f9e]'}`} />
                      <span className={`text-xs font-semibold transition-colors duration-200 ${isActive ? 'text-[#005f9e] font-bold' : 'text-slate-700'}`}>
                        {area.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scotland & Wales */}
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.filter(a => a.nation !== 'England').map((area) => {
                const isActive = activeRegion === area.id;
                return (
                  <div
                    key={area.id}
                    className={`bg-white border shadow-md overflow-hidden cursor-pointer transition-all duration-200 ${
                      isActive ? 'border-[#005f9e]' : 'border-slate-200'
                    }`}
                    onMouseEnter={() => setActiveRegion(area.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    <div className={`px-4 py-4 flex items-center gap-3 transition-colors duration-200 ${isActive ? 'bg-[#005f9e]/10' : ''}`}>
                      <span className="material-symbols-outlined text-[#005f9e] text-sm">location_on</span>
                      <div>
                        <p className={`text-sm font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#005f9e]' : 'text-[#0f3a5e]'}`}>
                          {area.label}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium">{area.nation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#005f9e] hover:bg-[#0f3a5e] text-white font-bold text-xs tracking-widest px-7 py-4 rounded-none border border-[#005f9e] transition-all duration-300 shadow-lg self-start group"
            >
              <span>Discuss Your Project</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalCoverage;