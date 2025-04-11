import React, { useState, useEffect, useRef } from 'react';
import profileAPI from "../APIStore/profileAPI.js";

const ExperienceCom = () => {
    const {profile}=profileAPI()

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






    return (
        <div ref={divRef} className="card theme border-0">
            <div className="card-body text-center">
                <div className="row d-flex">
                    <div className="col-6">
                        <h1>{count.toFixed(1)}+</h1>
                        <h4>Years Of Experience</h4>
                    </div>
                    <div className="col-6">
                        <h1>{count1}+</h1>
                        <h4>Projects Completed</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCom;
