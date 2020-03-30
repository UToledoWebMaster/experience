import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import HonorsContent from "../../components/college/Honors"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const Honors = ({ location }) => (
     <Layout>
          <SEO title="Honors" />
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
          </PageTransition>
     </Layout >
)

export default Honors
