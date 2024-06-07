// import React from 'react'
import Navbar from '../Navbar/Navbar'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuthUser } from "../../Components/helper/Storage";

const auth = getAuthUser();
export default function Mycases() {

 const [data, setData] = useState([]);
  const [cases, setCases] = useState([]);
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await axios.get(
        `https://thelawcafe-v1.onrender.com/case/getAllMyCasesAsClient`, {
          
          headers: {
            accesstoken: `accesstoken_${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCases(response.data.data);
    //   setUpdateUser(response.data.data);
    console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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

  // const handleDelete = (id) => {
  //   const confirm = window.confirm("Are you sure to refuse?");
  //   if(confirm){
  //     axios.delete('http://localhost:4000/acceptedCases/' + id)
  //     .then((res) => {
  //       setRecords(records.filter(record => record.id !== id));
  //       setData(data.filter(record => record.id !== id));

  //     }).catch((err) => console.log(err));
  //   }
  // }

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to refuse?");
    if(confirm){
      axios.delete('https://thelawcafe-v1.onrender.com/case/deleteCase/'+id,{
        
        headers: {
        accesstoken: `accesstoken_${auth.token}`,
        "Content-Type": "application/json",
        
      }})
    //   .then((res) => {
    //     axios.delete('http://localhost:4000/ziad/' + id)
      .then((res) => {
        setRecords(records.filter(record => record.id !== id));
        setData(data.filter(record => record.id !== id));

      }).catch((err) => console.log(err));
        

    //   }).catch((err) => console.log(err));
    }
  }
  return (
   <>
   <Navbar/>

   <div className="bodyhome2">

   <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4">List Of All Cases</h1>

      <div className="list w-75 rounded  border shadow p-4 ">
        <div className="d-flex flex-row ">
          <div className="d-flex flex-row w-100">
            <input
              type="text"
              className="form-control my-2 mx-1"
              onChange={FilterClient}
              placeholder="Search By Case Name"
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
        <table className="table table-striped">
              <thead>
                <tr>
                  <th>Case Name</th>
                  <th>Case Num</th>
                  <th>Description</th>
                  <th>Phone Number</th>
                  <th>Case File</th>
                  <th>Cancel</th>
                </tr>
              </thead>

              <tbody>
                {cases.map((d, i) => (
                  <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.numberOfCase}</td>
                    <td>{d.description}</td>
                    <td><a href="https://wa.me/+201016821173">{d.phoneNumber}</a></td>
                    <td>
                      <a href={d.caseFile.secure_url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-warning me-2">
                        Read
                      </a>
                    </td>
                    {/* <td>
                      <a
                        href={https://wa.me/${d.phoneNumber}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-success"
                      >
                        Contact
                      </a>
                    </td> */}
                    <td>
                      <button onClick={() => handleDelete(d._id)} className="btn btn-sm btn-danger me-2">Delete</button>
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
    </div>
   
   
   </>
  )
}
