import React from 'react';
import about from '../../images/about-me.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="image">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h2>About Me</h2>
                        <p>My goal is to be a professional web developer and work on a local or global industries to utilize my web development skills. My another goal is to be a a successful person.</p>
                        <p>To be a professional and successful web developer I have to learn and develop without any limit. I have to learn a lot. There is no limit of learning and earning to enhance my skills. We have to practice every day as more time as I can.</p>
                        <p>I always try to complete every day tasks and also try to practice the tasks that gives us in the course. I also try to work hard for assignments to make the assignment unique, good looking and obviously fulfill the given requirements. If I faced any problem I try to solve that problem from the conceptual session and support session.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;