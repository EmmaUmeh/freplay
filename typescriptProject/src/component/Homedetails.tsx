
import {FiXSquare} from "react-icons/fi"

const Detailsholder = {
    payment:"Your payment request has been approved",
    seedetails:"See Details",
    greetUser:"Good morning, Emmanuel",
}
const Homedetails = () => {
    return(
        <>
       <div className="homedetailscont">
           
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
            payment scheduled on: Mon Jan 02 2023 04:58:04 GMT-0800
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


        <div className="greettime">
            <h3>{Detailsholder.greetUser}</h3>
        </div>
            </div>
          
       </div>
        </>

    )
}

export default Homedetails