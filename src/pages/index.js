import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Form from "../components/form"
import SEO from "../components/seo"
import { gsap } from "gsap";

export const Loading = () => {
  const data = useStaticQuery(graphql`
  query imagesAndImages {
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
    <>
      <Img className="loader" fadeIn={true} fixed={data.image.childImageSharp.fixed} />
    </>
  )

}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  loadAnim() {
    const loader = document.querySelector('.loader');
    gsap.to(loader, 1, {
      "rotateY": "180deg", "repeat": 1, onComplete: () => {
        gsap.to(loader, .8, {
          "opacity": 0, onComplete: () => {
            this.setState(
              {
                loaded: true
              }
            )
          }
        })
      }
    });
  }
  componentDidMount() {
    this.loadAnim();
  }
  render() {
    if (!this.state.loaded) {
      return (
        <Loading />
      )
    } else {
      return (
        <Layout>
          <SEO title="Home" />
          <Form />
        </Layout>

      )
    }
  }
}

export default IndexPage
