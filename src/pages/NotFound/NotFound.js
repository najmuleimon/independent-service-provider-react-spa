import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h3>404</h3>
                        <h4>Not Found</h4>
                        <p>The page you looking for is not found!!</p>
                        <button onClick={() => navigate('/')}>Go back Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;