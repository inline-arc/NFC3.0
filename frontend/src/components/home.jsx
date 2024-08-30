import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import Evault from "../data/Evalue.json";
import { Search } from 'lucide-react';
import { useFormStore } from "../utils/useform";
import { useWalletStore } from "../utils/usewallet";
import { Link } from 'react-router-dom';
import NavBar from "./partials/navbar";
import Card from "./partials/card";

import { PieChart } from 'react-minimal-pie-chart';
import LeaderBoard from "./partials/leaderboard";
import Header from "./partials/header";

export default function CardList() {
    const formData = useFormStore((state) => state.formData);
    const wallet = useWalletStore(state => state.wallet);

    return (
      <>
        <div className="flex min-h-screen">
            {/* Vertical Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex-1 p-10 space-y-10">
            <Header title={"Home"}/>
                {/* First Pie Chart with Details on the Right */}
                <div className="flex items-center justify-between">
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                        style={{ height: '300px', width: '300px' }}
                    />
                    <div className="w-1/2 p-6">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Campaign 1</h2>
                        <p className="text-slate-600 mb-2">Details about the first campaign go here. You can add information like the purpose of the campaign, the amount of funds required, the progress so far, and other relevant details.</p>
                        <p className="text-slate-600">Campaign Ends: 43 Days</p>
                        <p className="text-slate-600">People Donated: 5</p>
                    </div>
                </div>

                {/* Second Pie Chart with Image on the Right */}
                <div className="flex items-center justify-between">
                    <div className="w-1/2 p-6 order-2">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Campaign 2</h2>
                        <p className="text-slate-600 mb-2">Details about the second campaign go here. You can describe the campaign, explain the goals, and share any additional information relevant to the audience.</p>
                        <p className="text-slate-600">Campaign Ends: 30 Days</p>
                        <p className="text-slate-600">People Donated: 8</p>
                    </div>
                    <PieChart
                        data={[
                            { title: 'Four', value: 25, color: '#8BC34A' },
                            { title: 'Five', value: 20, color: '#FFC107' },
                            { title: 'Six', value: 30, color: '#FF5722' },
                        ]}
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>

            </div>

            {/* Search Bar and User Info */}
            <div className="w-1/3 p-4 border-l-2 border-[#2f2334]">
                <div className="flex items-center gap-4 p-4 border-2 border-[#2f2334] rounded-lg mb-6">
                    <img src="https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg" alt="avatar"
                        className="inline-block relative object-cover object-center rounded-full w-12 h-12" />
                    <div>
                        <h6 className="block font-sans text-md antialiased font-semibold leading-relaxed tracking-normal text-inherit text-slate-950">
                            {formData.firstName} {formData.lastName} ({formData.userName})
                        </h6>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-400">
                            User ID : {wallet}
                        </p>
                    </div>
                </div>
              
                
                <div>
                        <br></br>
                    <Header title={"Highest Donators"} />
                    <LeaderBoard />
                </div>
            </div>
        </div>
        </>
    );
}
