import { Col, Container, Row } from 'react-bootstrap'
import './MainContent.css'
import React from 'react'

function MainContent() {
  return (
   <Container>
    <Row>
       <div className="maincontent">
        <h2>Learn To Code</h2>
        <p><b>LearnToCode </b>is your ultimate destination to master coding, whether you're starting from scratch or leveling up to advanced concepts. Explore a vast library of tutorials across all fields, technologies, and disciplines, tailored for beginner developers. Start your coding journey today and unlock endless possibilities in tech!</p>
        <button id="getStartedBtn">
            Get Started
        </button>
       </div>
    </Row>
   </Container>
  )
}

export default MainContent
