import { create } from "zustand";
import blogData from "./JSON/blogs.json";

const blogAPI = create((set) => ({
    blog: null,
    blogRequest: async () => {
        try {
            set({ blog: blogData });
        } catch (error) {
            set({ blog: null });
        }
    },
    blogDetail: null,
    blogDetailRequest: async (id) => {
        try {
            const foundBlog = blogData.find((blog) => blog._id === id);
            set({ blogDetail: foundBlog || null });
        } catch (error) {
            set({ blogDetail: null });
        }
    },
    commentResponse: null,
    commentPost: async (id, formData) => {
        try {
            // Generate _id and timestamps
            const commentWithMeta = {
                ...formData,
                _id: Math.random().toString(36).substr(2, 9), // Generates a random string for _id
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            // Make a copy of the blogData to avoid direct mutation
            const updatedBlogData = [...blogData];
            const blogIndex = updatedBlogData.findIndex((blog) => blog._id === id);

            if (blogIndex !== -1) {
                updatedBlogData[blogIndex].comment.push(commentWithMeta);
                set({
                    commentResponse: "Comment Successfully Added",
                    blog: updatedBlogData  // Update state with the new blog data
                });
            } else {
                set({ commentResponse: "Blog not found" });
            }
        } catch (error) {
            set({ error: error.response?.data || "Something went wrong" });
        }
    },
}));

export default blogAPI;
