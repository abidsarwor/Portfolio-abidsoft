import React from 'react';
import Header from "./header.jsx";
import BodyLayout from "./bodyLayout.jsx";
import Footer from "./footer.jsx";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <BodyLayout>
                {children}
            </BodyLayout>
            <Footer/>

        </>
    );
};

export default Layout;