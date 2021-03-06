import React from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

const Checkout = () => {
    const handleCheckout = e => {
        e.preventDefault();
        toast("Thank you for the booking");
    }

    return (
        <div className='checkout'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2>Checkout</h2>
                        <div className="main-area">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Location/address</Form.Label>
                                    <Form.Control type="text" placeholder="Your address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="tel" placeholder="Phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Your Country" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" placeholder="Description" />
                                </Form.Group>
                                <button variant="primary" className='proceed-btn' onClick={handleCheckout}>
                                    Proceed to Checkout
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;