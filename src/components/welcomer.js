import React from "react"
import { navigate } from "gatsby"


const Welcomer = ({ name, college }) => {
     return (
          <>
               <h1>welcome {name}</h1>
               <div>You are interested in {college}</div>
          </>
     );
}


export default Welcomer;