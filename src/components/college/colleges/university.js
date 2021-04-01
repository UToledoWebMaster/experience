import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import SingleTestimony from "../../singleTestimony"
import { graphql, useStaticQuery } from "gatsby"

const University = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>University College</h1>
                         <p>Undecided? That's OK.</p>
                    </FullWidth>
               </Row>
               <Row className="text-center stats">
                    <HalfColumn>
                         <h2>1 in 5</h2>
                         <p>college students start undecided</p>
                    </HalfColumn>
                    <HalfColumn>
                         <h2>52%</h2>
                         <p>of students who are "decided" change their major</p>
                    </HalfColumn>
               </Row>
               <br />
               <Row>
                    <FullWidth>
                         <p>Undecided students are admitted to our Department of Exploratory Studies in University College. We will be your temporary home for 3 semesters while you explore.</p>
                         <p>You can start out in University College and still graduate in 4 years!</p>
                         <h2>Get ready to...</h2>
                         <p><strong>Work on fulfilling general education requirements.</strong></p>
                         <p><strong>Develop transferable skills:</strong> critical thinking, decision making and adaptability.</p>
                         <p><strong>Receive support</strong> from advisors.</p>
                         <p><strong>Declare a major at any time</strong> once you meet the requirements.</p>
                         <h2>Learning Communities</h2>
                         <p>All undecided students will join a learning community around the major they're most interested in.</p>
                         <ul>
                              <li>Build a community of support with other undecided students. </li>
                              <li>Complete courses to build academic success skills and explore majors and careers.</li>
                              <li>Receive personalized support from instructors and staff. </li>
                         </ul>
                    </FullWidth>
               </Row>
          </>
     );
}


export default University;