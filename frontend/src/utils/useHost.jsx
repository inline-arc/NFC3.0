import React, { useState } from "react";
import useHost from "../utils/useHost"; // Updated to use `useHost`
import { ethers } from "ethers";
import { useWalletStore } from "../utils/usewallet";
import Evault from '../data/Evault2.json'; // Corrected ABI import

const SeekDonationForm = () => {
    const { purpose, setPurpose } = useHost(state => ({
        purpose: state.purpose,
        setPurpose: state.setPurpose,
    }));

    const [formData, setFormData] = useState({
        amount: "",
        title: "",
        relation: "",
        aadhaar: "",
        email: "",
        mobile: "",
        ngo: "",
        cause: "",
        gst: "",
        phone: "",
        city: "",
        description: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const wallet = useWalletStore(state => state.wallet);

    const getEtheriumContract = async () => {
        const connectedAccount = getGlobalState('connectedAccount')
      
        if (connectedAccount) {
          const provider = new ethers.providers.Web3Provider(ethereum)
          const signer = provider.getSigner()
          const contract = new ethers.Contract(contractAddress, contractAbi, signer)
      
          return contract
        } else {
          return getGlobalState('contract')
        }
      }
      
      const createProject = async ({
        title,
        description,
        imageURL,
        cost,
        expiresAt,
      }) => {
        try {
          if (!ethereum) return alert('Please install Metamask')
      
          const contract = await getEtheriumContract()
          cost = ethers.utils.parseEther(cost)
          tx = await contract.createProject(title, description, imageURL, cost, expiresAt)
          await tx.wait()
          await loadProjects()
        } catch (error) {
          reportError(error)
        }
      }

    return (
        <div className="bg-card p-6 rounded-lg shadow-lg mx-auto flex">
            <div className="w-2/3">
                <h2 className="text-2xl font-bold text-foreground mb-4">Start your fundraiser</h2>
    
                <label className="block mb-2 text-black" htmlFor="purpose">Purpose of raising funds</label>
                <select
                    id="purpose"
                    className="block w-full p-2 border border-border rounded mb-4"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                >
                    <option>Medical Treatment</option>
                    <option>Education</option>
                    <option>Charity</option>
                    <option>Other</option>
                </select>
    
                <label className="block mb-2 text-black">Amount *</label>
                <input
                    type="number"
                    id="amount"
                    className="block w-full p-2 border border-border rounded mb-4"
                    placeholder="2500"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                />
    
                <label className="block mb-2 text-black" htmlFor="title">Title *</label>
                <input
                    type="text"
                    id="title"
                    className="block w-full p-2 border border-border rounded mb-4"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
    
                {purpose === "Medical Treatment" && (
                    <>
                        <label className="block mb-2 text-black" htmlFor="relation">Patient Relation *</label>
                        <input
                            type="text"
                            id="relation"
                            placeholder="Relation with Patient"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.relation}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="aadhaar">Aadhaar Number *</label>
                        <input
                            type="text"
                            id="aadhaar"
                            placeholder="Your Aadhaar number"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.aadhaar}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="mobile">📱 Mobile *</label>
                        <input
                            type="tel"
                            id="mobile"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                )}
    
                {purpose === "Charity" && (
                    <>
                        <label className="block mb-2 text-black" htmlFor="ngo">NGO Name *</label>
                        <input
                            type="text"
                            id="ngo"
                            placeholder="Name of the NGO"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.ngo}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="cause">Cause *</label>
                        <input
                            type="text"
                            id="cause"
                            placeholder="Cause for fundraising"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.cause}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="aadhaar">Aadhaar Number *</label>
                        <input
                            type="text"
                            id="aadhaar"
                            placeholder="Your Aadhaar number"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.aadhaar}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="gst">GST Number *</label>
                        <input
                            type="text"
                            id="gst"
                            placeholder="GST number of the NGO"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.gst}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Contact phone number"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
    
                        <label className="block mb-2 text-black" htmlFor="city">City *</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="City of the NGO"
                            className="block w-full p-2 border border-border rounded mb-4"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                )}
    
                <label className="block mb-2 text-black" htmlFor="description">Description *</label>
                <textarea
                    id="description"
                    placeholder="In less than 250 words"
                    className="block w-full p-2 border border-border rounded mb-4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                />
    
                <button
                    className="bg-slate-300 text-accent-foreground hover:bg-slate-100 w-full p-2 rounded"
                    onClick={createProject}
                >
                    Next
                </button>
            </div>
    
            <div className="w-1/3 flex items-center justify-center p-7">
                <img 
                    src="https://i.pinimg.com/564x/6a/c6/76/6ac676f9aed061c71609f1030f33d605.jpg" 
                    alt="Donation" 
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default SeekDonationForm;
