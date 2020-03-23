import React from "react"
import { Link } from "gatsby"
import { Row, ThirdColumn } from "../layout/layoutComponent"

const Welcomer = ({ name, college, diverseClick, studentLifeClick, livingDiningClick, healthSafetyClick, state, screens }) => {
     return (
          <>
               <h1>welcome {name}</h1>
               <h2>You Are Interested in {college}</h2>
               <Row>
                    {/* {screens.map((screen) => {
                         return (
                              <ThirdColumn>
                                   {screen.tidyName}
                                   <img className={screen.tidyName} src="https://via.placeholder.com/728x300.png?text=" />
                              </ThirdColumn>
                         )
                    })} */}
                    <ThirdColumn>
                         <img src="https://via.placeholder.com/728x300.png?text=Diverse+Community" />
                         <p>Some text about Diverse Community</p>
                    </ThirdColumn>
                    <ThirdColumn>
                         <img src="https://via.placeholder.com/728x300.png?text=Student+Life" />
                         <p>Some text about Student Life</p>
                    </ThirdColumn>
                    <ThirdColumn>
                         <img src="https://via.placeholder.com/728x300.png?text=Living+and+Dining" />
                         <p>Some text about Living and Dining</p>
                    </ThirdColumn>
               </Row>
               <Row>
                    <ThirdColumn>
                         <img src="https://via.placeholder.com/728x300.png?text=Health+and+Safety" />
                         <p>Some text about Health and Safety</p>
                    </ThirdColumn>
               </Row>
               {!diverseClick ? <><Link state={state} to="/welcome/diverseCommunity">Click to go to diverse community.</Link><br /></> : <><Link state={state} to="/welcome/diverseCommunity">Click to go to diverse community AGAIN.</Link><br /></>}
               {!studentLifeClick ? <><Link state={state} to="/welcome/studentLife">Click to go to student life.</Link><br /></> : <><Link state={state} to="/welcome/studentLife">Click to go to student life AGAIN.</Link><br /></>}
               {!livingDiningClick ? <><Link state={state} to="/welcome/livingDining">Click to go to living and dining.</Link><br /></> : <><Link state={state} to="/welcome/livingDining">Click to go to living and dining AGAIN.</Link><br /></>}
               {!healthSafetyClick ? <><Link state={state} to="/welcome/healthSafety">Click to go to health and safety.</Link><br /></> : <><Link state={state} to="/welcome/healthSafety">Click to go to health and safety AGAIN.</Link><br /></>}
          </>
     );
}


export default Welcomer;