import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const StudentLifeContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in student life content from {state.collegeOfInterest}</div>
                    <Link to="/welcome" state={{ ...state, studentLifeClick: true }}> Click to go back to welcome content</Link>
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


export default StudentLifeContent;