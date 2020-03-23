import React from "react"
import { Link } from "gatsby"

class Colleger extends React.Component {
     constructor(props) {
          super(props);
     }
     render() {
          return (
               <>
                    <h1>welcome to content for {this.props.college}</h1>
                    <div>Here is some content for {this.props.college}</div>
                    <Link to="/college/honors">Click for honors</Link>
               </>
          );
     }
}


export default Colleger;