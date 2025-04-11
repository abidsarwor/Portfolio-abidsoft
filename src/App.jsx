import React, {useEffect} from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ProjectPage from "./pages/projectPage.jsx";
import BlogPage from "./pages/blogPage.jsx";
import ServicePage from "./pages/servicePage.jsx";
import TestimonialPage from "./pages/testimonialPage.jsx";
import ProjectDetailPage from "./pages/projectDetailPage.jsx";
import BlogDetailPage from "./pages/blogDetailPage.jsx";
import ScrollToTopCom from "./components/scrollToTopCom.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTopCom/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/project" element={<ProjectPage/>} />
                <Route path="/project/:id" element={<ProjectDetailPage/>} />
                <Route path="/blog" element={<BlogPage/>} />
                <Route path="/blog/:id" element={<BlogDetailPage/>} />
                <Route path="/service" element={<ServicePage/>} />
                <Route path="/testimonial" element={<TestimonialPage/>} />
                <Route path="/contact" element={<ContactPage/>} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;