import { create } from 'zustand';

const useStore = create((set) => ({
    // State variables
    purpose: '',
    formData: {
        amount: 0,
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
    },
    transaction: null, // To store transaction details

    // Actions
    setPurpose: (purpose) => set({ purpose }),

    setFormData: (data) => set((state) => ({
        formData: {
            ...state.formData,
            ...data,
        }
    })),

    setTransaction: (tx) => set({ transaction: tx }),
}));

export default useStore;
