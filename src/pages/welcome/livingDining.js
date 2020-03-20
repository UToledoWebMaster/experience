import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import LivingDiningContent from "../../components/livingDining"
import PageTransition from 'gatsby-plugin-page-transitions';

const LivingDining = ({ location }) => (
     <Layout>
          <SEO title="Living and Dining" />
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
               <LivingDiningContent state={location.state} />


               <Link to="/">Click here</Link>
          </PageTransition>
     </Layout >
)

export default LivingDining
