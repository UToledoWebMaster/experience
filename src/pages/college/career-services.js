import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import CareerServicesContent from "../../components/college/careerServices/index"
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const CareerServices = ({ location }) => (
     <Layout>
          <SEO title="Career Services" />
          <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, careerServicesClick: true }}>&larr; Back to My College</Link>
          <CareerServicesContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/experiential-learning" state={{ ...location.state, careerServicesClick: true }}>&larr; Learn by Doing</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/college/honors" state={{ ...location.state, careerServicesClick: true }}>Accept the Challenge &rarr;</Link>
               </HalfColumn>
          </Row>
     </Layout >
)

export default CareerServices
