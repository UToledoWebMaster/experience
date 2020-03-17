import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Welcomer from "../components/welcomer"
import PageTransition from 'gatsby-plugin-page-transitions';

const Welcome = ({ location }) => (
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
               <Welcomer name={location.state.name} college={location.state.collegeOfInterest} />


               <Link to="/">Click here</Link>
          </PageTransition>
     </Layout >
)

export default Welcome
