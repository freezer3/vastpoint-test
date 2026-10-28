import React from 'react';

type Investor = {
  name: string;
  logo?: string; // path under public/, white monochrome SVG/PNG on transparent
  height?: number; // rendered logo height in px, to balance wide vs stacked marks
  href: string;
};

const investors: Investor[] = [
  { name: 'Y Combinator', logo: 'logos/y-combinator.svg', height: 28, href: 'https://www.ycombinator.com' },
  { name: 'Accel', logo: 'logos/accel.svg', height: 26, href: 'https://www.accel.com' },
  { name: 'Lightspeed', logo: 'logos/lightspeed.svg', height: 24, href: 'https://lsvp.com' },
  { name: 'Creandum', logo: 'logos/creandum.svg', height: 18, href: 'https://creandum.com' },
  { name: 'Seedcamp', logo: 'logos/seedcamp.svg', height: 21, href: 'https://seedcamp.com' },
  { name: 'Frst', logo: 'logos/frst-wordmark.svg', height: 26, href: 'https://www.frst.vc' },
];

const CoInvestors = () => (
  <div id="co-investors" className="py-12">
    <h2 className="text-white text-lg font-light tracking-wide mb-6">We have raised from and co-invested with</h2>
    <div className="co-grid grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center">
      {investors.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="co-mark flex items-center justify-start"
        >
          {item.logo ? (
            <img src={`${import.meta.env.BASE_URL}${item.logo}`} alt={item.name} style={{ height: item.height }} />
          ) : (
            <span className="text-white text-lg md:text-xl font-light tracking-wide whitespace-nowrap">{item.name}</span>
          )}
        </a>
      ))}
    </div>
    <p className="text-white/90 text-sm sm:text-base font-light text-center mt-3">amongst others</p>
  </div>
);

export default CoInvestors;
