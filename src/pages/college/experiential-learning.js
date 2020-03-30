import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ExperientialLearningContent from "../../components/college/experientialLearning"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const ExperientialLearning = ({ location }) => (
     <Layout>
          <SEO title="Experiential Learning" />
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
               <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, experientialLearningClick: true }}>&larr; Back to My College</Link>
               <ExperientialLearningContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college/career-services" state={{ ...location.state, experientialLearningClick: true }}>&larr; Career Services</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college/honors" state={{ ...location.state, experientialLearningClick: true }}>Honors &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default ExperientialLearning
