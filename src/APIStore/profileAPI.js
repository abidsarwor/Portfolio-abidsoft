import { create } from "zustand";
import profileData from "./JSON/profiles.json";

const profileAPI = create((set) => ({
    profile: null,
    profileRequest: async () => {
        try {
            set({ profile: profileData }); // Set state from local JSON
        } catch (error) {
            set({ profile: null, error: error.message });
        }
    },
}));

export default profileAPI;
