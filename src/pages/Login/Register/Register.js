import React, {useEffect , useState} from 'react';
import Form from 'react-bootstrap/Form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '', password: '', confirmPassword: '' 
    });

    const [errors, setErrors] = useState({
        email: '', password: '', confirmPassword: '', agree: '', general: ''
    });

    const [ createUserWithEmailAndPassword, user, loading , createError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    // handle email
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

    // handle password
    const handlePassword = (event) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password must minimum eight characters, at least one letter, one number and one special character" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    // handle confirm password
    const handleConfirmPassword = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, confirmPassword: "" });
        } else {
            setErrors({ ...errors, confirmPassword: "Confirm password didn't match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    }

    // handle register
    const handleSignUp = async (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const agree = event.target.terms.checked;

        if(agree){
            await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            await updateProfile({ displayName: userName });
        }
        else{
            setErrors({...errors, agree: "You have to agree the terms and conditions"})
        }
        
    }

    useEffect(() => {
        if(loading || updating){
            return <Loading/>
        }
    }, [])
    
    useEffect(() => {
        if(createError){
            setErrors({...errors, general: createError.message});
            toast("Register Failed!!");
        }
    }, [createError]);


    useEffect(() => {
        if(user){
            navigate('/');
            toast('Register Successfully !!')
        }
    }, [user])

    return (
        <div className='sign-in-up container'>
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                    <h2>sign up</h2>
                    <div className="main-area">
                        
                        <Form className='text-start' onSubmit={handleSignUp}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="userName" required/>
                            </Form.Group>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" required onChange={handleConfirmPassword}/>
                                {errors?.confirmPassword && <p className='error-msg'><AiOutlineInfoCircle className='error-icon'/>{errors.confirmPassword}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree the Terms and Conditions" name="terms" />
                                {errors?.agree && <p className='error-msg'><AiOutlineInfoCircle className='error-icon'/>{errors.agree}</p>}
                            </Form.Group>
                            <button type="submit" className='submit-btn'>
                                Sign up
                            </button>
                        </Form>
                        {errors?.general && <p className='error-msg'>{errors.general}</p>}

                        <p>Already have an account? <Link to="/login">Login</Link></p>
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

export default Register;