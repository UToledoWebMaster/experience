import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const ResearchContentScience = ({ state }) => {
     const data = useStaticQuery(graphql`
     query scienceResearch {
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
     const nathanSzymanski = data.images.nodes.filter(node => node.name === 'nathanSzymanski')[0];
     const nathanSzymanskiSrc = nathanSzymanski.childImageSharp.fluid.src;
     const scienceResearch = data.images.nodes.filter(node => node.name === 'scienceResearch')[0];
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
                              <Img className="anim" fadeIn={true} fluid={scienceResearch.childImageSharp.fluid} />
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
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + nathanSzymanskiSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Nathan Szymanski '19</h2>
                                   <p>Oak Harbor, Ohio</p>
                                   <p>"I conducted research starting my freshman year at UToledo. Both in and out of my major, the professors really cared about their students. They wanted us to learn, they promoted our involvement with research, and they were collaborative. In my research, I plugged into Ohio's largest supercomputer and ended up with one of the nation’s most prestigious scholarships."</p>
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


export default ResearchContentScience;