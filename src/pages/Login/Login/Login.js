import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import './Login.css';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '', password: '' 
    });

    const [errors, setErrors] = useState({
        email: '', password: '', general: ''
    });

    const [ signInWithEmailAndPassword, user, loading, signInError ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(loading || sending){
            return <Loading/>
        }
    }, [])

    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    const handlePassword = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password must minimum eight characters" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        if(signInError){
            setErrors({...errors, general: signInError.message})
        }
    }, [signInError])

    useEffect(() => {
        if(user){
            navigate(from, { replace: true });
            console.log(user);
        }
    }, [user])
    
    const handleForgetPass = async () => {
        const email = userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email);
        }
        else{
            setErrors({...errors, general: "Please enter your email address"})
        }
    }

    useEffect(() => {
        if(resetPassError){
            setErrors({...errors, general: resetPassError.message})
        }
    }, [resetPassError])

    return (
        <div className='sign-in-up login container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h2>Login</h2>
                    <div className="main-area">
                        
                        <Form className='text-start' onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" required onChange={handleEmail}/>
                                {errors?.email && <p className='error-msg'><AiOutlineInfoCircle className='error-icon'/>{errors.email}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" required onChange={handlePassword}/>
                                {errors?.password && <p className='error-msg'><AiOutlineInfoCircle className='error-icon'/>{errors.password}</p>}
                            </Form.Group>
                            <button type="submit" className='submit-btn'>
                                Login
                            </button>
                        </Form>
                        {errors?.general && <p className='error-msg'>{errors.general}</p>}

                        <button className='forget-pass' onClick={handleForgetPass}>Forget Password?</button>
                        <p>New to Muscle Magic? <Link to="/register">Create New Account</Link></p>
                        <div className="divider d-flex align-items-center">
                            <div className="w-50"></div>
                            <span>or</span>
                            <div className="w-50"></div>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;