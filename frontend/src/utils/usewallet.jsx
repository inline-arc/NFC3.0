// useWalletStore.js
import create from 'zustand';

export const useWalletStore = create(set => ({
    wallet: "",
    setWallet: (wallet) => set({ wallet })
}));
    