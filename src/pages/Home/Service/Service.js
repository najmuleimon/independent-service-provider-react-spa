import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import './Service.css';

const Service = ({service}) => {
    const {id, name, price, img, description} = service;

    const navigateToServiceDetail = id =>{
        navigate(`/checkout/${id}`);
    }

    const navigate = useNavigate();
    return (
        <div className='col-md-6 col-lg-4'>
            <Card>
                <Card.Img variant="top" className='img-fluid' src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <p>{description}</p>
                    <button className='card-btn' onClick={() => navigateToServiceDetail(id)}>Buy Now <FiShoppingCart className="cart-icon"/></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;