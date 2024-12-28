import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ResearchPage from './pages/ResearchPage';
import CommunityPage from './pages/CommunityPage';
import QuickRelaxPage from './components/activities/QuickRelaxPage';
import CalmingSongsPage from './components/activities/CalmingSongsPage';
import MindfulGamesPage from './components/activities/MindfulGamesPage';
import MoodTwistersPage from './components/activities/MoodTwistersPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/science" element={<ResearchPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/quick-relax"
          element={
            <ProtectedRoute>
              <QuickRelaxPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/calming-songs"
          element={
            <ProtectedRoute>
              <CalmingSongsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/mindful-games"
          element={
            <ProtectedRoute>
              <MindfulGamesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/mood-twisters"
          element={
            <ProtectedRoute>
              <MoodTwistersPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;