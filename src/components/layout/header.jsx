import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import myVariables from "../../assets/myVariables.js";

const Header = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return JSON.parse(sessionStorage.getItem("darkMode") || "true");
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }
        sessionStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md mt-3">
                <div className="container theme shadow rounded-3">
                    <div className="row w-100 d-md-flex align-items-center">
                        {/* Logo Section - Left */}
                        <div className="col-md-3 d-flex col-10 align-items-center">
                            <Link to="/" className="navbar-brand">
                                <img src={myVariables.logoImg} alt="Logo" height="80px" width="200px" />
                            </Link>
                        </div>

                        {/* Navigation Links - Centered */}
                        <div className="col-md-6 d-md-flex d-none justify-content-center align-items-center">
                            <div className="collapse navbar-collapse w-100" id="navbarNav">
                                <ul className="navbar-nav d-flex justify-content-center w-100">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={myVariables.aboutPage} className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={myVariables.contactPage} className="nav-link typing-link">
                                            <Typewriter
                                                words={["Hire Me", "Need Help?", "Contact Now"]}
                                                loop={true}
                                                cursor={true}
                                                cursorStyle="|"
                                                typeSpeed={100}
                                                deleteSpeed={80}
                                                delaySpeed={1000}
                                                autoStart={true}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar & Dark Mode Toggle - Always Visible */}
                        <div className="col-md-3 col-2 d-flex justify-content-end gap-3">
                            {/* Dark Mode Button (Only for Large Screens) */}
                            <button onClick={toggleDarkMode} className="d-md-block d-none btn">
                                {darkMode ? (
                                    <> Light Mode <i className="bi bi-sun"></i> </>
                                ) : (
                                    <> Dark Mode <i className="bi bi-moon"></i> </>
                                )}
                            </button>
                            <button onClick={toggleSidebar} className="btn rounded-circle shadow border me-md-2">
                                ☰
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Navigation */}
            <div className={`side-navbar ${sidebarOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                <ul className="list-unstyled">
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to={myVariables.aboutPage} onClick={toggleSidebar}>About</Link></li>
                    <li><Link to={myVariables.projectPage} onClick={toggleSidebar}>Projects</Link></li>
                    <li><Link to={myVariables.blogPage} onClick={toggleSidebar}>Blog</Link></li>
                    <li><Link to={myVariables.servicePage} onClick={toggleSidebar}>Services</Link></li>
                    <li><Link to={myVariables.testimonialPage} onClick={toggleSidebar}>Testimonials</Link></li>
                    <li><Link to={myVariables.contactPage} onClick={toggleSidebar}>Contact</Link></li>
                </ul>

                {/* Dark Mode Toggle (Only in Sidebar for Mobile) */}
                <button onClick={toggleDarkMode} className="btn bg-gradient rounded-5 mt-3 d-md-none">
                    {darkMode ? (
                        <> Light Mode <i className="bi bi-sun"></i> </>
                    ) : (
                        <> Dark Mode <i className="bi bi-moon"></i> </>
                    )}
                </button>
            </div>

            {/* Styles */}
            <style>
                {`
                    .typing-link {
                        font-weight: bold;
                        min-width: 120px;
                    }

                    .side-navbar {
                        position: fixed;
                        top: 0;
                        right: -250px;
                        width: 250px;
                        height: 100%;
                        background: #333;
                        color: white;
                        padding: 20px;
                        transition: 0.3s;
                        z-index: 1000;
                    }

                    .side-navbar.open {
                        right: 0;
                    }

                    .side-navbar ul {
                        padding: 0;
                        margin: 0;
                        list-style: none;
                    }

                    .side-navbar ul li {
                        padding: 10px 0;
                        text-align: left;
                    }

                    .side-navbar ul li a {
                        color: white;
                        text-decoration: none;
                        font-size: 18px;
                    }

                    .side-navbar .close-btn {
                        position: absolute;
                        top: 10px;
                        right: 15px;
                        background: none;
                        border: none;
                        color: white;
                        font-size: 20px;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
