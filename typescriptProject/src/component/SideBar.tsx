import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import {FiHome,FiUserPlus,FiUsers,FiCalendar,FiBarChart2,FiCreditCard} from 'react-icons/fi'
const SideBar = () => {

    return(
        <>
        {/* <Link to="/">l</Link> */}
        <div className="sidebarcontent">
        
            <Container>
               <div>

               <div className="companyratechild">
                  <div>
                     <span className="company">Company's Startup</span>
                  </div>
                        <div>
                        <span>80%</span>
                        </div>
                   </div>

                   <div className="volume">
                   <div className="volumeinside"></div>
                   </div>

                   <div>
                       
                       <Link to="/" className="link">
                       <div className="home">
                      
                        <FiHome  size="20" color='black'/><span className="spanhome">Home</span>
                        </div>
                       </Link>
                       
                       <Link to="/newmember" className="link">
                        <div className="new-member">
                        <FiUserPlus  size="20"/> <span className="spanhome">New Member</span>
                        </div>
                        </Link>

                        <div className="payroll">
                        <FiCreditCard  size="20"/> <span className="spanhome">Payroll</span>
                        </div>

                        <div className="company">
                        <FiUsers   size="20"/> <span className="spanhome">Company Staff</span>
                        </div>

                        <div className="schedule">
                        <FiCalendar  size="20"/> <span className="spanhome">Schedule Meetings</span>
                        </div>
                        <div className="sidehr">
                            <hr />
                        </div>

                        <div className="companydtl">
                        <FiBarChart2  size="20"/> <span className="spanhome">Company's Details</span>
                        </div>
                   </div>
               </div>
            </Container>
        </div>

        </>
    )
}

export default SideBar;