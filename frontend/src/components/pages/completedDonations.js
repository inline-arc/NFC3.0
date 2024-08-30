import React from 'react';
import NavBar from '../partials/navbar';
import Card from '../partials/card';
import { ethers } from 'ethers';
import Evault from "../../data/Evalue.json";  
function CompletedDonations() {

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
            "title": "Help Us Save a Child Suffering from Leukemia",
            "imageUrl": "https://img.freepik.com/free-photo/child-hospital-bed_23-2151488880.jpg",
            "fundsRequired": "₹ 15,00,000",
            "progress": 45,
            "campaignEnds": "30 Days",
            "peopleDonated": 10
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
      
      export default CompletedDonations;
      
    
  
