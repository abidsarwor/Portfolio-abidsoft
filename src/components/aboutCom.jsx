import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const AboutCom = () => {
    return (
        <>
            <div className=" hover-zoom">
                <Link to={myVariables.aboutPage} className="text-decoration-none mx-auto">
                    <div className="card theme border-0">
                        <img src={myVariables.logoImg} alt="logo image" width='200px' />
                        <div className="card-body">
                            <p>Want to know more</p>
                            <h3 className={'text-uppercase letter-spacing fw-bold'}>About </h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default AboutCom;