import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import SingleTestimony from "../../singleTestimony"
import Img from "gatsby-image"

const CareerServicesContentUniversity = ({ state }) => {
     const data = useStaticQuery(graphql`
     query universityCareerServices {
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
     const navindiWeerasinghe = data.images.nodes.filter(node => node.name === 'navindiWeerasinghe')[0];
     const navindiWeerasingheSrc = navindiWeerasinghe.childImageSharp.fluid.src;
     const universityCareerServices = data.images.nodes.filter(node => node.name === 'universityCareerServices')[0];

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <p>Because that's the end game, right? To get a job. UToledo's Career Services  offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Develop career plans.</li>
                                   <li>Prep for a job search and interview.</li>
                                   <li>Find on– and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions.</li>

                              </ul>
                         </HalfColumn>
                         <HalfColumn>
                              <Img className="anim" fadeIn={true} fluid={universityCareerServices.childImageSharp.fluid} />
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + navindiWeerasingheSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Navindi Weerasinghe '18</h2>
                                   <p className="collegeTestimonySubtitle">Navindi plans to become an optometrist and may pursue an M.B.A.</p>
                                   <p>"I received more than my money's worth at UToledo — a lot of things that money can’t buy. The best skill I mastered was to prioritize my time. My degree was rigorous, and I learned how to do many things at once. Now I apply it in my job. I've progressed quickly through the training, and now they want to cross-train me in different departments. I work with a diverse population and have no trouble connecting to anyone because we had students of all backgrounds at UToledo. The seeds of diversity and inclusion were planted in me there."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br />
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


export default CareerServicesContentUniversity;