import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, QuarterColumn, HalfColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const AcademicSuccessContentScience = ({ state }) => {
     const data = useStaticQuery(graphql`
     query scienceAcademicSuccess {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "academicSuccess"}}){
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
     const academicSuccess = data.images.nodes.filter(node => node.name === 'academicSuccess')[0];
     const chaoZhou = data.images.nodes.filter(node => node.name === 'chaoZhou')[0];
     const chaoZhouSrc = chaoZhou.childImageSharp.fluid.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Find Support</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <p>We don't forget you once you pay your deposit. We want you to succeed. </p>
                              <ul>
                                   <li>Faculty who know your name and your strengths</li>
                                   <li>Dedicated academic advisors</li>
                                   <li>Professional success coaches ― Our holistic approach helps you with everything from dealing with deadlines and study strategies to financial literacy.</li>
                                   <li>Pre-Health Advising Center for pre-med and other health-related majors</li>
                                   <li>Free tutoring and writing help</li>
                                   <li>Office of Multicultural Student Success</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={academicSuccess.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + chaoZhouSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Chao Zhou</h2>
                                   <p>Mathematics with a concentration in statistics '21 | Kun Ming, China</p>
                                   <p>"My math classes aren’t easy, but my professors make hard things easy to understand. They are friendly and give me lots of help. I'm a traveler and want to meet people from different countries and cultures. At UToledo, I have met people from all over – Japan, Korea, America, Europe. People are welcoming and friendly."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br />
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


export default AcademicSuccessContentScience;