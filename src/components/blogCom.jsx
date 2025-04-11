import React from 'react';
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const BlogCom = () => {
    return (
        <>
            <div className=" hover-zoom">
                <Link to={myVariables.blogPage} className="text-decoration-none mx-auto">
                    <div className="card bg-info  border-0">
                        <div className="card-body">
                            <p>Visit My Blog</p>
                            <h3 className={'text-uppercase letter-spacing fw-bold'}>Blog </h3>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default BlogCom;