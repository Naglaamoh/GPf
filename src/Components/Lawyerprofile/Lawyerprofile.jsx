import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { getAuthUser } from "../../Components/helper/Storage";

const auth = getAuthUser();

export default function Profile({ userData }) {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    username: "",
    age: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://thelawcafe-v1.onrender.com/user/profileData`, {
          
          headers: {
            accesstoken: `accesstoken_${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data.data);
      setUpdateUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, age, phoneNumber, address } = updateUser;
      const response = await axios.put(
        `https://thelawcafe-v1.onrender.com/user`, 
        { username, age, phoneNumber, address },
        {
          headers: {
            accesstoken: `accesstoken_${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchUserData();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     
     <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black',position:'fixed'}} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={`../images/logo3.jpg`} alt='logo' style={{ height: '50px', width: '50px',borderRadius:'50%' }} />        </a>
                    <span className='LOGO'>Law Café</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/lawyerhome">Home</Link>
                            </li>
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/cases">Client Cases</Link>
                            </li>
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/lawyerprofile">My Profile</Link>
                            </li>
                        </ul>

                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit" style={{backgroundColor:'#63502b', color:"white"}}>Search</button>
                    </form>
                    <li className='logout'><span>LogOut</span>
                    
                    </li>


                   

                                        
                </div>
            </nav>
      <div className="bodyhome2">

      <div className="photoprofile">
      <i class="fa-solid fa-user profile"></i>
      </div>
      <section className="section-forminfo" >
        <h2 className="info">My Profile</h2>

        {isEditing ? (
          <form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
            
                <label style={{ fontWeight: "bold" }} className="lab1 labell">Username: </label>
                <input 
                  type="text" 
                  name="username" 
                  value={updateUser.username} 
                  onChange={handleChange} 
                  className='labell'
                />
              
                <label className="lab1 labell">Phone Number: </label>
                <input 
                  type="text" 
                  name="phoneNumber" 
                  value={updateUser.phoneNumber} 
                  onChange={handleChange} 
                  className='labell'
                />
             
                <label className="lab1 labell">Email: </label>
                <input 
                  type="email" 
                  name="email" 
                  value={updateUser.email} 
                  onChange={handleChange} 
                  className='labell'
                />
              
                <label className="lab1 labell">Age: </label>
                <input 
                  type="text" 
                  name="age" 
                  value={updateUser.age} 
                  onChange={handleChange} 
                  className='labell'
                />
              
                <label className="lab1 labell">Address: </label>
                <input 
                  type="text" 
                  name="address" 
                  value={updateUser.address} 
                  onChange={handleChange} 
                  className='labell'
                />
              
            <button type="submit" className="save labbtn">Save</button>
            <button type="button" className="cancel labbtn" onClick={handleEditToggle}>Cancel</button>
          </form>
        ) : (
          <div style={{ fontWeight: "bold" }}>
           
                <label style={{ fontWeight: "bold" }} className="lab1 labell">Username: {user.username} </label>
             
                <label className="lab2 labell">Phone Number: {user.phoneNumber} </label>
             
                <label className="lab3 labell">Email: {user.email} </label>
             
                <label className="lab4 labell">Age: {user.age} </label>
              
                <label className="lab4 labell">Address: {user.address} </label>

                <Link to='/changepassword' className='forget' ><p style={{marginTop:'5px' }}>Change password</p>  </Link>

             
            <button type="button" className="edit" onClick={handleEditToggle}>Edit Profile</button>
          </div>
        )}
      </section>
      </div>
    </>
  );
}
