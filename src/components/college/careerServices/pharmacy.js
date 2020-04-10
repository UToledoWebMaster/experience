import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"

const CareerServicesContentPharmacy = ({ state }) => {
     const data = useStaticQuery(graphql`
     query pharmacyCareerServices {
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
     const margaretGorz = data.images.nodes.filter(node => node.name === 'margaretGorz')[0];
     const margaretGorzSrc = margaretGorz.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>Because that’s the end game, right? To get a job. Get real-world experience with required internships and clinical rotations that allow you to find a job quickly when you graduate. UToledos Career Services offers resources and strategies.</p>
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
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + margaretGorzSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Margaret Gorz '18</h2>
                                   <p className="collegeTestimonySubtitle">Associate Scientist at Estée Lauder Companies, New York</p>
                                   <p>"UToledo gave me a competitive advantage that made me stand out, and helped me land my dream job. I started college with plans to go to medical school, but I felt like something was missing because I am also a creative person. UToledo's Cosmetic Science and Formulation program allowed me to mix two of my passions into one career."</p>
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


export default CareerServicesContentPharmacy;