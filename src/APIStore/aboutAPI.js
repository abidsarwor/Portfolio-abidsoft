import { create } from "zustand";
import aboutData from "./JSON/abouts.json"

// Create a Zustand store for fetching and managing about data
const aboutAPI = create((set) => ({
    about: null,
    aboutRequest: async () => {
        try {
            set({ about: aboutData });
        } catch (error) {
            set({ about: null });
        }
    },
}));

export default aboutAPI;
