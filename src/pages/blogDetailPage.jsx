import React, {useEffect, useState} from 'react';
import Layout from "../components/layout/layout.jsx";
import blogAPI from "../APIStore/blogAPI.js";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import profileAPI from "../APIStore/profileAPI.js";


const BlogDetailPage = () => {
    const {blogDetail,blogDetailRequest, commentPost, commentResponse } = blogAPI()
    const {profile, profileRequest} = profileAPI()
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            await blogDetailRequest(id)
            await profileRequest()
        })()
    }, [id]);

    // comment
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        desc: ""
    });


    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // comment post success message
    const [showMessage, setShowMessage] = useState(false);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        await commentPost(id,formData); // Send form data to API
        await blogDetailRequest(id)

        if (commentResponse) {
            setShowMessage(true);
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000); // Hide after 5 seconds

            return () => clearTimeout(timer); // Cleanup timer on unmount
        }

    };





    return (
        <Layout>
            <div className="container ">
                <div className="row theme p-3">
                    <div className="col-12">
                        <img src={blogDetail?.img} alt="blog image" className={'w-100 rounded'} />
                        <h1>{blogDetail?.title}</h1>
                        <div className="d-flex gap-3 m-3">
                            <span className={'bg-gradient p-1 shadow rounded-5 '}>{blogDetail?.updatedAt.split("T")[0]}</span>
                            <span className={'bg-gradient p-1 shadow rounded-5 '}>{blogDetail?.comment.length} Comment(s)</span>
                        </div>
                        <div className={'my-3'}>
                        <ReactMarkdown>
                            {blogDetail?.desc}

                        </ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className="row theme p-3 my-3">
                    <div className="col-12">
                        <h3 className={'text-uppercase border-bottom p-1'}>{blogDetail?.comment.length} Comment(s)</h3>
                        {
                            blogDetail?.comment.length > 0 &&
                            <>
                            {
                                blogDetail?.comment.map(comment => {
                                    return (
                                        <div className={'border-bottom mb-3'}>
                                            <h3><i class='bi bi-person-circle'></i> {comment?.name}</h3>
                                            <span className={'float-end bg-gradient rounded-5 p-1 shadow'}>{comment?.createdAt.split("T")[0]}</span>
                                            <p className={'ps-5'}>{comment?.desc}</p>
                                        </div>
                                    )
                                })
                            }
                            </>
                        }
                    </div>
                </div>
                <div className="row theme p-3 my-3">
                    <h3 className={'text-uppercase'}>Post a comment</h3>
                    <p>Your email address will not be published.</p>

                    <form onSubmit={handleSubmit}>
                        <div className={'d-flex gap-3 my-3'}>
                            <input
                                type="text"
                                name='name'
                                placeholder='Full name'
                                className={'form-control w-50'}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name='email'
                                placeholder='E-mail'
                                className={'form-control w-50'}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            className={'form-control'}
                            name='desc'
                            placeholder='Enter Your Comment'
                            value={formData.desc}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn btn-primary my-3 ">Submit</button>
                    </form>
                    <div>
                        {showMessage && (
                            <p>
                                {commentResponse}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetailPage;