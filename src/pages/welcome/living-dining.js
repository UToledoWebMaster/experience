import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import LivingDiningContent from "../../components/welcome/livingDining"
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const LivingDining = ({ location }) => (
     <Layout>
          <SEO title="Living and Dining" />
          <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, livingDiningClick: true }}>&larr; Back to Welcome</Link>
          <LivingDiningContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome/diverse-community" state={{ ...location.state, livingDiningClick: true }}>&larr; Will I Fit In?</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome/health-safety" state={{ ...location.state, livingDiningClick: true }}>How Will I Stay Healthy and Safe? &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default LivingDining
