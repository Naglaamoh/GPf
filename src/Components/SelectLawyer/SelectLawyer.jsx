import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function SelectLawyer() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [casesData, setCasesData] = useState([]);
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

      axios
      .get('http://localhost:4000/acceptedCases')
      .then((res) => {
        setCasesData(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  const FilterLawyer = (event) => {
    setRecords(
      data.filter((f) => f.lawyer.toLowerCase().includes(event.target.value))
    );
  };

  const getNumOfCases = (lawyerId) => {
    return casesData.filter((caseRecord) => caseRecord.lawyerId === lawyerId).length;
  };

  // const handleAdd = (lawyer) => {
  //   const updatedRecord = { ...record, lawyerId: lawyer.id };
  //   axios.post('http://localhost:4000/acceptedCases', updatedRecord)
  //     .then((res) => {
  //       axios.delete(`http://localhost:4000/cases/${record.id}`)
  //         .then((res) => {
  //           navigate('/request');
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // };


  const handleAdd = (lawyer) => {
    const updatedRecord = { ...record, lawyerId: lawyer.id };
    axios.post('http://localhost:4000/acceptedCases', updatedRecord)
      .then((res) => {
        axios.post('http://localhost:4000/ziad', updatedRecord)
       .then((res) => {
          axios.delete(`http://localhost:4000/cases/${record.id}`)
          .then((res) => {
            navigate('/request');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
        
      })
      .catch((err) => console.log(err));
  };


  

  return (
    <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4"></h1>

      <div className="list w-75 rounded  border shadow p-4 ">
        
     
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
              <th>Num Of Cases</th>
              <th>Add Case</th>
              
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.lawyer}</td>
                <td>{getNumOfCases(d.id)}</td>
                <td>
                  <button onClick={() => handleAdd(d)} className="btn btn-sm btn-warning me-2">Add</button>
                </td>
                </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}



