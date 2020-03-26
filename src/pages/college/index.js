import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Colleger from "../../components/college/colleger"
import PageTransition from 'gatsby-plugin-page-transitions';
import { navigate } from "gatsby"

class College extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               academicSuccessClick: false,
               careerServicesClick: false,
               experientialLearningClick: false,
               honorsClick: false,
               researchClick: false

          }
     }
     componentDidMount() {
          if (this.props.location.state) {
               if (this.props.location.state.academicSuccessClick) {
                    this.setState({
                         academicSuccessClick: true
                    })
               }
               if (this.props.location.state.careerServicesClick) {
                    this.setState({
                         careerServicesClick: true
                    })
               }
               if (this.props.location.state.experientialLearningClick) {
                    this.setState({
                         experientialLearningClick: true
                    })
               }
               if (this.props.location.state.honorsClick) {
                    this.setState({
                         honorsClick: true
                    })
               }
               if (this.props.location.state.researchClick) {
                    this.setState({
                         researchClick: true
                    })
               }
          }
     }
     render() {
          if (this.props.location.state) {
               return (
                    <Layout>
                         <SEO title={`College of ${this.props.location.state.collegeOfInterest}`} />
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
                              <Colleger name={this.props.location.state.name}
                                   college={this.props.location.state.collegeOfInterest}
                                   academicSuccessClick={this.state.academicSuccessClick}
                                   careerServicesClick={this.state.careerServicesClick}
                                   experientialLearningClick={this.state.experientialLearningClick}
                                   honorsClick={this.state.honorsClick}
                                   researchClick={this.state.researchClick}
                                   state={this.props.location.state}
                              />


                              <Link to="/paying-for-college" state={this.props.location.state}>Click here for paying for college</Link>
                         </PageTransition>
                    </Layout >
               )
          } else {
               navigate("/")
               return (<></>)
          }
     }
}

export default College
