import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { date } from 'joi';
import { setAuthUser } from "../../Components/helper/Storage";


 function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
       
       
    });

    const getUserData = eventInfo => {
        const { name, value } = eventInfo.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const login = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(
                'https://thelawcafe-v1.onrender.com/auth/login',
                user
            );
            console.log(response);
            setIsLoading(false);
            // localStorage.setItem('userToken', date.token)
            setAuthUser(response.data.data)

            // Reset the form after successful registration
            setUser({
                email: '',
                password: '',
               
            });
            // Redirect to login page
        
            navigate('../Home');
        } catch (error) {
            setIsLoading(false);

            console.log(error);
            setError('Failed to register. Please try again.');
        }
    };

    const submitRegisterForm = event => {
        event.preventDefault();
        login();
    };

    return (
        <>
         

            {error && <div className="alert alert-danger my-2">{error}</div>}
            <div className="bodyhome2">
            <section className="section-formlogin">
                <h2>Login</h2>

                <form onSubmit={submitRegisterForm}>
                  
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
                   <div className="d-flex  flex-row-reverse">

                   <Link to='/forgetpassword' className='forget' ><p style={{marginTop:'5px' }}>Forget Password?</p>  </Link>
                    
                    </div>  
                
                    
                    <button className="submit" disabled={isLoading}>
                        {isLoading ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            'Login'
                        )}
                    </button>
                    <p style={{marginTop:'5px'}}> Don't have An Account <Link to='/register'>Sign Up</Link></p> 
                  
                </form>
            </section>
            </div>
        </>
    );
}
export default Login;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { date } from 'joi';
// import { setAuthUser } from "../../Components/helper/Storage";


//  function Login() {
//     const navigate = useNavigate();
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
       
       
//     });

//     const getUserData = eventInfo => {
//         const { name, value } = eventInfo.target;
//         setUser(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const login = async () => {
//         try {
//             setIsLoading(true);
//             const response = await axios.post(
//                 'https://thelawcafe-v1.onrender.com/auth/login',
//                 user
//             );
//             console.log(response);
//             setIsLoading(false);
//             // localStorage.setItem('userToken', date.token)
//             setAuthUser(response.data.data)

//             // Reset the form after successful registration
//             setUser({
//                 email: '',
//                 password: '',
               
//             });
//             // Redirect to login page
        
//             navigate('../Home');
//         } catch (error) {
//             setIsLoading(false);

//             console.log(error);
//             setError('Failed to register. Please try again.');
//         }
//     };

//     const submitRegisterForm = event => {
//         event.preventDefault();
//         login();
//     };

//     return (
//         <>
         

//             {error && <div className="alert alert-danger my-2">{error}</div>}
//             <div className="bodyhome2">
//             <section className="section-formlogin">
//                 <h2>Login</h2>

//                 <form onSubmit={submitRegisterForm}>
                  
//                     <input
//                         onChange={getUserData}
//                         type="email"
//                         placeholder="Enter your email"
//                         name="email"
//                         id="email"
//                         value={user.email}
//                     />
//                     <input
//                         onChange={getUserData}
//                         type="password"
//                         placeholder="Enter password"
//                         name="password"
//                         id="password"
//                         value={user.password}
//                     />
//                    <div className="d-flex  flex-row-reverse">

//                    <Link to='/forgetpassword' className='forget' ><p style={{marginTop:'5px' }}>Forget Password?</p>  </Link>
                    
//                     </div>  
                
                    
//                     <button className="submit" disabled={isLoading}>
//                         {isLoading ? (
//                             <i className="fas fa-spinner fa-spin"></i>
//                         ) : (
//                             'Login'
//                         )}
//                     </button>
//                     <p style={{marginTop:'5px'}}> Don't have An Account <Link to='/register'>Sign Up</Link></p> 
                  
//                 </form>
//             </section>
//             </div>
//         </>
//     );
// }
// export default Login;

