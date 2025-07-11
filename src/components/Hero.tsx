import React from 'react';
import { Award } from 'lucide-react';
const Hero = () => {
  return <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://cdn.midjourney.com/video/cb84f296-92a0-4a37-a0e3-1c9c95299488/0.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black"></div>
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navigation Bar */}
      <nav className="relative z-30 flex items-center justify-between p-8 lg:p-12">
        {/* Logo */}
        <div className="text-white font-light tracking-wide text-xl">vastpoint®</div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
            Mission
          </a>
          <a href="#chapter" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
            Chapter
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
            About
          </a>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 rounded-full border border-white/30 text-white/80 hover:border-white/50 hover:text-white transition-all duration-300 font-light tracking-wide">
          Watch Trailer
        </button>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end mt-24">
        <div className="pb-8 px-8 lg:pb-12 lg:px-12 w-full">
          {/* Tagline */}
          <p className="text-white/60 text-sm font-light tracking-wide mb-6">
            The heat is nothing compared to what's coming.
          </p>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
            <div className="text-white">Survive the Storm.</div>
            <div className="text-white/90">Rule the Desert.</div>
          </h1>

          {/* Paragraph */}
          <div className="lg:max-w-md">
            <p className="text-white/70 font-light leading-relaxed text-lg">
              When the sand settles and the dust clears, only the strongest remain standing. 
              In this wasteland, survival isn't just about endurance—it's about domination.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;