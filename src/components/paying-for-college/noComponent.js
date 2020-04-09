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
                              <h1>No.</h1>
                              <p>Why not do it today?  The sooner you submit the FAFSA, the sooner you find out if you qualify for aid.</p>
                              <p>Visit <a href="https://www.utoledo.edu/financialaid" target="_blank">utoledo.edu/financial-aid</a> for some FAFSA tips and a link to the application.</p>
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


export default NoContent;