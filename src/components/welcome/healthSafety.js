import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, ThirdColumn } from "../layout/layoutComponent"

const HealthSafetyContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>How Do I Stay Healthy and Safe on Campus?</h1>
                              <h2>Your safety is our top priority.</h2>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <h2>It's all about balance - mental and physical health.</h2>
                         </FullWidth>
                    </Row>
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


export default HealthSafetyContent;