import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const ServiceCom = () => {
    return (
        <>
            <div className=" hover-zoom ">
                <Link to={myVariables.servicePage} className="text-decoration-none mx-auto ">
                    <div className="card theme border-0 ">
                        <div className="card-img-top d-flex w-100 p-3 gap-2">
                            <img src={myVariables.serviceCardImg1} alt="project card image" className={'w-25 hover-zoom'}/>
                            <img src={myVariables.serviceCardImg2} alt="project card image" className={'w-25 hover-zoom'}/>
                            <img src={myVariables.serviceCardImg3} alt="project card image" className={'w-25 hover-zoom'}/>
                        </div>
                        <div className="card-body">
                            <p>Specialization</p>
                            <h3 className={'text-uppercase letter-spacing fw-bold'}>Services Offer</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ServiceCom;