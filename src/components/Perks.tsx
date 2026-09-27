import React from 'react';

// Brand marks from Simple Icons (CC0), rendered in currentColor.
const ElevenLabsMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="inline-block h-[0.85em] w-auto fill-current mr-1.5 align-[-0.05em]">
    <path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z" />
  </svg>
);

const YCombinatorMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="inline-block h-[1em] w-auto fill-current mr-1.5 align-[-0.15em]">
    <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" />
  </svg>
);

const Brand = ({ mark, name }: { mark: React.ReactNode; name: string }) => (
  <span className="text-white font-normal whitespace-nowrap">
    {mark}
    {name}
  </span>
);

const Perks = () => (
  <div>
    <h2 className="text-white text-lg font-light tracking-wide mb-6">Perks we unlock</h2>
    <ul className="space-y-4">
      <li className="text-white/70 font-light leading-relaxed">
        Access to <Brand mark={<ElevenLabsMark />} name="ElevenLabs" />{' '}
        <a
          href="https://elevenlabs.io/grants-application#Conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors duration-300"
        >
          Startup Grants
        </a>
      </li>
      <li className="text-white/70 font-light leading-relaxed">
        Direct recommendations to <Brand mark={<YCombinatorMark />} name="Y Combinator" />
      </li>
    </ul>
  </div>
);

export default Perks;
