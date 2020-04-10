import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const CareerServicesContentEducation = ({ state }) => {
     const data = useStaticQuery(graphql`
     query educationCareerServices {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "careerServices"}}){
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
     // const navindiWeerasinghe = data.images.nodes.filter(node => node.name === 'navindiWeerasinghe')[0];
     // const navindiWeerasingheSrc = navindiWeerasinghe.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>Because that's the end game, right? To get a job.</p>
                              <p>Our education graduates are highly sought after. Employers know you often spend twice as much time in the field as other students and are ready to hit the ground running.</p>
                         </FullWidth>
                    </Row>
                    <br />
                    <Row className="text-center">
                         <FullWidth>
                              <h2 style={{ display: "inline" }}>90.4%</h2><p style={{ display: "inline" }}> of graduates found jobs in education</p>
                         </FullWidth>
                    </Row>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <p>We host an annual job fair with dozens of employers. UToledo's Career Services  also offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Develop career plans.</li>
                                   <li>Prep for a job search and interview.</li>
                                   <li>Find on- and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions.</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    {/* <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + navindiWeerasingheSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Navindi Weerasinghe</h2>
                                   <p className="collegeTestimonySubtitle">Class of 2018, Navindi plans to become an optometrist and may pursue an M.B.A.</p>
                                   <p>"I received more than my money's worth at UToledo — a lot of things that money can’t buy. The best skill I mastered was to prioritize my time. My degree was rigorous, and I learned how to do many things at once. Now I apply it in my job. I've progressed quickly through the training, and now they want to cross-train me in different departments. I work with a diverse population and have no trouble connecting to anyone because we had students of all backgrounds at UToledo. The seeds of diversity and inclusion were planted in me there."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br /> */}
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


export default CareerServicesContentEducation;