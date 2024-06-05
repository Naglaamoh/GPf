import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Initial from '../Initial/Initial'

export default function Layout() {
  return (<>
 <Navbar/>

<Footer/>

<Outlet></Outlet>

  
  
  </>

  )
}
