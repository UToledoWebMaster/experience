import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const CareerServicesContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in career services content from {state.collegeOfInterest}</div>
                    <Link to="/college" state={{ ...state, careerServicesClick: true }}> Click to go back to college content</Link>
               </>
          );
     } else {
          if (typeof window !== 'undefined') {
               navigate("/")
          }
          return (
               <>

               </>
          )
     }
}


export default CareerServicesContent;