import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ExploreMoreContent from '../../components/exploreMore/exploreMoreContent'
import { Row, FullWidth } from '../../components/layout/layoutComponent'

const ExploreMore = ({ location }) => (
     <Layout>
          <SEO title="Explore More" />
          <ExploreMoreContent state={location.state} />
          <br />
          <Row>
               <FullWidth>
                    <Link className="block button button-primary" to="/whats-next" state={location.state}>&larr; What's Next</Link>
               </FullWidth>
          </Row>
     </Layout >
)

export default ExploreMore
