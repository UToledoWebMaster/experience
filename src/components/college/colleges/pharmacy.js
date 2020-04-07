import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"

const Pharmacy = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query pharmacyHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "pharmacy"}}){
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
     const akshithDass = data.images.nodes.filter(node => node.name === 'akshithDass')[0];
     const akshithDassSrc = akshithDass.childImageSharp.fluid.src;

     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>College of {state.collegeOfInterest}</h1>
                         <p>Nationally accredited. Nationally ranked.</p>
                         <p>We offer two pathways: one for aspiring pharmacists and one for students interested in pharmacy science or other careers in pharmacy (this is a great pre-med track). Course work for each is identical in the first two years.</p>
                    </FullWidth>
               </Row>
               <Row className="text-center">
                    <HalfColumn>
                         <h2>96%</h2>
                         <p>Best passage rate in Ohio on licensing exam</p>
                    </HalfColumn>
                    <HalfColumn>
                         <h2>100%</h2>
                         <p>Highest passage rate in U.S. on in-state pharmacy law exam and the only university with a perfect pass rate</p>
                    </HalfColumn>
               </Row>
               <SingleTestimony>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Akshith Dass</h2>
                              <p>Class of 2018, PharmD | Dubai, United Arab Emirates</p>
                              <p>"I chose UToledo because the PharmD program was 6 years compared to 8 at other schools. It also had contingent admission. I was accepted without having to re-interview or take the PCAT. That made it easier. UToledo has amazing faculty. I've worked with faculty on research. I even made connections with the dean. He gave me a letter of recommendation that gave me a leg up on a position I applied for."</p>
                         </div>
                    </ThreeQuarterColumn>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + akshithDassSrc + ")" }}></div>
                    </QuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Save time and money.</strong> UToledo's Pharm.D. program is 6 years, compared to 8 at most other schools.</p>
                         <p><strong>Learn and practice in collaboration</strong> with students in other health-related majors.</p>
                         <p><strong>Gain a competitive edge in the job market.</strong> Earn 2 degrees. Two of our majors offer a B.S./M.S. option in just 5 years. You also can combine PharmD with a Ph.D. or M.B.A.</p>
                         <p><strong>Set yourself apart.</strong> Fewer than 20 universities in the U.S. offer a B.S. in pharmaceutical sciences.</p>
                         <p><strong>Make your med school app stand out.</strong> Med schools love students with unique majors and course work.</p>
                         <p><strong>Network and grow</strong> in 20 professional pharmacy student organizations.</p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Pharmacy;