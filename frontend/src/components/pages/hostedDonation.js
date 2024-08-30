import React from "react";

export default function TransactionDetails() {
  // Dummy JSON object
  const transaction = {
    amount: 5000,
    title: "Donation for Education",
    relation: "Donor",
    aadhaar: "1234-5678-9012",
    email: "donor@example.com",
    mobile: "+91 9876543210",
    ngo: "Helping Hands Foundation",
    cause: "Education for underprivileged children",
    gst: "27AAAAA0000A1Z5",
    phone: "+91 9876543210",
    city: "Mumbai",
    description: "This donation will be used for providing educational material to children in rural areas.",
    fundraiserDetails: {
      hash: "0x7ad49a98e2d296733019fa1f62d493a3c3e039c30cbb709b89200be5a61efb3e",
      type: 2,
      blockHash: "0x6f4a2e1d2a5e1b7e4a9b1d4a1e2b3f8c7d4b1e2f4c3b2a5e1d7f8b3c1d5e1f4a",
      blockNumber: 1234567,
      transactionIndex: 0,
      confirmations: 10,
      from: "0xD09e109edD9540E5C9576d02d71a6B64409B7dD1",
      gasPrice: "20000000000",
      maxPriorityFeePerGas: "2000000000"
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Transaction Details</h1>
      <div className="space-y-2">
        {/* Main Transaction Details */}
        <div className="flex justify-between">
          <span className="font-semibold">Amount:</span>
          <span>{transaction.amount} INR</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Title:</span>
          <span>{transaction.title}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Relation:</span>
          <span>{transaction.relation}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Aadhaar:</span>
          <span>{transaction.aadhaar}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          <span>{transaction.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Mobile:</span>
          <span>{transaction.mobile}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">NGO:</span>
          <span>{transaction.ngo}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Cause:</span>
          <span>{transaction.cause}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">GST:</span>
          <span>{transaction.gst}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Phone:</span>
          <span>{transaction.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">City:</span>
          <span>{transaction.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Description:</span>
          <span>{transaction.description}</span>
        </div>
        
        {/* Fundraiser Details */}
        <div className="pt-4">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Fundraiser Created</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Transaction Hash:</span>
              <span>{transaction.fundraiserDetails.hash}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Transaction Type:</span>
              <span>{transaction.fundraiserDetails.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Block Hash:</span>
              <span>{transaction.fundraiserDetails.blockHash}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Block Number:</span>
              <span>{transaction.fundraiserDetails.blockNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Transaction Index:</span>
              <span>{transaction.fundraiserDetails.transactionIndex}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Confirmations:</span>
              <span>{transaction.fundraiserDetails.confirmations}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">From:</span>
              <span>{transaction.fundraiserDetails.from}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Gas Price:</span>
              <span>{transaction.fundraiserDetails.gasPrice} wei</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Max Priority Fee Per Gas:</span>
              <span>{transaction.fundraiserDetails.maxPriorityFeePerGas} wei</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


