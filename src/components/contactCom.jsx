import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const ContactCom = () => {
    return (
        <>
            <div className=" hover-zoom">
                <Link to={myVariables.contactPage} className="text-decoration-none mx-auto">
                    <div className="card theme border-0">
                        <div className="card-body">
                            <p>Let's Work</p>
                            <h3 className={'text-uppercase letter-spacing fw-bold'}>Contact </h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ContactCom;