import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
          fluid{
             ...GatsbyImageSharpFluid
          }
         }
     }
       }

     }
     `)
     const checkChecked = data.images.nodes.filter(node => node.name === 'checkChecked')[0];
     const checkEmpty = data.images.nodes.filter(node => node.name === 'checkEmpty')[0];
     const welcomeToTheFamily = data.images.nodes.filter(node => node.name === 'welcomeToTheFamily')[0];
     return (
          <>
               <Row>
                    <FullWidth>
                         <h1>What's Next?</h1>
                         <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkChecked.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Acceptance Letter</p>
                         <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkChecked.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Take one more look at all that UToledo offers</p>
                         <p><Img className="anim yellowCheck" fadeIn={true} fixed={checkEmpty.childImageSharp.fixed} />&nbsp;&nbsp;&nbsp; Submit enrollment deposit</p>
                         <p>Isn't it time to check off that last box and save your place in the UToledo Class of 2024?</p>
                    </FullWidth>
               </Row>
               <Row>
                    <HalfColumn className="yellowBack">
                         <h2>Have a myUT account?</h2>
                         <p style={{ marginBottom: "0px" }}>Great! <a href="http://myut.utoledo.edu/" target="_blank">Log in</a> and you'll find everything you need on the New Student tab to submit your deposit.</p>
                    </HalfColumn>
                    <HalfColumn className="yellowBack">
                         <h2>Haven't created a myUT account yet?</h2>
                         <p style={{ marginBottom: "0px" }}>No worries. Visit <a href="https://myutaccount.utoledo.edu/" target="_blank">myutaccount.utoledo.edu</a> and we'll lead you through the setup.</p>
                    </HalfColumn>
               </Row>
               <br /><br />
               <Row>
                    <FullWidth>
                         <h1>Have You Already Submitted Your Deposit?</h1>
                         <p>Fantastic! Now you can register for Rocket Launch orientation and check your next steps. It's all outlined on the New Student tab in your myUT account.</p>
                         <h2>Congratulations {state.name}.<br />Welcome to the Rocket Family!</h2>
                         <Img className="anim" fadeIn={true} fluid={welcomeToTheFamily.childImageSharp.fluid} />
                    </FullWidth>
               </Row>
          </>
     );
}


export default WhatsNextContent;