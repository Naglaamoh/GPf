// import Axios  from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar' 

export default function Create() {
 
  const [values, setValues] = useState({
    client: '',
    number: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/cases', values)
      .then((res) => {
        console.log(res);
        navigate('/Cases');
      })
      .catch((err) => console.log(err));
  };

  return (<>
  <Navbar/>
    
    <div className="d-flex w-100 justify-content-center align-items-center vh-100">
      <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded bg-white">
        <h1 className="frm">Add a Case</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-2">
            {/* <label htmlFor="client">Name:</label> */}
            <input
              type="text"
              name="client"
              className="form-control m-3"
              placeholder="Enter Case Name"
              onChange={(e) => setValues({ ...values, client: e.target.value })}
            />
          </div>

          {/* <div className="mb-2">
         
            <input
              type="tel"
              name="number"
              className="form-control m-3 text-dark"
              placeholder="Enter phone Number"
              onChange={(e) => setValues({ ...values, number: e.target.value })}
              pattern="^\+2\d{11}$"
              title="Please enter a valid Egyptian phone number starting with +2"
            />
          </div> */}

      {/* <div>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div> */}

          <div className="mb-2">
            {/* <label htmlFor="description">Description:</label> */}
            <textarea
              name="description"
              id="description"
              cols="75"
              rows="5"
              className="form-control m-3"
              placeholder="Enter Case Description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            ></textarea>
          </div>

          <button className="btncase2">Submit</button>

         <button className="btncase2">  <Link className="btncase" to="/home">
            Back
          </Link>
          </button>
        </form>
      </div>
    </div></>
  );
}

