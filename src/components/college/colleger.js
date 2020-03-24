import React from "react"
import { Link } from "gatsby"
import { Row, ThirdColumn } from "../layout/layoutComponent"
import Business from "./colleges/business"

// class Colleger extends React.Component {
//      constructor(props) {
//           super(props);
//      }
//      render() {
//           if (this.props.state.collegeOfInterestClean === 'businessandinnovation') {
//                return (
//                     <>
//                          <Business
//                               state={this.props.state}
//                               academicSuccessClick={this.props.academicSuccessClick}
//                               careerServicesClick={this.props.careerServicesClick}
//                               experientialLearningClick={this.props.experientialLearningClick}
//                               honorsClick={this.props.honorsClick}
//                               researchClick={this.props.researchClick}
//                          />
//                     </>
//                )
//           } else {
//                return (
//                     <>
//                          {/* <h1>welcome {name}</h1>
//                     <h2>You Are Interested in {college}</h2>
//                     <Row>
//                          <ThirdColumn>
//                               {!academicSuccessClick ? <><Link state={state} to="/college/academicSuccess"><img src="https://via.placeholder.com/728x300.png?text=Academic+Success" /></Link><br /></> : <><Link state={state} to="/college/academicSuccess"><img src="https://via.placeholder.com/728x300.png?text=Academic+Success+Visited" /></Link><br /></>}
//                               <p>Some text about Academic Success</p>
//                          </ThirdColumn>
//                          <ThirdColumn>
//                               {!careerServicesClick ? <><Link state={state} to="/college/careerServices"><img src="https://via.placeholder.com/728x300.png?text=Career+Services" /></Link><br /></> : <><Link state={state} to="/college/careerServices"><img src="https://via.placeholder.com/728x300.png?text=Career+Services+Visited" /></Link><br /></>}
//                               <p>Some text about Career Services</p>
//                          </ThirdColumn>
//                          <ThirdColumn>
//                               {!experientialLearningClick ? <><Link state={state} to="/college/experientialLearning"><img src="https://via.placeholder.com/728x300.png?text=Experiential+Learning" /></Link><br /></> : <><Link state={state} to="/college/experientialLearning"><img src="https://via.placeholder.com/728x300.png?text=Experiential+Learning+Visited" /></Link><br /></>}
//                               <p>Some text about Experiential Learning</p>
//                          </ThirdColumn>
//                     </Row>
//                     <Row>
//                          <ThirdColumn>
//                               {!honorsClick ? <><Link state={state} to="/college/honors"><img src="https://via.placeholder.com/728x300.png?text=Honors" /></Link><br /></> : <><Link state={state} to="/college/honors"><img src="https://via.placeholder.com/728x300.png?text=Honors+Visited" /></Link><br /></>}
//                               <p>Some text about Honors</p>
//                          </ThirdColumn>
//                          <ThirdColumn>
//                               {!researchClick ? <><Link state={state} to="/college/research"><img src="https://via.placeholder.com/728x300.png?text=Research" /></Link><br /></> : <><Link state={state} to="/college/research"><img src="https://via.placeholder.com/728x300.png?text=Research+Visited" /></Link><br /></>}
//                               <p>Some text about Research</p>
//                          </ThirdColumn>
//                     </Row> */}
//                     other than cobi
//                     </>
//                );
//           }
//      }

// }

const Colleger = ({ name, college, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick, state }) => {
     if (state.collegeOfInterestClean === 'businessandinnovation') {
          return (
               <>
                    <Business
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else {
          return (
               <>
                    <h1>welcome {name}</h1>
                    <h2>You Are Interested in {college}</h2>
                    <Row>
                         <ThirdColumn>
                              {!academicSuccessClick ? <><Link state={state} to="/college/academicSuccess"><img src="https://via.placeholder.com/728x300.png?text=Academic+Success" /></Link><br /></> : <><Link state={state} to="/college/academicSuccess"><img src="https://via.placeholder.com/728x300.png?text=Academic+Success+Visited" /></Link><br /></>}
                              <p>Some text about Academic Success</p>
                         </ThirdColumn>
                         <ThirdColumn>
                              {!careerServicesClick ? <><Link state={state} to="/college/careerServices"><img src="https://via.placeholder.com/728x300.png?text=Career+Services" /></Link><br /></> : <><Link state={state} to="/college/careerServices"><img src="https://via.placeholder.com/728x300.png?text=Career+Services+Visited" /></Link><br /></>}
                              <p>Some text about Career Services</p>
                         </ThirdColumn>
                         <ThirdColumn>
                              {!experientialLearningClick ? <><Link state={state} to="/college/experientialLearning"><img src="https://via.placeholder.com/728x300.png?text=Experiential+Learning" /></Link><br /></> : <><Link state={state} to="/college/experientialLearning"><img src="https://via.placeholder.com/728x300.png?text=Experiential+Learning+Visited" /></Link><br /></>}
                              <p>Some text about Experiential Learning</p>
                         </ThirdColumn>
                    </Row>
                    <Row>
                         <ThirdColumn>
                              {!honorsClick ? <><Link state={state} to="/college/honors"><img src="https://via.placeholder.com/728x300.png?text=Honors" /></Link><br /></> : <><Link state={state} to="/college/honors"><img src="https://via.placeholder.com/728x300.png?text=Honors+Visited" /></Link><br /></>}
                              <p>Some text about Honors</p>
                         </ThirdColumn>
                         <ThirdColumn>
                              {!researchClick ? <><Link state={state} to="/college/research"><img src="https://via.placeholder.com/728x300.png?text=Research" /></Link><br /></> : <><Link state={state} to="/college/research"><img src="https://via.placeholder.com/728x300.png?text=Research+Visited" /></Link><br /></>}
                              <p>Some text about Research</p>
                         </ThirdColumn>
                    </Row>
               </>
          );
     }
}


export default Colleger;