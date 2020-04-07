import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import pie1 from "../../images/payingForCollege/pie1.svg"
import pie2 from "../../images/payingForCollege/pie2.svg"

const PayingForCollegeContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query payingForCollege {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "payingForCollege"}}){
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
     // const pie1 = data.images.nodes.filter(node => node.name === 'pie1')[0];
     // const pie2 = data.images.nodes.filter(node => node.name === 'pie2')[0];
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>Great Info About My College. But How Do I Pay for It All?</h1>
                         <p>We can help with that.</p>
                         <p>No. 1: Our Tuition Guarantee helps you budget. Year 1 tuition = Year 4 tuition. Your housing and meal plan rates won't change either.</p>
                         <p>No. 2: We give generous aid. UToledo students have the lowest student debt among Ohio's public colleges.</p>
                    </FullWidth>
               </Row>
               <br /><br />
               <Row>
                    <HalfColumn>
                         <img src={pie1} />
                    </HalfColumn>
                    <HalfColumn>
                         <img src={pie2} />
                    </HalfColumn>
               </Row>
               <br /><br />
               <Row>

                    <FullWidth>
                         <p>Your may qualify for:</p>
                         <ul>
                              <li>Scholarships and grants (You don’t have to pay these back.)</li>
                              <li>Loans (Sorry, you have to pay these back!)</li>
                              <li>Workstudy</li>
                         </ul>
                    </FullWidth>
               </Row>
               <br /><br />
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
               <br /><br />
          </>
     );
}


export default PayingForCollegeContent;