import React from 'react';
import './NavSection.css';
import ToCodeLogo from '../../Assets/Logo-NoBg.png';
import { RiBookReadLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Navbar } from 'react-bootstrap';
import CategoryCard from '../CategoryCard/CategoryCard';

const NavbarSection = () => {
  const storedName = localStorage.getItem("username");

  return (
    <>
      <div className="main-section">
        <Navbar expand="md">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="sidebar">
              <div className="logo d-none d-md-flex">
                <img src={ToCodeLogo} alt="Logo" />
              </div>
              <div className="nav-options">
                <ul>
                  <li><a href="/courses"><RiBookReadLine />&nbsp;Courses</a></li>
                  <li><a href="#"><FaQuestionCircle />&nbsp;Support</a></li>
                  <li><a href="#"><TfiHeadphoneAlt />&nbsp;Contact Us</a></li>
                  <li><a href="#"><MdLogout />&nbsp;Logout</a></li>
                </ul>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <div className="main-content">
          <div className="topbar">
            <div className="top-logo d-block d-md-none">
            <img src={ToCodeLogo} alt="Logo-Top" />

            </div>
            <div className="searchbar-container d-none d-md-flex">
              <input type="text" placeholder="Search Course" className="search-bar" />
              <i className="search-icon"><FaSearch /></i>
            </div>

            <div className="doubt-btn-container d-none d-md-flex">
              <button  className="doubt-btn"><FaQuestionCircle />&nbsp;&nbsp;&nbsp;Ask Your Doubts</button>
            </div>

            <div className="username-container">
              <button className="name-btn"><IoPersonCircleSharp />&nbsp;&nbsp;&nbsp;{storedName}</button>
            </div>
          </div>

          <div className="page-content">
            <CategoryCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSection;