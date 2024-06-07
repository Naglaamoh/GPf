import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cases() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/acceptedCases')
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
      axios.delete('http://localhost:4000/acceptedCases/' + id)
      .then((res) => {
        axios.delete('http://localhost:4000/ziad/' + id)
      .then((res) => {
        setRecords(records.filter(record => record.id !== id));
        setData(data.filter(record => record.id !== id));

      }).catch((err) => console.log(err));
        

      }).catch((err) => console.log(err));
    }
  }

 

  return (

    
    <>
    <div className="bodylawyer">
      <>

    
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black',position:'fixed'}} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={`../images/logo3.jpg`} alt='logo' style={{ height: '50px', width: '50px',borderRadius:'50%' }} />        </a>
                    <span className='LOGO'>Law Café</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/lawyerhome">Home</Link>
                            </li>
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/cases">Client Cases</Link>
                            </li>
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/lawyerprofile">My Profile</Link>
                            </li>
                        </ul>

                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit" style={{backgroundColor:'#63502b', color:"white"}}>Search</button>
                    </form>
                    <li className='logout'><span>LogOut</span>
                    
                    </li>


                   

                                        
                </div>
            </nav>
    
    
    </>
      
    
    <div className="d-flex flex-column align-items-center vh-100 pt-5 ">
      <h1 className="head mt-4">List Of All Cases</h1>

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
              <th>Read</th>
              <th>WhatsApp</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
              <tr >
                <td>1</td>
                <td>Mostafa Tarek</td>
                <td>C001</td>
                <td><button className='btn btn-info '>Read</button></td>
                <td>  <button className='btn btn-success'><Link
            to="https://wa.me/+201153706089"
            className="whatsapp"style={{color:'white'}}
            target="_blank"><i class="fa-brands fa-whatsapp"></i></Link></button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
              <tr >
                <td>2</td>
                <td>Youssef Otb</td>
                <td>C002</td>
                <td><button className='btn btn-info '>Read</button></td>
                <td><button className='btn btn-success'><Link
            to="https://wa.me/+201117546811"
            className="whatsapp"style={{color:'white'}}
            target="_blank"><i class="fa-brands fa-whatsapp"></i></Link></button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
              <tr >
                <td>3</td>
                <td>Mohamed Hamdy</td>
                <td>C003</td>
                <td><button className='btn btn-info '>Read</button></td>
                <td><button className='btn btn-success'><Link
            to="https://wa.me/+201144859517"
            className="whatsapp"style={{color:'white'}}
            target="_blank"><i class="fa-brands fa-whatsapp"></i></Link></button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
          </tbody>
        </table>

        {/* <div className="mt-3">
          <strong>Total Cases: {records.length}</strong>
          </div> */}
      </div>
    </div>
    </div>
          </>
  );
}






