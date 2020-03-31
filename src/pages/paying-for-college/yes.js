import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import YesContent from "../../components/paying-for-college/yesComponent"

const Yes = ({ location }) => (
     <Layout>
          <SEO title="Yes" />
          <Link className="button button-primary smaller float-right" to="/paying-for-college" state={location.state}>&larr; Back to Paying for College</Link>
          <YesContent state={location.state} />
     </Layout >
)

export default Yes
