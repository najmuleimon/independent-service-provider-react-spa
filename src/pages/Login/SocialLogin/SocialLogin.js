import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FaGoogle} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/');
            console.log(user);
        }
    }, [user]);
    
    if(loading){
        return <Loading/>
    }
    return (
        <div className='social-btn'>
            {googleError && <p className='error-msg'>{googleError.message}</p>}
            <button type='button' onClick={() => signInWithGoogle()}>
                <FaGoogle className='google-icon'/>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;