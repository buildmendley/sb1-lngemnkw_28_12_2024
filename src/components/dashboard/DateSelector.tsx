import React from 'react';
import { Star } from 'lucide-react';

const days = [
  { day: 22, label: 'S' },
  { day: 23, label: 'M' },
  { day: 24, label: 'T' },
  { day: 25, label: 'W' },
  { day: 26, label: 'T' },
  { day: 27, label: 'F', active: true },
  { day: 28, label: 'S' },
];

const DateSelector = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <h2 className="text-text-primary text-2xl font-semibold mb-4">Friday, Dec 27</h2>
        <div className="flex justify-between">
          {days.map(({ day, label, active }) => (
            <div
              key={day}
              className={`flex flex-col items-center ${
                active ? 'text-ocean-dark' : 'text-text-secondary'
              }`}
            >
              <span className="text-sm">{label}</span>
              <span className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full ${
                active ? 'bg-ocean-dark text-text-light' : ''
              }`}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-text-primary text-2xl font-semibold">Daily Star</h2>
          <Star className="w-8 h-8 text-ocean-dark" />
        </div>
        <p className="text-text-secondary">
          Complete your daily reflection to earn stars and track your mindfulness journey.
        </p>
        <div className="mt-4 text-ocean-dark font-semibold">
          Current streak: 7 days 🎉
        </div>
      </div>
    </div>
  );
};

export default DateSelector;