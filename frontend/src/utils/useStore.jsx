// store.js
import create from 'zustand';
import { ethers } from 'ethers';
import Evault from '../data/Evalue2.json';

export const useStore = create((set) => ({
    isConnected: false,
    account: null,
    contract: null,
    provider: null,
    purpose: "Medical Treatment",

    connectMetaMask: async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                await provider.send("eth_requestAccounts", []);
                window.ethereum.on("chainChanged", () => window.location.reload());
                window.ethereum.on("accountsChanged", () => window.location.reload());

                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const contractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8"; // Replace with your contract address
                const con = new ethers.Contract(contractAddress, Evault.abi, signer);

                set((state) => ({
                    ...state,
                    isConnected: true,
                    account: address,
                    provider: provider, // Store the Web3Provider instance
                    contract: con
                }));
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
            }
        } else {
            console.error("MetaMask not installed");
        }
    },

    donate: async (amount) => {
        const { contract } = useStore.getState();
        if (contract) {
            try {
                const donationAmount = ethers.utils.parseEther(amount); // Donation amount in Ether
                const tx = await contract.donate({ value: donationAmount });
                await tx.wait();
                console.log("Donation successful", tx);
            } catch (error) {
                console.error("Error making a donation", error);
            }
        } else {
            console.error("Contract is not initialized");
        }
    },

    setPurpose: (purpose) => set((state) => ({
        ...state,
        purpose
    })),
}));

export default useStore;
