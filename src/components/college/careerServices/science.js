import React from "react"
import { navigate } from "gatsby"
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from "../../layout/layoutComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "../../slider"

const CareerServicesContentScience = ({ state }) => {
     const data = useStaticQuery(graphql`
     query scienceCareerServices {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "careerServices"}}){
         nodes{
         id
         name
         childImageSharp{
           fluid{
             ...GatsbyImageSharpFluid
           }
         }
     }
       }

     }
     `)
     const jamesDunaway = data.images.nodes.filter(node => node.name === 'jamesDunaway')[0];
     const jamesDunawaySrc = jamesDunaway.childImageSharp.fluid.src;
     const navindiWeerasinghe = data.images.nodes.filter(node => node.name === 'navindiWeerasinghe')[0];
     const navindiWeerasingheSrc = navindiWeerasinghe.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>Graduate Career-Ready</h1>
                              <p>Because that's the end game, right? To get a job. UToledo's Career Services  offers resources and strategies.</p>
                              <ul>
                                   <li>Choose a major.</li>
                                   <li>Develop career plans.</li>
                                   <li>Prep for a job search and interview.</li>
                                   <li>Find on– and off-campus part-time jobs.</li>
                                   <li>Find internships and full-time career positions.</li>

                              </ul>
                         </FullWidth>
                    </Row>
                    <Row>
                         <Slider className="testimonialSlider">
                              {/* Each div child of Slider is one slide in the slider */}
                              {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jamesDunawaySrc + ")" }}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>James Dunaway</h2>
                                             <p className="collegeTestimonySubtitle">Chemistry '16 | Oregon, Ohio</p>
                                             <p>"My education was challenging. But it built a mindset in me that nothing is too hard. You just have to try. It gave me confidence. I had people who took an interest in me. I didn’t have to ask. It was a given. It was a defining moment when I got my internship my junior year. I could answer all their questions – Have you done this? – with a yes. I knew the instrumentation. I knew the chemistry. I got a full-time job as a chemist when I graduated. I was able to pay back all my loans in three years."</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(" + navindiWeerasingheSrc + ")" }}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Navindi Weerasinghe '18</h2>
                                             <p className="collegeTestimonySubtitle">Navindi plans to become an optometrist and may pursue an M.B.A.</p>
                                             <p>"I received more than my money's worth at UToledo — a lot of things that money can’t buy. The best skill I mastered was to prioritize my time. My degree was rigorous, and I learned how to do many things at once. Now I apply it in my job. I've progressed quickly through the training, and now they want to cross-train me in different departments. I work with a diverse population and have no trouble connecting to anyone because we had students of all backgrounds at UToledo. The seeds of diversity and inclusion were planted in me there."</p>
                                        </div>
                                   </div>
                              </div>
                         </Slider>
                    </Row>
                    <br /><br />
               </>
          );
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


export default CareerServicesContentScience;