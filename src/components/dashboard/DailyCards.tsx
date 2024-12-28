import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DailyCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="bg-gradient-to-br from-ocean-light/30 to-ocean/30 rounded-2xl p-6 backdrop-blur-sm">
        <div className="bg-ocean w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Sun className="w-6 h-6 text-text-light" />
        </div>
        <h3 className="text-text-light text-xl font-semibold mb-2">Morning Plan</h3>
        <p className="text-text-light/70">Start your day with intention</p>
      </div>

      <div className="bg-gradient-to-br from-ocean/30 to-ocean-dark/30 rounded-2xl p-6 backdrop-blur-sm">
        <div className="bg-ocean-dark w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Moon className="w-6 h-6 text-text-light" />
        </div>
        <h3 className="text-text-light text-xl font-semibold mb-2">Evening Reflection</h3>
        <p className="text-text-light/70">Review and reflect on your day</p>
      </div>
    </div>
  );
};

export default DailyCards;