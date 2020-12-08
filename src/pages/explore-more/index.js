import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import ExploreMoreContent from '../../components/exploreMore/exploreMoreContent'
import { Row, FullWidth, HalfColumn, QuarterColumn, ThreeQuarterColumn } from '../../components/layout/layoutComponent'

const ExploreMore = ({ location }) => (
     <Layout>
          <SEO title="Explore More" />
          <ExploreMoreContent state={location.state} />
          <br />
          <Row>
               <HalfColumn>
                    <Link className="block button button-primary" to="/whats-next" state={location.state}>&larr; Back to What's Next</Link>
               </HalfColumn>
               <HalfColumn>
                    <Link className="block button button-primary" to="/" state={location.state}>Explore Other Colleges &rarr;</Link>
               </HalfColumn>
          </Row>
          <br />
          <h1>SHOW YOUR ROCKET PRIDE</h1>
                    <p>Show your pride in becoming a new UToledo Rocket! Share a GIF or graphic on your favorite social media platform. Print and display the poster at home or during virtual celebrations.</p>
                    <h2>GIF</h2>
                    <h3>Students</h3>
                    <Row>
                         <HalfColumn>
                              <img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-gif-blue.gif" alt="Shareable gif for new Rocket students" />
                              <p style={{textAlign: "center"}}><a className="link_button" href="https://www.utoledo.edu/futurerocket/social/images/new-rocket-blue.mp4">Download MP4</a></p>
                         </HalfColumn>
                         <HalfColumn>
                              <img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-gif-photo.gif" alt="Shareable gif for new Rocket students" />
                              <p style={{textAlign: "center"}}><a className="link_button" href="https://www.utoledo.edu/futurerocket/social/images/new-rocket-photo.mp4">Download MP4</a></p>
                         </HalfColumn>
                    </Row>
                    <h2>Instagram</h2>
		          <h3>Students</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-instagram-blue.jpg" alt="Shareable Instagram graphic for new Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-instagram-photo.jpg" alt="Shareable Instagram graphic for new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                         <h3>Parents</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-instagram-blue.jpg" alt="Shareable Instagram graphic for new parents of Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-instagram-photo.jpg" alt="Shareable Instagram graphic for parents of new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                    <h2>Facebook Cover Image</h2>
		          <h3>Students</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-facebook-blue.jpg" alt="Shareable Facebook graphic for new Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-facebook-photo.jpg" alt="Shareable Facebook graphic for new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                    <h3>Parents</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-facebook-blue.jpg" alt="Shareable Facebook graphic for parent of new Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-facebook-photo.jpg" alt="Shareable Facebook graphic for parent of new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                    <h2>Twitter Header Image</h2>
		          <h3>Students</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-twitter-blue.jpg" alt="Shareable Twitter graphic for new Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-twitter-photo.jpg" alt="Shareable Twitter graphic for new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                    <h3>Parents</h3>
                    <Row>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-twitter-blue.jpg" alt="Shareable Twitter graphic for new parents of Rocket students" /></p>
                         </HalfColumn>
                         <HalfColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-parent-twitter-photo.jpg" alt="Shareable Twitter graphic for parent of new Rocket students" /></p>
                         </HalfColumn>
                    </Row>
                    <h2>Poster</h2>
                    <Row>
                         <ThreeQuarterColumn>
                              <p><img src="https://www.utoledo.edu/futurerocket/social/images/new-rocket-11x17-poster.jpg" alt="Poster for new students" /></p>
                         </ThreeQuarterColumn>
                         <QuarterColumn>
                              <p>&nbsp;</p>
                              <p><a className="link_button" href="https://www.utoledo.edu/futurerocket/social/docs/new-rocket-8.5x11-poster.pdf">Download 8.5 x 11 inch poster</a></p>
                              <p><a className="link_button" href="https://www.utoledo.edu/futurerocket/social/docs/new-rocket-11x17-poster.pdf">Download 11 x 17 inch poster</a></p>
                         </QuarterColumn>
                    </Row>
     </Layout >
)

export default ExploreMore
