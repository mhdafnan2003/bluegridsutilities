import React from 'react';

const supportedSectors = [
  { name: "Water Utilities", icon: "water_drop", desc: "Network support & meter installations" },
  { name: "Smart Metering", icon: "speed", desc: "Clean water meter deployments & AMR/AMI" },
  { name: "Energy & Utilities", icon: "bolt", desc: "Associated utility and ground support" },
  { name: "Civil Infrastructure", icon: "foundation", desc: "Excavation, chamber works & reinstatement" },
  { name: "Field Service Operations", icon: "engineering", desc: "Supervised mobile teams & field delivery" },
  { name: "Contractor Support", icon: "badge", desc: "Onboarding, compliance & workforce coordination" }
];

const PartnerLogos = () => {
  return (
    <section className="w-full bg-[#f3f7fa] px-6 sm:px-8 lg:px-12 py-14 border-y border-slate-200 font-sans" id="sectors-we-support">
      <div className="max-w-[90rem] mx-auto text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-black tracking-widest text-[#005f9e] uppercase font-outfit">
              Sector Delivery
            </span>
            <h2 className="text-h2 md:text-h2-lg font-bold text-[#0f3a5e] tracking-tight font-outfit mt-1">
              Sectors We Support
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium">
            Providing structured operational delivery and compliant field support across essential UK infrastructure networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {supportedSectors.map((sector, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-[#005f9e] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 bg-[#005f9e]/10 text-[#005f9e] flex items-center justify-center mb-3 group-hover:bg-[#005f9e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{sector.icon}</span>
                </div>
                <h3 className="font-bold text-[#0f3a5e] text-sm font-outfit mb-1 leading-snug">
                  {sector.name}
                </h3>
                <p className="text-body md:text-body-lg text-slate-500 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
