import { create } from "zustand";
import testimonialData from "./JSON/testimonials.json";

const testimonialAPI = create((set) => ({
    testimonial: null,
    testimonialRequest: async () => {
        try {
            set({ testimonial: testimonialData });
        } catch (error) {
            set({ testimonial: null });
        }
    },
}));

export default testimonialAPI;
