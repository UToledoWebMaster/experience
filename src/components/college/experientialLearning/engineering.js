import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn, HalfColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../../slider"

const ExperientialLearningContentEngineering = ({ state }) => {
     const data = useStaticQuery(graphql`
     query engineeringExperientialLearning {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "experientialLearning"}}){
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
     const jayceeCameron = data.images.nodes.filter(node => node.name === 'jayceeCameron')[0];
     const jayceeCameronSrc = jayceeCameron.childImageSharp.fluid.src;
     const johnSims = data.images.nodes.filter(node => node.name === 'johnSims')[0];
     const johnSimsSrc = johnSims.childImageSharp.fluid.src;
     const evanReed = data.images.nodes.filter(node => node.name === 'evanReed')[0];
     const evanReedSrc = evanReed.childImageSharp.fluid.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Learn by Doing</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>We believe you learn better by getting your hands dirty. We have integrated experiential learning into our curriculum. Learn real-world skills. Build a resume. Find a career.</p>
                              <ul>
                                   <li>3 required, PAID co-ops (optional for engineering tech students)</li>
                                   <li>Design experience</li>
                                   <li>Undergrad research</li>
                                   <li>Study abroad</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <Row>
                         <Slider className="testimonialSlider">
                              {/* Each div child of Slider is one slide in the slider */}
                              {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                              <div className="row skyBack">
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Jaycee Cameron</h2>
                                             <p>Chemical Engineering '20 | Toledo, Ohio</p>
                                             <p>"I like working one semester and going to school the next semester. I'm a hands-on learner. The first semester in class after my co-op was my best because I already knew how the theory worked in real life."</p>
                                        </div>
                                   </div>
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jayceeCameronSrc + ")" }}></div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>John Sims</h2>
                                             <p>Computer Science Engineering Technology '21 | Toledo, Ohio</p>
                                             <p>"I was able to connect with Toledo Public Schools and now I am refreshing over 10,000 laptops and installing about 5,000 laptops. I couldn't ask for a better summer internship. I'm helping the whole city learn quicker and better through technology."</p>
                                        </div>
                                   </div>
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(" + johnSimsSrc + ")" }}></div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Evan Reed</h2>
                                             <p>Electrical Engineering '19 | Carleton, Mich.</p>
                                             <p>"Nothing beats co-ops — to see how engineering works in the real world, get experience and earn enough to pay tuition. With all the resources UToledo offers and the high job placement rate for engineering students, it set me up for life after college. I had minimal debt."</p>
                                        </div>
                                   </div>
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(" + evanReedSrc + ")" }}></div>
                                   </div>
                              </div>
                         </Slider>
                    </Row>
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


export default ExperientialLearningContentEngineering;