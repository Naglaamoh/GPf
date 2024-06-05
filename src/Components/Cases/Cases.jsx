import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

export default function Create() {
  
  
  const [values, setValues] = useState({
    client: '',
    number: '',
    description: '',
    caseNum: '',
    file: null,
  });



  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/cases', values)
      .then((res) => {
        console.log(res);
        navigate('/request');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div className="bodyhome2">
    <div className="d-flex w-100 justify-content-center align-items-center vh-100">
      <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded bg-white">
        <h1 className="frm">Add a Case</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="client"
              className="form-control m-3"
              placeholder="Enter Name"
              required
              onChange={(e) => setValues({ ...values, client: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              name="cNum"
              className="form-control m-3"
              placeholder="Enter Case Number "
              required
              onChange={(e) =>
                setValues({ ...values, caseNum: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <input
              type="tel"
              name="number"
              className="form-control m-3 text-dark"
              placeholder="Enter phone Number"
              required
              onChange={(e) => setValues({ ...values, number: e.target.value })}
              pattern="^\+2\d{11}$"
              title="Please enter a valid Egyptian phone number starting with +2"
            />
          </div>

          <div className="mb-2">
            <textarea
              name="description"
              id="description"
              cols="75"
              rows="5"
              required
              className="form-control m-3"
              placeholder="Enter Case Description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className="mb-2">
            <input
              type="file"
              name="file"
              className="form-control m-3"
              required
              onChange={(e) =>
                setValues({ ...values, file: e.target.files[0] })
              }
            />
          </div>

          <button className="btncase2">Submit</button>
          <button className="btncase2">  <Link className="btncase" to="/home">
            Back
          </Link>
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}