import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, ThirdColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SingleTestimony from "../../singleTestimony"

const HonorsContentBusiness = ({ state }) => {
     const data = useStaticQuery(graphql`
     query businessHonors {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "honors"}}){
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
     const communityEngagement = data.images.nodes.filter(node => node.name === 'communityEngagement')[0];
     const creativeApproaches = data.images.nodes.filter(node => node.name === 'creativeApproaches')[0];
     const enrichingExperiences = data.images.nodes.filter(node => node.name === 'enrichingExperiences')[0];
     const laurenBahonsua = data.images.nodes.filter(node => node.name === 'laurenBahonsua')[0];
     const laurenBahonsuaSrc = laurenBahonsua.childImageSharp.fluid.src;


     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Accept the Challenge</h1>
                              <p>Apply for the Jesup Scott Honors College.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <ThirdColumn>
                              <Img className="anim" fadeIn={true} fluid={communityEngagement.childImageSharp.fluid} />
                              <h2>Community Engagement</h2>
                         </ThirdColumn>
                         <ThirdColumn>
                              <Img className="anim" fadeIn={true} fluid={creativeApproaches.childImageSharp.fluid} />
                              <h2>Creative Approaches</h2>
                         </ThirdColumn>
                         <ThirdColumn>
                              <Img className="anim" fadeIn={true} fluid={enrichingExperiences.childImageSharp.fluid} />
                              <h2>Enriching Experiences</h2>
                         </ThirdColumn>
                    </Row>
                    <Row>
                         <FullWidth>
                              <ul>
                                   <li>Priority registration</li>
                                   <li>Honors-only housing and scholarships</li>
                                   <li>Small, discussion-based classes</li>
                                   <li>Service learning, research, study abroad</li>
                                   <li>Events, field trips and other programming</li>
                                   <li>Success coaches</li>
                                   <li>Honors seminars</li>
                              </ul>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + laurenBahonsuaSrc + ")" }}></div>
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Lauren Bahonsua '19</h2>
                                   <p>Chicago, Ill.</p>
                                   <p>"A part of me wanted to get away from home. But I was also scared being on my own for the first time. The Honors College was a nice way for me to form a community. After joining the Honors College, I was able to step out of my comfort zone. I became more active with organizations around campus, volunteered at events and took on leadership positions that allowed me to grow."</p>
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


export default HonorsContentBusiness;