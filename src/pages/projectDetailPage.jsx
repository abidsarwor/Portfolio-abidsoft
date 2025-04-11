import React, { useEffect } from "react";
import Layout from "../components/layout/layout.jsx";
import { Link, useParams } from "react-router-dom";
import projectAPI from "../APIStore/projectAPI.js";
import profileAPI from "../APIStore/profileAPI.js";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";

const ProjectDetailPage = () => {
    const { id } = useParams();
    const { projectDetail, projectDetailRequest } = projectAPI();
    const { profile, profileRequest } = profileAPI();

    useEffect(() => {
        (async () => {
            await projectDetailRequest(id);
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            await profileRequest();
        })();
    }, []);

    return (
        <>
            <Helmet>
                <title>Projects || {profile?.specialist || "Project Details"}</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 theme p-3 w-100">
                            <h1 className="text-uppercase">{profile?.projectDetailTitle || "Project Details"}</h1>
                            <p>{profile?.projectDetailDesc || "No description available."}</p>

                            {projectDetail?.img && (
                                <img src={projectDetail.img} alt="Project" className="w-100" />
                            )}

                            <h3 className="text-uppercase">{projectDetail?.title || "Untitled Project"}</h3>

                            <div>{projectDetail?.desc ? <ReactMarkdown>{projectDetail.desc}</ReactMarkdown> : "No details available."}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 theme my-3 py-3">
                            <h3 className="text-uppercase">Project Info</h3>
                            <div className="row d-flex justify-content-center">
                                {projectDetail?.projectInfo?.client && (
                                    <div className="col-md-3 col-6">
                                        <span>Client:</span>
                                        <h4>{projectDetail.projectInfo.client}</h4>
                                    </div>
                                )}
                                {projectDetail?.projectInfo?.category && (
                                    <div className="col-md-3 col-6">
                                        <span>Category:</span>
                                        <h4>{projectDetail.projectInfo.category}</h4>
                                    </div>
                                )}
                                {projectDetail?.projectInfo?.timeFrame && (
                                    <div className="col-md-3 col-6">
                                        <span>Time Frame:</span>
                                        <h4>{projectDetail.projectInfo.timeFrame}</h4>
                                    </div>
                                )}
                                {projectDetail?.projectInfo?.liveLink && (
                                    <div className="col-md-3 col-6">
                                        <span>Live Link:</span>
                                        <br />
                                        <Link to={projectDetail.projectInfo.liveLink} target="_blank">
                                            <button className="btn btn-success">View</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProjectDetailPage;
