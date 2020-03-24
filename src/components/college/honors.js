import React from "react"
import { Link } from "gatsby"


const HonorsContent = ({ state }) => {
     return (
          <>
               <h1>welcome</h1>
               <div>You are interested in honors content from {state.collegeOfInterest}</div>
               <Link to="/college" state={{ ...state, honorsClick: true }}> Click to go back to college content</Link>
          </>
     );
}


export default HonorsContent;