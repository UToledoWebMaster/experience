import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import CareerServicesContent from "../../components/college/careerServices"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const CareerServices = ({ location }) => (
     <Layout>
          <SEO title="Career Services" />
          <PageTransition
               defaultStyle={{
                    transition: '.5s',
                    top: '5%',
                    opacity: 0,
                    position: 'absolute',
               }}
               transitionStyles={{
                    entering: { top: '5%', opacity: 0 },
                    entered: { top: '0%', opacity: 1 },
                    exiting: { top: '5%', opacity: 0 },
               }}
               transitionTime={300}
          >
               <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, careerServicesClick: true }}>&larr; Back to My College</Link>
               <CareerServicesContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college/academic-success" state={{ ...location.state, careerServicesClick: true }}>&larr; You Will Succeed</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college/experiential-learning" state={{ ...location.state, careerServicesClick: true }}>Experiential &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default CareerServices
