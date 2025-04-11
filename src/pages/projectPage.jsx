import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import {Helmet} from "react-helmet";
import profileAPI from "../APIStore/profileAPI.js";
import projectAPI from "../APIStore/projectAPI.js";
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const ProjectPage = () => {

    const {profile, profileRequest} = profileAPI()
    const {project, projectRequest} = projectAPI()

    useEffect(() => {
        (async()=>{
            await profileRequest()
            await projectRequest()
        })()
    }, []);


    return (
        <>
            <Helmet>
                <title>Projects || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <div className="row theme p-3">
                        <div className="col-12">
                            <h1 className={"text-uppercase"}>{profile?.projectTitle}</h1>
                            <p>{profile?.projectDesc}</p>
                        </div>
                    </div>
                    <div className="row  mt-3">
                        {project?.map((item, index)=>{
                            return (
                                <div key={index} className="col-md-6">
                                    <Link to={myVariables.projectPage+"/"+item?._id} className="text-decoration-none mx-auto ">
                                        <div className="card theme h-100 p-3 border-0">
                                            <img src={item?.img} alt="project image" className={'hover-zoom'}/>
                                            <div className="card-body">
                                                <p>{item?.projectInfo?.category}</p>
                                                <h3 className={'text-uppercase'}>{item?.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProjectPage;