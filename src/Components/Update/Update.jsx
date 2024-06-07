import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const { id } = useParams();

  const [values, setValues] = useState({
    appointment: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get(`http://localhost:4000/cases/` + id)
      .get(`http://localhost:4000/ziad/` + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  },[id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/ziad/` + id, values)
      .then((res) => {
        console.log(res);
        navigate('/caseOfLawyer');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center vh-100">
      <div className="frmm w-50 border shadow px-5 pt-3 pb-5 rounded">
        <h2 className="frm">Update Appointment</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <input
              type="text"
              name="appointment"
              className="form-control m-3"
              placeholder="Edit Appointment"
              value={values.appointment}
              onChange={(e) =>
                setValues({ ...values, appointment: e.target.value })
              }
            />
          </div>

          <button className="btn btn-success ms-3 mt-4">Update</button>
          <Link to="/caseOfLawyer" className="btn btn-primary ms-3 mt-4">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
