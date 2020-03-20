import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import DiverseCommunityContent from "../../components/diverseCommunity"
import PageTransition from 'gatsby-plugin-page-transitions';

const DiverseCommunity = ({ location }) => (
     <Layout>
          <SEO title="Our Diverse Community" />
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
               <DiverseCommunityContent state={location.state} />


               <Link to="/">Click here</Link>
          </PageTransition>
     </Layout >
)

export default DiverseCommunity
