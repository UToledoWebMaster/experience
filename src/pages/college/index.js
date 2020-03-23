import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Colleger from "../../components/college/colleger"
import PageTransition from 'gatsby-plugin-page-transitions';

const College = ({ location }) => (
     <Layout>
          <SEO title="Welcome" />
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
               <Colleger college={location.state.collegeOfInterest} />

               <br />
               <Link to="/paying-for-college">Go To Paying for College</Link>
          </PageTransition>
     </Layout >
)

export default College
