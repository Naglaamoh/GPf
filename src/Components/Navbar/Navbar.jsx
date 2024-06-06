import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData, logout}) {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black'}}>
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
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/case">Cases</Link>
                            </li>
                           
                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/Profile">My Profile</Link>
                            </li>

                            <li className="nav-item"style={{fontSize:'20px'}}>
                                <Link className="nav-link" aria-current="page" to="/about">about</Link>
                            </li>
                        </ul>

                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit" style={{backgroundColor:'#63502b', color:"white"}}>Search</button>
                    </form>
                    <li className='logout' onClick={logout}><span>LogOut</span>
                    
                    </li>


                    {/* <button className="btn btn-success" style={{ marginLeft: '15px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <a><i className="fa-solid fa-gear"></i></a>
                    </button>

                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header" style={{ backgroundColor: '#fdf0d1a4' }}>
                                <h5 id="offcanvasRightLabel" style={{ fontSize: "16px" }}>Settings</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                    <div className="navigation">
                                        <ul className="list">
                                            <li>
                                                <a href="#">
                                                    <span className="icon"><i className="fa-regular fa-circle-user"></i></span>
                                                </a>
                                                <span className="title">
                                                    <li className="nav-item dropdown"></li>
                                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Your account</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="userinfo.html">Account information</a></li>
                                                        <li><a className="dropdown-item" href="cases.html">Show your cases</a></li>
                                                        <li><a className="dropdown-item" href="changepassword.html">Change Password</a></li>
                                                        <li><a className="dropdown-item" href="#">Logout</a></li>
                                                    </ul>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon"><i className="fa-solid fa-lock"></i></span>
                                                </a>
                                                <span className="title">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Security account access</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Manage Your account</a></li>
                                                            <li><a className="dropdown-item" href="#">Manage Your shared account</a></li>
                                                            <li><a className="dropdown-item" href="#">Connected account</a></li>
                                                        </ul>
                                                    </li>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon"><i className="fa-solid fa-shield-halved"></i> </span>
                                                </a>
                                                <span className="title">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Privacy and sefty</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Your posts</a></li>
                                                            <li><a className="dropdown-item" href="#">Mute and block</a></li>
                                                        </ul>
                                                    </li>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon"><i className="fa-solid fa-bell"></i></span>
                                                </a>
                                                <span className="title">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Notifications</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Choose the notifications you'd like to see</a></li>
                                                        </ul>
                                                    </li>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon"><i className="fa-solid fa-universal-access"></i></span>
                                                </a>
                                                <span className="title">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accessibility, display and languages</a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Manage media</a></li>
                                                            <li><a className="dropdown-item" href="#">languages</a></li>
                                                        </ul>
                                                    </li>
                                                </span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            
                        </div> */}
                </div>
            </nav>
        </>
    )
}
