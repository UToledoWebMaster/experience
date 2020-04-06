import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"

const Nursing = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query nursingHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "nursing"}}){
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
     const zoeKlosterMockeridge = data.images.nodes.filter(node => node.name === 'zoeKlosterMockeridge')[0];
     const zoeKlosterMockeridgeSrc = zoeKlosterMockeridge.childImageSharp.fluid.src;
     return (
          <>
               <h1>College of {state.collegeOfInterest}</h1>
               <p>We know you care and want to make an impact — or you wouldn't want to be a healthcare professional. We care, too. We pride ourselves on leading the region in nursing education and work hard to stay on the cutting edge.</p>
               <SingleTestimony>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Zoe Kloster-Mockeridge</h2>
                              <p>Class of 2020 | Ann Arbor, Mich.</p>
                              <p>"I chose UToledo nursing because of the smaller class sizes and the personalized education. My favorite part about the program has to be my lab experience. The lab professors make learning the skills so fun and easy, while also very informative! The professors are amazing, I can come to them with any questions that I have about school or about life."</p>
                         </div>
                    </ThreeQuarterColumn>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + zoeKlosterMockeridgeSrc + ")" }}></div>
                    </QuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Stay on top of current trends.</strong> Our curriculum is cutting edge and patient centered.</p>
                         <p><strong>Collaborate.</strong> We call it interprofessional education. Learn with and from your peers in other health-related majors.</p>
                         <p><strong>To practice.</strong> The more you practice, the better your skills. Our advanced clinical simulation center boasts everything from virtual reality medical visualization to advanced surgical simulation suites. Learn in a protected space with real-time faculty feedback.</p>
                         <p><strong>Be involved.</strong> Network and make friends in our award-winning Student Nurses Association.</p>
                         <p><strong>Make an impact.</strong></p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Nursing;