import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function Profile({ userData }) {
  const [user, setUser] = useState([])
  let { username, email, age, phoneNumber, address } = userData || {};

  useEffect(()=> {
    fetchUserData()
  },[])

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://thelawcafe-v1.onrender.com/user/profileData`
      )
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const [profileData, setProfileData] = useState({
    username: username || "",
    email: email || "",
    age: age || "",
    phoneNumber: phoneNumber || "",
    address: address || ""
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      <div className="photoprofile">
        <i className="fa-regular fa-user profile"></i>
      </div>
      <section className="section-forminfo">
        <h2 className="info">My Profile</h2>

        <form>
          <ul>
            <li>
              <label className="lab1">Username: </label>
             
            </li>
            <li>
              <label className="lab2">Phone Number: </label>
              
            </li>
            <li>
              <label className="lab3">Email: </label>
            
            </li>
            <li>
              <label className="lab4">Age: </label>
           
            </li>
            <li>
              <label className="lab4">Address: </label>
            
            </li>
          </ul>

          <button type="button" className="edit">Edit Profile</button>
        </form>
      </section>
    </>
  );
}