import React from "react"
import { Link } from "gatsby"


const ResearchContent = ({ state }) => {
     return (
          <>
               <h1>welcome</h1>
               <div>You are interested in research content from {state.collegeOfInterest}</div>
               <Link to="/college" state={{ ...state, researchClick: true }}> Click to go back to college content</Link>
          </>
     );
}


export default ResearchContent;