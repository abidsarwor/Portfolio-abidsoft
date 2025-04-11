import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const ProjectCom = () => {
    return (
        <>
            <div className=" hover-zoom ">
                <Link to={myVariables.projectPage} className="text-decoration-none mx-auto ">
                    <div className="card theme border-0 ">
                        <div className="card-img-top d-flex w-100 p-3 gap-2">
                            <img src={myVariables.projectCardImg1} alt="project card image" className={'w-50 hover-zoom'}/>
                            <img src={myVariables.projectCardImg2} alt="project card image" className={'w-50 hover-zoom'}/>
                        </div>
                        <div className="card-body">
                            <p>Showcase view</p>
                            <h3 className={'text-uppercase letter-spacing fw-bold'}>Projects</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProjectCom;