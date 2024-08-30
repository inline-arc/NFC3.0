import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import Evault from "../data/Evalue.json";
import { Search } from 'lucide-react';
import { useFormStore } from "../utils/useform";
import { useWalletStore } from "../utils/usewallet";
import { Link } from 'react-router-dom';
import NavBar from "./partials/navbar";
import Card from "./partials/card";

 // Make sure this JSON file contains your contract's ABI

export default function CardList() {

    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    const requestMetaMaskAccess = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
            await provider.send("eth_requestAccounts", []);
            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });

            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);

            const contractAddress = "0x62a0f9ce7f2a20f279188f591b957694c4eb2ef2"; // Replace with your contract address
            const con = new ethers.Contract(contractAddress, Evault.abi, signer);
            setContract(con);
            console.log(contract)
            setProvider(signer);
            console.log("Contract initialized", contract);
        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        // Remove the extra closing curly brace
    };

        try {
            const donationAmount = ethers.utils.parseEther("0.01"); // Example donation amount in MATIC
            const tx = await contract.donate({ value: donationAmount });
            await tx.wait();
            console.log("Donation successful", tx);
        } catch (error) {
            console.error("Error making a donation", error);
        }
    };  

    const campaigns = [
        {
            title: "My Mother Is Suffering From severe brain Stroke, heart...",
            imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg",
            fundsRequired: "₹ 20,00,000",
            progress: 30,
            campaignEnds: "43 Days",
            peopleDonated: 5,
        },
        // Add other campaigns here...
    ];

    
  const formData = useFormStore((state) => state.formData);
  const wallet = useWalletStore(state => state.wallet);

  return (
    <div className="flex min-h-screen">
      {/* Vertical Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-1 p-10">
       

        {/* Campaign Cards */}
        <Card campaigns={campaigns} requestMetaMaskAccess={requestMetaMaskAccess}/>
      </div>

      {/* Search Bar and User Info */}
      <div className="w-1/3 p-6 border-l-2 border-[#2f2334]">
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
        <div className="flex items-center mb-4 p-0 gap-2">
          <input type="text" placeholder="Search by Address / Txn Hash / Block / Token /" className="w-full p-2 rounded-lg bg-transparent text-[#d6cdda] m-2 border-2 border-[#2f2334] !outline-none" />
          <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border-2 border-[#2f2334] px-2 font-semibold text-neutral-200">
            <Search size={32} strokeWidth={2.25} />
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
        <div className="flex space-x-4 gap-4 items-center ml-2">
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white">
            <span>Login</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white">
            <span>Connect</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}