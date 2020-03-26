import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const AcademicSuccessContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in academic success content from {state.collegeOfInterest}</div>
                    <Link to="/college" state={{ ...state, academicSuccessClick: true }}> Click to go back to college content</Link>
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


export default AcademicSuccessContent;