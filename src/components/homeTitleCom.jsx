import React from 'react';
import profileAPI from "../APIStore/profileAPI.js";

const HomeTitleCom = () => {
    const {profile}=profileAPI()
    return (
        <>
            <div className="col-12 theme p-3">
                <p>Hi! There I'm</p>
                <h1 className={'text-uppercase'}>Professional {profile?.specialist}</h1>
                <p>{profile?.desc}</p>
            </div>
        </>
    );
};

export default HomeTitleCom;