import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Layout from "../components/layout/layout.jsx";
import { Helmet } from "react-helmet";
import profileAPI from "../APIStore/profileAPI.js";

const ContactPage = () => {
    const { profile, profileRequest } = profileAPI();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicID = import.meta.env.VITE_EMAILJS_PUBLIC_ID;


    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        message: "You are welcome to my working team"
    });

    const [isLoading, setIsLoading] = useState(false); // Track loading state

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        emailjs.send(
            serviceID,
            templateID,
            {
                name: formData.name,
                email: formData.email,
                website: formData.website,
                message: formData.message,
            },
            publicID
        )
            .then(() => {
                alert("Email sent successfully!");
                setFormData({ name: "", email: "", website: "", message: "You are welcome to my working team" });
            })
            .catch(() => {
                alert("Failed to send email. Please try again.");
            })
            .finally(() => {
                setIsLoading(false); // Stop loading
            });
    };

    useEffect(() => {
        (async () => {
            await profileRequest();
        })();
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container theme">
                    <div className="row">
                        <div className="col-12 p-3">
                            <h1>{profile?.contactTitle}</h1>
                            <p>{profile?.contactDesc}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="col-12 d-flex justify-content-center gap-3">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        className="form-control w-100 mb-2"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="form-control w-100 mb-2"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Enter Your Website"
                                    className="form-control w-100 mb-2"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message"
                                    className="form-control mb-2"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                />
                                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                    {isLoading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 theme">
                    <h3>Our Location</h3>
                    <div className="map-container">
                        <div dangerouslySetInnerHTML={{ __html: profile?.embedMap }} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 theme my-3 py-3">
                            <h3 className="text-uppercase">Request a quote for work</h3>
                            <div className="row d-flex justify-content-center">
                                <div className="col">
                                    <span>Home Address</span>
                                    <h5>{profile?.address}</h5>
                                </div>
                                <div className="col">
                                    <span>E-mail Address</span>
                                    <h5>{profile?.email}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ContactPage;
