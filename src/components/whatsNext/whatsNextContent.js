import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { navigate } from "gatsby"

const WhatsNextContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query whatsNext {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "whatsNext"}}){
         nodes{
         id
         name
         childImageSharp{
          fixed(width:30){
             ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 1280, srcSetBreakpoints: [ 400, 600, 960, 1280 ]){ #parameters are to fix bad auto sizing on image
             ...GatsbyImageSharpFluid
          }
         }
     }
       }

     }
     `)
     const checkChecked = data.images.nodes.filter(node => node.name === 'checkChecked')[0];
     const checkEmpty = data.images.nodes.filter(node => node.name === 'checkEmpty')[0];
     const welcomeToTheFamily = data.images.nodes.filter(node => node.name === '08142018-8751')[0];
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>What's Next?</h1>
                              <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkChecked.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Acceptance Letter</p>
                              <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkChecked.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Take one more look at all that UToledo offers</p>
                              <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkEmpty.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Submit enrollment deposit</p>
                              <p>Isn't it time to check off that last box and save your place in UToledo's next class?</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <HalfColumn className="yellowBack">
                              <h2>Already set up your myUT account?</h2>
                              <p style={{ marginBottom: "0px" }}>Great! <a id="myUTLogInClick" href="http://myut.utoledo.edu/" target="_blank">Log in</a> and you'll find everything you need on the New Student tab to submit your deposit.</p>
                         </HalfColumn>
                         <HalfColumn className="yellowBack">
                              <h2>Need to set up your myUT account?</h2>
                              <p style={{ marginBottom: "0px" }}>No worries. Visit <a id="myUTAccountClick" href="https://myutaccount.utoledo.edu/" target="_blank">myutaccount.utoledo.edu</a> and we'll lead you through the setup.</p>
                         </HalfColumn>
                    </Row>
                    <br /><br />
                    <Row>
                         <FullWidth>
                              <h1>Committed to being a Rocket?</h1>
                              <p>Fantastic! Once you've paid your enrollment deposit you can register for Rocket Launch orientation and check your next steps. It's all outlined on the New Student tab in your myUT account.</p>
                              <h2>Congratulations {state.name}.<br />Welcome to the Rocket Family!</h2>
                              <Img className="anim" fadeIn={true} fluid={welcomeToTheFamily.childImageSharp.fluid} />
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


export default WhatsNextContent;