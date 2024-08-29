import { create  } from "zustand";

export const useFormStore = create((set) => ({
formData:{
    firstName: "",
    lastName: "",
    userName: "",
},

    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
