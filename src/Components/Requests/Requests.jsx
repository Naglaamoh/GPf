import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

export default function Requests() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/cases')
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
      data.filter((f) => f.caseNum && f.caseNum .toLowerCase().includes(event.target.value))
    );
  }


  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to refuse?");
    if(confirm){
      axios.delete('http://localhost:4000/cases/' + id)
      .then((res) => {
        setRecords(records.filter(record => record.id !== id));
        setData(data.filter(record => record.id !== id));

      }).catch((err) => console.log(err));
    }
  }



  // const handleAccept = (record) => {
  //   axios.post('http://localhost:4000/acceptedCases', record)
  //     .then((res) => {
  //       axios.delete(`http://localhost:4000/cases/${record.id}`)
  //         .then((res) => {
  //           setRecords(records.filter(r => r.id !== record.id));
  //           setData(data.filter(r => r.id !== record.id));
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // };


  const handleAccept = (record) => {
    navigate('/selectLawyer', { state: { record } });
  };


  return (
    <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4">List of Requests</h1>

      <div className="list w-75 rounded  border shadow p-4 ">

      <div className='d-flex flex-row '>
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
              <th>Read</th>
              <th>Accept</th>
              <th>Refuse</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.client}</td>
                <td>{d.caseNum}</td>
                
                <td>
                  <Link
                    to={`/readRequest/${d.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Read
                  </Link>
                </td>

                {/* <td>
                <button
                    onClick={e => handleAccept(d)}
                    className="btn btn-sm btn-success me-2"
                  >
                    Accept
                  </button>
                </td> */}

                {/* <td>
                  <Link to={'/selectLawyer'} className='btn btn-sm btn-success me-2'>Accept</Link>
                </td> */}

                <td>
                  <button onClick={() => handleAccept(d)} className="btn btn-sm btn-success me-2"> Accept</button>
                </td>

                <td>
                <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger me-2'>Refuse</button>
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}




{
  /* <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div> */
}