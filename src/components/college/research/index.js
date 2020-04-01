import React from "react"
// import { Link } from "gatsby"
import { navigate } from "gatsby"
import ResearchContentBusiness from "./business"
import ResearchContentArts from "./arts"
import ResearchContentEducation from "./education"
import ResearchContentEngineering from "./engineering"
import ResearchContentHealth from "./health"
import ResearchContentLaw from "./law"
import ResearchContentMedicine from "./medicine"
import ResearchContentNursing from "./nursing"
import ResearchContentPharmacy from "./pharmacy"
import ResearchContentScience from "./science"
import ResearchContentUniversity from "./university"

const ResearchContent = ({ state }) => {
     if (state) {
          switch (state.collegeOfInterestClean) {
               case "businessandinnovation":
                    return <ResearchContentBusiness state={state} />
                    break;
               case "artsandletters":
                    return <ResearchContentArts state={state} />
                    break;
               case "education":
                    return <ResearchContentEducation state={state} />
                    break;
               case "engineering":
                    return <ResearchContentEngineering state={state} />
                    break;
               case "healthandhumanservices":
                    return <ResearchContentHealth state={state} />
                    break;
               case "law":
                    return <ResearchContentLaw state={state} />
                    break;
               case "medicineandlifescience":
                    return <ResearchContentMedicine state={state} />
                    break;
               case "nursing":
                    return <ResearchContentNursing state={state} />
                    break;
               case "pharmacyandpharmaceuticalsciences":
                    return <ResearchContentPharmacy state={state} />
                    break;
               case "naturalsciencesandmathematics":
                    return <ResearchContentScience state={state} />
                    break;
               case "universitycollege":
                    return <ResearchContentUniversity state={state} />
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


export default ResearchContent;