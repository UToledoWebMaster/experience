import React from "react"
import { Link } from "gatsby"


const Welcomer = ({ name, college, diverseClick, studentLifeClick, livingDiningClick, healthSafetyClick, state }) => {
     return (
          <>
               <h1>welcome {name}</h1>
               <div>You are interested in {college}</div>
               {!diverseClick ? <><Link state={state} to="/welcome/diverseCommunity">Click to go to diverse community.</Link><br /></> : <><Link state={state} to="/welcome/diverseCommunity">Click to go to diverse community AGAIN.</Link><br /></>}
               {!studentLifeClick ? <><Link state={state} to="/welcome/studentLife">Click to go to student life.</Link><br /></> : <><Link state={state} to="/welcome/studentLife">Click to go to student life AGAIN.</Link><br /></>}
               {!livingDiningClick ? <><Link state={state} to="/welcome/livingDining">Click to go to living and dining.</Link><br /></> : <><Link state={state} to="/welcome/livingDining">Click to go to living and dining AGAIN.</Link><br /></>}
               {!healthSafetyClick ? <><Link state={state} to="/welcome/healthSafety">Click to go to health and safety.</Link><br /></> : <><Link state={state} to="/welcome/healthSafety">Click to go to health and safety AGAIN.</Link><br /></>}
          </>
     );
}


export default Welcomer;