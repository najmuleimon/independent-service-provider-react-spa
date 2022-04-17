import React from 'react';
import about from '../../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-1 order-lg-0">
                        <h2>What makes <span>Muscle Magic</span> special?</h2>
                        <p>I m a personal fitness trainer. Are u a person, who becomes fatty ,bulky and then now your career is on the line. Get back in shape! My Fitness training can help u look younger, get fit, and get back in shape. My state of the art gyms training provide you with a great guideline to work out in, whether you are there to burn off some calories or are training for something more specific. So what are you waiting for Feel free to call me? I am here to help you!</p>
                        <h4>Great Fitness Training</h4>
                        <p>Train with the best expert in bodybuilding field.</p>

                        <h4>Fitness Exercise Routine</h4>
                        <p>Train with proper time and routine</p>
                    </div>
                    <div className="col-lg-6 order-0 order-lg-1">
                        <div className="image">
                            <img src={about} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;