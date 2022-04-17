import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Difference between authorization and authentication</h2>
                        <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has permission or access to. Authentication works through passwords, one-time pins, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization.</p>

                        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Firebase is a platform developed by Google for creating mobile and web applications. We use Firebase for some services provided by firebase to build mobile and web applications. These are authentication, realtime database, hosting etc. </p>
                        <p>Parse, Back4App, AWS, Kuzzle, Couchbase, NativeScript etc are the other options to implement authentication.</p>
                        <p>These all are alternative to Firebase that are open-source application stack and backend framework that offers a collection of tools and features that helps to solve several digital needs. These offers a collection of tools and features to help develop web and mobile applications.</p>

                        <h2>What other services does firebase provide other than authentication</h2>
                        <p>The services provided by firebase other than authentication are Google Analytics, Hosting, Database, Dynamic Links etc</p>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;