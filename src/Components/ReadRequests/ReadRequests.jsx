import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ReadRequests() {

  const [data, setData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cases/` + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  },[id] );


  const renderFile = (file) => {
    if (typeof file === 'string') {
      // Assuming file is a URL or filename
      return <a href={file} target="_blank" rel="noopener noreferrer">{file}</a>;
    } else if (file && typeof file === 'object') {
      // Assuming file is an object, extract relevant information
      return <span>{file.name}</span>; // Adjust according to your file object structure
    } else {
      return <span>No file uploaded</span>;
    }
  };


  return (
    <div className="d-flex w-100 justify-content-center align-items-center vh-100 " >
      <div className='read  w-50 rounded  border shadow px-5 pt-5 pb-5 '>
          {/* <h2 className=''>Case {data.caseNum} </h2> */}
          <div className="mb-2">
            <strong>Client Name : {data.client}</strong>
          </div>

          <div className="mb-2">
            <strong>Case Number : {data.caseNum}</strong>
          </div>


          <div className="mb-2">
            <strong>Case Description : {data.description}</strong>
          </div>

          <div className="mb-2">
             <strong>Case File : {renderFile(data.file)}</strong>
          </div>

          <Link to="/request" className='btn btn-primary mt-4 me-2'>Back</Link>


      </div>
    </div>
  )

}


