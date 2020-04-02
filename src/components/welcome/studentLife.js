import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn, ThirdColumn } from "../layout/layoutComponent"
import FlipCard from "../flipCard.js"
import Slider from "../slider.js"

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
                    <Row>
                         <Slider>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                         </Slider>
                    </Row>
                    <br /><br />
                    <Row className="halfStack">
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
          if (typeof window !== 'undefined') {
               navigate("/")
          }
          return (
               <>

               </>
          )
     }
}


export default StudentLifeContent;