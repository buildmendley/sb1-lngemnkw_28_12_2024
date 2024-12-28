import React from 'react';
import { MessageCircle, AtSign, Book } from 'lucide-react';

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="bg-ocean w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <MessageCircle className="w-6 h-6 text-text-light" />
        </div>
        <h3 className="text-text-primary text-xl font-semibold mb-2">Ana</h3>
        <p className="text-text-secondary">Your all time friend</p>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="bg-ocean-dark w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <AtSign className="w-6 h-6 text-text-light" />
        </div>
        <h3 className="text-text-primary text-xl font-semibold mb-2">Soul Space</h3>
        <p className="text-text-secondary">Where you reflect yourself</p>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform">
        <div className="bg-ocean w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Book className="w-6 h-6 text-text-light" />
        </div>
        <h3 className="text-text-primary text-xl font-semibold mb-2">Journal</h3>
        <p className="text-text-secondary">AI powered journal to keep you going</p>
      </div>
    </div>
  );
};

export default FeatureCards;