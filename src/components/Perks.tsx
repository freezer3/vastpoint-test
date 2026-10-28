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

const GoogleCloudMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="inline-block h-[1em] w-auto fill-current mr-1.5 align-[-0.15em]">
    <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
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
        {' '}and <Brand mark={<GoogleCloudMark />} name="Google Cloud" /> credits
      </li>
      <li className="text-white/70 font-light leading-relaxed">
        Direct recommendations to <Brand mark={<YCombinatorMark />} name="Y Combinator" />
      </li>
    </ul>
  </div>
);

export default Perks;
