
import React from 'react';
import { Award, Linkedin } from 'lucide-react';
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
        <div className="text-white font-light tracking-wide text-xl">vastpoint</div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Team</a>
          <a href="#chapter" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">About</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Insights</a>
        </div>

        {/* CTA Button */}
        
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
            <div className="text-white">We are an early stage fund backing Poland's boldest tech founders</div>
            
          </h1>

          {/* Content Row */}
          <div>
            {/* Paragraph */}
            <div className="lg:max-w-md mb-8">
              <p className="text-white/70 font-light leading-relaxed text-lg">From groundbreaking tech, shaking up stagnant industries, or building an unstoppable team—we back your unfair advantage. your unfair advantage.</p>
              <p className="lg:max-w-md text-white/70 font-light leading-relaxed mt-4">Turning a world-changing idea into a global company takes more than capital.</p>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-white text-lg font-light tracking-wide mb-6">Team</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-light">Aleksandra Pedraszewska</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-light">Karolina Kukielka</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-light">Zuzanna Brzosko, PhD</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
