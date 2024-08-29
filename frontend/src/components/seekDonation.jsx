import React, { useState } from "react";
import useStore from "../utils/useStore";

const SeekDonation = () => {
    const { purpose, setPurpose, connectMetaMask, donate } = useStore(state => ({
        purpose: state.purpose,
        setPurpose: state.setPurpose,
        connectMetaMask: state.connectMetaMask,
        donate: state.donate,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await connectMetaMask();
            await donate(formData.amount);
            // Optionally handle formData and submit additional info to your backend or smart contract
            console.log("Donation successful", formData);
        } catch (error) {
            console.error("Donation failed", error);
        }
    };

    return (
        <div className="bg-card p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
                onClick={handleSubmit}
            >
                Next
            </button>
        </div>
    );
};

export default SeekDonation;
