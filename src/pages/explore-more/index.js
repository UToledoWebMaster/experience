import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ExploreMoreContent from '../../components/exploreMore/exploreMoreContent'
import { Row, FullWidth, HalfColumn } from '../../components/layout/layoutComponent'

const ExploreMore = ({ location }) => (
     <Layout>
          <SEO title="Explore More" />
          <ExploreMoreContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/whats-next" state={location.state}>&larr; Back to What's Next</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/" state={location.state}>Explore Other Colleges &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default ExploreMore
