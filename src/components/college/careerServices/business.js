import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const CareerServicesContentBusiness = ({ state }) => {
     const data = useStaticQuery(graphql`
     query businessCareerServices {
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
     const paolaAguilar = data.images.nodes.filter(node => node.name === 'paolaAguilar')[0];
     const paolaAguilarSrc = paolaAguilar.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>COBI has a 90% job placement rate for graduates. Our students find jobs or graduate school opportunities BEFORE they graduate.</p>
                              <p>We focus on career development.</p>
                              <ul>
                                   <li>Partnerships with industry leaders ensure you develop the right job skills</li>
                                   <li>Required Career Development classes</li>
                                   <li>Fully-staffed Business Career Programs Office (resume critiques, practice interviews, etiquette dinners)</li>
                                   <li>Fall and Spring Job Fairs attended by 100+ national firms</li>
                              </ul>
                              <p>UToledo's Career Services also offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Find on- and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions.</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + paolaAguilarSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Paola Aguilar</h2>
                                   <p className="collegeTestimonySubtitle">Operations and Supply Chain Management '18; works at Owens Illinois, a Fortune 500 company near Toledo</p>
                                   <p>"My business professors helped me a lot, especially with career development. Not all students have business cards. But I did because my professor recommended we make them for job fairs and interviews. I had opportunities to network. UToledo gave me the tools. I got two internships and received job offers from both companies."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <h2>Where Do COBI Graduates start Their Careers?</h2>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <ul>
                                   <li>Amazon</li>
                                   <li>Owens Corning</li>
                                   <li>Owens-Illinois</li>
                                   <li>3M</li>
                                   <li>Ford</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <ul>
                                   <li>SpaceX</li>
                                   <li>Microsoft</li>
                                   <li>IBM</li>
                                   <li>Ernst and Young</li>
                              </ul>
                         </HalfColumn>
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


export default CareerServicesContentBusiness;