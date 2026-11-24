const NEWS = {
  text: '🎉 NEWS: vastpoint joins $6.5m funding round in Tasted, AI-powered restaurant discovery startup.',
  href: 'https://tech.eu/2026/11/24/polish-foodtech-tasted-raises-65m-as-it-launches-in-los-angeles/',
};

// The track scrolls by half its width, so an even number of identical copies loops seamlessly.
const COPIES = 4;

const NewsTicker = () => (
  <div className="mt-6">
    <div className="max-w-5xl">
      <div className="ticker w-full">
        <div className="ticker-track">
          {Array.from({ length: COPIES }, (_, i) => (
            <span key={i} className="text-white text-sm font-extralight mr-8" aria-hidden={i > 0 || undefined}>
              {NEWS.text}{' '}
              <a
                href={NEWS.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={i > 0 ? -1 : undefined}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Read more
              </a>
              <span aria-hidden="true">{' • '}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default NewsTicker;
