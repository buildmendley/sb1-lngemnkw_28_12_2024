import React from 'react';
import { Wind, Music, Gamepad, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  {
    icon: <Wind className="w-6 h-6 text-text-light" />,
    title: 'Quick Relax',
    description: 'Simple breathing exercises & stretches',
    duration: '3-5 min',
    iconBg: 'bg-ocean',
    path: '/activities/quick-relax'
  },
  {
    icon: <Music className="w-6 h-6 text-text-light" />,
    title: 'Calming Songs',
    description: 'Curated peaceful melodies',
    duration: '∞ mins',
    iconBg: 'bg-ocean-dark',
    path: '/activities/calming-songs'
  },
  {
    icon: <Gamepad className="w-6 h-6 text-text-light" />,
    title: 'Mindful Games',
    description: 'Engaging stress-relief activities',
    duration: '5-15 min',
    iconBg: 'bg-ocean',
    path: '/activities/mindful-games'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-text-light" />,
    title: 'Mood Twisters',
    description: 'Positive mindset exercises',
    duration: '2-5 min',
    iconBg: 'bg-ocean-dark',
    path: '/activities/mood-twisters'
  }
];

const ActivityCards = () => {
  return (
    <div className="mt-8">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Serene Sanctuary</h2>
      <p className="text-text-secondary mb-6">Find your moment of peace</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Link
            key={index}
            to={activity.path}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform"
          >
            <div className={`${activity.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              {activity.icon}
            </div>
            <h3 className="text-text-primary text-lg font-semibold mb-2">{activity.title}</h3>
            <p className="text-text-secondary text-sm mb-4">{activity.description}</p>
            <span className="text-text-muted text-sm">{activity.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;