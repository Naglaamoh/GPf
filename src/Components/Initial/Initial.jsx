import { Margin } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Initial() {
  return (
    <>

      <div className='parent1'>


      <>
            <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor:'black'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={`../images/download3.jpg`} alt='logo' style={{ height: '50px', width: '50px' }} />        </a>
                    {/* <a className="navbar-brand" href="#">Law Cafe</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-right mb-2 mb-lg-0" style={{marginLeft:'700px'}}>
                            <li className="nav-item">
                                <a className="nav-link"style={{fontSize:'20px'}} href="#p1">Our Office</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"style={{fontSize:'20px'}} href="#p2">Inspiration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"style={{fontSize:'20px'}} href="#p3">about us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"style={{fontSize:'20px'}} href="#p4">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"style={{fontSize:'20px'}} href="#p5">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontSize:'20px'}} aria-current="page" to="/login">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"style={{fontSize:'20px'}}  aria-current="page" to="/register">Sign up</Link>
                            </li>
                           
                        </ul>

                    </div>
                </div>
            </nav>
        </>

         
    
     <div className="son11">  <p className="p1">
              we are a law firm to help you find legal solutions to complex business challenges
            </p>
       
    
</div>
</div>


        {/* <div className="parent1"> */}
         
          {/* <div className="son11">
            <h1 className='hinitial'>The Law cafe</h1>
            <p className="p1">
              we are a law firm to help you find legal solutions to complex business challenges
            </p>
            <Link className='aboutus' to="/about">about us..</Link>

      </div>
          <button className="btnlog"><Link className="a2" to="/login">Log In</Link></button>
          <button className="btnsign"><Link className="a2" to="/register">Sign Up</Link></button> */}
        {/* </div> */}
        
        <div className="parent2" id='p1'>

    <h1 className='welcome2'>Welcome To Our Office</h1>
    <div className="law1"><i className="fa-solid fa-scale-balanced i1"> </i>
        <h2 className="family">Family Judges</h2>
        <p className="pwelcome">We have a specialized team for all matters related to the property</p>
        
   </div>
    <div className="law2"><i className="fa-solid fa-gavel i2"></i>
        <h2 className="Criminals">Criminals</h2>
        <p className="pwelcome">We have a specialized team for criminal cases</p>
        
    </div>
    <div className="law3"><i className="fa-solid fa-city i3"></i>
    
    <h2 className="Civil">Civil Judges</h2>
    <p className="pwelcome">We have a specialized team for all matters related to the property</p>
    
    </div>

</div>

<h6 className="ourns"id='p2'>Inspiration</h6>

<div className="parent3">
<div className="photo1">
   
    <div className="photoley1">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Elhousien ElAshry</h4>
    </div>
</div>
<div className="photo2">
    
     <div className="photoley2">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Mahmoud Atef</h4>
     </div>
    </div>
<div className="photo3">
    
     <div className="photoley3">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Elsaid Abdelmonim</h4>
     </div></div>
<div className="photo4">
    
     <div className="photoley4">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Dina Elsied</h4>
     </div></div>
<div className="photo5"> 
    
    <div className="photoley5">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Ghada Osama</h4>
    </div></div>
<div className="photo6"> 
    
    <div className="photoley6">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <h4 className='p44'>Esraa Nour Elden</h4>
    </div></div>
</div>



<div className="parent5" id='p3'>
    <div className="choose1">
        <h6 className='h6choose'>Why Choose Us </h6>
        <p className="why">We aim to provide our clients with premium quality services and innovative legal services and solutions in a wide range of areas such as individuals, companies and registrations. We have extensive experience and a proven track record in the areas of mergers and acquisitions, corporate law, business law, corporate specialization and intellectual property.</p>
    </div>
    <div className="choose2"></div>

    
</div>
<div className="parent6">
  
    <div className="shfaf">
        <div className="icon1f"><i className="fa-solid fa-people-group il"></i> <p className="iconf"> 40 Excellent Lawers</p></div> 
        <div className="icon2"> <i className="fa-solid fa-users il"></i> <p className="iconf">1500 Customers</p></div> 
        <div className="icon3">  <i className="fa-solid fa-building il"></i><p className="iconf">20 Branches</p></div>
        <div className="icon4"><i className="fa-solid fa-file-signature il"></i><p className="iconf">2000 Cases</p> </div> 
    </div>
    
    

    </div>

 <Link to='/login'>
    <div className="parent4"id='p4'>
    <h5 className='offer'>What We Offer</h5>

    
<div className="cont1">
    
    <i className="fa-solid fa-scale-balanced io"></i>
    <span className="span1">Experiences</span>
    <p className="pss">More than ten years of experience</p>

</div>
    
<div className="cont2">
    
    <i className="fa-solid fa-person-walking-with-cane io"></i>
    <span className="span1"> Guidance</span>
    <p className="pss">We will be your guide in all legal consultations</p>

</div>
<div className="cont3"> 
   
    <i className="fa-solid fa-table-list io"></i>
    <span className="span1">Booking Appointments</span>
    <p className="pss">Book your appointments easily</p>

</div>
<div className="cont4">
    
    <i className="fa-solid fa-percent io"></i>
    <span className="span1">Discounts</span>
    <p className="pss">Discounts for all judges</p>

</div>
<div className="cont5">
    
    <i className="fa-solid fa-comments io"></i>
    <span className="span1">Legal Advice</span>
    <p className="pss">The most skilled lawyers for legal advice</p>

</div>
<div className="cont6">
    
    <i className="fa-solid fa-phone-volume io"></i>
    <span className="span1">Immediate Consultations</span>
    <p className="pss">The most skilled lawyers for Immediate Consultations </p>

</div>

</div>
</Link>
 <div className="footer"id='p5'>
       
        <div className="iconfoot">
            
           <a className='afooter' href="#"><i className="fa-brands fa-facebook ww"></i></a> 
           <a className='afooter' href="#"> <i className="fa-brands fa-instagram ww"></i></a>
           <a className='afooter' href="#"><i className="fa-brands fa-linkedin ww"></i></a> 
           <a className='afooter' href="#"><i className="fa-brands fa-x-twitter ww"></i></a> 
        </div>
        <div className="contact">

        <Link className='acontact1' to='/contact'> <i className="far fa-comment-alt iconcon"> </i> </Link>
         <Link className='acontact' to='/contact'>Contact Us</Link>
        </div>
       
    </div>

      

    </>
  )
}
