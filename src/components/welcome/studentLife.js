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
                              <div className="row">
                                   <div className="four columns">
                                        <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="eight columns">
                                        <div className="headshotQuote__text">
                                             <h3 className="boldHeading">Experience Toledo&nbsp;Law</h3>
                                             <h4 className="script-ignore">Meet <strong>Cameron Morrissey</strong>, 3L</h4>
                                             <p>"My time at the U.S. District Court [as a Public Service Fellow] was very hands-on and afforded me the opportunity to see 'behind the curtain' of the practice of law and helped me understand what law looks like on a practical level."</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="four columns">
                                   <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="eight columns">
                                        <div className="headshotQuote__text">
                                             <h3 className="boldHeading">Experience Toledo&nbsp;Law</h3>
                                             <h4 className="script-ignore">Meet <strong>Nicole Cote</strong>, 2L</h4>
                                             <p>"Whether you are coming directly from an undergraduate institution, taking a couple of years off, or out of school for many years, Toledo Law is an outstanding school that will help you succeed and find your place."</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="four columns">
                                   <div className="headshotQuote__image" style={{backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)"}}></div>
                                   </div>
                                   <div className="eight columns">
                                        <div className="headshotQuote__text">
                                             <h3 className="boldHeading">Experience Toledo&nbsp;Law</h3>
                                             <h4 className="script-ignore">Meet <strong>Damon Williams</strong>, 2L</h4>
                                             <p>"The Toledo way is real and alive in this city. I have been mentored by Toledo Law professors and been given priceless advice and direction. I have also made everlasting friendships with some of the most intelligent and inspirational people I have ever met."</p>
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