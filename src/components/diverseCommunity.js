import React from "react"
import { Link } from "gatsby"


const DiverseCommunityContent = ({ college }) => {
     return (
          <>
               <h1>welcome</h1>
               <div>You are interested in diverse community content from {college}</div>
               <Link to="/welcome" state={{ diverseClick: true }} > Click to go back to welcome content</Link>
          </>
     );
}


export default DiverseCommunityContent;