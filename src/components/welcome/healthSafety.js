import React from "react"
import { Link } from "gatsby"


const HealthSafetyContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in health and safety content from {state.collegeOfInterest}</div>
                    <Link to="/welcome" state={{ ...state, healthSafetyClick: true }}> Click to go back to welcome content</Link>
               </>
          );
     } else {
          return (
               <>

               </>
          )
     }
}


export default HealthSafetyContent;