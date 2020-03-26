import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const LivingDiningContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in living and dining content from {state.collegeOfInterest}</div>
                    <Link to="/welcome" state={{ ...state, livingDiningClick: true }}> Click to go back to welcome content</Link>
               </>
          );
     } else {
          navigate("/")
          return (
               <>

               </>
          )
     }
}


export default LivingDiningContent;