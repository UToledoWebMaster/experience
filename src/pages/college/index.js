import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Colleger from "../../components/college/colleger"
import { navigate } from "gatsby"
import { Row, HalfColumn } from "../../components/layout/layoutComponent"
import CollegeNav from "../../components/college/colleges/collegeNav"

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
                         <Colleger name={this.props.location.state.name}
                              college={this.props.location.state.collegeOfInterest}
                              academicSuccessClick={this.state.academicSuccessClick}
                              careerServicesClick={this.state.careerServicesClick}
                              experientialLearningClick={this.state.experientialLearningClick}
                              honorsClick={this.state.honorsClick}
                              researchClick={this.state.researchClick}
                              state={this.props.location.state}
                         />
                         <br />
                         <CollegeNav
                              state={this.props.location.state}
                              academicSuccessClick={this.state.academicSuccessClick}
                              careerServicesClic={this.state.careerServicesClick}
                              experientialLearningClick={this.state.experientialLearningClick}
                              honorsClick={this.state.honorsClick}
                              researchClick={this.state.researchClick}
                         />
                         <Row>
                              <HalfColumn>
                                   <Link className="block button button-primary" to="/welcome" state={this.props.location.state}>&larr; Welcome</Link>
                              </HalfColumn>
                              <HalfColumn>
                                   <Link className="block button button-primary" to="/paying-for-college" state={this.props.location.state}>Paying for College &rarr;</Link>
                              </HalfColumn>
                         </Row>
                    </Layout >
               )
          } else {
               if (typeof window !== 'undefined') {
                    navigate("/")
               }
               return (<></>)
          }
     }
}

export default College
