import './App.css'
import './index.css'
import Home from './Components/Home/Home';
import { Children , Component, useState } from 'react';
import Parent from './Components/Parent/Parent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Cases from './Components/Cases/Cases'
import About from './Components/About/About'
import Profile from './Components/Profile/Profile'
import Initial from './Components/Initial/Initial';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Forgetpassword from './Components/Forgetpassword/Forgetpassword'
import Changepassword from './Components/Changepassword/Changepassword'
import { jwtDecode } from 'jwt-decode';

// import Dashboard from './Components/Admin/dashboard';
// import Team from '../src/Components/Admin/team';
// import Invoices from '../src/Components/Admin/invoices';
// import Contacts from '../src/Components/Admin/contacts';
// import Calendar from '../src/Components/Admin/calendar';
// import Header from '../src/Components/Admin/dashboard/Header'
// import ErrorBoundary from './Components/ErrorBoundary';
import Contact from "./Components/Contact/Contact";

export default function App() {
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken);
  }

    let routers = createBrowserRouter([


      {path:'/', element:<Initial/>} ,
      // {path:'/initial', element:<Initial/>},
      {path:'/login', element:<Login/>},
      {path:'/register', element:<Register/>},
      {path:'/home', element:<Home setuserData={setuserData} userData={userData}/>},
      {path:'/case', element:<Cases/>},
      {path:'/about', element:<About/>},
      {path:'/profile', element:<Profile userData={userData}/>},
      {path:'/contact', element:<Contact/>},
      {path:'/forgetpassword', element:<Forgetpassword/>},

      {path:'/changepassword', element:<Changepassword/>},
      
        // {path:'/admin', element:<ErrorBoundary><Dashboard/></ErrorBoundary>},
      {/* //  children:[

      //   {path:'/team', element:<Team/>},
      //   {path:'/invoices', element:<Invoices/>},
      //   {path:'/contacts', element:<Contacts/>},
      //   {path:'/calendar', element:<Calendar/>},
    // ] */
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
      {/* <Home/> */}
      <Parent />
    </>
  );
}
