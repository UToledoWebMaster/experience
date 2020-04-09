import React from "react"
import { Link } from "gatsby"
import { Row, FullWidth, HalfColumn } from "../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Welcomer = ({ name, college, diverseClick, studentLifeClick, livingDiningClick, healthSafetyClick, state }) => {
     const data = useStaticQuery(graphql`
     query welcomeHome {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "welcomeHome"}}){
         nodes{
         id
         name
         childImageSharp{
           fixed(width:200){
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
     const postIt = data.images.nodes.filter(node => node.name === 'postIt')[0];
     const homeStudentLife = data.images.nodes.filter(node => node.name === 'homeStudentLife')[0];
     const homeDiverseCommunity = data.images.nodes.filter(node => node.name === 'homeDiverseCommunity')[0];
     const homeLivingDining = data.images.nodes.filter(node => node.name === 'homeLivingDining')[0];
     const homeHealthSafety = data.images.nodes.filter(node => node.name === 'homeHealthSafety')[0];
     return (
          <>
               <Row>
                    <HalfColumn>
                         <Img className="anim" fadeIn={true} fluid={postIt.childImageSharp.fluid} />
                    </HalfColumn>
                    <HalfColumn>
                         <h1>Hi {name}!</h1>
                         <h2 class="bigger thinner">UToledo can help you check off all those boxes!</h2>
                    </HalfColumn>
               </Row>
               <Row>
                    <FullWidth>
                         <p>Let's begin with a few of your most common questions.</p>
                    </FullWidth>
               </Row>
               <Row>
                    <HalfColumn>
                         {!studentLifeClick ? <><Link state={state} to="/welcome/student-life"><Img className="anim" fadeIn={true} fluid={homeStudentLife.childImageSharp.fluid} /></Link><br /></> : <><Link state={state} to="/welcome/student-life"><div className="img-wrapper"><div class="img-overlay"></div><Img className="anim" fadeIn={true} fluid={homeStudentLife.childImageSharp.fluid} /></div></Link><br /></>}
                         <h2><Link state={state} to="/welcome/student-life">What's there to do on campus after class?</Link></h2>
                    </HalfColumn>
                    <HalfColumn>
                         {!diverseClick ? <><Link state={state} to="/welcome/diverse-community"><Img className="anim" fadeIn={true} fluid={homeDiverseCommunity.childImageSharp.fluid} /></Link><br /></> : <><Link state={state} to="/welcome/diverse-community"><div className="img-wrapper"><div class="img-overlay"></div><Img className="anim" fadeIn={true} fluid={homeDiverseCommunity.childImageSharp.fluid} /></div></Link><br /></>}
                         <h2><Link state={state} to="/welcome/diverse-community">Will I fit in?</Link></h2>
                    </HalfColumn>
               </Row>
               <br />
               <Row>
                    <HalfColumn>
                         {!livingDiningClick ? <><Link state={state} to="/welcome/living-dining"><Img className="anim" fadeIn={true} fluid={homeLivingDining.childImageSharp.fluid} /></Link><br /></> : <><Link state={state} to="/welcome/living-dining"><div className="img-wrapper"><div class="img-overlay"></div><Img className="anim" fadeIn={true} fluid={homeLivingDining.childImageSharp.fluid} /></div></Link><br /></>}
                         <h2><Link state={state} to="/welcome/living-dining">Where will I live and what will I eat?</Link></h2>
                    </HalfColumn>
                    <HalfColumn>
                         {!healthSafetyClick ? <><Link state={state} to="/welcome/health-safety"><Img className="anim" fadeIn={true} fluid={homeHealthSafety.childImageSharp.fluid} /></Link><br /></> : <><Link state={state} to="/welcome/health-safety"><div className="img-wrapper"><div class="img-overlay"></div><Img className="anim" fadeIn={true} fluid={homeHealthSafety.childImageSharp.fluid} /></div></Link><br /></>}
                         <h2><Link state={state} to="/welcome/health-safety">How will I stay healthy and safe on campus?</Link></h2>
                    </HalfColumn>
               </Row>
          </>
     );
}


export default Welcomer;