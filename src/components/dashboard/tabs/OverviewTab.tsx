import React from 'react';
import DateSelector from '../DateSelector';
import FeatureCards from '../FeatureCards';
import ActivityCards from '../ActivityCards';

const OverviewTab = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <DateSelector />
      <FeatureCards />
      <ActivityCards />
    </div>
  );
};

export default OverviewTab;