import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const ResearchContentEngineering = ({ state }) => {
     const data = useStaticQuery(graphql`
     query engineeringResearch {
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
     const vimanthaBamunuarachchi = data.images.nodes.filter(node => node.name === 'vimanthaBamunuarachchi')[0];
     const vimanthaBamunuarachchiSrc = vimanthaBamunuarachchi.childImageSharp.fluid.src;
     const engineeringResearch = data.images.nodes.filter(node => node.name === 'engineeringResearch')[0];
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
                              <Img className="anim" fadeIn={true} fluid={engineeringResearch.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <Row className="text-center stats">
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
                    <br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + vimanthaBamunuarachchiSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Vimantha Bamunuarachi</h2>
                                   <p>Chemical Engineering '20 | Colombo, Sri Lanka</p>
                                   <p>"I did research the summer of my freshman year for a chemical engineering professor. Then Dr. Ana C. Alba-Rubio offered me a position in her lab. I'm doing research on sustainable and green energy. I also worked part time as an intern at a startup company that manufactured scanners to test the life span of solar cells. I learned a plethora of technical skills a typical undergraduate wouldn't. My research experience helped me get my co-op at AstraZeneca."</p>
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


export default ResearchContentEngineering;