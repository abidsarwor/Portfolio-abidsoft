import { create } from "zustand";
import serviceData from "./JSON/services.json"

const serviceAPI = create((set) => ({
    service: null,
    serviceRequest: async () => {
        try {
            set({service: serviceData });
        } catch (error) {
            set({ service: null });
        }
    },
}));

export default serviceAPI;
