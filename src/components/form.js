import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth } from "./layoutComponent"
import COLLEGES from "../static/collegesList";


class Form extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               collegeOfInterest: "",
               collegeOfInterestClean: "",
               allColleges: COLLEGES
          }
     }
     handleClick = () => {
          const formName = document.getElementById("formName");
          const formCollege = document.getElementById("formCollege");
          if (formName.value && formCollege.value) {
               this.setState({
                    name: formName.value,
                    collegeOfInterest: formCollege.value,
                    collegeOfInterestClean: formCollege.value.toLowerCase().split(' ').join('')
               }, () => {
                    navigate(
                         "/welcome",
                         {
                              state: {
                                   name: this.state.name,
                                   collegeOfInterest: this.state.collegeOfInterest,
                                   collegeOfInterestClean: this.state.collegeOfInterestClean
                              }
                         }
                    )
               });
          }
     }
     render() {
          return (
               <>
                    <center>
                         <Row>
                              <FullWidth>
                                   <input id="formName" type="text" />
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <select id="formCollege">
                                        {this.state.allColleges.map(college => {
                                             return <option name={college.tidyName} key={college.id}>{college.name}</option>
                                        })}
                                   </select>
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <input onClick={this.handleClick} className="continueBtn" type="button" value="Continue" />
                              </FullWidth>
                         </Row>
                    </center>
               </>
          );
     }

}


export default Form;