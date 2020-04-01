import React from "react"
// import { Link } from "gatsby"
import { navigate } from "gatsby"
import ExperientialLearningContentBusiness from "./business"
import ExperientialLearningContentArts from "./arts"
import ExperientialLearningContentEducation from "./education"
import ExperientialLearningContentEngineering from "./engineering"
import ExperientialLearningContentHealth from "./health"
import ExperientialLearningContentLaw from "./law"
import ExperientialLearningContentMedicine from "./medicine"
import ExperientialLearningContentNursing from "./nursing"
import ExperientialLearningContentPharmacy from "./pharmacy"
import ExperientialLearningContentScience from "./science"
import ExperientialLearningContentUniversity from "./university"

const ExperientialLearningContent = ({ state }) => {
     if (state) {
          switch (state.collegeOfInterestClean) {
               case "businessandinnovation":
                    return <ExperientialLearningContentBusiness state={state} />
                    break;
               case "artsandletters":
                    return <ExperientialLearningContentArts state={state} />
                    break;
               case "education":
                    return <ExperientialLearningContentEducation state={state} />
                    break;
               case "engineering":
                    return <ExperientialLearningContentEngineering state={state} />
                    break;
               case "healthandhumanservices":
                    return <ExperientialLearningContentHealth state={state} />
                    break;
               case "law":
                    return <ExperientialLearningContentLaw state={state} />
                    break;
               case "medicineandlifescience":
                    return <ExperientialLearningContentMedicine state={state} />
                    break;
               case "nursing":
                    return <ExperientialLearningContentNursing state={state} />
                    break;
               case "pharmacyandpharmaceuticalsciences":
                    return <ExperientialLearningContentPharmacy state={state} />
                    break;
               case "naturalsciencesandmathematics":
                    return <ExperientialLearningContentScience state={state} />
                    break;
               case "universitycollege":
                    return <ExperientialLearningContentUniversity state={state} />
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


export default ExperientialLearningContent;