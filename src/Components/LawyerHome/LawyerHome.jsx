import React from 'react';
import Nakd from '../Images/photo_2024-05-01_20-35-35.jpg';
import Estanaf from '../Images/5201616161332800.jpg';
import Ebtdaey from '../Images/photo_2024-05-30_03-49-16.jpg';
import Gozeya from '../Images/images.jpeg';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function LawyerHome({userData , setuserData}) {

  let navigate = useNavigate();

  function logout()
  {
      localStorage.removeItem('userToken')
      setuserData(null);
      navigate('/login');
  }

  return (
    <>
     <div className="bodylawyer">
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'black',position:'fixed'}} logout={logout} userData={userData} >
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
                    <li className='logout' onClick={logout}><span>LogOut</span>
                    
                    </li>


                   

                                        
                </div>
            </nav>
    
    
    </>
      

      <section className="start">
        <div className="container d-flex flex-column align-items-center ">
          <h1>We are here to defend rights and justice</h1>
        </div>
      </section>

      <section className="home">
        <div className="container">
          <div className="court">
            <h2>Types Of Courts</h2>
          </div>

          <div className="backhome p-2 mb-5 row">
            <div class="col-md-4">
              <div>
                <img src={Nakd} class="w-100" />
              </div>
            </div>
            <div class="col-md-7 offset-md-1  d-flex flex-column align-items-center ">
              <div>
                <h3 class="h2">The Court of Cassation</h3>
                <p>
                  The Court of Cassation comes at the top of the ordinary
                  courts, as it consists of 11 judges, and is specialized in
                  ruling on rulings issued by the High Court of Appeal and
                  rulings issued by a court of first instance to an appellate
                  body, and the ruling issued by the Court of Cassation is a
                  final ruling. However, the Court of Cassation may challenge
                  the ruling in some cases:
                  <br />
                  1) If the ruling was issued by an economic court.
                  <br />
                  2) If the ruling has been appealed for the second time.
                  <br />
                  In both cases, the Court of Cassation may rule on the case
                </p>
              </div>
            </div>
          </div>

          <div className="backhome p-2 mb-5 row">
            <div class="col-md-7 offset-md-1  d-flex flex-column align-items-center ">
              <div>
                <h3 class="h2">The Court of Appeal</h3>
                <p>
                  As for the courts of appeal, they are considered second-tier
                  courts in Egypt, meaning that the convict has the right to
                  file a grievance before them against the rulings issued by the
                  first-tier courts, whether the rulings were issued by a court
                  of first instance or a summary court, so the dispute is
                  brought before them again to decide on it by issuing a final
                  ruling. The Court of Appeal consists of a president and a
                  sufficient number of deputies, heads of chambers, and judges.
                  The court is divided into several circuits, each of which
                  includes three judges. The General Assembly of each court of
                  appeal is responsible for determining the number of chambers
                  and distributing work within them.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div>
                <img src={Estanaf} class="w-100" />
              </div>
            </div>
          </div>

          <div className="backhome p-2 row mb-5">
            <div class="col-md-4">
              <div>
                <img src={Ebtdaey} class="w-100" />
              </div>
            </div>
            <div class="col-md-7 offset-md-1  d-flex flex-column align-items-center ">
              <div>
                <h3 class="h2">The Court of First_instance</h3>
                <p>
                  As for the court of first instance or the total court, it is a
                  court of first instance, and it may be a court of second
                  instance, and it consists of three judges. It is a court of
                  first instance in the case that is filed before it for the
                  first time, and it may be a court of second instance in
                  judgments issued before the district court, which are appealed
                  to the higher court. One of them is a degree, and it may be a
                  court of first instance with an appellate body, and the value
                  quorum of the court of first instance is forty thousand
                  pounds. There are lawsuits filed before the court of first
                  instance even if the value quorum is different, such as
                  bankruptcy lawsuits, protective settlement, insolvency
                  lawsuits, lawsuits to withdraw writings, and appeals against
                  decisions regarding the assessment of compensation for
                  expropriation. These lawsuits It is filed for the first time
                  before the court of first instance, regardless of its type
                </p>
              </div>
            </div>
          </div>

          <div className="backhome p-2 mb-5 row">
            <div class="col-md-7 offset-md-1  d-flex flex-column align-items-center ">
              <div>
                <h3 class="h2">The District Court</h3>
                <p>
                  As for the district court, it consists of one judge and is a
                  court of first instance only. The quorum for the district
                  court is from 5,000 pounds to 40,000 pounds. Judgments issued
                  by courts of first instance may be appealed before the court
                  of first instance in its capacity as second instance. However,
                  if the value of the lawsuit is less than 5,000 pounds, then
                  the ruling issued in this lawsuit is a final ruling that may
                  not be appealed except before the Court of Cassation. There
                  are some lawsuits that are filed in a district court,
                  regardless of their value. For example: Lawsuits for
                  determining boundaries and estimating distances - Lawsuits
                  related to water and clearing canals and drains of easement
                  rights such as the right to drink and stream - Lawsuits for
                  the division of common property - Lawsuits for authenticity of
                  signature - Lawsuits for handing over originally filed real
                  estate - Lawsuits related to agricultural land. These lawsuits
                  are filed for the first time before the District Court,
                  whatever the case may be. Its value.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div>
                <img src={Gozeya} class="w-100" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="fixed-bottom right-100 p-3"
          style={{ zIndex: '999', left: 'initial' }}
        >
          <a
            href="https://wa.me/+201016821173"
            className="whatsapp_float"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp fa-2x whatsapp-icon"></i>
          </a>
        </div>
      </section>
      </div>
    </>
  );
}

// fa fa-whatsapp
