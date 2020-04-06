import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const CareerServicesContentHealth = ({ state }) => {
     const data = useStaticQuery(graphql`
     query healthCareerServices {
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
     const coletteBoothman = data.images.nodes.filter(node => node.name === 'coletteBoothman')[0];
     const coletteBoothmanSrc = coletteBoothman.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>Because that's the end game, right? To get a job. UToledo's Career Services  offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Develop career plans.</li>
                                   <li>Prep for a job search and interview.</li>
                                   <li>Find on– and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions.</li>

                              </ul>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + coletteBoothmanSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Colette Boothman</h2>
                                   <p>Class of 2016, M.A. in recreation and leisure; natural resources specialist/park ranger | Raymond, Calif.</p>
                                   <p>"I had wanted to become a U.S. park ranger since childhood. Thanks to the encouragement and education I received at The University of Toledo, that dream came true."</p>
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


export default CareerServicesContentHealth;