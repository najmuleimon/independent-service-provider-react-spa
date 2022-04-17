import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import service1 from '../../../images/service1.jpg';
import service2 from '../../../images/service2.jpg';
import service3 from '../../../images/service3.jpg';
import service4 from '../../../images/service4.jpg';
import service5 from '../../../images/service5.jpg';
import service6 from '../../../images/service6.jpg';

const Services = () => {

    const services = [
        {id: 1, name: 'Fitness exercise routine', price: 999, img: service1, description: 'You can get a proper and detailed fitness exercise routine. This routine includes diet chart, when to eat, what to eat, when to do exercise, which exercise on which time, which day etc.'},
        {id: 2, name: 'Weight loss', price: 789, img: service2, description: 'If you are over weight, you can get a weight loss training to reduce your extra weight and get fit. '},
        {id: 3, name: 'Fat burning course', price: 651, img: service3, description: 'If you are Fat and you have suffering from you extra fat in your body this course is a remedy for you to burn your fat and get slim and fit.'},
        {id: 4, name: 'Neck exercise for neck pain', price: 487, img: service4, description: 'If you have neck pain and you will get relief from your pain you can try my neck exercise course to get back from you pain.'},
        {id: 5, name: 'Muscle building course', price: 879, img: service5, description: 'If you are under weight or slim person and you want to get bigger muscle or get weight, this muscle building course will help you to get perfect body weight and enhance your muscle power.'},
        {id: 6, name: 'Yoga and meditation', price: 458, img: service6, description: 'Yoga and meditation have both become increasingly popular in the Western world, and practitioners praise their psychological and physical benefits. Current research also suggests that meditating and doing yoga can boost overall well-being and resilience to stress factors.'}
    ]

    return (
        <div className='service'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>My Services</h2>
                    </div>
                    {
                        services.map(service => <Service key={service.id} service={service}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;