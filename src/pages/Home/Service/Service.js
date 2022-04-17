import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, price, img, description} = service;

    const navigate = useNavigate();
    return (
        <div className='col-md-4'>
            <Card>
                <Card.Img variant="top" className='img-fluid' src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <p>{description}</p>
                    <button className='card-btn' onClick={() => navigate("/checkout")}>Checkout</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;