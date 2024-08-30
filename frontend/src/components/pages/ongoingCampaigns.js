import React from 'react';
import NavBar from '../partials/navbar';
import Card from '../partials/card';
import { ethers } from 'ethers';
import Evault from "../../data/Evalue.json";

function OngoingCampaigns() {
  const campaigns = [
    {
        title: "My Mother Is Suffering From severe brain Stroke, heart...",
        imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg",
        fundsRequired: "₹ 20,00,000",
        progress: 30,
        campaignEnds: "43 Days",
        peopleDonated: 5,
    },
    {
      "title": "Support Flood Victims in Kerala",
      "imageUrl": "https://img.freepik.com/free-photo/flooded-village_23-2151467895.jpg",
      "fundsRequired": "₹ 50,00,000",
      "progress": 60,
      "campaignEnds": "15 Days",
      "peopleDonated": 25
  },
  {
      "title": "Provide Clean Drinking Water to a Rural Village",
      "imageUrl": "https://img.freepik.com/free-photo/water-well-africa_23-2148986548.jpg",
      "fundsRequired": "₹ 10,00,000",
      "progress": 80,
      "campaignEnds": "20 Days",
      "peopleDonated": 40
  },
  {
      "title": "Emergency Medical Fund for Accident Victim",
      "imageUrl": "https://img.freepik.com/free-photo/injured-patient-hospital_23-2151489190.jpg",
      "fundsRequired": "₹ 25,00,000",
      "progress": 20,
      "campaignEnds": "50 Days",
      "peopleDonated": 15
  },
  {
      "title": "Support a School Rebuilding Project After Earthquake",
      "imageUrl": "https://img.freepik.com/free-photo/destroyed-school-building_23-2151468997.jpg",
      "fundsRequired": "₹ 35,00,000",
      "progress": 55,
      "campaignEnds": "10 Days",
      "peopleDonated": 30
  },
    // Add other campaigns here...
  ];

  const handleMetaMaskAccess = async () => {
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

        const contractAddress = "0x62a0f9ce7f2a20f279188f591b957694c4eb2ef2"; // Replace with your contract address
        const contract = new ethers.Contract(contractAddress, Evault.abi, signer);

        console.log("Contract initialized", contract);

        const donationAmount = ethers.utils.parseEther("0.01"); // Example donation amount in MATIC
        const tx = await contract.donate({ value: donationAmount });
        await tx.wait();
        console.log("Donation successful", tx);
    } catch (error) {
        console.error("Error connecting to MetaMask or making a donation", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex-1 p-10">
        <Card campaigns={campaigns} requestMetaMaskAccess={handleMetaMaskAccess}/>
      </div>
    </div>
  );
}

export default OngoingCampaigns;
