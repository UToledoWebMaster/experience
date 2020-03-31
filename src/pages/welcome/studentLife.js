import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import StudentLifeContent from "../../components/welcome/studentLife"
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const StudentLife = ({ location }) => (
     <Layout>
          <SEO title="Student Life" />
          <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, studentLifeClick: true }}>&larr; Back to Welcome</Link>
          <StudentLifeContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome" state={{ ...location.state, studentLifeClick: true }}>&larr; Back to Welcome</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/welcome/diverseCommunity" state={{ ...location.state, studentLifeClick: true }}>Will I Fit In? &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default StudentLife
