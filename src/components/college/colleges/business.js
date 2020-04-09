import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"

const Business = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query businessHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "business"}}){
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
     const jaretYost = data.images.nodes.filter(node => node.name === 'jaretYost')[0];
     const jaretYostSrc = jaretYost.childImageSharp.fluid.src;

     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>College of {state.collegeOfInterest}</h1>
                         <p>High-tech education. Engaged faculty experts. Impressive job-placement rates. We'll prepare you for a rewarding career in business no matter what your passion.</p>
                    </FullWidth>
               </Row>
               <Row className="text-center">
                    <HalfColumn>
                         <h2>13 majors & 17 minors</h2>
                         <p>in the most in-demand areas of business</p>
                    </HalfColumn>
                    <HalfColumn>
                         <h2>#224</h2>
                         <p>in ranking of business colleges by U.S. News & World Report</p>
                    </HalfColumn>
               </Row>
               <SingleTestimony>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Jaret Yost</h2>
                              <p className="collegeTestimonySubtitle">International Business and Professional Sales '20</p>
                              <p>"Through the COBI Job Fair I got an internship with Otis Elevator, the biggest elevator company in the world. I feel ready for this due to all the training and professional development offered by the University."</p>

                         </div>
                    </ThreeQuarterColumn>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jaretYostSrc + ")" }}></div>
                    </QuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Participate in innovative classes.</strong></p>
                         <ul>
                              <li>Service learning</li>
                              <li>Simulations</li>
                              <li>Flipped classrooms</li>
                         </ul>
                         <p><strong>Work with award-winning faculty.</strong> 90% of classes are taught by Ph.D.s and professionally qualified faculty, NOT graduate or teaching assistants.</p>
                         <p><strong>Build your resume.</strong> 16 student organizations = a professional network + lifelong friends + leadership skills.</p>
                         <p><strong>Stand out.</strong> Apply for our Klar Leadership Academy.</p>
                         <p><strong>Be a leader</strong> in your job and your community.</p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Business;