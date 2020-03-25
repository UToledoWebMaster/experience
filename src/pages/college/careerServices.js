import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import CareerServicesContent from "../../components/college/careerServices"
import PageTransition from 'gatsby-plugin-page-transitions';

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
               <CareerServicesContent state={location.state} />
               <br />

               <Link to="/">Click here</Link>
          </PageTransition>
     </Layout >
)

export default CareerServices
