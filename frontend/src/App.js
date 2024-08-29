import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './components/hero';
import Login from './components/login';
import HomeTest from './components/temp';
import Breadcrumb from './components/partials/breadcrumbs';
import OngoingCampaigns from './components/pages/ongoingCampaigns';
import OngoingDonations from './components/pages/ongoingDonations';
import CompletedDonations from './components/pages/completedDonations';
import CompletedCampaigns from './components/pages/completedCampaigns';
import YourDonations from './components/pages/yourDonations';
import YourCampaigns from './components/pages/yourCampaigns';
function App() {
  
            
  return (
    <Router>
      <div className = "App">
        <Breadcrumb />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Default or home route */}
        <Route path="/login" element={<Login />} /> {/* Route for login */}
        <Route path="/home" element={<HomeTest />} />
        <Route path="/ongoing/campaigns" element={<OngoingCampaigns />} />
        <Route path="/ongoing/donations" element={<OngoingDonations />} />
        <Route path="/completed/campaigns" element={<CompletedCampaigns />} />
        <Route path="/completed/donations" element={<CompletedDonations />} />
        <Route path="/profile/campaigns" element={<YourCampaigns />} />
        <Route path="/profile/donations" element={<YourDonations />} />
      </Routes>
      </div>
    </Router>
  
  );
}

export default App;
