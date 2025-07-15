
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Locations */}
          <div>
            <h3 className="text-gray-600 text-sm font-light tracking-wide mb-4">locations</h3>
            <div className="space-y-2">
              <p className="text-gray-900 font-medium">New York, USA</p>
              <p className="text-gray-900 font-medium">Warsaw, Poland</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-600 text-sm font-light tracking-wide mb-4">contact us</h3>
            <p className="text-gray-900 font-medium">hello@vastpoint.vc</p>
          </div>

          {/* Empty column for spacing */}
          <div></div>

          {/* Funding Partners */}
          <div className="flex flex-col space-y-4">
            {/* European Funds Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">EU</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">European Funds</p>
                <p className="text-xs text-gray-600">for Smart Economy</p>
              </div>
            </div>

            {/* Republic of Poland and EU Logos */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-4 bg-red-600"></div>
                <div>
                  <p className="text-xs text-gray-600">Republic</p>
                  <p className="text-xs text-gray-600">of Poland</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 bg-blue-600 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5">
                    {Array.from({length: 12}).map((_, i) => (
                      <div key={i} className="w-0.5 h-0.5 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Co-funded by the</p>
                  <p className="text-xs text-gray-600">European Union</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
