import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import DiverseCommunityContent from "../../components/welcome/diverseCommunity"
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const DiverseCommunity = ({ location }) => (
     <Layout>
          <SEO title="Our Diverse Community" />
          <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, diverseClick: true }}>&larr; Back to Welcome</Link>
          <DiverseCommunityContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome/student-life" state={{ ...location.state, diverseClick: true }}>&larr; What's There to Do After Class?</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome/living-dining" state={{ ...location.state, diverseClick: true }}>Where Will I Live? &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default DiverseCommunity
