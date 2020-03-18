import React from "react"

const Row = ({ children }) => <div className="row">{children}</div>

const FullWidth = ({ children }) => <div className="small-12 columns">{children}</div>

const HalfColumn = ({ children }) => <div className="small-6 columns">{children}</div>

const ThirdColumn = ({ children }) => <div className="small-4 columns">{children}</div>

export { Row, FullWidth, HalfColumn, ThirdColumn }