import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
import { navigate } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ExploreMoreContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query exploreMore {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "exploreMore"}}){
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
     const youVisit2 = data.images.nodes.filter(node => node.name === 'youVisit2')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Explore More</h1>
                              <p>Interested in more of what UToledo has to offer? Explore other colleges and check out our new virtual tour below.</p>
                              <h2>Virtual Tour</h2>
                              <a target="_blank" href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=63741&data-image-width=100%"><Img className="anim" fadeIn={true} fluid={youVisit2.childImageSharp.fluid} /></a>
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


export default ExploreMoreContent;