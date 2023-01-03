import { Container } from "react-bootstrap";
import { useState } from "react";
import {FiMenu,FiX,FiBell} from 'react-icons/fi';
// import {} from 'react-icons/fi';

const NavbarContainer = () => {
    const [clicktoggle,setClicktoggle] = useState(false);
    const Clickhandle = () => setClicktoggle(!clicktoggle)
    const NavList = {
        imageUrl:'./assets/FrePlay.svg',
        notifyIcon:'./assets/notification.svg',
        userImageUrl:'./assets/userImage.svg',
        userNamedetails:'Emmanuel Umeh',
        userdetailsOccupation:'Software Developer',
    }
    return(
    <>
        <div className="navContent">

                <Container>
                    <div className="navChild">
                    <div className="logo">
                    <img src={NavList.imageUrl}/>
                    </div>

                <div className="navdetails">

                    <div className="notifyicon">
                  
                    <FiBell/>
                    </div>

                    <div className="navdetailstwo">
                        <div className="userimg">
                        <img src={NavList.userImageUrl}/>
                        </div>
                        <div className="userdetails">
                        <h3>
                            {NavList.userNamedetails}
                        
                        </h3>
                        <span>{NavList.userdetailsOccupation}</span>
                        </div>
                    </div>

                </div>

                        <div className="menubtn" onClick={Clickhandle}>
                       {
                        clicktoggle ? <FiX size="30"/> :<FiMenu size="30"/>
                       }
                        </div>
                    </div>

                    
                </Container>
          
        </div>
        
    </>
    )
}

export default NavbarContainer ;