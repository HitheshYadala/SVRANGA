import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button
} from "react-bootstrap";
import logo from "../assets/logo.png"

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <img style={{ marginLeft : '10px',width : '6%', height : '6%', marginRight : '20px',justifyContent:"space-evenly"}} src={logo}/> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link  style={{justifyContent:'space-around'}} href="/">Home</Nav.Link>
    <Nav.Link style={{justifyContent:'space-around'}} href="/AboutUs">About Us</Nav.Link>



    <Nav.Link style={{justifyContent:'space-between'}} href="/Administration">Administration</Nav.Link>

    <NavDropdown style={{justifyContent:'space-between'}} title="Academics" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Courses">Courses</NavDropdown.Item>
          <NavDropdown.Item href="/Departments">Departments</NavDropdown.Item>

          </NavDropdown>


    <Nav.Link style={{justifyContent:'space-between'}} href="/Welfare">Student's Welfare Activities</Nav.Link>
    <Nav.Link style={{justifyContent:'space-between'}} href="/Publications">Publications</Nav.Link>
    <Nav.Link  style={{justifyContent:'space-between'}} href="/ContactUs" className="dropdown-menu-end">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};



{/* <Navbar > */}
{/* 

<img style={{ marginLeft : '10px',width : '6%', height : '6%', marginRight : '20px',justifyContent:"space-evenly"}} src={logo} 

/>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link  style={{justifyContent:'space-around'}} href="/">Home</Nav.Link>
    <Nav.Link style={{justifyContent:'space-around'}} href="/AboutUs">About Us</Nav.Link>



    <Nav.Link style={{justifyContent:'space-between'}} href="/Administration">Administration</Nav.Link>

    <NavDropdown style={{justifyContent:'space-between'}} title="Academics" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Courses">Courses</NavDropdown.Item>
          <NavDropdown.Item href="/Departments">Departments</NavDropdown.Item>

          </NavDropdown>


    <Nav.Link style={{justifyContent:'space-between'}} href="/Welfare">Student's Welfare Activities</Nav.Link>
    <Nav.Link style={{justifyContent:'space-between'}} href="/Publications">Publications</Nav.Link>
    <Nav.Link  style={{justifyContent:'space-between'}} href="/ContactUs" className="dropdown-menu-end">Contact Us</Nav.Link>

  </Nav> */}