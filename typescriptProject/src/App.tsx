import NavbarComponent from './component/NavbarContainer';
// import SideBar from './component/SideBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routerpages/Home';
import NewMember from './routerpages/NewMember';
import Payroll from './routerpages/Payroll';
import CompanyStaff from './routerpages/CompanyStaff';
import Schedule from './routerpages/Schedule';
import CompanyDetails from './routerpages/CompanyDetails';

// import SideBar from './component/SideBar';



function App() {

  return (
   <div className="">
   
   <div>
   <NavbarComponent />
  
   </div>

    
       <Router>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/newmember" element={ <NewMember />}></Route>
          <Route path="/payroll" element={ <Payroll />}></Route>
          <Route path="/companystaff" element={ <CompanyStaff />}></Route>
          <Route path="/schedule" element={ <Schedule />}></Route>
          <Route path="/companydetails" element={ <CompanyDetails />}></Route>
         
        </Routes>
    </Router>
  
   </div>
  
  )
}

export default App;
