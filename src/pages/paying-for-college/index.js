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
                    <Link className="block button button-primary" to="/college" state={location.state}>&larr; My College</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/keep-exploring" state={location.state}>Keep Exploring &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default PayingForCollege
