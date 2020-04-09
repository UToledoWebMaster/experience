import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const ResearchContentArts = ({ state }) => {
     const data = useStaticQuery(graphql`
     query artsResearch {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "research"}}){
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
     const deidraBuenger = data.images.nodes.filter(node => node.name === 'deidraBuenger')[0];
     const deidraBuengerSrc = deidraBuenger.childImageSharp.fluid.src;
     const artsResearch = data.images.nodes.filter(node => node.name === 'artsResearch')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Research with Faculty</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <p>We reward curious minds with research opportunities as early as freshman year. (You can't do this at too many other schools.) Email a professor about their lab. Or use the services of our Office of Undergraduate Research, which can:</p>
                              <ul>
                                   <li>Connect you to faculty mentors and projects</li>
                                   <li>Help you find funding</li>
                                   <li>Help you present your research at conferences and other events</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={artsResearch.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <Row className="text-center">
                         <ThirdColumn>
                              <h2>82</h2>
                              <p>undergradutes received funding in 2019</p>
                         </ThirdColumn>
                         <ThirdColumn>
                              <h2>23,000+</h2>
                              <p>hours spent by undergraduates on research in 2019</p>
                         </ThirdColumn>
                         <ThirdColumn>
                              <h2>$220,000</h2>
                              <p>invested in undergraduate research</p>
                         </ThirdColumn>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + deidraBuengerSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Deidra Buenger</h2>
                                   <p>English Literature and Asian Studies with minor in Japanese '20 | Holland, Ohio</p>
                                   <p>"My professor encouraged me to do research. I was fired up that there was someone who gave me an opportunity. I am investigating how mobile technologies — such as smartphones and apps — can be used as tools for those learning Japanese. I went to Japan to collect data."</p>
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


export default ResearchContentArts;