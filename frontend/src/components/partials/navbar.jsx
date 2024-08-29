import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
<div className="w-1/5 p-6 border-r-2 border-[#2f2334] bg-[#f8f9fa]">
        <div className="flex flex-col items-center mb-6 gap-4">
          <img 
            src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc" 
            alt="logo" 
            className="rounded-md w-12 h-12" 
          />
          <span className="hero text-2xl font-bold text-slate-950 font-inter">Mankind</span>
        </div>
        {/* Add any additional navigation links or content here */}
        <nav className="space-y-6 mt-6">
      <Link to="/home" className="flex items-center text-slate-950 font-semibold text-xl p-4 gap-2">
        Home
      </Link>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Ongoing</span>
        <Link to="/ongoing/campaigns" className="ml-6 block text-slate-700 text-lg">Campaigns</Link>
        <Link to="/ongoing/donations" className="ml-6 block text-slate-700 text-lg">Donations</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Completed</span>
        <Link to="/completed/campaigns" className="ml-6 block text-slate-700 text-lg">Campaigns</Link>
        <Link to="/completed/donations" className="ml-6 block text-slate-700 text-lg">Donations</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Profile</span>
        <Link to="/profile/campaigns" className="ml-6 block text-slate-700 text-lg">Your Campaigns</Link>
        <Link to="/profile/donations" className="ml-6 block text-slate-700 text-lg">Your Donations</Link>
      </div>
        <br></br><br></br><br></br>
      <Link to="/" className="flex items-center text-slate-950 font-semibold text-xl p-4 gap-2">
        Logout
      </Link>
    </nav>

      </div>

    );
}