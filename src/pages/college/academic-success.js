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
                    <Link className="block button button-primary" to="/college/research" state={{ ...location.state, academicSuccessClick: true }}>&larr; Cool Research</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/career-services" state={{ ...location.state, academicSuccessClick: true }}>Career Services &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default AcademicSuccess