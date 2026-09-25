import React from 'react';
import directorBanner from '../assets/images/director_message_banner.jpg';

/**
 * About page opening banner: Managing Director's message.
 * Desktop (lg+): the supplied banner artwork shown in full.
 * Mobile/tablet: the photo side of the same artwork with an "About Bluegrid" overlay,
 * followed by a text card (the banner's text is too small to read when scaled down).
 */
const DirectorBanner = () => (
  <section
    id="director-message-banner"
    aria-labelledby="director-banner-heading"
    className="mb-12 -mt-[50px] md:mt-0 -mx-6 sm:-mx-8 lg:mx-0"
  >
    <h1 id="director-banner-heading" className="sr-only">
      About Bluegrid Utilities
    </h1>

    {/* Desktop: full banner artwork */}
    <img
      src={directorBanner}
      alt="A message from our Managing Director, Selbert George: Building trust through the work we do. My motivation in leading Bluegrid Utilities is to build a business that people can rely on: through the quality of our work, the way we support our teams and the commitments we keep."
      className="hidden lg:block w-full h-auto"
      width="1983"
      height="793"
      fetchPriority="high"
    />

    {/* Mobile / tablet */}
    <div className="lg:hidden bg-[#f1f5fa] overflow-hidden shadow-sm">
      <div className="relative aspect-[3/2] sm:aspect-[16/9] overflow-hidden">
        <img
          src={directorBanner}
          alt="Selbert George, Managing Director, in the Bluegrid Utilities office"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '100% 30%' }}
          width="1983"
          height="793"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
        <p
          aria-hidden="true"
          className="absolute left-6 sm:left-8 bottom-5 sm:bottom-7 text-white text-3xl sm:text-4xl font-bold tracking-tight font-outfit drop-shadow-md"
        >
          About Bluegrid
        </p>
      </div>

      <div className="px-6 sm:px-8 pt-8 pb-9 text-left">
        <h2 className="text-[1.75rem] sm:text-4xl leading-[1.1] font-bold tracking-tight text-[#0b1f4d] font-outfit">
          Building trust through the work we do.
        </h2>
        <p className="mt-3 text-slate-700 text-lg leading-snug">
          Our people, our standards and the commitments we keep shape how we work.
        </p>
        <p className="mt-6 text-[#0b1f4d] font-bold text-lg leading-tight font-outfit">Selbert George</p>
        <p className="text-slate-500 text-base">Managing Director</p>
      </div>
    </div>
  </section>
);

export default DirectorBanner;
