import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import Layout from "../components/layout/layout.jsx";
import profileAPI from "../APIStore/profileAPI.js";
import HomeTitleCom from "../components/homeTitleCom.jsx";
import AboutCom from "../components/aboutCom.jsx";
import ProjectCom from "../components/projectCom.jsx";
import ServiceCom from "../components/serviceCom.jsx";
import ExperienceCom from "../components/experienceCom.jsx";
import TestimonialCom from "../components/testimonialCom.jsx";
import ContactCom from "../components/contactCom.jsx";
import BlogCom from "../components/blogCom.jsx";

const HomePage = () => {
    const { profile, profileRequest } = profileAPI();

    useEffect(() => {
        const fetchProfile = async () => {
            await profileRequest();
        };
        fetchProfile();
    }, []);



    return (
        <>
            <Helmet>
                <title>Home || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <div className="row">
                        <HomeTitleCom/>
                        <div className="container my-3">
                            <div className="row">
                                {/* Left Column - 5 Columns Wide */}
                                <div className="col-md-5 d-flex flex-column gap-4">
                                    <div><AboutCom/></div>
                                    <div><ServiceCom/></div>
                                    <div><ExperienceCom/></div>
                                </div>

                                {/* Right Column - 7 Columns Wide */}
                                <div className="col-md-7 d-flex flex-column gap-4">
                                    <div><ProjectCom/></div>
                                    <div className="row d-flex gy-3">
                                        <div className="col-md-6">
                                            <BlogCom/>
                                        </div>
                                        <div className="col-md-6">
                                            <ContactCom/>
                                        </div>
                                    </div>
                                    <div><TestimonialCom/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    );
};

export default HomePage;