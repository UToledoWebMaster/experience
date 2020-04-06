import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"

const ExperientialLearningContentBusiness = ({ state }) => {
     const data = useStaticQuery(graphql`
     query businessExperientialLearning {
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
     const octavioVazquezEderra = data.images.nodes.filter(node => node.name === 'octavioVazquezEderra')[0];
     const octavioVazquezEderraSrc = octavioVazquezEderra.childImageSharp.fluid.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Learn by Doing</h1>
                              <p>We believe you learn better through experiential education and have integrated it into our curriculum. Learn real-world skills. Build a resume. Find a career.</p>
                              <ul>
                                   <li>Internships ― 85% of business students have at least one internship.</li>
                                   <li>Hands-on courses and field work</li>
                                   <li>Study abroad</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + octavioVazquezEderraSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Octavio Vazquez-Ederra</h2>
                                   <p>Class of 2019, international business and professional sales</p>
                                   <p>"My internship at Owens Corning was really intense. It let me experience an outside sales role. I rode along with a sales manager in Florida and got to see what the job was like and if it was right for me. I don’t think I'd have gotten my full-time job at O-C without those internships."</p>
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


export default ExperientialLearningContentBusiness;