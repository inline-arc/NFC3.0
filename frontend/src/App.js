import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './components/hero';
import Login from './components/login';
import Home from './components/home';
import Breadcrumb from './components/partials/breadcrumbs';
import OngoingCampaigns from './components/pages/ongoingCampaigns';
import OngoingDonations from './components/pages/ongoingDonations';
import CompletedDonations from './components/pages/completedDonations';
import CompletedCampaigns from './components/pages/completedCampaigns';
import YourDonations from './components/pages/yourDonations';
import YourCampaigns from './components/pages/yourCampaigns';
import CardList from './components/donationCard';
import SeekDonation from './components/pages/seekDonation';
import HostedDonation from './components/pages/hostedDonation';
function App() {
  
            
  return (
    <Router>
      <div className = "App">
        <Breadcrumb />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Default or home route */}
        <Route path="/login" element={<Login />} /> {/* Route for login */}
        <Route path="/home" element={<Home />} />
        <Route path="/campaigns/ongoing" element={<OngoingCampaigns />} />
        <Route path="/donations/ongoing" element={<OngoingDonations />} />
        <Route path="/campaigns/completed" element={<CompletedCampaigns />} />
        <Route path="/donations/completed" element={<CompletedDonations />} />
        <Route path="/campaigns/your-Campaigns" element={<YourCampaigns />} />
        <Route path="/donations/your-Donations" element={<YourDonations />} />

        <Route path="/events/ongoing" element={<OngoingCampaigns />} />
        <Route path="/events/completed" element={<CompletedCampaigns />} />
        <Route path="/events/your-Events" element={<YourCampaigns />} />

        <Route path="/profile/seek-Donation" element={<SeekDonation />} />
        <Route path="/profile/hosted-Donation" element={<HostedDonation />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
