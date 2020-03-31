import React from "react"
// import { Link } from "gatsby"
// import { Row, ThirdColumn } from "../layout/layoutComponent"
import Business from "./colleges/business"
import Arts from "./colleges/arts"
import Education from "./colleges/education"
import Engineering from "./colleges/engineering"
import Health from "./colleges/health"
import Law from "./colleges/law"
import Medicine from "./colleges/medicine"
import Nursing from "./colleges/nursing"
import Pharmacy from "./colleges/pharmacy"
import Science from "./colleges/science"
import University from "./colleges/university"

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
     } else if (state.collegeOfInterestClean === 'artsandletters') {
          return (
               <>
                    <Arts
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'education') {
          return (
               <>
                    <Education
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'engineering') {
          return (
               <>
                    <Engineering
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'healthandhumanservices') {
          return (
               <>
                    <Health
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'law') {
          return (
               <>
                    <Law
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'medicineandlifesciences') {
          return (
               <>
                    <Medicine
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'nursing') {
          return (
               <>
                    <Nursing
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'pharmacyandpharmaceuticalsciences') {
          return (
               <>
                    <Pharmacy
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'naturalsciencesandmathematics') {
          return (
               <>
                    <Science
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     } else if (state.collegeOfInterestClean === 'universitycollege') {
          return (
               <>
                    <University
                         state={state}
                         academicSuccessClick={academicSuccessClick}
                         careerServicesClick={careerServicesClick}
                         experientialLearningClick={experientialLearningClick}
                         honorsClick={honorsClick}
                         researchClick={researchClick}
                    />
               </>
          )
     }
}


export default Colleger;