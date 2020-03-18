import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Welcomer from "../components/welcomer"
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
          if (this.props.location.state.diverseClick) {
               console.log('running diverseclick true');
               this.setState({
                    diverseClick: true
               })
          }
     }
     render() {
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
                         />


                         <Link to="/college" state={this.props.location.state}>Click here for college page</Link>
                    </PageTransition>
               </Layout >
          )
     }
}

export default Welcome
