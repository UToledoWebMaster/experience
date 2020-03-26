import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Welcomer from "../../components/welcome/welcomer"
import { navigate } from "gatsby"

import PageTransition from 'gatsby-plugin-page-transitions';


class Welcome extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               diverseClick: false,
               studentLifeClick: false,
               livingDiningClick: false,
               healthSafetyClick: false

          }
     }
     componentDidMount() {
          if (this.props.location.state) {
               if (this.props.location.state.diverseClick) {
                    this.setState({
                         diverseClick: true
                    })
               }
               if (this.props.location.state.studentLifeClick) {
                    this.setState({
                         studentLifeClick: true
                    })
               }
               if (this.props.location.state.livingDiningClick) {
                    this.setState({
                         livingDiningClick: true
                    })
               }
               if (this.props.location.state.healthSafetyClick) {
                    this.setState({
                         healthSafetyClick: true
                    })
               }
          }
     }
     render() {
          if (this.props.location.state) {
               return (
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
                              <Welcomer name={this.props.location.state.name}
                                   college={this.props.location.state.collegeOfInterest}
                                   diverseClick={this.state.diverseClick}
                                   studentLifeClick={this.state.studentLifeClick}
                                   livingDiningClick={this.state.livingDiningClick}
                                   healthSafetyClick={this.state.healthSafetyClick}
                                   state={this.props.location.state}
                                   screens={this.state.screens}
                              />


                              <Link to="/college" state={this.props.location.state}>Click here for college page</Link>
                         </PageTransition>
                    </Layout >
               )
          } else {
               navigate("/")
               return (
                    <></>
               )
          }
     }
}

export default Welcome
