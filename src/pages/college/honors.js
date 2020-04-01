import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import HonorsContent from "../../components/college/honors/index"
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const Honors = ({ location }) => (
     <Layout>
          <SEO title="Honors" />
          <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, honorsClick: true }}>&larr; Back to My College</Link>
          <HonorsContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/experiential-learning" state={{ ...location.state, honorsClick: true }}>&larr; Experiential Learning</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/research" state={{ ...location.state, honorsClick: true }}>Cool Research &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default Honors
