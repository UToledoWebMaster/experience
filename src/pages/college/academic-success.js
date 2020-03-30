import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import AcademicSuccessContent from "../../components/college/academicSuccess"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const AcademicSuccess = ({ location }) => (
     <Layout>
          <SEO title="Academic Success" />
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
               <AcademicSuccessContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college" state={{ ...location.state, academicSuccessClick: true }}>&larr; Back to My College</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/college/career-services" state={{ ...location.state, academicSuccessClick: true }}>Career Services &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default AcademicSuccess