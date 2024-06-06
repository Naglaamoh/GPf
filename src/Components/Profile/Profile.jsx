import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { getAuthUser } from "../../helper/Storage";

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
      <Navbar />
      <div className="photoprofile">
        <i className="fa-regular fa-user profile"></i>
      </div>
      <section className="section-forminfo" style={{ height: "80%", width: "80%", marginTop: "5%" }}>
        <h2 className="info">My Profile</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
            <ul>
              <li>
                <label style={{ fontWeight: "bold" }} className="lab1">Username: </label>
                <input 
                  type="text" 
                  
                  name="username" 
                  value={updateUser.username} 
                  onChange={handleChange} 
                />
              </li>
              <li>
                <label className="lab2">Phone Number: </label>
                <input 
                  type="text" 
                  name="phoneNumber" 
                  value={updateUser.phoneNumber} 
                  onChange={handleChange} 
                />
              </li>
              <li>
                <label className="lab3">Email: </label>
                <input 
                  type="email" 
                  name="email" 
                  value={updateUser.email} 
                  onChange={handleChange} 
                  disabled
                />
              </li>
              <li>
                <label className="lab4">Age: </label>
                <input 
                  type="text" 
                  name="age" 
                  value={updateUser.age} 
                  onChange={handleChange} 
                />
              </li>
              <li>
                <label className="lab4">Address: </label>
                <input 
                  type="text" 
                  name="address" 
                  value={updateUser.address} 
                  onChange={handleChange} 
                />
              </li>
            </ul>
            <button type="submit" className="save">Save</button>
            <button type="button" className="cancel" onClick={handleEditToggle}>Cancel</button>
          </form>
        ) : (
          <div style={{ fontWeight: "bold" }}>
            <ul>
              <li>
                <label style={{ fontWeight: "bold" }} className="lab1">Username: {user.username} </label>
              </li>
              <li>
                <label className="lab2">Phone Number: {user.phoneNumber} </label>
              </li>
              <li>
                <label className="lab3">Email: {user.email} </label>
              </li>
              <li>
                <label className="lab4">Age: {user.age} </label>
              </li>
              <li>
                <label className="lab4">Address: {user.address} </label>
              </li>
            </ul>
            <button type="button" className="edit" onClick={handleEditToggle}>Edit Profile</button>
          </div>
        )}
      </section>
    </>
  );
}
