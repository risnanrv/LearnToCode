import { Col, Container, Row } from 'react-bootstrap'
import './MainContent.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MainContent() {

  
  
      const [isPopupOpen,setIsPopupOpen] =useState(false);
      const [name,setName] = useState('');
      const navigate =useNavigate()
      const handleGetStarted =() =>{
          setIsPopupOpen(true)
      }
      const handleSubmit =(e) => {
        e.preventDefault();
        if(name.trim !== ""){
          localStorage.setItem("username", name)
          navigate("/x")
        }
        else{
          alert("Enter Your Name !!")
        }
      }
  
  return (
   <Container  className={`page-content ${isPopupOpen ? 'blur' : ''}`}>
    <Row>
       <div className="maincontent">
        <h2>Learn To Code</h2>
        <p><b>LearnToCode </b>is your ultimate destination to master coding, whether you're starting from scratch or leveling up to advanced concepts. Explore a vast library of tutorials across all fields, technologies, and disciplines, tailored for beginner developers. Start your coding journey today and unlock endless possibilities in tech!</p>
        <button id="getStartedBtn" onClick={handleGetStarted}>
    Get Started
</button>
   {isPopupOpen && (
    <div className="popup">
    <form onSubmit={handleSubmit}>
        <h3>Enter Your Name </h3>
        <input type='text' id='name' value={name} onChange={(e)=> setName(e.target.value)} required />
        <button className="submit-btn">Submit</button>
    </form>
   </div>
)}
       </div>
    </Row>
   </Container>
  )
}

export default MainContent
