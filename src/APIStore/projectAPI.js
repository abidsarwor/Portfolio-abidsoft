import { create } from "zustand";
import projectData from "./JSON/projects.json";

// Create a Zustand store for fetching and managing project data
const projectAPI = create((set) => ({
    project: null,
    projectRequest: async () => {
        try {
            set({ project: projectData });
        } catch (error) {
            set({ project: null });
        }
    },

    projectDetail: null,
    projectDetailRequest: async (_id) => {
        try {
            // Updated to use _id instead of id
            const foundProject = projectData.find((project) => project._id === _id);
            set({ projectDetail: foundProject || null }); // If project not found, set null
        } catch (error) {
            set({ projectDetail: null });
        }
    },
}));

export default projectAPI;
