import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"

const Health = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query healthHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "health"}}){
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
     const marieJackson = data.images.nodes.filter(node => node.name === 'marieJackson')[0];
     const marieJacksonSrc = marieJackson.childImageSharp.fluid.src;

     return (
          <>
               <h1>College of {state.collegeOfInterest}</h1>
               <p>Our programs range from criminal justice and paralegal studies to a variety of health and wellness degrees. But they all have this in common: A focus on helping and transforming lives.</p>
               <SingleTestimony>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Marie Jackson</h2>
                              <p className="collegeTestimonySubtitle">Recreational Therapy '20 | Southfield, Mich.</p>
                              <p>"When I first came to UToledo, I had my heart set on athletic training, but thanks to the support and mentorship of Professor Holly Eichner, I discovered that my true passion is in recreational therapy. I love being able to help individuals with illnesses and disabling conditions live healthier, more satisfying lives."</p>
                         </div>
                    </ThreeQuarterColumn>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + marieJacksonSrc + ")" }}></div>
                    </QuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Practice your skills</strong> in state-of-the-art facilities.</p>
                         <p><strong>Engage with our local community.</strong> If you’re in it to help people and improve their lives, our social-justice outreach opportunities will be right up your alley.</p>
                         <p><strong>Learn and practice collaboratively</strong> with students in other health-related majors.</p>
                         <p><strong>Change the world.</strong></p>
                    </FullWidth>
               </Row>
               <Row className="grayBack">
                    <FullWidth>
                         <h2>Program Highlights</h2>
                         <ul>
                              <li>Paralegal program — Our program is one of the nation's best. It’s a national demonstration program and approved by the American Bar Association (only 1 in 5 programs is).</li>
                              <li>Recreation therapy program — We have the only such program in Ohio.</li>
                              <li>Respiratory care program — We received the prestigious Program Excellence Award from the Ohio Board of Regents. For the past 4 years, we won the Distinguished RRT Credentialing Success Award for exceeding thresholds for credentialing examination success, attrition and positive job placement.</li>
                         </ul>

                    </FullWidth>
               </Row>
          </>
     );
}


export default Health;