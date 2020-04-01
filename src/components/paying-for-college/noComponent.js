import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn } from "../layout/layoutComponent"

const NoContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>No!</h1>
                              <p>That's great! You should have received your financial aid package from us by now. If you haven't, contact Rocket Solution Central. RSC is our one-stop shop for info on all things financial. Our team is still on the job and ready to help you! Email us at <a href="mailto:rockesolutioncentral@utoledo.edu">rockesolutioncentral@utoledo.edu</a> or call 419.530.8700.</p>
                              <p>Your next step - <a href="" target="_blank">Accept your financial aid package</a>.</p>
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


export default NoContent;