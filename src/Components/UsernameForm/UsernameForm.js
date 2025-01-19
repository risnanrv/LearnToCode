import React, { useState } from 'react'
import './UsernameForm.css'
import { useNavigate } from 'react-router-dom';
function UsernameForm() {


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
    <>
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
  
   </>
  )
}

export default UsernameForm
 