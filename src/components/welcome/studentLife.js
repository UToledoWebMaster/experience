import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn, ThirdColumn } from "../layout/layoutComponent"
import FlipCard from "../flipCard.js"

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
                    <Row className="halfBreak">
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Be a leader."
                                   backContent="Back text."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Give back."
                                   backContent="Back text."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Make lifelong friends."
                                   backContent="Back text."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Explore."
                                   backContent="Back text."
                              />
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