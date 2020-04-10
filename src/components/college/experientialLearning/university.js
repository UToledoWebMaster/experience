import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"
import Img from "gatsby-image"

const ExperientialLearningContentUniversity = ({ state }) => {
     const data = useStaticQuery(graphql`
     query universityExperientialLearning {
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
     const isaacPetkac = data.images.nodes.filter(node => node.name === 'isaacPetkac')[0];
     const isaacPetkacSrc = isaacPetkac.childImageSharp.fluid.src;
     const universityExperientialLearning = data.images.nodes.filter(node => node.name === 'universityExperientialLearning')[0];
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
                              <p>We believe in experiential education. Learn real-world skills. Build a resume. Find a career.</p>
                              <ul>
                                   <li>Internships</li>
                                   <li>Hands-on courses and field work</li>
                                   <li>Study abroad</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={universityExperientialLearning.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + isaacPetkacSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Isaac Petkac '21</h2>
                                   <p className="collegeTestimonySubtitle">Edinboro, Penn.</p>
                                   <p>"Hands-on learning is miles better than sitting in a classroom. When I visited UToledo, I met a professor who showed me all the opportunities I would have as a freshman. And I had more than I thought I would. I was able to get my experience from day one and I haven't stopped."</p>
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


export default ExperientialLearningContentUniversity;