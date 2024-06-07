import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

import { getAuthUser } from "../../Components/helper/Storage";


const auth = getAuthUser();

export default function Create() {
  const [addUserCase, setAddUserCase] = useState({
    name: "",
    description: "",
    numberOfCase: "",
    phoneNumber: "",
    caseFile: null,
  });

// console.log(auth);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "caseFile") {
      setAddUserCase((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setAddUserCase((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!addUserCase.name) newErrors.name = "Case Name is required";
    if (!addUserCase.numberOfCase) newErrors.numberOfCase = "Case Number is required";
    if (!addUserCase.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!addUserCase.description) newErrors.description = "Case Description is required";
    if (!addUserCase.caseFile) newErrors.caseFile = "Case File is required";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
      }
      
      
      
      // console.log("Form Data:");
      // for (let [key, value] of formData.entries()) {
        //   console.log(key, value);
        // }
        console.log("Form submitted");
        
        
      const formData = new FormData();
      formData.append('name', addUserCase.name);
      formData.append('description', addUserCase.description);
      formData.append('numberOfCase', addUserCase.numberOfCase);
      formData.append('phoneNumber', addUserCase.phoneNumber);
      formData.append('caseFile', addUserCase.caseFile);
      await axios.post(
        `https://thelawcafe-v1.onrender.com/case/addCase`,
        formData
            );
      console.log('====================================');
      console.log("123123123");
      console.log('====================================');
      // setAuthUser(response.data.data)


    axios
      .post('https://thelawcafe-v1.onrender.com/case/addCase', values,{
        headers: {
          accesstoken: `accesstoken_${auth.token}`,
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        console.log(res);
        navigate('/request');
      })
      .catch((err) => console.log(err));

      // console.log(response);
      setAddUserCase({
        name: "",
        description: "",
        numberOfCase: "",
        phoneNumber: "",
        caseFile: null,
      });
      // navigate('/Cases');
    
  };

  return (
    <>
      <Navbar />
      <div className="d-flex w-100 justify-content-center align-items-center vh-100">
        <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded bg-white">
          <h1 className="frm">Add a Case</h1>
          <form >
            <div className="mb-2">
              <input
                type="text"
                name="name"
                className="form-control m-3"
                placeholder="Enter Case Name"
                value={addUserCase.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="text-danger m-3">{errors.name}</div>}
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="numberOfCase"
                className="form-control m-3"
                placeholder="Enter Case Number"
                value={addUserCase.numberOfCase}
                onChange={handleChange}
                required
              />
              {errors.numberOfCase && <div className="text-danger m-3">{errors.numberOfCase}</div>}
            </div>

            <div className="mb-2">
              <input
                type="tel"
                name="phoneNumber"
                className="form-control m-3"
                placeholder="Enter Phone Number"
                value={addUserCase.phoneNumber}
                onChange={handleChange}
                required
                title="Please enter a valid phone number"
              />
              {errors.phoneNumber && <div className="text-danger m-3">{errors.phoneNumber}</div>}
            </div>

            <div className="mb-2">
              <textarea
                name="description"
                id="description"
                cols="75"
                rows="5"
                className="form-control m-3"
                placeholder="Enter Case Description"
                value={addUserCase.description}
                onChange={handleChange}
                required
              ></textarea>
              {errors.description && <div className="text-danger m-3">{errors.description}</div>}
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="caseFile"
                className="form-control m-3"
                onChange={handleChange}
                required
              />
              {errors.caseFile && <div className="text-danger m-3">{errors.caseFile}</div>}
            </div>
            
            <button  onClick={handleSubmit} className="btncase2">
              Submit
            </button>
            <button className="btncase2">
              <Link className="btncase" to="/home">
                Back
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
