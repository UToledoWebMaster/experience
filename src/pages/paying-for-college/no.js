import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import NoContent from "../../components/paying-for-college/noComponent"

const No = ({ location }) => (
     <Layout>
          <SEO title="No" />
          <Link className="button button-primary smaller float-right" to="/paying-for-college" state={location.state}>&larr; Back to Paying for College</Link>
          <NoContent state={location.state} />
     </Layout >
)

export default No
