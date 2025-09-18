import React, { useEffect, useState } from 'react';
import { Award, Linkedin, Menu, X } from 'lucide-react';
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      document.documentElement.style.setProperty('--posX', x.toString());
      document.documentElement.style.setProperty('--posY', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navigation Bar */}
      <nav className="relative z-30 px-6 py-8 md:px-8 lg:pl-[125px] lg:pr-12 lg:py-12">
        <div className="flex items-center justify-between max-w-5xl">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <img src="/lovable-uploads/839b146c-a5fa-407f-bfb8-f41fdac68225.png" alt="Vastpoint Logo" className="h-6" />
          </a>

          {/* Right Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#team" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Team</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">About</a>
            <a href="https://vastpoint.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Insights</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-black/40 backdrop-blur-md md:hidden rounded-lg shadow-xl border border-white/10">
            <div className="flex flex-col space-y-4 p-6 text-right min-w-[200px]">
              <a 
                href="#team" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#about" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="https://vastpoint.substack.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end mt-32">
        <div className="px-6 pb-8 md:px-8 lg:pb-12 lg:pl-[125px] lg:pr-12 w-full" style={{ paddingBottom: 'calc(2rem + 30px)' }}>
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8 max-w-5xl">
            <div className="text-white">We are an early-stage fund backing Poland's boldest tech founders</div>
          </h1>

          {/* Content Row */}
          <div className="max-w-5xl">
            {/* Subheader */}
            <div className="max-w-[560px] mb-8 pt-8 md:pt-0">
              <h2 className="text-white/70 font-light leading-relaxed text-lg">Groundbreaking tech. Unstoppable teams. Shaking up stagnant industries. At vastpoint, we look for your unfair advantage. We are sector agnostic with a sharp focus on B2B software, AI, and techbio.</h2>
            </div>

            {/* Team Section */}
            <div id="team" className="mb-12 py-12">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">Team</h2>
              <div className="space-y-2 px-0 w-[320px]">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white text-lg font-light tracking-wide">Aleksandra Pedraszewska</p>
                    <p className="text-white/70 font-light leading-relaxed text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/apedraszewska/" target="_blank" rel="noopener noreferrer" className="group">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125" />
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white text-lg font-light tracking-wide">Karolina Kukielka</p>
                    <p className="text-white/70 font-light leading-relaxed text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/kkukielka/" target="_blank" rel="noopener noreferrer" className="group">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125" />
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white text-lg font-light tracking-wide">Zuzanna Brzosko, PhD</p>
                    <p className="text-white/70 font-light leading-relaxed text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/zuzannabrzosko/" target="_blank" rel="noopener noreferrer" className="group">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125" />
                  </a>
                </div>
              </div>
            </div>

            {/* Duplicate Headline Block */}
            <div id="about" className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-none mb-8 max-w-5xl">
                <div className="text-white">Turning a world-changing idea into a global company takes more than capital</div>
              </h1>
            </div>

            {/* Two Blocks Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 max-w-5xl">
              {/* Gateway to global network Block */}
              <div>
                <h2 className="text-white text-lg font-light tracking-wide mb-6">Gateway to global network</h2>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">Our investment unlocks international reach. We connect you to markets, partners, and investors that move the needle - helping you launch, scale and raise worldwide.</p>
                </div>
              </div>

              {/* Playbook for every stage Block */}
              <div>
                <h2 className="text-white text-lg font-light tracking-wide mb-6">Playbook for every stage</h2>
                <div>
                  <p className="text-white/70 font-light leading-relaxed">We've built and scaled companies ourselves. We know the highs, the chaos, and the grit it really takes. We are not afraid to take risks and stand by you when we need us most.</p>
                </div>
              </div>
            </div>

            {/* Animated Line */}
            <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10 mb-12 animated-line"></div>

            {/* Three Column Footer */}
            <div className="flex flex-wrap justify-between items-start w-full gap-6 lg:gap-12">
              {/* Location Block */}
              <div className="flex-shrink-0 min-w-0">
                <h2 className="text-white tracking-wide mb-2 text-sm font-medium">Locations</h2>
                <div className="space-y-2">
                  <p className="text-white text-sm font-extralight">New York, USA</p>
                  <p className="text-white text-sm font-extralight">Warsaw, Poland</p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="flex-shrink-0 min-w-0 sm:order-1">
                <h2 className="text-white tracking-wide mb-2 text-sm font-medium">Contact us</h2>
                <p className="text-white text-sm font-extralight">hello@vastpoint.vc</p>
              </div>

              {/* Partner Logos Block - wraps last on small screens */}
              <div className="flex-shrink-0 min-w-0 sm:order-2 w-full sm:w-auto">
                <div className="flex items-center gap-4 flex-nowrap justify-start sm:justify-end">
                  <img src="/lovable-uploads/d2915672-46ef-438d-80a0-1f9cbbc9b101.png" alt="European Union" className="h-10 object-contain flex-shrink-0" />
                  <img src="/lovable-uploads/7fadd43e-f3ec-43e2-84e8-4c80075ca338.png" alt="Republic of Poland" className="h-10 object-contain flex-shrink-0" />
                  <img src="/lovable-uploads/055b116b-4dc4-45c5-a099-00c806c43b49.png" alt="Partnership Logo" className="h-8 object-contain flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Partner Logos Section */}
            <div className="mt-8">
            
          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default Hero;