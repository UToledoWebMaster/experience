import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const HonorsContentBusiness = ({ state }) => {
     if (state) {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in honors content from {state.collegeOfInterest}</div>
                    <Link to="/college" state={{ ...state, honorsClick: true }}> Click to go back to college content</Link>
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


export default HonorsContentBusiness;