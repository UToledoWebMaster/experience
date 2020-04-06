import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"

const Education = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query educationHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "education"}}){
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
     const jannetFrias = data.images.nodes.filter(node => node.name === 'jannetFrias')[0];
     const jannetFriasSrc = jannetFrias.childImageSharp.fluid.src;

     return (
          <>
               <h1>Judith Herb College of {state.collegeOfInterest}</h1>
               <p>We love that our students want to make an impact. That’s why we get you in classrooms as early as possible, learning from experienced educators.</p>
               <SingleTestimony>
                    <ThreeQuarterColumn>
                         <div className="headshotQuote__text">
                              <h2>Jannet Frias</h2>
                              <p>Class of 2022, special education | Immokalee, Fla.</p>
                              <p>"The majority of my classes are small. So it's easier to interact with peers and have a closer relationship to professors. I go to professors' office hours, and it's helped a lot. I also established a relationship with my success coach. UToledo has a lot of resources — the Carver Center in the College of Education and the writing and tutoring centers on campus."</p>
                         </div>
                    </ThreeQuarterColumn>
                    <QuarterColumn>
                         <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jannetFriasSrc + ")" }}></div>
                    </QuarterColumn>
               </SingleTestimony>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Learn in a nationally ranked college of education.</strong></p>
                         <p><strong>Spend more time time in the field</strong> than students in other education programs.</p>
                         <p><strong>Use the latest educational technology</strong> at the Carver Center. We also can lend you supplies for your student teaching experiences.</p>
                         <p><strong>Travel.</strong> Apply for Camp Adventure and work with children of military families on bases around the world.</p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Education;