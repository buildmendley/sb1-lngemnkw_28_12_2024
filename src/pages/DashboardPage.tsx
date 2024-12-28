import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import WelcomeMessage from '../components/dashboard/WelcomeMessage';
import DashboardTabs from '../components/dashboard/DashboardTabs';
import OverviewTab from '../components/dashboard/tabs/OverviewTab';
import JournalTab from '../components/dashboard/tabs/JournalTab';
import ProgressTab from '../components/dashboard/tabs/ProgressTab';
import Breadcrumb from '../components/dashboard/Breadcrumb';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'journal':
        return <JournalTab />;
      case 'progress':
        return <ProgressTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb />
        <WelcomeMessage />
        <DashboardTabs active={activeTab} onChange={setActiveTab} />
        {renderTabContent()}
      </main>
    </div>
  );
};

export default DashboardPage;