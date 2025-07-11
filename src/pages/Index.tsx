
import React from 'react';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Secondary Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-center">
        <div className="text-center px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Continue Your Journey
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-light">
            More amazing content awaits below...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
