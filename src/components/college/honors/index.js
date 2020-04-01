import React from "react"
// import { Link } from "gatsby"
import { navigate } from "gatsby"
import HonorsContentBusiness from "./business"
import HonorsContentArts from "./arts"
import HonorsContentEducation from "./education"
import HonorsContentEngineering from "./engineering"
import HonorsContentHealth from "./health"
import HonorsContentLaw from "./law"
import HonorsContentMedicine from "./medicine"
import HonorsContentNursing from "./nursing"
import HonorsContentPharmacy from "./pharmacy"
import HonorsContentScience from "./science"
import HonorsContentUniversity from "./university"

const HonorsContent = ({ state }) => {
     if (state) {
          switch (state.collegeOfInterestClean) {
               case "businessandinnovation":
                    return <HonorsContentBusiness state={state} />
                    break;
               case "artsandletters":
                    return <HonorsContentArts state={state} />
                    break;
               case "education":
                    return <HonorsContentEducation state={state} />
                    break;
               case "engineering":
                    return <HonorsContentEngineering state={state} />
                    break;
               case "healthandhumanservices":
                    return <HonorsContentHealth state={state} />
                    break;
               case "law":
                    return <HonorsContentLaw state={state} />
                    break;
               case "medicineandlifescience":
                    return <HonorsContentMedicine state={state} />
                    break;
               case "nursing":
                    return <HonorsContentNursing state={state} />
                    break;
               case "pharmacyandpharmaceuticalsciences":
                    return <HonorsContentPharmacy state={state} />
                    break;
               case "naturalsciencesandmathematics":
                    return <HonorsContentScience state={state} />
                    break;
               case "universitycollege":
                    return <HonorsContentUniversity state={state} />
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


export default HonorsContent;