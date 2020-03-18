import React from "react"
import { Link } from "gatsby"

class Colleger extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <>
                    <h1>welcome</h1>
                    <div>You are interested in {this.props.college}</div>
                    <Link to="/college/honors">Click for honors</Link>
               </>
          );
     }
}


export default Colleger;