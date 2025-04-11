import React, { useState, useEffect, useRef } from 'react';
import profileAPI from "../APIStore/profileAPI.js";

const ServiceFooterCom = () => {
    const { profile } = profileAPI();

    //------ Not for you------
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when at least 50% of the div is visible
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);
    // -------------------------

    // years of experience
    const targetNumber = profile?.yearsOfExperience || 0;
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (isVisible && count === 0 && targetNumber > 0) {
            let current = 0;
            const interval = setInterval(() => {
                current += 0.1;
                setCount(current);
                if (current >= targetNumber) {
                    clearInterval(interval);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isVisible, targetNumber]);

    // project completed
    const targetNumber1 = profile?.projectsCompleted || 0;
    const [count1, setCount1] = useState(0);
    useEffect(() => {
        if (isVisible && count1 === 0 && targetNumber1 > 0) {
            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                setCount1(current);
                if (current >= targetNumber1) {
                    clearInterval(interval);
                }
            }, 10);
            return () => clearInterval(interval);
        }
    }, [isVisible, targetNumber1]);

// satisfied client
    const targetNumber2 = profile?.satisfiedClients || 0;
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        if (isVisible && count2 === 0 && targetNumber2 > 0) {
            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                setCount2(current);
                if (current >= targetNumber2) {
                    clearInterval(interval);
                }
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isVisible, targetNumber2]);

// working hour
    const targetNumber3 = profile?.workingTimeHour || 0;
    const [count3, setCount3] = useState(0);
    useEffect(() => {
        if (isVisible && count3 === 0 && targetNumber3 > 0) {
            let current = 0;
            const interval = setInterval(() => {
                current += 0.1;
                setCount3(current);
                if (current >= targetNumber3) {
                    clearInterval(interval);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isVisible, targetNumber3]);


    return (
        <div ref={divRef} className="card theme border-0">
            <div className="card-body text-center">
                <div className="row d-flex">
                    <div className="col-3">
                        <h1>{count.toFixed(1)}+</h1>
                        <h4>Years Of Experience</h4>
                    </div>
                    <div className="col-3">
                        <h1>{count1}+</h1>
                        <h4>Projects Completed</h4>
                    </div>
                    <div className="col-3">
                        <h1>{count2}+</h1>
                        <h4>Satisfied Clients</h4>
                    </div>
                    <div className="col-3">
                        <h1>{count3.toFixed(1)}K+</h1>
                        <h4>Working Hour</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFooterCom;
