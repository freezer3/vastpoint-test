import React, { useEffect } from 'react';
import { Award, Linkedin } from 'lucide-react';
const Hero = () => {
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
      <nav className="relative z-30 flex items-center justify-between p-8 lg:p-12">
        {/* Logo */}
        <img src="/lovable-uploads/839b146c-a5fa-407f-bfb8-f41fdac68225.png" alt="Vastpoint Logo" className="h-6" />

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#team" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Team</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">About</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">Insights</a>
        </div>

        {/* CTA Button placeholder */}
        
      </nav>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end mt-24">
        <div className="pb-8 px-8 lg:pb-12 lg:px-12 w-full">
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
            <div className="text-white">We are an early-stage fund backing Poland's boldest tech founders</div>
          </h1>

          {/* Content Row */}
          <div>
            {/* Paragraph */}
            <div className="max-w-[600px] mb-8">
              <p className="text-white/70 font-light leading-relaxed text-lg">Groundbreaking tech. Unstoppable teams. Shaking up stagnant industries. At vastpoint, we look for your unfair advantage. We are sector agnostic with sharp focus on B2B software, AI, and techbio.</p>
            </div>

            {/* Team Section */}
            <div id="team" className="mb-12">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">Team</h2>
              <div className="space-y-2 px-0 w-[320px]">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white font-light">Aleksandra Pedraszewska</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/apedraszewska/" target="_blank" rel="noopener noreferrer">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4" />
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white font-light">Karolina Kukielka</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/kkukielka/" target="_blank" rel="noopener noreferrer">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4" />
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white font-light">Zuzanna Brzosko, PhD</p>
                    <p className="text-white/60 text-sm">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/in/zuzannabrzosko/" target="_blank" rel="noopener noreferrer">
                    <img src="/lovable-uploads/35473851-df84-43b6-ab1d-1bb4ad5676d5.png" alt="LinkedIn" className="w-6 h-6 ml-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Duplicate Headline Block */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-none mb-8">
                <div className="text-white">Turning a world-changing idea into a global company takes more than capital</div>
              </h1>
            </div>

            {/* Two Blocks Side by Side */}
            <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
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

            {/* Thin White Line */}
            <div className="w-full h-px bg-white/20 mb-12"></div>

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
                  <img src="/lovable-uploads/0fedce53-9aad-4fce-a8f9-6152fb68bea5.png" alt="European Funds for Smart Economy" className="h-8 object-contain flex-shrink-0" />
                  <img src="/lovable-uploads/19f5fa2f-2cfb-4416-9f3c-667c0d994776.png" alt="Republic of Poland" className="h-8 object-contain flex-shrink-0" />
                  <img src="/lovable-uploads/12d37cef-94b8-4f01-852e-4c05216ea433.png" alt="Co-funded by the European Union" className="h-6 object-contain flex-shrink-0" />
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