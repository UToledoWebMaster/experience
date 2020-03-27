import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import HealthSafetyContent from "../../components/welcome/healthSafety"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const HealthSafety = ({ location }) => (
     <Layout>
          <SEO title="Health and Safety" />
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
               <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, healthSafetyClick: true }}>&larr; Back to Welcome</Link>
               <HealthSafetyContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/livingDining" state={{ ...location.state, healthSafetyClick: true }}>&larr; Where Will I Live?</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college" state={{ ...location.state, healthSafetyClick: true }}>My College &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default HealthSafety
