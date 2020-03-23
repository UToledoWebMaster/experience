import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
query Images {
#get all images from particular directory
#  images: allFile(filter: {relativeDirectory: {eq: "nameOfDirectory"}}){
#    id
#    childImageSharp{
#      fixed(width:200){
#        ...GatsbyImageSharpFixed
#      }
#      fluid{
#        ...GatsbyImageSharpFluid
#      }
#    }
#  }
  image: file(relativePath: {eq: "shield.png"})
  {
    id
    childImageSharp{
      fixed(width:100){
        ...GatsbyImageSharpFixed
      }
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)
  return (
    <header>
      <Img className="mainIcon anim" fadeIn={true} fixed={data.image.childImageSharp.fixed} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
