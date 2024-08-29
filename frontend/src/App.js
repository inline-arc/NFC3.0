import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [fundUse, setFundUse] = useState('');
  const [hospitalStatus, setHospitalStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, mobile, fundUse, hospitalStatus });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Medical Crowdfunding is the Best Way to Raise Money for Medical Expenses</h1>
          <p className="text-lg mb-8">Now with 0% platform fees</p>
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Dhiraj (Aarohi's father) raised ₹25,00,000 for Aarohi's Cancer Treatment in Just 20 days</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Need Money Urgently?</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name*</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address*</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Your Mobile Number*</label>
              <div className="flex items-center">
                <img src="https://flagcdn.com/w320/in.png" alt="India" className="w-6 h-6 mr-2" />
                <input
                  type="tel"
                  id="mobile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="fundUse" className="block text-gray-700 font-bold mb-2">What will the funds be used for? *</label>
              <select
                id="fundUse"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={fundUse}
                onChange={(e) => setFundUse(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Medical Treatment">Medical Treatment</option>
                <option value="Surgery">Surgery</option>
                <option value="Hospital Expenses">Hospital Expenses</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="hospitalStatus" className="block text-gray-700 font-bold mb-2">Hospitalisation status *</label>
              <select
                id="hospitalStatus"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={hospitalStatus}
                onChange={(e) => setHospitalStatus(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Admitted">Admitted</option>
                <option value="Discharged">Discharged</option>
              </select>
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-600">175 People started a fundraiser in last 2 days</p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              START A FUNDRAISER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
