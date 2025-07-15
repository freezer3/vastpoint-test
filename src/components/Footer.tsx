
import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 lg:px-12 py-12">
      {/* Thin separator line */}
      <Separator className="bg-white/20 mb-12" />
      
      {/* Three blocks side by side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Block 1: Location */}
        <div>
          <h3 className="text-white font-light tracking-wide mb-4">Location:</h3>
          <div className="space-y-2">
            <p className="text-white/70 font-light">Warsaw</p>
            <p className="text-white/70 font-light">New York</p>
          </div>
        </div>

        {/* Block 2: Contact */}
        <div>
          <h3 className="text-white font-light tracking-wide mb-4">Contact us</h3>
          <p className="text-white/70 font-light">hello@vastpoint.vc</p>
        </div>

        {/* Block 3: Partner logos */}
        <div className="space-y-4">
          <img 
            src="/lovable-uploads/21635b94-464e-410f-ab50-eb3da765f426.png" 
            alt="European Funds for Smart Economy" 
            className="h-12 object-contain"
          />
          <img 
            src="/lovable-uploads/45b5d339-a850-46f1-8c4b-8e64436d2aff.png" 
            alt="Co-funded by the European Union" 
            className="h-12 object-contain"
          />
          <img 
            src="/lovable-uploads/12102bc4-447a-49d2-8c1c-7f26d3ef3e70.png" 
            alt="Republic of Poland" 
            className="h-12 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
