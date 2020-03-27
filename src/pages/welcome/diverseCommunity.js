import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import DiverseCommunityContent from "../../components/welcome/diverseCommunity"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const DiverseCommunity = ({ location }) => (
     <Layout>
          <SEO title="Our Diverse Community" />
          <PageTransition
               defaultStyle={{
                    transition: '.5s',
                    top: '5%',
                    opacity: 0,
                    position: 'absolute',
               }}
               transitionStyles={{
                    entering: { top: '5%', opacity: 0 },
                    entered: { top: '0%', opacity: 1 },
                    exiting: { top: '5%', opacity: 0 },
               }}
               transitionTime={300}
          >
               <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, diverseClick: true }}>&larr; Back to Welcome</Link>
               <DiverseCommunityContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/studentLife" state={{ ...location.state, diverseClick: true }}>&larr; What's There to Do After Class?</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/livingDining" state={{ ...location.state, diverseClick: true }}>Where Will I Live? &rarr;</Link>
                    </HalfColumn>
               </Row>

          </PageTransition>
     </Layout >
)

export default DiverseCommunity
