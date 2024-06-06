import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { getAuthUser } from "../../helper/Storage";

const auth = getAuthUser();

export default function Create() {
  const [addUserCase, setAddUserCase] = useState({
    name: "",
    description: "",
    numberOfCase: "",
    phoneNumber: "",
    caseFile: null,
  });



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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', addUserCase.name);
    formData.append('description', addUserCase.description);
    formData.append('numberOfCase', addUserCase.numberOfCase);
    formData.append('phoneNumber', addUserCase.phoneNumber);
    formData.append('caseFile', addUserCase.caseFile);

    // Debugging logs
    console.log("Form Data:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.post(
        `https://thelawcafe-v1.onrender.com/case/addCase`,
        formData, {
          headers: {
            accesstoken: `accesstoken_${auth.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response);
      setAddUserCase({
        name: "",
        description: "",
        numberOfCase: "",
        phoneNumber: "",
        caseFile: null,
      });
      navigate('/Cases');
    } catch (error) {
      console.log("Submission Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex w-100 justify-content-center align-items-center vh-100">
        <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded bg-white">
          <h1 className="frm">Add a Case</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                className="form-control m-3"
                placeholder="Enter Case Name"
                value={addUserCase.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                name="numberOfCase"
                className="form-control m-3"
                placeholder="Enter Case Number"
                value={addUserCase.numberOfCase}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <input
                type="tel"
                name="phoneNumber"
                className="form-control m-3"
                placeholder="Enter Phone Number"
                value={addUserCase.phoneNumber}
                onChange={handleChange}
                title="Please enter a valid Egyptian phone number starting with +2"
              />
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
              ></textarea>
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="caseFile"
                className="form-control m-3"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btncase2">
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
