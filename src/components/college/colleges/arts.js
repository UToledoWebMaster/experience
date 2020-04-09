import React from "react"
import { Link } from "gatsby"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"
import CollegeNav from "./collegeNav"

const Arts = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query artsHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "arts"}}){
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
     const justinPetty = data.images.nodes.filter(node => node.name === 'justinPetty')[0];
     const justinPettySrc = justinPetty.childImageSharp.fluid.src;

     return (
          <>
               <h1>College of {state.collegeOfInterest}</h1>
               <p>Our degrees are diverse, from film and video to data analytics and psychology. But all our departments work together — a big plus for you. You'll graduate career ready with skills that allow you to adapt — a critical need in today's job market.</p>
               <SingleTestimony>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + justinPettySrc + ")" }}></div>
                    </QuarterColumn>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Justin Petty</h2>
                              <p>Theatre '20 | Southfield, Mich.</p>
                              <p>"I came to UToledo knowing I had a better chance to get cast. I never thought I'd get to be a lead unless the play was a black play. But they let me play roles usually played by straight, white men. They truly cast based on your talent and potential. I did a show outside of school, and every teacher came to see me and support me. That's so important — having teachers who care."</p>

                         </div>
                    </ThreeQuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Gain real-world skills</strong> that will get you a job. Learn how to learn, think critically and communicate.</p>
                         <p><strong>Engage in the community.</strong></p>
                         <ul>
                              <li>Sing, act and play music with local artists.</li>
                              <li>Practice your professional skills.</li>
                              <li>Volunteer.</li>
                         </ul>
                         <p><strong>Take innovative classes.</strong></p>
                         <ul>
                              <li>Learn about social and criminal justice by attending class with incarcerated students at the Toledo Correctional Institution as part of UToledo's Inside/Out Prison Exchange program.</li>
                              <li>Study urban poverty in the Dominican Republic in an international field school.</li>
                              <li>Curate an exhibit at the world-renowned Toledo Museum of Art.</li>
                         </ul>
                         <p><strong>Interact with faculty</strong> who are personally invested in you and who practice what they teach.</p>
                         <p><strong>Travel.</strong> To conferences or study abroad.</p>
                         <p><strong>Be a leader.</strong></p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Arts;