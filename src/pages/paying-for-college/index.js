import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import PayingForCollegeContent from '../../components/paying-for-college/payingForCollegeContent'
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const PayingForCollege = ({ location }) => (
     <Layout>
          <SEO title="Paying for College" />
          <PayingForCollegeContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college" state={location.state}>&larr; Back to My College</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/whats-next" state={location.state}>What's Next? &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default PayingForCollege
