import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"
import Img from "gatsby-image"

const ExperientialLearningContentScience = ({ state }) => {
     const data = useStaticQuery(graphql`
     query scienceExperientialLearning {
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
     const muniraTaufik = data.images.nodes.filter(node => node.name === 'muniraTaufik2')[0];
     const muniraTaufikSrc = muniraTaufik.childImageSharp.fluid.src;
     const scienceExperientialLearning = data.images.nodes.filter(node => node.name === 'scienceExperientialLearning')[0];
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
                                   <li>Hands-on courses and local and international field work </li>
                                   <li>Study abroad</li>
                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={scienceExperientialLearning.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + muniraTaufikSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Munira Taufik</h2>
                                   <p>Class of 2019 | geology; M.Ed. higher education | Kuala Lumpur, Malaysia</p>
                                   <p>"I traveled all over the country on field trips. I went to Hocking Hills, a park in southern Ohio; Death Valley, a desert in California; and the Grand Canyon in Arizona. Whatever you learn in class, you see it and can apply it on these trips. We talked about earthquake faults and then went out and saw them."</p>
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


export default ExperientialLearningContentScience;