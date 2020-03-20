import React from "react"
import { Link } from "gatsby"


const DiverseCommunityContent = ({ state }) => {
     return (
          <>
               <h1>welcome</h1>
               <div>You are interested in diverse community content from {state.collegeOfInterest}</div>
               <Link to="/welcome" state={{ ...state, diverseClick: true }}> Click to go back to welcome content</Link>
          </>
     );
}


export default DiverseCommunityContent;