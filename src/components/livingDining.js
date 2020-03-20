import React from "react"
import { Link } from "gatsby"


const LivingDiningContent = ({ state }) => {
     return (
          <>
               <h1>welcome</h1>
               <div>You are interested in living and dining content from {state.collegeOfInterest}</div>
               <Link to="/welcome" state={{ ...state, livingDiningClick: true }}> Click to go back to welcome content</Link>
          </>
     );
}


export default LivingDiningContent;