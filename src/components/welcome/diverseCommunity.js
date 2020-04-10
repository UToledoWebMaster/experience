import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn } from "../layout/layoutComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import SingleTestimony from "../singleTestimony.js"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../slider.js"
import Img from "gatsby-image";

const DiverseCommunityContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query diverseCommunity {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "diverseCommunity"}}){
         nodes{
         id
         name
         childImageSharp{
           fluid{
             ...GatsbyImageSharpFluid
           }
           fixed(width: 1000, quality: 100){
             ...GatsbyImageSharpFixed
           }
         }
     }
       }

     }
     `)
     const jannetFrias = data.images.nodes.filter(node => node.name === 'jannetFrias')[0];
     const jannetFriasSrc = jannetFrias.childImageSharp.fluid.src;
     const welcoming = data.images.nodes.filter(node => node.name === 'welcoming')[0];
     const welcomingSrc = welcoming.childImageSharp.fixed.src;
     const multicultural = data.images.nodes.filter(node => node.name === 'multicultural')[0];
     const multiculturalSrc = multicultural.childImageSharp.fixed.src;
     const midwesternFriendly = data.images.nodes.filter(node => node.name === 'midwesternFriendly')[0];
     const midwesternFriendlySrc = midwesternFriendly.childImageSharp.fixed.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Will I Fit In?</h1>
                              <p>Nearly 20,000 students from all over the world find a home here. You will, too.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn>
                              <h2 style={{ textAlign: 'center' }}><FontAwesomeIcon style={{ color: "#FFD200", fontSize: "5rem" }} icon={faGlobeAmericas} /><br />84 countries</h2>
                         </HalfColumn>
                         <HalfColumn>
                              <h2 style={{ textAlign: 'center' }}><FontAwesomeIcon style={{ color: "#FFD200", fontSize: "5rem" }} icon={faMapMarkerAlt} /><br />42 states</h2>
                         </HalfColumn>
                    </Row>
                    <br />
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jannetFriasSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Meet Jannet</h2>
                                   <p className="collegeTestimonySubtitle"><strong>Jannet Frias</strong><br />Special Education '22 | Immokalee, Fla.</p>
                                   <p>"I was nervous when I came to Toledo. But now I feel completely at home. A summer program for multicultural students helped me make new friends. And there's so much to do, so many organizations and diversity, it's easy to meet people and connect."</p>
                              </div>
                         </ThreeQuarterColumn>
                    </SingleTestimony>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <p>UToledo is just the right size. Students tell us that all the time. Big enough to have tons of opportunities. Small enough to forge meaningful relationships.</p>
                              <p>Chances are you will run into people at UToledo who don’t look or think like you. Who have different passions and opinions. We value all of you. And let's face it. We’re all global citizens now – you know that better than we do. Broadening your horizons will give you an edge after graduation.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <Slider>
                              {/* Each div child of Slider is one slide in the slider */}
                              {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                              <div className="row">
                                   <div className="twelve columns">
                                        <div className="fullBackgroundImage" style={{ backgroundImage: "url(" + welcomingSrc + ")" }}></div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="twelve columns">
                                        <div className="fullBackgroundImage" style={{ backgroundImage: "url(" + multiculturalSrc + ")" }}></div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="twelve columns">
                                        <div className="fullBackgroundImage" style={{ backgroundImage: "url(" + midwesternFriendlySrc + ")" }}></div>
                                   </div>
                              </div>
                              {/* Alternatively, we could have the images be full sized (in which case we'd need to crop them uniformly)
                              <div className="row">
                                        <Img fluid={welcoming.childImageSharp.fluid}></Img>
                              </div>
                              <div className="row">
                                   <div className="twelve columns">
                                        <Img fluid={multicultural.childImageSharp.fluid}></Img>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="twelve columns">
                                        <Img fluid={midwesternFriendly.childImageSharp.fluid}></Img>
                                   </div>
                              </div>
                              */}
                         </Slider>
                    </Row>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <p>These are just a sample of the services we offer our students:</p>
                              <ul>
                                   <li>Office of Multicultural Student Success</li>
                                   <li>Student Disability Services</li>
                                   <li>Center for International Studies and Programs</li>
                                   <li>Catherine S. Eberly Center for Women</li>
                                   <li>LGBTQA+ initiatives</li>
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


export default DiverseCommunityContent;