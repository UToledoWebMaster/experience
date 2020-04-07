import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn } from "../layout/layoutComponent"

const YesContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Yes!</h1>
                              <p>That’s great! You should have received your financial aid package from us by now. If you haven't, contact Rocket Solution Central.</p>
                              <p>RSC is our one-stop shop for info on all things financial. Our team is on the job and ready to help you! Email us at <a href="mailto:rockesolutioncentral@utoledo.edu">rockesolutioncentral@utoledo.edu</a> or call 419.530.8700.</p>
                         </FullWidth>
                    </Row>
                    <Row className="text-center">
                         <FullWidth>
                              <Link className="block button button-primary" to="/whats-next" state={state}>What's Next?</Link>
                         </FullWidth>
                    </Row>
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


export default YesContent;