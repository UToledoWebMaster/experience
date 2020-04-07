import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import AcademicSuccessContent from "../../components/college/academicSuccess/index"
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const AcademicSuccess = ({ location }) => (
     <Layout>
          <SEO title="Academic Success" />
          <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, academicSuccessClick: true }}>&larr; Back to My College</Link>
          <AcademicSuccessContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/honors" state={{ ...location.state, academicSuccessClick: true }}>&larr; Accept the Challenge</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/research" state={{ ...location.state, academicSuccessClick: true }}>Research with Faculty &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default AcademicSuccess