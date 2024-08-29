import React, { useState } from "react";

export default function SeekDonation() {
    const [purpose, setPurpose] = useState("Medical Treatment");

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

            {/* Common Fields */}
            <label className="block mb-2 text-black">Amount *</label>
            <input
                type="number"
                className="block w-full p-2 border border-border rounded mb-4"
                placeholder="2500"
                required
            />

            <label className="block mb-2 text-black" htmlFor="title">Title *</label>
            <input
                type="text"
                id="title"
                className="block w-full p-2 border border-border rounded mb-4"
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
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="aadhaar">Aadhaar Number *</label>
                    <input
                        type="text"
                        id="aadhaar"
                        placeholder="Your Aadhaar number"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="mobile">📱 Mobile *</label>
                    <input
                        type="tel"
                        id="mobile"
                        className="block w-full p-2 border border-border rounded mb-4"
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
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="cause">Cause *</label>
                    <input
                        type="text"
                        id="cause"
                        placeholder="Cause for fundraising"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="aadhaar">Aadhaar Number *</label>
                    <input
                        type="text"
                        id="aadhaar"
                        placeholder="Your Aadhaar number"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="gst">GST Number *</label>
                    <input
                        type="text"
                        id="gst"
                        placeholder="GST number of the NGO"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="phone">Phone Number *</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Contact phone number"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />

                    <label className="block mb-2 text-black" htmlFor="city">City *</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="City of the NGO"
                        className="block w-full p-2 border border-border rounded mb-4"
                        required
                    />
                </>
            )}

            <label className="block mb-2 text-black" htmlFor="description">Description *</label>
            <textarea
                id="description"
                placeholder="In less than 250 words"
                className="block w-full p-2 border border-border rounded mb-4"
                required
            />

            <button className="bg-slate-300 text-accent-foreground hover:bg-slate-100 w-full p-2 rounded">Next</button>
        </div>
    );
}
