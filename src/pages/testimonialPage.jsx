import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import profileAPI from "../APIStore/profileAPI.js";
import testimonialAPI from "../APIStore/testimonialAPI.js";
import {Helmet} from "react-helmet";
import myVariables from "../assets/myVariables.js";

const TestimonialPage = () => {

    const {testimonial, testimonialRequest} = testimonialAPI()
    const {profile, profileRequest} = profileAPI();

    useEffect(() => {
        (async () => {
            await testimonialRequest()
            await profileRequest()
        })()
    }, []);

    return (
        <>
            <Helmet>
                <title>Testimonial || {profile?.specialist || ""}</title>
            </Helmet>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-12 theme p-3">
                            <h1 className={'text-uppercase'}>{profile?.testimonialTitle}</h1>
                            <p>{profile?.testimonialDesc}</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        {testimonial?.map((item, index)=>{
                            return (
                                <div key={index} className="col-md-6">
                                    <div className="card theme border-0 mb-3 p-3 shadow">
                                        <div className="card-body">
                                            <div className="row border-bottom">
                                                <div className="col-3 ">
                                                    <img src={item?.photo} alt="person image" className={'img-fluid rounded-circle'} />
                                                </div>
                                                <div className="col-6">
                                                    <h6>{item.name}</h6>
                                                    <p>{item.ratings} <i className='bi bi-star-fill'></i></p>
                                                </div>
                                                <div className="col-3 ">
                                                    <img src={myVariables.barImg} alt="bar image" className={'img-fluid'}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <p>{item?.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default TestimonialPage;