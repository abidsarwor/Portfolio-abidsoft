import React, { useEffect, useRef } from 'react';
import profileAPI from "../../APIStore/profileAPI.js";
import { Link, useNavigate } from "react-router-dom";
import myVariables from "../../assets/myVariables.js";
import cvFile from "../../assets/cv.pdf";

const BodyLayout = ({ children }) => {
    const { profile } = profileAPI();
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        // Check if screen width is md or smaller (768px)
        if (window.innerWidth < 768 && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Profile Card Section */}
                <div className="col-md-3">
                    <div className="card shadow w-100 theme text-center border-0">
                        <img
                            src={myVariables.profileImg}
                            alt="Profile Photo"
                            className="card-img-top rounded-3 w-75 mx-auto"
                        />
                        <div className="card-body">
                            <h2 className="fw-bold">Hi! I'M {profile?.firstName || ''} {profile?.lastName || ''}</h2>
                            <p className="text-auto text-center">{profile?.designation}</p>
                            <p className="mb-1 text-center"><i className="bi bi-envelope me-2"></i>{profile?.email}</p>
                            <p className="text-center"><i className="bi bi-telephone me-2"></i>{profile?.phone}</p>

                            {/* Social Icons */}
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                {/*<Link to={profile?.facebook} target="_blank">*/}
                                {/*    <i className="bi bi-facebook fs-3"></i>*/}
                                {/*</Link>*/}
                                <Link to={profile?.linkedin} target="_blank">
                                    <i className="bi bi-linkedin fs-3"></i>
                                </Link>
                                <Link to={profile?.github} target="_blank">
                                    <i className="bi bi-github fs-3"></i>
                                </Link>
                                <Link to={profile?.whatsapp} target="_blank">
                                    <i className="bi bi-whatsapp fs-3"></i>
                                </Link>
                            </div>

                            {/* Buttons */}
                            <button
                                onClick={() => navigate(myVariables.contactPage)}
                                className="btn btn-success w-75 rounded-5 my-3"
                            >
                                Hire Me!
                            </button>
                            <button
                                onClick={() => window.open(cvFile)}
                                className="btn btn-outline-primary w-75 rounded-5"
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Section (Scrolls on Mobile) */}
                <div className="col-md-9" ref={contentRef} id="contentSection">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BodyLayout;
