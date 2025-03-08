import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { FinancialDashboard } from './components/FinancialDashboard';
import { Benefits } from './components/Benefits';
import { RateCalculator } from './components/RateCalculator';
import { ClientManagement } from './components/ClientManagement';
import { ProfessionalDevelopment } from './components/ProfessionalDevelopment';
import { ProjectTimeline } from './components/ProjectTimeline';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-lilac-50 dark:bg-lilac-900 text-lilac-900 dark:text-lilac-100 flex">
        <Navigation />
        
        <div className="flex-1">
          <header className="sticky top-0 z-30 bg-white/80 dark:bg-lilac-900/80 backdrop-blur-sm border-b border-lilac-100 dark:border-lilac-800">
            <div className="px-4 py-4 flex justify-end items-center">
              <ThemeToggle />
            </div>
          </header>

          <main className="p-8">
            <Routes>
              <Route path="/" element={<FinancialDashboard />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/calculator" element={<RateCalculator />} />
              <Route path="/clients" element={<ClientManagement />} />
              <Route path="/development" element={<ProfessionalDevelopment />} />
              <Route path="/timeline" element={<ProjectTimeline />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App