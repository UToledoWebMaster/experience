import React from "react"
// import Link from "gatsby"
import navigate from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../layout/layoutComponent"
import SingleTestimony from "../singleTestimony.js"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const LivingDiningContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query livingDining {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "livingDining"}}){
         nodes{
         id
         name
         childImageSharp{
           fluid{
             ...GatsbyImageSharpFluid
           }
         }
     }
       }

     }
     `)
     const muniraTaufik = data.images.nodes.filter(node => node.name === 'muniraTaufik')[0];
     const muniraTaufikSrc = muniraTaufik.childImageSharp.fluid.src;
     const eat = data.images.nodes.filter(node => node.name === 'eat')[0];

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Where Will I Live?</h1>
                              <p>Do you live more than 25 miles from Toledo? Then you're required to live on campus the first two years. But that's a good thing. The earlier you get involved on campus, the easier your transition and the more successful you'll be.</p>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + muniraTaufikSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <p>"I would recommend every freshman stay on campus. I lived in the Honors Academic Village my freshman year. It changed my life. It's how I started to meet people, including my best friend. I'd also see flyers about events and know what was happening on campus.</p>
                                   <p><strong>Munira Taufik</strong><br />Class of 2019, geology pursuing a master's in higher education | Kuala Lumpur, Malaysia</p>

                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br />
                    <Row>
                         <FullWidth>
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
                         <HalfColumn>
                              <h1>What Will I Eat?</h1>
                              <p>You will not go hungry here. Promise.</p>
                              <p>Fresh-made pizza. Smoothies. Rice bowls. Vegetarian, halal and gluten-free meals.</p>
                              <p>Use your meal plan at:</p>
                              <ul>
                                   <li>3 dining hall locations</li>
                                   <li>11 retail locations on campus, including Starbucks, Chick-fil-A, Steak ‘n Shake</li>
                                   <li>2 convenience stores</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={eat.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>And don't forget: Many student-friendly restaurants close to campus allow you to use your Rocket Card as a debit card.</p>
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


export default LivingDiningContent;