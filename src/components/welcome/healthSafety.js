import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, ThirdColumn } from "../layout/layoutComponent"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/overlappingBoxes.css"

const HealthSafetyContent = ({ state }) => {
     const data = useStaticQuery(graphql`
          query healthSafety {
          #get all images from particular directory
            images: allFile(filter: {relativeDirectory: {eq: "healthSafety"}}){
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
     console.log(data);
     const health = data.images.nodes.filter(node => node.name === 'health')[0];
     const healthSrc = health.childImageSharp.fluid.src;
     const safety = data.images.nodes.filter(node => node.name === 'safety')[0];
     const safetySrc = safety.childImageSharp.fluid.src;
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>How Will I Stay Healthy and Safe on Campus?</h1>
                              <h2>Your safety is our top priority.</h2>
                              <div class="overlappingBoxes">
                                   <div class="overlappingBoxes__textBox">
                                        <div class="overlappingBoxes__text">
                                             <ul>
                                                  <li>5-Star Safe Campus Rating from OH Dept. of Education</li>
                                                  <li>Night Watch team to accompany you after dark </li>
                                                  <li>Free safety app and alert system to keep you informed</li>
                                                  <li>24-hour police presence</li>
                                                  <li>A safe, walkable campus adjacent to two beautiful, residential neighborhoods </li>

                                             </ul>
                                        </div>
                                   </div>
                                   <div class="overlappingBoxes__imageWrapper">
                                        <Img className="anim overlappingBoxes__image" fadeIn={true} fluid={safety.childImageSharp.fluid} />
                                   </div>
                              </div>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <h2>It's all about balance - mental and physical health.</h2>
                              <div class="overlappingBoxes">
                                   <div class="overlappingBoxes__textBox">
                                        <div class="overlappingBoxes__text">
                                             <ul>
                                                  <li>Student Rec Center with a climbing wall, classes, a pool, waterslide and more</li>
                                                  <li>16 club and 20+ intramural sports</li>
                                                  <li>On-campus medical centers</li>
                                                  <li>Free mental health and counseling services</li>
                                                  <li>Outdoor adventures — Toledo is one of the top 2 places in Ohio for outdoor fun (US News & World Report). Take advantage of a 6-mile bike and walking path from Main Campus to the city’s most popular metropark; kayaking on the river through campus; ice skating, golf and disc golf in nearby Ottawa Park.</li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div class="overlappingBoxes__imageWrapper">
                                        <Img className="anim overlappingBoxes__image" fadeIn={true} fluid={health.childImageSharp.fluid} />
                                   </div>
                              </div>
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


export default HealthSafetyContent;