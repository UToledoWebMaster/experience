import React from "react"
import { Row } from "./layout/layoutComponent"

const SingleTestimony = ({children, className}) => (
    <Row className={`skyBack singleTestimony ${className}`}>
        {children}
    </Row>
)


export default SingleTestimony;