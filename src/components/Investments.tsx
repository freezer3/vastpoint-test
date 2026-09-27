import React, { useState } from 'react';

type Investment = {
  name: string | null; // null = undisclosed
  logo?: string; // path under public/
  stage: string;
  location: string;
  description: string;
  link?: { href: string; label: string };
  note?: string;
};

const investments: Investment[] = [
  {
    name: 'Replenit',
    logo: 'logos/replenit.png',
    stage: 'Pre-seed',
    location: 'Poland',
    description:
      'AI engine for retailers that reasons about each customer in real time to drive repeat purchases.',
    note: 'Co-led $2.5M round · 2026',
    link: { href: 'https://replen.it', label: 'replen.it' },
  },
  { name: null, stage: 'Pre-seed', location: 'Poland', description: 'Announcement to follow.', note: '2026' },
  { name: null, stage: 'Seed', location: 'USA', description: 'Announcement to follow.', note: '2026' },
  { name: null, stage: 'Seed', location: 'USA', description: 'Announcement to follow.', note: '2026' },
];

const Tile = ({ item }: { item: Investment }) => {
  const [open, setOpen] = useState(false);
  const label = `${item.name ?? 'Undisclosed company'}, ${item.stage}, ${item.location}`;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={open}
      aria-label={label}
      className={`flip-tile ${open ? 'is-open' : ''}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) return;
        setOpen((o) => !o);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen((o) => !o);
        }
        if (e.key === 'Escape') setOpen(false);
      }}
    >
      <div className="flip-card">
        {/* Front */}
        <div className="flip-face inv-front flex flex-row items-center gap-4 px-4 py-3 sm:flex-col sm:items-stretch sm:gap-0 sm:p-5">
          <div className="inv-mark flex-1 flex items-center justify-start sm:justify-center">
            {item.logo ? (
              <img src={`${import.meta.env.BASE_URL}${item.logo}`} alt={item.name ?? ''} className="w-full max-w-[130px] sm:max-w-[260px] h-auto" />
            ) : item.name ? (
              <span className="text-white text-2xl md:text-3xl font-light tracking-wide">{item.name}</span>
            ) : (
              <span className="inv-undisclosed text-white/50 text-xs font-extralight uppercase tracking-[0.2em] border border-dashed border-white/25 px-3 py-2">
                Undisclosed
              </span>
            )}
          </div>
          <p className="text-white/70 text-sm font-extralight whitespace-nowrap">
            {item.stage} <span className="text-white/40">·</span> {item.location}
          </p>
        </div>

        {/* Back */}
        <div className="flip-face flip-back inv-back flex flex-col p-4 sm:p-5">
          {!item.name && <p className="text-white text-base sm:text-lg font-light tracking-wide mb-1 sm:mb-3">In stealth</p>}
          <p className={`font-light leading-snug sm:leading-relaxed flex-1 ${item.name ? 'text-white/90 text-sm sm:text-base' : 'text-white/70 text-sm'}`}>{item.description}</p>
          <div className="inv-foot flex flex-row justify-between items-baseline gap-2 pt-2 sm:flex-col sm:justify-start sm:items-stretch sm:gap-1 sm:pt-3 border-t border-white/10 text-sm font-extralight">
            <span className="text-white/70">{item.note}</span>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-white hover:text-white/80 underline underline-offset-4 decoration-white/30"
              >
                {item.link.label} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// true = frameless layout (no border, no dividers, crossfade instead of flip)
const MINIMAL = true;

const Investments = () => (
  <div id="investments" className={`mb-12 py-12 ${MINIMAL ? 'inv-minimal' : ''}`}>
    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">Investments</h2>
    <div className="inv-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/25">
      {investments.map((item, i) => (
        <Tile key={i} item={item} />
      ))}
    </div>
  </div>
);

export default Investments;
