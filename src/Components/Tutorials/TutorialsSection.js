// TutorialsSection.js
import React from "react";
import "./TutorialsSection.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function TutorialsSection() {
  const location = useLocation();
  const detail = location.state?.detail || null; 
  
  const handleStart = (link) => {
    window.location.href = link ;
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="tutorial-head">
            <h1>{detail ? detail.name : "Category Name"}</h1>
            <p>
              {detail
                ? `Learn more about ${detail.name}`
                : "No details available for this category."}
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="video-tutorials">
            <h2 className="sub-heading">Available Video Tutorials</h2>
            <div className="card-container">
              {detail?.tutorials.length > 0 ? (
                detail.tutorials.map((tutorial) => (
                  <Card className="card-video" key={tutorial.id}>
                    <Card.Img
                      variant="top"
                      src={tutorial.thumbnail}
                      className="tutorials-logo"
                    />
                    <Card.Body>
                      <Card.Title className="tutorials-name">
                        {tutorial.title}
                      </Card.Title>
                      <button className="details-btn">{tutorial.channel}</button>
                      <button className="details-btn">{tutorial.duration}</button>
                      <button className="start-btn-video" onClick={ () => handleStart(tutorial.link)}>Start</button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>No tutorials available.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>

 
    </Container>
  );

}

export default TutorialsSection;

    /* <Row>
      <Col>
        <div className="web-tutorials">
          <h2 className="sub-heading">Available Website Tutorials</h2>
          <div className="card-container">
            {webdetail?.tutorials.length > 0 ? (
              webdetail.tutorials.map((tutorial, index) => (
                <Card className="card-web" key={index}>
                  <Card.Body>
                    <Card.Title className="tutorials-name">{tutorial.webname}</Card.Title>
                    <a
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="start-btn-web"
                    >
                      Start
                    </a>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No tutorials available.</p>
            )}
          </div>
        </div>
      </Col>
    </Row> */
