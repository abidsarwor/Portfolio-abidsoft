import { create } from "zustand";


const contactAPI = create((set) => ({
    contactResponse: null, // Store API response

    // Function to send contact form data
    contactSend: async () => {
        try {
            set({ contactResponse: null }); // Store response
        } catch (error) {
            set({ error: error.response?.data || "Something went wrong", isLoading: false });
        }
    },
}));

export default contactAPI;
