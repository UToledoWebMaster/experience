import React from "react"
import { Link } from "gatsby"


const Welcomer = ({ name, college, diverseClick }) => {
     return (
          <>
               <h1>welcome {name}</h1>
               <div>You are interested in {college}</div>
               {!diverseClick ? <Link to="/diverseCommunity">Click to go to diverse community.</Link> : <Link to="/diverseCommunity">Click to go to diverse community AGAIN.</Link>}
               {/* <Link to="/diverseCommunity">Click to go to diverse community.</Link> */}
          </>
     );
}


export default Welcomer;