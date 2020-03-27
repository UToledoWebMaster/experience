import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, ThirdColumn } from "../layout/layoutComponent"

const LivingDiningContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Where Will I Live?</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>Do you live more than 25 miles from Toledo? Then you’re required to live on campus the first two years. But that’s a good thing. The earlier you get involved on campus, the easier your transition and the more successful you’ll be.</p>
                              <ul>
                                   <li>9 state-of-the-art residence halls</li>
                                   <li>Share a room or a suite</li>
                                   <li>Living communities with people who share your interests</li>
                                   <li>Close to classes</li>
                                   <li>Cable and internet access in your room</li>
                              </ul>
                              <p>Plan to commute? Check out our commuter services and lounges. Connect with other commuters.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <h1>What Will I Eat?</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                         <ThirdColumn>
                              <img src="https://via.placeholder.com/600x600.png?text=Photo" />
                         </ThirdColumn>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>You will not go hungry here. Promise.</p>
                              <p>Fresh-made pizza. Smoothies. Rice bowls. Vegetarian, halal and gluten-free meals.</p>
                              <p style={{ marginBottom: '0px' }}>Use your meal plan at:</p>
                              <ul>
                                   <li>3 dining hall locations</li>
                                   <li>11 retail locations on campus, including Starbucks, Chick-fil-A, Steak ‘n Shake</li>
                                   <li>2 convenience stores</li>
                              </ul>
                              <p>And don’t forget: Many student-friendly restaurants close to campus allow you to use your Rocket Card as a debit card.</p>
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


export default LivingDiningContent;