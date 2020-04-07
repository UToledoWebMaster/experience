import React from "react"
import { Link } from "gatsby"
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
     switch (state.collegeOfInterestClean) {
          case "artsandletters":
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
               break;
          case "businessandinnovation":
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
               break;
          case "education":
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
               break;
          case "engineering":
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
               break;
          case "healthandhumanservices":
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
               break;
          case "law":
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
               break;
          case "medicineandlifesciences":
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
               break;
          case "nursing":
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
               break;
          case "pharmacyandpharmaceuticalsciences":
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
               break;
          case "naturalsciencesandmathematics":
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
               break;
          case "universitycollege":
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
               break;
          default:
               return ''
               break;
     }
}


export default Colleger;