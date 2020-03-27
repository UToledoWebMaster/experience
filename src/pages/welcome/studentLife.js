import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import StudentLifeContent from "../../components/welcome/studentLife"
import PageTransition from 'gatsby-plugin-page-transitions';
import { Row, HalfColumn } from "../../components/layout/layoutComponent"

const StudentLife = ({ location }) => (
     <Layout>
          <SEO title="Student Life" />
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
               <Link className="button button-primary smaller float-right" to="/welcome" state={{ ...location.state, studentLifeClick: true }}>&larr; Back to Welcome</Link>
               <StudentLifeContent state={location.state} />
               <br />
               <Row>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome" state={{ ...location.state, studentLifeClick: true }}>&larr; Back to Welcome</Link>
                    </HalfColumn>
                    <HalfColumn>
                         <Link className="block button button-primary" to="/welcome/diverseCommunity" state={{ ...location.state, studentLifeClick: true }}>Will I Fit In? &rarr;</Link>
                    </HalfColumn>
               </Row>
          </PageTransition>
     </Layout >
)

export default StudentLife
