
import React, { useEffect } from 'react';
import './CategoryCard.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { details,webdetails } from '../../Assets/Assets';
import { useNavigate, useLocation } from 'react-router-dom';

function CategoryCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = (detail) => {
    navigate('/tutorial', { state: { detail  } });
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Container>
      <Row>
        {details.map((detail) => (
          <Col md={3} sm={6} xs={12} key={detail._id}>
            <div className="category-card-wrapper">
              <Card className="category-card">
                <Card.Img variant="top" src={detail.image} className="category-logo" />
                <Card.Body>
                  <Card.Title className="category-name" style={{ color: 'white' }}>
                    {detail.name}
                  </Card.Title>
                  <Button onClick={() => handleCardClick(detail)} className="learn-btn">
                    Learn
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoryCard;
