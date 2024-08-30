import React from "react";
import useStore from "../utils/useTx";
import { ethers } from "ethers";

const ReceiptPage = () => {
    const { formData, transaction } = useStore (state => ({
        formData: state.formData,
        transaction: state.transaction,
    }));

    // Format the amount to Ether
    const formattedAmount = formData.amount ? ethers.utils.formatEther(formData.amount.toString()) : "0";

    return (
        <div className="bg-card p-6 rounded-lg shadow-lg mx-auto w-1/2">
            <h2 className="text-2xl font-bold text-foreground mb-4">Donation Receipt</h2>

            <div className="mb-4">
                <p><strong>Purpose:</strong> {formData.purpose}</p>
                <p><strong>Amount:</strong> {formattedAmount} ETH</p>
                <p><strong>Title:</strong> {formData.title}</p>
                <p><strong>Description:</strong> {formData.description}</p>
            </div>

            {formData.purpose === "Medical Treatment" && (
                <div className="mb-4">
                    <p><strong>Patient Relation:</strong> {formData.relation}</p>
                    <p><strong>Aadhaar:</strong> {formData.aadhaar}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mobile:</strong> {formData.mobile}</p>
                </div>
            )}

            {formData.purpose === "Charity" && (
                <div className="mb-4">
                    <p><strong>NGO Name:</strong> {formData.ngo}</p>
                    <p><strong>Cause:</strong> {formData.cause}</p>
                    <p><strong>Aadhaar:</strong> {formData.aadhaar}</p>
                    <p><strong>GST:</strong> {formData.gst}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                </div>
            )}

            <div className="mb-4">
                <p><strong>Transaction Hash:</strong> {transaction?.hash}</p>
                <p><strong>Block Number:</strong> {transaction?.blockNumber}</p>
                <p><strong>Gas Used:</strong> {transaction?.gasUsed?.toString()}</p>
                <p><strong>Transaction Status:</strong> {transaction ? "Success" : "Pending"}</p>
            </div>

            <button className="bg-slate-300 text-accent-foreground hover:bg-slate-100 w-full p-2 rounded">
                Download Receipt
            </button>
        </div>
    );
};

export default ReceiptPage;
