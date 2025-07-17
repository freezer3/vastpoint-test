
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
          <a href="#team" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Team</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">About</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Insights</a>
        </div>

        {/* CTA Button */}
        
      </nav>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end mt-24">
        <div className="pb-8 px-8 lg:pb-12 lg:px-12 w-full">
          {/* Tagline */}
          <p className="text-white/60 text-sm font-light tracking-wide mb-6">lorem ipsum</p>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
            <div className="text-white">We are an early stage fund backing Poland's boldest tech founders</div>
            
          </h1>

          {/* Content Row */}
          <div>
            {/* Paragraph */}
            <div className="lg:max-w-md mb-8">
              <p className="text-white/70 font-light leading-relaxed text-lg">From groundbreaking tech, shaking up stagnant industries, or building an unstoppable team—we back your unfair advantage. your unfair advantage.</p>
            </div>

            {/* Team Section */}
            <div id="team" className="mb-12">
              <h2 className="text-white text-lg font-light tracking-wide mb-6">Team</h2>
              <div className="space-y-2 px-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-light">Aleksandra Pedraszewska</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-light">Karolina Kukielka</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-light">Zuzanna Brzosko, PhD</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Duplicate Headline Block */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl leading-none mb-8 lg:text-7xl font-light">
                <div className="text-white">Turning a world-changing idea into a global company takes more than capital</div>
              </h1>
            </div>

            {/* Two Blocks Side by Side */}
            <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Gateway to global network Block */}
              <div>
                <h2 className="text-white text-lg font-light tracking-wide mb-6">Gateway to global network</h2>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">Our investment unlocks international reach. We connect you to markets, partners, and investors who move the needle - helping you launch, scale and raise worldwide.</p>
                </div>
              </div>

              {/* Founders for founders Block */}
              <div>
                <h2 className="text-white text-lg font-light tracking-wide mb-6">Founders for founders</h2>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">We've built and scaled companies ourselves. We know the highs, the chaos, and the grit it really takes. We are not afraid to take risks and stand by you when you need it most.</p>
                </div>
              </div>
            </div>

            {/* Thin White Line */}
            <div className="w-full h-px bg-white/20 mb-12"></div>

            {/* Location and Contact Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Location Block */}
              <div className="rounded-none">
                <h2 className="text-white font-light tracking-wide mb-2 text-sm">Locations</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-light text-sm">New York, USA</p>
                      <p className="text-white font-light text-sm">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Block */}
              <div>
                <h2 className="text-white font-light tracking-wide mb-2 text-sm">Contact us</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-light text-sm">hello@vastpoint.vc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
