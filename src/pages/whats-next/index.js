import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import WhatsNextContent from '../../components/whatsNext/whatsNextContent'
import { Row, FullWidth } from '../../components/layout/layoutComponent'

const WhatsNext = ({ location }) => (
     <Layout>
          <SEO title="What's Next?" />
          <WhatsNextContent state={location.state} />
          <br />
          <Row>
               <FullWidth>
                    <Link className="block button button-primary" to="/explore-more" state={location.state}>Explore More &rarr;</Link>
               </FullWidth>
          </Row>
     </Layout >
)

export default WhatsNext
