import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"

const Welcomer = ({ name, college, diverseClick, studentLifeClick, livingDiningClick, healthSafetyClick, state }) => {
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>Welcome {name}!</h1>
                         <h2>Goals:</h2>
                         <ul>
                              <li>A college that's right for me</li>
                              <li>4 yrs - FUN - make lifelong friends</li>
                              <li>A degree w/o breaking the bank</li>
                              <li>A job - one that pays $$ and makes me :)</li>
                         </ul>
                         <p>UToledo can help you check off all those boxes!</p>
                         <p>Let's begin with a few of your most common questions.</p>
                    </FullWidth>
               </Row>
               <Row>
                    <HalfColumn>
                         {!studentLifeClick ? <><Link state={state} to="/welcome/student-life"><img src="https://via.placeholder.com/728x300.png?text=Student+Life" /></Link><br /></> : <><Link state={state} to="/welcome/student-life"><img src="https://via.placeholder.com/728x300.png?text=Student+Life+Visited" /></Link><br /></>}
                         <h2><Link state={state} to="/welcome/student-life">What's there to do after class?</Link></h2>
                    </HalfColumn>
                    <HalfColumn>
                         {!diverseClick ? <><Link state={state} to="/welcome/diverse-community"><img src="https://via.placeholder.com/728x300.png?text=Diverse+Community" /></Link><br /></> : <><Link state={state} to="/welcome/diverse-community"><img src="https://via.placeholder.com/728x300.png?text=Diverse+Community+Visited" /></Link><br /></>}
                         <h2><Link state={state} to="/welcome/diverse-community">Will I fit in?</Link></h2>
                    </HalfColumn>
               </Row>
               <br />
               <Row>
                    <HalfColumn>
                         {!livingDiningClick ? <><Link state={state} to="/welcome/living-dining"><img src="https://via.placeholder.com/728x300.png?text=Living+and+Dining" /></Link><br /></> : <><Link state={state} to="/welcome/living-dining"><img src="https://via.placeholder.com/728x300.png?text=Living+and+Dining+Visited" /></Link><br /></>}
                         <h2><Link state={state} to="/welcome/living-dining">Where wil I live and what will I eat?</Link></h2>
                    </HalfColumn>
                    <HalfColumn>
                         {!healthSafetyClick ? <><Link state={state} to="/welcome/health-safety"><img src="https://via.placeholder.com/728x300.png?text=Health+and+Safety" /></Link><br /></> : <><Link state={state} to="/welcome/health-safety"><img src="https://via.placeholder.com/728x300.png?text=Health+and+Safety+Visited" /></Link><br /></>}
                         <h2><Link state={state} to="/welcome/health-safety">How do I stay healthy and safe?</Link></h2>
                    </HalfColumn>
               </Row>
          </>
     );
}


export default Welcomer;