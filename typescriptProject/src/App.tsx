import NavbarComponent from './component/NavbarContainer';
// import SideBar from './component/SideBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routerpages/Home';
import NewMember from './routerpages/NewMember';
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
        </Routes>
    </Router>
  
   </div>
  
  )
}

export default App;
