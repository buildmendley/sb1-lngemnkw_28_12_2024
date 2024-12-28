import React from 'react';
import { Link } from 'react-router-dom';
import ReviewSection from './ReviewSection';
import ListeningAnimation from './hero/ListeningAnimation';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 space-y-8">
          <h1 className="text-5xl font-bold text-text-primary leading-tight tracking-tight">
            Your Journey to Inner Peace Starts Here
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Discover a personalized path to emotional well-being with Mendley's AI-powered guidance and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/register"
              className="bg-ocean-dark text-text-light px-8 py-3 rounded-lg font-semibold hover:bg-ocean transition text-lg shadow-lg text-center"
            >
              Start Free Trial
            </Link>
            <button className="border-2 border-ocean-dark text-text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-ocean-light/50 transition text-lg">
              Learn More
            </button>
          </div>
          <ReviewSection />
        </div>
        
        <div className="lg:col-span-2 bg-white/80 rounded-2xl backdrop-blur-sm border border-ocean shadow-xl overflow-hidden h-[500px]">
          <ListeningAnimation />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;