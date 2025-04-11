import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import serviceAPI from "../APIStore/serviceAPI.js";
import profileAPI from "../APIStore/profileAPI.js";
import ServiceFooterCom from "../components/serviceFooterCom.jsx";
import {Helmet} from "react-helmet";
import myVariables from "../assets/myVariables.js";


const ServicePage = () => {

    const {service, serviceRequest} = serviceAPI()
    const {profile, profileRequest} = profileAPI();

    useEffect(() => {
        (async () => {
            await serviceRequest()
            await profileRequest()
        })()
    }, []);

    return (
    <>
        <Helmet>
            <title>Services || {profile?.specialist || ""}</title>
        </Helmet>
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 theme p-3">
                        <h1 className={'text-uppercase'}>{profile?.serviceTitle}</h1>
                        <p>{profile?.serviceDesc}</p>
                    </div>
                </div>

                <div className="row mt-3">
                    {service?.map((item, index)=>{
                        return (
                            <div key={index} className="col-md-6">
                                <div className="card theme shadow border-0 mb-3 p-3">
                                    <img src={myVariables.serviceImg} alt="" className={'w-25'}/>
                                    <div className="card-body">
                                        <h3>{service[index]?.title}</h3>
                                        <ul>
                                            {service[index]?.list?.map((item,index)=>{
                                                return (
                                                    <li className={'list-unstyled'} key={index}><i class = 'bi bi-arrow-right-circle-fill'></i> {item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <ServiceFooterCom/>
                </div>
            </div>
        </Layout>
    </>
    );
};

export default ServicePage;