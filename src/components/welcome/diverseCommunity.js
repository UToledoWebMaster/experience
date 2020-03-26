import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const DiverseCommunityContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in diverse community content from {state.collegeOfInterest}</div>
                    <Link to="/welcome" state={{ ...state, diverseClick: true }}> Click to go back to welcome content</Link><br />
                    <Link to="/welcome/healthSafety" state={{ ...state, diverseClick: true }}> Click to go to health and safety content</Link>
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


export default DiverseCommunityContent;