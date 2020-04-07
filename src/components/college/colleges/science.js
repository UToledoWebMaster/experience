import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../../slider"

const Science = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query scienceHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "science"}}){
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
     const raghadElhag = data.images.nodes.filter(node => node.name === 'raghadElhag')[0];
     const raghadElhagSrc = raghadElhag.childImageSharp.fluid.src;
     // const rohanRahatgaonkar = data.images.nodes.filter(node => node.name === 'rohanRahatgaonkar')[0];
     // const rohanRahatgaonkarSrc = rohanRahatgaonkar.childImageSharp.fluid.src;

     return (
          <>
               <h1>College of {state.collegeOfInterest}</h1>
               <p>Our students discover stars, collaborate with faculty on research in state-of-the-art chemistry labs and study water quality on Lake Erie. Our faculty will support and empower you.</p>
               <Row>
                    <Slider>
                         {/* Each div child of Slider is one slide in the slider */}
                         {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                         <div className="row skyBack">
                              <div className="nine columns">
                                   <div className="headshotQuote__text">
                                        <h2>Raghad Elhag</h2>
                                        <p>Class of 2020, biology with a concentration in neuroscience | Toledo, Ohio</p>
                                        <p>"My proudest accomplishment is organizing a brain outreach program for Toledo Public elementary schools. I worked with medical, psychology, biology and pharmacy students to host an event involving fun neuroscience activities. Whether it be an outreach program or a research project, my experiences volunteering in the community and presenting my own research will set me up for the future I want."</p>
                                   </div>
                              </div>
                              <div className="three columns">
                                   <div className="headshotQuote__image" style={{ backgroundImage: "url(" + raghadElhagSrc + ")" }}></div>
                              </div>
                         </div>
                         <div className="row skyBack">
                              <div className="nine columns">
                                   <div className="headshotQuote__text">
                                        <h2>Rohan Rahatgaonkar</h2>
                                        <p>Class of 2021, math and physics | Aurangabad, Maharashtra, India</p>
                                        <p>"The physics department has a lot of professors in diverse, research-intensive fields and also has telescopes and a planetarium, which is uncommon. I wanted a university that was big, so I could make a lot of friends and participate in many organizations, but also not too big, so I could have one-to-one interaction with my professors and the ability to make an impact. A good scholarship was my third criterion. UToledo met all my criteria! And it's close to Cedar Point amusement park, another plus!"</p>
                                   </div>
                              </div>
                              <div className="three columns">
                                   {/* <div className="headshotQuote__image" style={{ backgroundImage: "url(" + rohanRahatgaonkarSrc + ")" }}></div> */}
                              </div>
                         </div>
                    </Slider>
               </Row>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Be involved.</strong> Student organizations relating to your major are great ways to network, make friends and build your resume.</p>
                         <p><strong>Develop meaningful relationships with world-renowned faculty.</strong></p>
                         <p><strong>Travel.</strong> Study abroad and still graduate on time through our exchange programs with the University of Salford In Manchester and University of Hertfordshire in England.</p>
                         <p><strong>Work in state-of-the-art labs.</strong> Our facilities are world-class and include Ritter Planetarium, the Lake Erie Center and Stranahan Arboretum. You’ll have access to the Ohio Supercomputer Cluster and the Discovery Channel Telescope in Arizona.</p>
                         <p><strong>Take innovative classes</strong> that stay up to date with current trends.</p>
                         <p><strong>Engage in the community.</strong> Give back and practice your skills.</p>
                         <p><strong>Fulfill your goals.</strong></p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Science;