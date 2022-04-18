import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h3>Best Fitness Trainer</h3>
                        <h1>Muscle Magic</h1>
                        <p>You have the best gym trainer near you. You can get all types of training to get fit and be strong with Muscle Magic.</p>
                        <Link to="/about" className='about-btn'>About Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;