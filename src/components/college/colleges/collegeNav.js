import React from "react"
import { Link } from "gatsby"

const CollegeNav = ({ state, academicSuccessClick, careerServicesClick, experientialLearningClick, honorsClick, researchClick }) => {
     return (
          <div className="grid collegeNav">
               <Link to="/college/honors" state={state}>
                    <div className={honorsClick ? `flipCard visited` : `flipCard`}>
                         <div className="flipCard__front">
                              <p>Honors</p>
                         </div>
                    </div>
               </Link>
               <Link to="/college/academic-success" state={state}>
                    <div className={academicSuccessClick ? `flipCard visited` : `flipCard`}>
                         <div className="flipCard__front">
                              <p>Academic Success</p>
                         </div>
                    </div>
               </Link>
               <Link to="/college/research" state={state}>
                    <div className={researchClick ? `flipCard visited` : `flipCard`}>
                         <div className="flipCard__front">
                              <p>Research</p>
                         </div>
                    </div>
               </Link>
               <Link to="/college/experiential-learning" state={state}>
                    <div className={experientialLearningClick ? `flipCard visited` : `flipCard`}>
                         <div className="flipCard__front">
                              <p>Experiential Learning</p>
                         </div>
                    </div>
               </Link>
               <Link to="/college/career-services" state={state}>
                    <div className={careerServicesClick ? `flipCard visited` : `flipCard`}>
                         <div className="flipCard__front">
                              <p>Career</p>
                         </div>
                    </div>
               </Link>
          </div>
     )
}

export default CollegeNav;