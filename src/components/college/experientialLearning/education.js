import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"
import Img from "gatsby-image"

const ExperientialLearningContentEducation = ({ state }) => {
     const data = useStaticQuery(graphql`
     query educationExperientialLearning {
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
     // const isaacPetkac = data.images.nodes.filter(node => node.name === 'isaacPetkac')[0];
     // const isaacPetkacSrc = isaacPetkac.childImageSharp.fluid.src;
     const educationExperientialLearning = data.images.nodes.filter(node => node.name === 'educationExperientialLearning')[0];
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
                                   <li>Field placements in 130+ diverse classroom settings and with outstanding teacher mentors</li>
                                   <li>Volunteer opportunities</li>
                                   <li>Study abroad</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={educationExperientialLearning.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    {/* <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + isaacPetkacSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Isaac Petkac</h2>
                                   <p className="collegeTestimonySubtitle">Class of 2021, media communications | Edinboro, Penn.</p>
                                   <p>"Hands-on learning is miles better than sitting in a classroom. When I visited UToledo, I met a professor who showed me all the opportunities I would have as a freshman. And I had more than I thought I would. I called nine football games, including the MAC championship for UToledo's radio station, WXUT. I called softball and baseball games on ESPN. I was able to get my experience from day one and I haven’t stopped."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br /> */}
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


export default ExperientialLearningContentEducation;