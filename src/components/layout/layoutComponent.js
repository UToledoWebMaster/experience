import React from "react"

const Row = ({ children, className }) => {
     if (className) {
          return (
               <div className={`${className} row`}>{children}</div>
          )
     } else {
          return (
               <div className="row">{children}</div>
          )
     }

}

const FullWidth = ({ children }) => <div className="twelve columns">{children}</div>

const ThreeQuarterColumn = ({ children }) => <div className="nine columns">{children}</div>

const HalfColumn = ({ children }) => <div className="six columns">{children}</div>

const ThirdColumn = ({ children }) => <div className="four columns">{children}</div>

const QuarterColumn = ({ children }) => <div className="three columns">{children}</div>

export { Row, FullWidth, ThreeQuarterColumn, HalfColumn, ThirdColumn, QuarterColumn }