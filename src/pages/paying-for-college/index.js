import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';
import PayingForCollegeContent from '../../components/paying-for-college/payingForCollegeContent'
// import { Row, HalfColumn } from '../../components/layout/layoutComponent'

const PayingForCollege = ({ location }) => (
     <Layout>
          <SEO title="Paying for College" />
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
               {/* <Link className="button button-primary smaller float-right" to="/college" state={{ ...location.state, honorsClick: true }}>&larr; Back to My College</Link> */}
               <PayingForCollegeContent state={location.state} />
          </PageTransition>
     </Layout >
)

export default PayingForCollege
