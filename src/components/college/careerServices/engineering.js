import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "../../slider"

const CareerServicesContentEngineering = ({ state }) => {
     const data = useStaticQuery(graphql`
     query engineeringCareerServices {
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
     // const engineeringCareerServices = data.images.nodes.filter(node => node.name === 'engineeringCareerServices')[0];
     const jasonGonring = data.images.nodes.filter(node => node.name === 'jasonGonring')[0];
     const jasonGonringSrc = jasonGonring.childImageSharp.fluid.src;
     // const vimanthaBamunuarachchi = data.images.nodes.filter(node => node.name === 'vimanthaBamunuarachchi')[0];
     // const vimanthaBamunuarachchiSrc = vimanthaBamunuarachchi.childImageSharp.fluid.src;
     const gradCap = data.images.nodes.filter(node => node.name === 'gradCap')[0];
     const dollarSign = data.images.nodes.filter(node => node.name === 'dollarSign')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>It’s your end goal, right? A successful, fulfilling career. Your College of Engineering offers:</p>
                              <ul>
                                   <li>Solid career prep</li>
                                   <li>Professional development</li>
                                   <li>Job search help</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <Row>
                         <Slider>
                              {/* Each div child of Slider is one slide in the slider */}
                              {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                              <div className="row skyBack">
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Jason Gonring</h2>
                                             <p>Class of 2019, electrical engineering | Lambertville, Mich.</p>
                                             <p>"The project I worked on to put a solar array on Health Science Campus was one of my favorite projects. I applied everything I learned in class, and I learned soft skills, too – like how to compromise with people and make a big initiative like this come together."</p>
                                        </div>
                                   </div>
                                   <div className="three columns">
                                        {/* <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jasonGonringSrc + ")" }}></div> */}
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Vimantha Bamunuarachchi</h2>
                                             <p>Class of 2020, chemical engineering | Colombo, Sri Lanka</p>
                                             <p>"When I graduate, I'll have more than a year of industrial experience. It's priceless to connect with engineers and scientists as an undergraduate and get that hands-on experience. I have friends at bigger schools, but they don't have job experience when they get their degree."</p>
                                        </div>
                                   </div>
                                   <div className="three columns">
                                        {/* <div className="headshotQuote__image" style={{ backgroundImage: "url(" + vimanthaBamunuarachchiSrc + ")" }}></div> */}
                                   </div>
                              </div>
                         </Slider>
                    </Row>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <p>Graduate with a year's worth of work experience, thanks to our co-op program (We are 1 of just 8 in the U.S. with required co-ops.)</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <div className="one column">
                              <Img className="anim" fadeIn={true} fluid={gradCap.childImageSharp.fluid} />
                         </div>
                         <div className="eleven columns"><p>Average 2019 starting salary of UToledo engineering graduates: $62,819</p></div>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>Pay your tuition with your co-op wages.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <div className="one column">
                              <Img className="anim" fadeIn={true} fluid={dollarSign.childImageSharp.fluid} />
                         </div>
                         <div className="eleven columns"><p>Average 2019 co-op wage: $18.04/hour</p></div>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>Many students find permanent jobs with their co-op employers – even before they graduate.</p>
                              <p>2 career expos every year with 170+ companies recruiting for permanent and co-op positions.</p>
                              <p>UToledo's Career Services also offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major</li>
                                   <li>Develop career plans</li>
                                   <li>Prep for a job search and interview</li>
                                   <li>Find on- and off-campus part-time jobs</li>
                                   <li>Find internships and full-time career positions</li>
                              </ul>
                         </FullWidth>
                    </Row>
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


export default CareerServicesContentEngineering;