import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const AcademicSuccessContentEducation = ({ state }) => {
     const data = useStaticQuery(graphql`
     query educationAcademicSuccess {
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
     // const educationAcademicSuccess = data.images.nodes.filter(node => node.name === 'educationAcademicSuccess')[0];
     const alexisAlvarado = data.images.nodes.filter(node => node.name === 'alexisAlvarado')[0];
     const alexisAlvaradoSrc = alexisAlvarado.childImageSharp.fluid.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Find Support</h1>
                              {/* <Img className="anim" fadeIn={true} fluid={educationAcademicSuccess.childImageSharp.fluid} /> */}
                              <p>We don't forget you once you pay your deposit. We want you to succeed. </p>
                              <ul>
                                   <li>Faculty who know your name and your strengths</li>
                                   <li>Dedicated academic advisors</li>
                                   <li>Professional success coaches ― Our holistic approach helps you with everything from dealing with deadlines and study strategies to financial literacy.</li>
                                   <li>Pre-Health Advising Center for pre-med and other health-related majors</li>
                                   <li>Free tutoring and writing help</li>
                                   <li>Office of Multicultural Student Success</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + alexisAlvaradoSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Alexis Alvarado</h2>
                                   <p>Class of 2021 | Defiance, Ohio</p>
                                   <p>"Coming into college as a first-generation student with absolutely no knowledge of anything was scary. When I connected to the TRiO (Student Support Services) team at UToledo, I felt like I had a home on campus. It was somewhere I could go and study, chill or talk to someone in times of need."</p>
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


export default AcademicSuccessContentEducation;