import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ResearchContent from "../../components/college/research/index"
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const Research = ({ location }) => (
     <Layout>
          <SEO title="Research" />
          <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, researchClick: true }}>&larr; Back to My College</Link>
          <ResearchContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/academic-success" state={{ ...location.state, researchClick: true }}>&larr; Find Support</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/experiential-learning" state={{ ...location.state, researchClick: true }}>Learn by Doing &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default Research
