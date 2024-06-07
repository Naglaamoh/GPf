import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CaseOfLawyer() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/ziad`)
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const FilterClient = (event) => {
    setRecords(
      data.filter((f) => f.client.toLowerCase().includes(event.target.value))
    );
  };

  const FilterCaseNum = (event) => {
    setRecords(
      data.filter(
        (f) => f.caseNum && f.caseNum.toLowerCase().includes(event.target.value)
      )
    );
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4">List Of Cases Of Lawyer</h1>

      <div className="list w-75 rounded  border shadow p-4 ">
        <div className="d-flex flex-row ">
          <div className="d-flex flex-row w-100">
            <input
              type="text"
              className="form-control my-2 mx-1"
              onChange={FilterClient}
              placeholder="Search By Client Name"
            />
          </div>

          <div className="d-flex flex-row w-100">
            <input
              type="text"
              className="form-control my-2 mx-1"
              onChange={FilterCaseNum}
              placeholder="Search By Case Number"
            />
          </div>
        </div>

        <table className="table table-stripend ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Case Num.</th>
              <th>Appointment</th>
              <th>Read</th>
              <th>Edit</th>
              <th>WhatsApp</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.client}</td>
                <td>{d.caseNum}</td>
                <td>{d.appointment}</td>
                {/* <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Read
                  </Link>
                </td> */}

                <td>
                  <Link
                    to={`/readLawyer/${d.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Read
                  </Link>
                </td>

                <td>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <a
                    href={`https://wa.me/${d.number}`}
                    target="_blank"
                    className="btn btn-sm btn-success"
                  >
                    Contact
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="mt-3">
          <strong>Total Cases: {records.length}</strong>
        </div> */}
      </div>
    </div>
  );
}
