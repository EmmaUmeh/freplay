
import { Container } from "react-bootstrap"
import {FiXSquare} from "react-icons/fi"
import CalendarComponent from "./CalenderComponent"

const Detailsholder = {
    payment:"Your payment request has been approved",
    seedetails:"See Details",
    greetUser:"Good morning, Emmanuel",
    paymentTime:"payment scheduled on: Mon Jan 02 2023 04:58:04 GMT-0800",
    userUgrade:"Hello, Mr Emma you are have been promoted as our senior developer.",
  
    Detailholdermaterial: {
        ImageSvg:"./assets/Group 2.svg",
        ImageSvgtwo:"./assets/Group 4.svg",
        CompanyRegister:"Company Register",
        LunchTime:"Lunch Time",
        CompanyRegisterDetail:"keeping records of all our staffs,working both locally and international..",
        ImageSvgthree:"./assets/Group 9.svg",
        ImageSvgfour:"./assets/Group 10.svg",
        ImageSvgfive:"./assets/Group 11.svg",
    }
}
const Homedetails = () => {
    
    return(
        <>
       <div className="homedetailscont">
           
       <Container>
       <div className="">

<div className="notificationcancel">
<div className="paymenttxt">
<h4>
{Detailsholder.payment}
</h4>
</div>

<div className="paymentime">
<div>
<p>
{Detailsholder.paymentTime}
</p>
</div>

<div className="seedetails">
<span>{Detailsholder.seedetails}</span>
</div>

<div className="canceldtl">
<FiXSquare size="30"/>
</div>
</div>

</div>



</div>
<div className="greettime">
<h3>{Detailsholder.greetUser}</h3>
<p>
{Detailsholder.userUgrade}
</p>

<div className="contentcontainer">
<div className="contentholder">
<div className="contentimg">
    <img src={Detailsholder.Detailholdermaterial.ImageSvg} alt="rocktimage"/>
</div>

<div className="detailsubchild">
    <h5>{Detailsholder.Detailholdermaterial.CompanyRegister}</h5>
    <p>
        {Detailsholder.Detailholdermaterial.CompanyRegisterDetail}
    </p>
</div>

</div>

{/* second content */}

<div className="contentholder">
<div className="contentimg">
    <img src={Detailsholder.Detailholdermaterial.ImageSvgtwo} alt="rocktimage"/>
</div>

<div className="detailsubchild">
    <h5>{Detailsholder.Detailholdermaterial.LunchTime}</h5>
    <p>
        {Detailsholder.Detailholdermaterial.CompanyRegisterDetail}
    </p>
</div>

</div>
</div>

<div className="actioncont">
   <div className="actionchildcont">
       <div className="actionmediaflex">
         <div>
            <h5>Actions to do</h5>
        </div>

        <div className="actioncontainer">
            <div className="actionchild">
            <div className="actionimg">
        <img src={Detailsholder.Detailholdermaterial.ImageSvgthree}/>
        </div>

        <div className="payrolltxt">
            <h5>Payroll Tracker</h5>
            <div>
            <p>
            keep track analysis of your payments.
            </p>
        </div>
        </div>
        
      
            </div>
        </div>

        {/* action2 */}
        <div className="actioncontainer">
            <div className="actionchild">
            <div className="actionimg">
        <img src={Detailsholder.Detailholdermaterial.ImageSvgfour}/>
        </div>

        <div className="payrolltxt">
            <h5>Company Growth</h5>
            <div>
            <p>
            Our company growth stability matters to our client.
            </p>
        </div>
        </div>
        
      
            </div>
        </div>

        {/* action3 */}

        <div className="actioncontainer">
            <div className="actionchild">
            <div className="actionimg">
        <img src={Detailsholder.Detailholdermaterial.ImageSvgfive}/>
        </div>

        <div className="payrolltxt">
            <h5>Save Document</h5>
            <div>
            <p>
            Check your document/Cv never exploits to others.
            </p>
        </div>
        </div>
        
      
            </div>
        </div>
       </div>


            <div className="calendar">
                <div>
                <h4>Calendar</h4>
                </div>
                <CalendarComponent />
            </div>

   </div>
</div>

</div>
       </Container>
       </div>
        </>

    )
}

export default Homedetails;