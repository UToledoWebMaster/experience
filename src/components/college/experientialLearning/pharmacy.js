import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"
import Img from "gatsby-image"

const ExperientialLearningContentPharmacy = ({ state }) => {
     const data = useStaticQuery(graphql`
     query pharmacyExperientialLearning {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "experientialLearning"}}){
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
     const emmanuelAyanjoke = data.images.nodes.filter(node => node.name === 'emmanuelAyanjoke')[0];
     const emmanuelAyanjokeSrc = emmanuelAyanjoke.childImageSharp.fluid.src;
     const pharmacyExperientialLearning = data.images.nodes.filter(node => node.name === 'pharmacyExperientialLearning')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Learn by Doing</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <p>UToledo focuses on experiential education for all students. It’s even more critical for nursing majors. Regional health care partners, including The University of Toledo Medical Center and ProMedica, provide valuable clinical and career opportunities.</p>
                              <ul>
                                   <li>Labs in state-of-the-art facilities with the latest equipment and technology</li>
                                   <li>Required internships and clinical rotations </li>
                                   <li>Hands-on courses</li>
                                   <li>Study abroad</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={pharmacyExperientialLearning.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + emmanuelAyanjokeSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Emmanuel Ayanjoke</h2>
                                   <p>Class of 2020, PharmD | Ogun, Nigeria</p>
                                   <p>"I had my first internship ― with an independent pharmacist — in spring semester of my first professional year (year 3 at UToledo). I didn't really understand the value of this experience until I met non-UToledo students, who don't start internships until later. UToledo has a huge network of hospitals and rotation sites, and they prefer UToledo students. I had a rotation at Cleveland Clinic, one of the top hospitals in the world."</p>
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


export default ExperientialLearningContentPharmacy;