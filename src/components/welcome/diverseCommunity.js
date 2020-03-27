import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn } from "../layout/layoutComponent"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { fasGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

const DiverseCommunityContent = ({ state }) => {
     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Will I Fit In?</h1>
                              <p>Plenty - and the more you get involved, the more likely you'll graduate on time and be a successful student.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <QuarterColumn>
                              <img src="https://via.placeholder.com/300x300.png?text=Photo+of+Sally" />
                         </QuarterColumn>
                         <ThreeQuarterColumn>
                              <div className="skyBack" style={{ padding: '20px' }}>
                                   <h2>Just ask Sally</h2>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                              </div>
                         </ThreeQuarterColumn>
                    </Row>
                    <Row>
                         <HalfColumn>
                              {/* <FontAwesomeIcon icon={fasGlobeAmericas} /> */}
                              <h2 style={{ textAlign: 'center' }}>84 countries</h2>
                         </HalfColumn>
                         <HalfColumn>
                              <h2 style={{ textAlign: 'center' }}>42 states</h2>
                         </HalfColumn>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>UToledo is just the right size. Students tell us that all the time. Big enough to have tons of opportunities. Small enough to forge meaningful relationships.</p>
                              <p>Chances are you will run into people at UToledo who don’t look or think like you. Who have different passions and opinions. We value all of you. And let’s face it. We’re all global citizens now – you know that better than we do. Broadening your horizons will give you an edge after graduation.</p>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <h1>SLIDESHOW SECTION</h1>
                         </FullWidth>
                    </Row>
                    <Row>
                         <FullWidth>
                              <p>These are just a sample of the services we offer our students:</p>
                              <ul>
                                   <li>Office of Multicultural Student Success</li>
                                   <li>Student Disability Services</li>
                                   <li>Center of International Studies and Programs</li>
                                   <li>Catherine S. Eberly Center for Women</li>
                                   <li>LGBTQA+ initiatives</li>
                              </ul>
                         </FullWidth>
                    </Row>
               </>
          );
     } else {
          navigate("/")
          return (
               <>

               </>
          )
     }
}


export default DiverseCommunityContent;