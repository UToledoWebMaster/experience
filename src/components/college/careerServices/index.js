import React from "react"
// import { Link } from "gatsby"
import { navigate } from "gatsby"
import CareerServicesContentBusiness from "./business"
import CareerServicesContentArts from "./arts"
import CareerServicesContentEducation from "./education"
import CareerServicesContentEngineering from "./engineering"
import CareerServicesContentHealth from "./health"
import CareerServicesContentLaw from "./law"
import CareerServicesContentMedicine from "./medicine"
import CareerServicesContentNursing from "./nursing"
import CareerServicesContentPharmacy from "./pharmacy"
import CareerServicesContentScience from "./science"
import CareerServicesContentUniversity from "./university"

const CareerServicesContent = ({ state }) => {
     if (state) {
          switch (state.collegeOfInterestClean) {
               case "businessandinnovation":
                    return <CareerServicesContentBusiness state={state} />
                    break;
               case "artsandletters":
                    return <CareerServicesContentArts state={state} />
                    break;
               case "education":
                    return <CareerServicesContentEducation state={state} />
                    break;
               case "engineering":
                    return <CareerServicesContentEngineering state={state} />
                    break;
               case "healthandhumanservices":
                    return <CareerServicesContentHealth state={state} />
                    break;
               case "law":
                    return <CareerServicesContentLaw state={state} />
                    break;
               case "medicineandlifescience":
                    return <CareerServicesContentMedicine state={state} />
                    break;
               case "nursing":
                    return <CareerServicesContentNursing state={state} />
                    break;
               case "pharmacyandpharmaceuticalsciences":
                    return <CareerServicesContentPharmacy state={state} />
                    break;
               case "naturalsciencesandmathematics":
                    return <CareerServicesContentScience state={state} />
                    break;
               case "universitycollege":
                    return <CareerServicesContentUniversity state={state} />
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


export default CareerServicesContent;