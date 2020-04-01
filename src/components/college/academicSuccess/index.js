import React from "react"
// import { Link } from "gatsby"
import { navigate } from "gatsby"
import AcademicSuccessContentBusiness from "./business"
import AcademicSuccessContentArts from "./arts"
import AcademicSuccessContentEducation from "./education"
import AcademicSuccessContentEngineering from "./engineering"
import AcademicSuccessContentHealth from "./health"
import AcademicSuccessContentLaw from "./law"
import AcademicSuccessContentMedicine from "./medicine"
import AcademicSuccessContentNursing from "./nursing"
import AcademicSuccessContentPharmacy from "./pharmacy"
import AcademicSuccessContentScience from "./science"
import AcademicSuccessContentUniversity from "./university"

const AcademicSuccessContent = ({ state }) => {
     if (state) {
          switch (state.collegeOfInterestClean) {
               case "businessandinnovation":
                    return <AcademicSuccessContentBusiness state={state} />
                    break;
               case "artsandletters":
                    return <AcademicSuccessContentArts state={state} />
                    break;
               case "education":
                    return <AcademicSuccessContentEducation state={state} />
                    break;
               case "engineering":
                    return <AcademicSuccessContentEngineering state={state} />
                    break;
               case "healthandhumanservices":
                    return <AcademicSuccessContentHealth state={state} />
                    break;
               case "law":
                    return <AcademicSuccessContentLaw state={state} />
                    break;
               case "medicineandlifescience":
                    return <AcademicSuccessContentMedicine state={state} />
                    break;
               case "nursing":
                    return <AcademicSuccessContentNursing state={state} />
                    break;
               case "pharmacyandpharmaceuticalsciences":
                    return <AcademicSuccessContentPharmacy state={state} />
                    break;
               case "naturalsciencesandmathematics":
                    return <AcademicSuccessContentScience state={state} />
                    break;
               case "universitycollege":
                    return <AcademicSuccessContentUniversity state={state} />
                    break;
               default:
                    return ''
                    break;
          }
     } else {
          if (typeof window !== 'undefined') {
               navigate("/")
          }
          return (
               <>

               </>
          )
     }
}


export default AcademicSuccessContent;