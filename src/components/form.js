import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth } from "./layout/layoutComponent"
import COLLEGES from "../static/collegesList";
import { gsap } from "gsap";


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
          if (formName.value && formCollege.value !== "admitted college") {
               gsap.to(formName, .2, { "border": "1px solid #D1D1D1" });
               gsap.to(formCollege, .2, { "border": "1px solid #D1D1D1" });
               gsap.fromTo(".anim:not(.mainIcon)", .5, { "opacity": 1, "bottom": "0px" }, { "opacity": 0, "bottom": "20px" });
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
          } else {
               if (!formName.value) {
                    gsap.to(formName, .2, { "border": "1px solid red" });
               } else {
                    gsap.to(formName, .2, { "border": "1px solid #D1D1D1" });
               }
               if (formCollege.value === "admitted college") {
                    gsap.to(formCollege, .2, { "border": "1px solid red" });
               } else {
                    gsap.to(formCollege, .2, { "border": "1px solid #D1D1D1" });
               }
          }
     }
     componentDidMount() {
          gsap.fromTo(".anim", .5, { "opacity": 0, "bottom": "20px" }, { "opacity": 1, "bottom": "0px", stagger: .3 });
          gsap.to(".welcomeTo", 3, { "left": "-80px", ease: "power2.out" });
          gsap.to(".experienceDay", 3, { "left": "80px", ease: "power2.out" });
     }
     render() {
          return (
               <>
                    <center>
                         <Row>
                              <FullWidth>
                                   <div className="welcomeTo">
                                        <div className="welcome anim">Welcome </div>
                                        <div className="to anim">to</div>
                                   </div>
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <div className="experienceDay">
                                        <div className="experience anim">UToledo</div>
                                   </div>
                              </FullWidth>
                         </Row>
                         <Row className="narrow">
                              <FullWidth>
                                   <p className="anim text-left">Congrats on your admission to UToledo.</p>
                                   <p className="anim text-left">So many times, we seal the deal when you visit campus. A virtual visit isn't quite the same. But with our new tool, you can still explore our programs and campus and meet fellow Rockets.</p>
                                   <p className="anim text-left">Let's get started!</p>
                                   <p className="anim text-left">Introduce yourself and let us know which college you were admitted to.</p>
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <input id="formName" placeholder="first name" className="anim" type="text" />
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <select id="formCollege" className="anim">
                                        <option>admitted college</option>
                                        {this.state.allColleges.map(college => {
                                             return <option name={college.tidyName} key={college.id}>{college.name}</option>
                                        })}
                                   </select>
                              </FullWidth>
                         </Row>
                         <Row>
                              <FullWidth>
                                   <input onClick={this.handleClick} className="continueBtn anim" type="button" value="Let's go" />
                              </FullWidth>
                         </Row>
                    </center>
               </>
          );
     }

}


export default Form;