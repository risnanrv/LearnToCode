import React from 'react'
import './CategoryCard.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {details} from '../../Assets/Assets'
function CategoryCard() {
  return (
   <Container>
    <Row>
      {
         details.map((detail) => (
          <Col md={2} sm={6} xs={6} key={detail._id}>
      <div className="category-cards">
        <Card className='card'>
          <Card.Img  variant='top' src={detail.image} className='category-logo'/>
          <Card.Body>
           <Card.Title className='category-name' style={{color:"white"}}>{detail.name}</Card.Title>
            <Button className='learn-btn'>Learn</Button>
          </Card.Body>
        </Card>
      </div>
      </Col>
         ))
      }
    </Row>
   </Container>
  )
}

export default CategoryCard
