const NEWS = [
  {
    text: '🎉 NEWS: vastpoint joins €5.75m funding round of WaterSense, James Dyson Award-winning water intelligence startup.',
    href: 'https://water-sense.com/news/watersense-raises-5-75m-pre-seed',
  },
  {
    text: '🎉 NEWS: vastpoint joins $6.5m funding round of Tasted, AI-powered restaurant discovery startup.',
    href: 'https://tech.eu/2026/11/24/polish-foodtech-tasted-raises-65m-as-it-launches-in-los-angeles/',
  },
];

// The track scrolls by half its width, so an even number of identical copies loops seamlessly.
const COPIES = 4;

const NewsTicker = () => (
  <div className="mt-6">
    <div className="max-w-5xl">
      <div className="ticker w-full">
        <div className="ticker-track">
          {Array.from({ length: COPIES }, (_, i) =>
            NEWS.map((item, j) => (
              <span key={`${i}-${j}`} className="text-white text-sm font-extralight mr-8" aria-hidden={i > 0 || undefined}>
                {item.text}{' '}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i > 0 ? -1 : undefined}
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Read more
                </a>
                <span aria-hidden="true">{' • '}</span>
              </span>
            )),
          )}
        </div>
      </div>
    </div>
  </div>
);

export default NewsTicker;
