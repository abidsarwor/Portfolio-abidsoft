import React from 'react';
import profileAPI from "../../APIStore/profileAPI.js";
import myVariables from "../../assets/myVariables.js";


const Footer = () => {

    const {profile} = profileAPI()

    return (
        <>
            <div className="container  ">
                <div className="row">
                    <div className="col-12 text-center mx-auto my-3">
                        <p className={"text-center"}>Copyright {profile?.domainName} <i class={'bi bi-c-circle'}></i>2024. All rights reserved </p>
                        <img src={myVariables.logoImg} alt="logo image" width='200px'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;