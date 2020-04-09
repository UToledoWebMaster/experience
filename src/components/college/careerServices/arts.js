import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const CareerServicesContentArts = ({ state }) => {
     const data = useStaticQuery(graphql`
     query artsCareerServices {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "careerServices"}}){
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
     const artsCareerServices = data.images.nodes.filter(node => node.name === 'artsCareerServices')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>Because that's the end game, right? To get a job? UToledo's Career Services  offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Develop career plans.</li>
                                   <li>Prep for a job search and interview.</li>
                                   <li>Find on- and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions. </li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <h2>After graduating from UToledo's College of Arts and Letters, I became...</h2>
                         </FullWidth>
                    </Row>
                    <Row>
                         <ThreeQuarterColumn>
                              <ul>
                                   <li>Beyoncé's art director</li>
                                   <li>A Pulitzer Prize winner</li>
                                   <li>An on-air reporter for ABC</li>
                                   <li>A President's National Security Council member</li>
                                   <li>A director of one of the largest housing nonprofits in Chicago</li>
                                   <li>A director of legislative affairs for the largest steel producer in D.C.</li>
                                   <li>A high-budget VFX supervisor</li>
                                   <li>Ohio's 2019 Teacher of the Year</li>
                              </ul>
                         </ThreeQuarterColumn>
                         <QuarterColumn>
                              <Img className="anim" fadeIn={true} fluid={artsCareerServices.childImageSharp.fluid} />
                              <p>Andrew Makadsi, art director for Beyoncé</p>
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


export default CareerServicesContentArts;