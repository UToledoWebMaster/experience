import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import LivingDiningContent from "../../components/welcome/livingDining"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const LivingDining = ({ location }) => (
     <Layout>
          <SEO title="Living and Dining" />
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
               <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, livingDiningClick: true }}>&larr; Back to Welcome</Link>
               <LivingDiningContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/diverseCommunity" state={{ ...location.state, livingDiningClick: true }}>&larr; Will I Fit In?</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/healthSafety" state={{ ...location.state, livingDiningClick: true }}>How Will I Stay Healthy and Safe? &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default LivingDining
