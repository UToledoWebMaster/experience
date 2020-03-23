import React from "react"

const Row = ({ children }) => <div className="row">{children}</div>

const FullWidth = ({ children }) => <div className="twelve columns">{children}</div>

const HalfColumn = ({ children }) => <div className="six columns">{children}</div>

const ThirdColumn = ({ children }) => <div className="four columns">{children}</div>

export { Row, FullWidth, HalfColumn, ThirdColumn }