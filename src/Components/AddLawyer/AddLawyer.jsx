import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddLawyer() {
  const [values, setValues] = useState({
    lawyer: '',
    number: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:4000/lawyers', values)
      .then((res) => {
        console.log(res);
        navigate('/lawyers');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center vh-100">
      <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded bg-white">
        <h1 className="frm">Add New Lawyer</h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <input
              type="text"
              name="lawyer"
              className="form-control m-3"
              placeholder="Enter Name"
              required
              onChange={(e) => setValues({ ...values, lawyer: e.target.value })}
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

          <button className="btn btn-success ms-3">Submit</button>
          <Link to="/lawyers" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}


