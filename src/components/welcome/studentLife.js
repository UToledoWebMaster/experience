import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { Row, FullWidth, ThreeQuarterColumn, HalfColumn, QuarterColumn, ThirdColumn } from "../layout/layoutComponent"
import FlipCard from "../flipCard.js"
import SingleTestimony from "../singleTestimony.js"
import { graphql, useStaticQuery } from "gatsby"

const StudentLifeContent = ({ state }) => {
     const data = useStaticQuery(graphql`
     query studentLife {
     #get all images from particular directory
       images: allFile(filter: {relativeDirectory: {eq: "studentLife"}}){
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
     const jasonGonring = data.images.nodes.filter(node => node.name === 'jasonGonring')[0];
     const jasonGonringSrc = jasonGonring.childImageSharp.fluid.src;

     if (state) {
          return (
               <>
                    <Row>
                         <FullWidth>
                              <h1>What's There to Do on Campus After Class?</h1>
                              <p>Plenty – and the more you get involved, the more likely you’ll graduate on time and be a successful student.</p>
                         </FullWidth>
                    </Row>
                    <SingleTestimony>
                         <ThreeQuarterColumn>
                              <div className="headshotQuote__text">
                                   <h2>Just ask Jason</h2>
                                   <p>"I participated in student organizations that focused on leadership development and built a network of people that will continue to be close friends and valuable connections far beyond graduation. If I wasn't so involved, I most likely wouldn't have found my business partner. We founded Urbivors, an online farmer's market that delivers local produce to students."</p>
                                   <p><strong>Jason Gonring</strong><br />Class of 2019, electrical engineering | Lambertville, Mich.</p>

                              </div>
                         </ThreeQuarterColumn>
                         <QuarterColumn>
                              <div className="headshotQuote__image" style={{ backgroundImage: "url(" + jasonGonringSrc + ")" }}></div>
                         </QuarterColumn>
                    </SingleTestimony>
                    <br /><br />
                    {/* <Row> */}
                    {/* <Slider> */}
                    {/* Each div child of Slider is one slide in the slider */}
                    {/* Keep the old "className="row" usage here, I tried using Row but it gave me an error */}
                    {/* <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)" }}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)" }}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="row skyBack">
                                   <div className="three columns">
                                        <div className="headshotQuote__image" style={{ backgroundImage: "url(https://via.placeholder.com/300x300.png?text=Photo+of+Sally)" }}></div>
                                   </div>
                                   <div className="nine columns">
                                        <div className="headshotQuote__text">
                                             <h2>Just ask Sally</h2>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis deserunt quaerat facilis recusandae maiores expedita tempora ducimus adipisci praesentium ad vitae voluptatem voluptate, dolores in harum iure temporibus.</p>
                                        </div>
                                   </div>
                              </div>
                         </Slider>
                    </Row>
                    <br /><br /> */}
                    <Row className="halfStack">
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Be a leader."
                                   backContent="Get involved in any of 400+ student organizations. Our most successful students say this is their best piece of advice. Build your resume. Make friends. Find yourself."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Give back."
                                   backContent="Our students are givers. They donated 43,000 volunteer hours last year. Volunteer on campus and in our local community."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Make lifelong friends."
                                   backContent="Get outside your room. Attend lectures, concerts and plays. Cheer on 15 NCAA Division I athletic teams. Rocket spirit is loud and proud. Embrace it."
                              />
                         </QuarterColumn>
                         <QuarterColumn>
                              <FlipCard
                                   frontContent="Explore."
                                   backContent="Toledo is a cool city. Hop on a city bus for free with your ID and explore Toledo's growing downtown. We’ve got minor-league hockey and baseball. Tons of restaurants and concerts. A world-renowned art museum. A dozen hikable metroparks."
                              />
                         </QuarterColumn>
                    </Row>
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


export default StudentLifeContent;