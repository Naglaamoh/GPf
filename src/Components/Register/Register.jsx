import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Joi from 'joi';

function Register() {
    //const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        phoneNumber: '',
        address: '',
    });

    const getUserData = eventInfo => {
        const { name, value } = eventInfo.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const register = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(
                'https://thelawcafe-v1.onrender.com/auth',
                user
            );
            console.log(response);
            setIsLoading(false);
            setSuccessMessage('User created successfully, please check your email to verify your account');
            // Reset the form after successful registration
            setUser({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                age: '',
                phoneNumber: '',
                address: ''
            });
            // Redirect to login page
            // navigate('initial/initial/initial/register/login');
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setError('Failed to register. Please try again.');
        }
    };

    const submitRegisterForm = event => {
        event.preventDefault();
        register();
    };

        function validateRegisterForm(){

            let scheme = Joi.object({
                username:Joi.string().pattern(/^[A-Z]/).min(3).max(15).required(),
                email:Joi.string().email({tids:{allow: ['com','net']}}).required(),
                phoneNumber:Joi.number().pattern(/01[0125][0-9]{8}/).required(),
            });
            return scheme.validate(user , {abortEarly:false});
        }

    return (
        <>
       
            {error && <div className="alert alert-danger my-2">{error}</div>}
            {successMessage && <div className="alert alert-success my-2">User created successfully, please check your email to verify your account</div>}

            <section className="section-form">
                <h2>Register</h2>

                <form onSubmit={submitRegisterForm}>
                    <input
                        onChange={getUserData}
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        id="username"
                        value={user.username}
                    />
                    <input
                        onChange={getUserData}
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        value={user.email}
                    />
                    <input
                        onChange={getUserData}
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        id="password"
                        value={user.password}
                    />
                    <input
                        onChange={getUserData}
                        type="password"
                        placeholder="Enter confirmPassword"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={user.confirmPassword}
                    />
                    <input
                        onChange={getUserData}
                        type="text"
                        placeholder="Enter YourPhoneNumber"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={user.phoneNumber}
                    />
                    <input
                        onChange={getUserData}
                        type="text"
                        placeholder="Enter YourAddress"
                        name="address"
                        id="address"
                        value={user.address}
                    />
                    <input
                        onChange={getUserData}
                        type="number"
                        placeholder="Enter YourAge"
                        name="age"
                        id="age"
                        min="18"
                        max="70"
                        value={user.age}
                    />
                   
                    
                    <button className="submit" disabled={isLoading}>
                        {isLoading ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            'Register'
                        )}
                    </button>
                    Have An Account <Link to='/login'>Log In</Link>
                </form>
            </section>
            
        </>
    );
}

export default Register;