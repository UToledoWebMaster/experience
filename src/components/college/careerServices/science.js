import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const CareerServicesContentScience = ({ state }) => {
     const data = useStaticQuery(graphql`
     query scienceCareerServices {
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
     // const jamesDunaway = data.images.nodes.filter(node => node.name === 'jamesDunaway')[0];
     // const jamesDunawaySrc = jamesDunaway.childImageSharp.fluid.src;

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
                              {/* <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jamesDunawaySrc + ")" }}></div> */}
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>James Dunaway</h2>
                                   <p>Class of 2016, chemistry | Oregon, Ohio</p>
                                   <p>"My education was challenging. But it built a mindset in me that nothing is too hard. You just have to try. It gave me confidence. I had people who took an interest in me. I didn’t have to ask. It was a given. It was a defining moment when I got my internship my junior year. I could answer all their questions – Have you done this? – with a yes. I knew the instrumentation. I knew the chemistry. I got a full-time job as a chemist when I graduated. I was able to pay back all my loans in three years."</p>
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


export default CareerServicesContentScience;