import React from 'react'
import Logo from '../../Assets/Logo.png'
import Banner from '../../Assets/Banner.png'
import './Header.css'
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
  return (
   
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center ">
          <img src={Logo} alt="Logo" className="logo img-fluid"style={{height:"75px"}} />
        </Col>
      </Row>
      
      {/* Banner Section */}
      <Row className="justify-content-center">
        <Col xs={12}>
          <img src={Banner} alt="Banner" className="banner img-fluid" />
        </Col>
      </Row>
    </Container>
   
  )
}

export default Header
