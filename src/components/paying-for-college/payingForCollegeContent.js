import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"

const PayingForCollegeContent = ({ state }) => {
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>Great Info About My College. But How Do I Pay for It All?</h1>
                         <p>We can help with that.<br />No. 1: Our Tuition Guarantee helps you budget. Year 1 tuition = Year 4 tuition. Your housing and meal plan rates won’t change either.<br />No. 2: We give generous aid. UToledo students have the lowest student debt among Ohio's public colleges.</p>
                         <p>Your aid options:</p>
                         <ul>
                              <li>Scholarships</li>
                              <li>Loans</li>
                              <li>Grants</li>
                              <li>Work-study</li>
                         </ul>
                    </FullWidth>
               </Row>
               <div className="yellowBack">
                    <Row>
                         <FullWidth>
                              <h1>How Do I Know Whether I Qualify for Any of It?</h1>
                              <h2>Fill out the FAFSA (Free Application for Federal Student Aid).</h2>
                              <p>Have you submitted yours?</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <Link className="block button button-primary" to="/paying-for-college/yes" state={state}>Yes</Link>
                         </HalfColumn>
                         <HalfColumn>
                              <Link className="block button button-primary" to="/paying-for-college/no" state={state}>No</Link>
                         </HalfColumn>
                    </Row>
               </div>
          </>
     );
}


export default PayingForCollegeContent;