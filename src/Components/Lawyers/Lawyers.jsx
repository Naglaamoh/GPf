import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Lawyers() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const record = location.state?.record;

  useEffect(() => {
    axios
      .get('http://localhost:4000/lawyers')
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const FilterLawyer = (event) => {
    setRecords(
      data.filter((f) => f.lawyer.toLowerCase().includes(event.target.value))
    );
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to refuse?");
    if(confirm){
      axios.delete('http://localhost:4000/lawyers/' + id)
      .then((res) => {
        setRecords(records.filter(record => record.id !== id));
        setData(data.filter(record => record.id !== id));

      }).catch((err) => console.log(err));
    }
  }

  return (
    <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4">List Of Lawyers</h1>
      <div className="list w-75 rounded  border shadow p-4 ">

      <div className='d-flex justify-content-end'>
          <Link to="/addLawyer" className='btn btn-warning'>Add +</Link>
        </div>
     
      <div className="d-flex flex-row w-100">
          <input
            type="text"
            className="form-control my-2 mx-1"
            onChange={FilterLawyer}
            placeholder="Search By Lawyer Name"
          />
        </div>

        <table className="table table-stripend ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Lawyer</th>
              {/* <th>Num Of Cases</th> */}
              <th>WhatsApp</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.lawyer}</td>
                {/* <td>{d.numOfCases}</td> */}

                <td>
                  <a
                    href={`https://wa.me/${d.number}`}
                    target="_blank"
                    className="btn btn-sm btn-success"
                  >
                    Contact
                  </a>
                </td>
                
                <td>
                   <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
                </td>

                </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}




