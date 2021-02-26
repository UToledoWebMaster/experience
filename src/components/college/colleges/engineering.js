import React from "react"
import { Row, QuarterColumn, ThreeQuarterColumn, FullWidth, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../../slider"

const Engineering = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     const data = useStaticQuery(graphql`
     query engineeringHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "engineering"}}){
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
     const devyaniDonde = data.images.nodes.filter(node => node.name === 'devyaniDonde')[0];
     const devyaniDondeSrc = devyaniDonde.childImageSharp.fluid.src;
     const justinMendoza = data.images.nodes.filter(node => node.name === 'justinMendoza')[0];
     const justinMendozaSrc = justinMendoza.childImageSharp.fluid.src;
     const harishHemming = data.images.nodes.filter(node => node.name === 'harishHemming')[0];
     const harishHemmingSrc = harishHemming.childImageSharp.fluid.src;

     return (
          <>
               <h1>College of {state.collegeOfInterest}</h1>
               <p>Earn a patent, start a business, conduct research. These are the kinds of experiences our engineering undergraduates get at UToledo. We are one of only 8 programs in the U.S. that requires co-ops. Our students graduate with a year's worth of paid industry experience. Many find jobs before they graduate.</p>
               <Row>
                    <Slider className="testimonialSlider">
                         {/* Each div child of Slider is one slide in the slider */}
                         {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                         <div className="row skyBack">
                              <div className="three columns">
                                   <div className="headshotQuote__image" style={{ backgroundImage: "url(" + devyaniDondeSrc + ")" }}></div>
                              </div>
                              <div className="nine columns">
                                   <div className="headshotQuote__text">
                                        <h2>Devyani Donde</h2>
                                        <p className="collegeTestimonySubtitle">Information Technology '21 | Nashik, India</p>
                                        <p>"I'm the Treasurer of the Association for Computing Machinery Women's Chapter. ACM-W connects me with amazing women in technology, helps me network, allows me to attend conferences and hackathons, and find trends in technology that prepare me for my career. The diversity at The University of Toledo attracted me. But the thing I liked best was the co-op program."</p>
                                   </div>
                              </div>
                         </div>
                         <div className="row skyBack">
                              <div className="three columns">
                                   <div className="headshotQuote__image" style={{ backgroundImage: "url(" + justinMendozaSrc + ")" }}></div>
                              </div>
                              <div className="nine columns">
                                   <div className="headshotQuote__text">
                                        <h2>Justin Mendoza</h2>
                                        <p className="collegeTestimonySubtitle">Bioengineering '22 and Bacc2MD pre-med student | Toledo, Ohio</p>
                                        <p>"When I visited UToledo, I thought the bioengineering program was ahead of its time and would allow me to pursue my passion for medicine. I applied and got into the Bacc2MD program, which guarantees me a medical school interview without taking the MCAT. It was a no-brainer. I wanted to give myself the greatest chance to become the physician that I want to be."</p>
                                   </div>
                              </div>
                         </div>
                         <div className="row skyBack">
                              <div className="three columns">
                                   <div className="headshotQuote__image" style={{ backgroundImage: "url(" + harishHemmingSrc + ")" }}></div>
                              </div>
                              <div className="nine columns">
                                   <div className="headshotQuote__text">
                                        <h2>Harish Hemming</h2>
                                        <p className="collegeTestimonySubtitle">Computer Science Engineering and Physics '21 | Penang, Malaysia</p>
                                        <p>"Even the big classes here aren’t huge. You can connect with professors. Take  the initiative to get close to professors. Meet them; talk to them after class. If they get to know you, it will help you. They can help you do research or be a reference for a job."</p>
                                   </div>
                              </div>
                         </div>
                    </Slider>
               </Row>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h2>Get ready to...</h2>
                         <p><strong>Dive right in.</strong> No pre-engineering. No weeding out.</p>
                         <p><strong>Develop an entrepreneurial mindset.</strong></p>
                         <p><strong>Get involved.</strong> 25 engineering student organizations, including a ranked SAE formula team that builds a car every year.</p>
                         <p><strong>Graduate with a job and minimal debt!</strong></p>
                    </FullWidth>
               </Row>
          </>
     );
}


export default Engineering;