import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn, ThirdColumn } from "../layout/layoutComponent"

const StudentLifeContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>What's There to Do After Class?</h1>
                              <p>Plenty - and the more you get involved, the more likely you'll graduate on time and be a successful student.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <ThreeQuarterColumn>
                              <div className="skyBack" style={{ padding: '20px' }}>
                                   <h2>Just ask Sally</h2>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                              </div>
                         </ThreeQuarterColumn>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Photo+of+Sally" />
                         </QuarterColumn>
                    </Row>
                    <br /><br />
                    <Row>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Be+a+leader." />
                         </QuarterColumn>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Give+back." />
                         </QuarterColumn>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Make+lifelong+friends." />
                         </QuarterColumn>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Explore." />
                         </QuarterColumn>
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


export default StudentLifeContent;