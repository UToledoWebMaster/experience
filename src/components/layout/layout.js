/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "typeface-source-sans-pro"
import "../css/normalize.css"
import "../css/skeleton.css"
import "../css/layout.css"
import PageTransition from 'gatsby-plugin-page-transitions';
// import "../../static/accessible"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    let keyCode;
    document.addEventListener('keydown', function (event) {
      keyCode = (event.keyCode ? event.keyCode : event.which);
      if (keyCode === 9) {
        // add class to body tag
        // let body = document.getElementsByTagName('body')[0];
        document.body.classList.add("accessible");
      }
    });
  });
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition
        defaultStyle={{
          position: 'relative',
          transition: '.5s',
          top: '5%',
          opacity: 0
        }}
        transitionStyles={{
          entering: { top: '5%', opacity: 0 },
          entered: { top: '0%', opacity: 1 },
          exiting: { top: '5%', opacity: 0 },
        }}
        transitionTime={300}
      >
        <div className="container">
          {children}
          <footer>
          </footer>
        </div>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
