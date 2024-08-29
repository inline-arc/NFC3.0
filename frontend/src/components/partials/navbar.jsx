import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
<div className="w-1/5 p-6 border-r-2 border-[#2f2334] bg-[#f8f9fa]">
        <div className="flex flex-row items-center mb-6 gap-4">
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
        <span className="text-slate-950 font-semibold text-xl p-4">Campaigns</span>
        <Link to="/campaigns/ongoing" className="ml-6 block text-slate-700 text-lg">Ongoing</Link>
        <Link to="/campaigns/completed" className="ml-6 block text-slate-700 text-lg">Completed</Link>
        <Link to="/campaigns/your-Campaigns" className="ml-6 block text-slate-700 text-lg">Your Campaigns</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Donations</span>
        <Link to="/donations/ongoing" className="ml-6 block text-slate-700 text-lg">Ongoing</Link>
        <Link to="/donations/completed" className="ml-6 block text-slate-700 text-lg">Completed</Link>
        <Link to="/donations/your-Donations" className="ml-6 block text-slate-700 text-lg">Your Donations</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Events</span>
        <Link to="/events/ongoing" className="ml-6 block text-slate-700 text-lg">Ongoing</Link>
        <Link to="/events/completed" className="ml-6 block text-slate-700 text-lg">Completed</Link>
        <Link to="/events/your-Events" className="ml-6 block text-slate-700 text-lg">Your Events</Link>
      </div>

      <div className="space-y-4">
        <span className="text-slate-950 font-semibold text-xl p-4">Profile</span>
        <Link to="/profile/seek-Donation" className="ml-6 block text-slate-700 text-lg">Seek Donation</Link>
        <Link to="/profile/hosted-Donation" className="ml-6 block text-slate-700 text-lg">Hosted Donation</Link>
      </div>
      
      <Link to="/" className="flex items-center text-slate-950 font-semibold text-xl p-4 gap-2">
        Logout
      </Link>
    </nav>

      </div>

    );
}