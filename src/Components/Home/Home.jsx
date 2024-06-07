
// import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Home({userData , setuserData}) {

    let navigate = useNavigate();

    function logout()
    {
        localStorage.removeItem('authUser')
        
        navigate('/login');
    }
    
  return (<>
  
  
<Navbar logout={logout} userData={userData}/>
    <div className="bodyhome">
        <div class="divhome">

            <div className="team">
                <div className="divteam">
                    <h2 className="hhome">Our Team</h2>
                    <div className="discription">
                        <p className="disc1">Our team excels in providing precise legal consultations and resolving diverse
                            legal matters with utmost expertise</p>
                       <Link to="/ourteam"> <button className="btnteam">Show The Team</button> </Link>
                    </div>
                </div>
            </div>
            <div className="hours">
                <div className="welcome">
                    <h2 className="hwelcome"> welcome,<br /> Dear!</h2>

                    <p className="pinitial" >
                        Your Initial Consultation <br /> With A Lawyer is FREE!
                    </p>
                </div>
                <div className="hourwork">
                    <h2 className="hhome">Working Hours</h2>
                    <p className="whours"><i class="fa-regular fa-clock" style={{marginRight:'7px'}}></i>9am : 7pm</p>
                   <Link to="/case"><button className="btnhours"><a className="a3" href="#">Book an Appointment</a></button></Link> 
                </div>
            </div>
            <div className="news">
                <div className="divnews">
                    <h2 className="hhome">Latest News</h2>
                    <button className="btnnews"><a className="a3" href="https://newsapi.org/pricing" target="_blank">Pricing</a></button>
                    <button className="btnnews"> <a className="a3"
                        href="https://news.google.com/rss/articles/CBMitgNodHRwczovL3d3dy5tYXNyYXd5LmNvbS9uZXdzL25ld3MtYmFua2luZy9kZXRhaWxzLzIwMjQvNC8xNi8yNTY4MjU4LyVEOCVBOCVEOSU4QSVEOSU4NiVEOSU4NyVEOSU4NSVEOCVBNy0lRDglQTclRDklODQlRDglQTMlRDklODclRDklODQlRDklOEEtJUQ5JTg4JUQ5JTg1JUQ4JUI1JUQ4JUIxLSVEOCVCMyVEOCVCOSVEOCVCMS0lRDglQTclRDklODQlRDglQUYlRDklODglRDklODQlRDglQTclRDglQjEtJUQ5JThBJUQ4JUIxJUQ4JUFBJUQ5JTgxJUQ4JUI5LSVEOCVBNyVEOSU4NCVEOSU4QSVEOSU4OCVEOSU4NS0lRDglQTclRDklODQlRDglQUIlRDklODQlRDglQTclRDglQUIlRDglQTclRDglQTEtJUQ5JTg1JUQ4JUI5LSVEOSU4NSVEOSU4NiVEOCVBQSVEOCVCNSVEOSU4MS0lRDglQTclRDklODQlRDglQUElRDglQjklRDglQTclRDklODUlRDklODQlRDglQTclRDglQUHSAboDaHR0cHM6Ly93d3cubWFzcmF3eS5jb20vbmV3cy9uZXdzLWJhbmtpbmcvZGV0YWlscy8yMDI0LzQvMTYvMjU2ODI1OC8lRDglQTglRDklOEElRDklODYlRDklODclRDklODUlRDglQTctJUQ4JUE3JUQ5JTg0JUQ4JUEzJUQ5JTg3JUQ5JTg0JUQ5JThBLSVEOSU4OCVEOSU4NSVEOCVCNSVEOCVCMS0lRDglQjMlRDglQjklRDglQjEtJUQ4JUE3JUQ5JTg0JUQ4JUFGJUQ5JTg4JUQ5JTg0JUQ4JUE3JUQ4JUIxLSVEOSU4QSVEOCVCMSVEOCVBQSVEOSU4MSVEOCVCOS0lRDglQTclRDklODQlRDklOEElRDklODglRDklODUtJUQ4JUE3JUQ5JTg0JUQ4JUFCJUQ5JTg0JUQ4JUE3JUQ4JUFCJUQ4JUE3JUQ4JUExLSVEOSU4NSVEOCVCOS0lRDklODUlRDklODYlRDglQUElRDglQjUlRDklODEtJUQ4JUE3JUQ5JTg0JUQ4JUFBJUQ4JUI5JUQ4JUE3JUQ5JTg1JUQ5JTg0JUQ4JUE3JUQ4JUFBP2FtcA?oc=5" target="_blank">EgyptNews</a></button>
                    <button className="btnnews"><a className="a3"
                        href="https://news.google.com/rss/articles/CBMi1wFodHRwczovL3d3dy5zbmFidXNpbmVzcy5jb20vYXJ0aWNsZS8xNzA2OTEyLSVEOCVBNyVEOSU4NCVEOCVCMCVEOSU4NyVEOCVBOC0lRDklOEElRDklODQlRDklODUlRDglQjktJUQ5JTgzJUQ4JUE3JUQ5JTg0JUQ4JUE3JUQ5JTk0JUQ5JTg0JUQ5JTg1JUQ4JUE3JUQ4JUIzLSVEOSU4QSVEOCVCNSVEOSU4NC0zMDAwLSVEOCVBRiVEOSU4OCVEOSU4NCVEOCVBNyVEOCVCMSVEOCU5RtIBAA?oc=5" target="_blank">Economic
                        News</a></button>
                    <button className="btnnews"><a className="a3" href="https://www.filgoal.com/" target="_blank"> Sports</a></button>
                    <button className="btnnews"><a className="a3" href="https://www.reuters.com/legal/" target="_blank"> Legal news</a></button>

                </div>
            </div>
        </div>

    </div>
    <Footer/>
  
  </>)
    
}

        
    
    