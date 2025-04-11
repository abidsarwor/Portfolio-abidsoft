import React, { useEffect } from "react";
import Layout from "../components/layout/layout.jsx";
import aboutAPI from "../APIStore/aboutAPI.js";
import profileAPI from "../APIStore/profileAPI.js";
import {Helmet} from "react-helmet";
import myVariables from "../assets/myVariables.js";

const AboutPage = () => {
    const { about, aboutRequest } = aboutAPI();
    const { profile, profileRequest } = profileAPI();

    useEffect(() => {
        (async () => {
            await aboutRequest();
            await profileRequest()
        })();
    }, []);

    return (
        <>
            <Helmet>
                <title>About || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container mt-4">
                    {/* About Section */}
                    <div className="row theme p-3 align-items-center g-4">
                        <div className="col-md-4 text-center">
                            <img src={myVariables.profileImg} alt="photo" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-8 ps-3">
                            <h1 className="fw-bold text-uppercase">{about?.title}</h1>
                            <p className="">{about?.desc}</p>

                            <div className="d-flex flex-wrap justify-content-start gap-4 mt-4">
                                <div>
                                    <h1 className=" fw-bold">{profile?.projectsCompleted}+</h1>
                                    <p className="">Projects Completed</p>
                                </div>
                                <div>
                                    <h1 className=" fw-bold">{profile?.satisfiedClients}+</h1>
                                    <p className="">Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience & Education Section */}
                    <div className="row mt-5 g-4">
                        <div className="col-md-6 ">
                            <div className="card theme p-3">
                                <h3 className="fw-bold text-uppercase">Experience</h3>
                                {about?.experience.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <spam className="">{item.period}</spam>
                                        <h4 className="fw-semibold">{item.subject}</h4>
                                        <p className="">{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-6 ">
                            <div className={'card theme p-3'}>
                                <h3 className="fw-bold">Education</h3>
                                {about?.education.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <spam className="">{item.period}</spam>
                                        <h4 className="fw-semibold">{item.subject}</h4>
                                        <p className="">{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Label Section */}
                    <div className="row mt-5 theme p-3">
                        <h3 className="fw-bold">Experience Label</h3>
                        {about?.experienceLabel.map((item, index) => (
                            <div key={index} className="col-md-12 mb-4">
                                <h5 className="fw-semibold">{item.topic} ||
                                    <spam className=" mt-2"> {item.label}%</spam>
                                </h5>
                                <div className="progress" style={{height: "8px"}}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{width: `${item.label}%`}}
                                        aria-valuenow={item.label}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default AboutPage;
