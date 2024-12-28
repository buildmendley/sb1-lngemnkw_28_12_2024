import React from 'react';
import { Bell, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-ocean-dark/95 backdrop-blur-sm py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        <Link to="/" className="text-text-light text-2xl font-bold hover:opacity-90 transition">
          Mendley
        </Link>
        <nav className="flex space-x-8">
          <Link to="/dashboard" className="text-text-light font-medium">Dashboard</Link>
          <Link to="/discover" className="text-text-light/80 hover:text-text-light transition">Discover</Link>
          <Link to="/memories" className="text-text-light/80 hover:text-text-light transition">Memories</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-text-light/80 hover:text-text-light transition">
          <Bell className="w-5 h-5" />
        </button>
        <Link to="/" className="text-text-light/80 hover:text-text-light transition">
          <LogOut className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;