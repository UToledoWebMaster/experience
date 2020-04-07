import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

const ExploreMoreContent = ({ state }) => {
     // const data = useStaticQuery(graphql`
     // query exploreMore {
     // #get all images from particular directory
     //   images: allFile(filter: {relativeDirectory: {eq: "exploreMore"}}){
     //     nodes{
     //     id
     //     name
     //     childImageSharp{
     //      fixed(width:30){
     //         ...GatsbyImageSharpFixed
     //      }
     //      fluid{
     //         ...GatsbyImageSharpFluid
     //      }
     //     }
     // }
     //   }

     // }
     // `)
     // const checkChecked = data.images.nodes.filter(node => node.name === 'checkChecked')[0];
     // const checkEmpty = data.images.nodes.filter(node => node.name === 'checkEmpty')[0];
     // const welcomeToTheFamily = data.images.nodes.filter(node => node.name === 'welcomeToTheFamily')[0];
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>Explore More</h1>
                         <p>Interested in more of what UToledo has to offer? Explore other colleges and check out our new virtual tour below.</p>
                         <h2>Virtual Tour</h2>
                         <a href="https://www.youvisit.com/#/vte/?data-platform=v&data-link-type=immersive&data-inst=63741&data-image-width=100%&data-image-height=300&">Launch Experience</a>
                         <script type="text/javascript" src="https://www.youvisit.com/tour/Embed/js3" defer="defer"></script>
                    </FullWidth>
               </Row>
               <Row>
                    <FullWidth>
                         <Link className="block button button-primary" to="/" state={state}>Explore Other Colleges</Link>
                    </FullWidth>
               </Row>
          </>
     );
}


export default ExploreMoreContent;