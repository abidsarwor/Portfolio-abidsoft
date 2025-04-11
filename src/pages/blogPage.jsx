import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import {Helmet} from "react-helmet";
import profileAPI from "../APIStore/profileAPI.js";
import blogAPI from "../APIStore/blogAPI.js";
import {Link} from "react-router-dom";
import myVariables from "../assets/myVariables.js";

const BlogPage = () => {
    const {profile, profileRequest} = profileAPI()
    const {blog, blogRequest} = blogAPI()

    useEffect(() => {
        (async ()=>{
            await profileRequest()
            await blogRequest()
        })()
    }, []);

    return (
        <>
            <Helmet>
                <title>Blog || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container theme p-3">
                    <div className="row">
                        <div className="col-12 p-3">
                            <h1 className={'text-uppercase'}>{profile?.blogTitle}</h1>
                            <p>{profile?.blogDesc}</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {blog?.map((item, index)=>{
                            return (
                                <div className="col-md-6">
                                    <Link key={index} to={myVariables.blogPage+"/"+item?._id} className="text-decoration-none mx-auto ">
                                        <div className="card p-3 theme bg-gradient shadow">
                                            <div className="card-img-top">
                                                <img src={item?.img} alt="blog img"
                                                     className={'rounded hover-zoom w-100'}/>
                                            </div>
                                            <div className="body m-2">
                                                <spam
                                                    className={"border p-1 rounded-5"}>{item?.createdAt.split("T")[0]}</spam>
                                                <h1>{item?.title}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default BlogPage;