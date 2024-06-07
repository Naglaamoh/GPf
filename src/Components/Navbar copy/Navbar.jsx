import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav className='p-2 m-1 flex-md-row flex-column d-flex justify-content-between'>

  <div className="logo left-nav flex-md-row flex-column d-flex align-items-center ">
      <h1 className='m-0 pe-3'>The Law Café</h1>
  </div>



  <div className="right-nav d-flex flex-md-row flex-column align-items-center ">

  <ul className='list-unstyled flex-md-row flex-column d-flex m-0 align-items-center '>
          <li className='px-2'> <Link to='/'>Home</Link></li>
          <li className='px-2'> <Link to='caseOfLawyer'>Cases</Link></li>
          {/* <li className='px-2'> <Link to='profile'>Profile</Link></li> */}
          <li className='px-2 ps-5 cursor_pointer'> <span>Logout</span> </li>
          
      </ul>
  </div>
</nav>
}
