import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const TestimonialCom = () => {
    return (
        <>
            <div className=" hover-zoom w-100">
                <Link to={myVariables.testimonialPage}>
                    <img src={myVariables.testimonialCardImg} alt="testimonial image" className="w-100 rounded-4" />
                </Link>
            </div>
        </>
    );
};

export default TestimonialCom;