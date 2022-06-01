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
import style from "../components/compStyles/navglow.module.css"

export default () => {
  return (
    
    <Navbar  className= "shadow-box-example z-depth-5" bg="black" expand="lg">
      <img style={{ marginLeft : '20px',width : '5%', height : '2%', marginRight : '20px',justifyContent:"space-evenly"}} src={logo}/> 
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav" color="white" bg="white" >
        <Nav className="mr-auto">
        <Nav.Link  className={style.navglow} style = {{color :"whitesmoke"}} href="/">Home</Nav.Link>
    <Nav.Link className={style.navglow} style = {{color :"whitesmoke"}} href="/AboutUs">About Us</Nav.Link>



    <Nav.Link className={style.navglow} style = {{color :"whitesmoke"}} href="/Administration">Administration</Nav.Link>

    <NavDropdown className={style.navglow} title={<span style={{height : '10px', color: "whitesmoke"}}>Academics</span>} id="basic-nav-dropdown">
          <NavDropdown.Item href="/Courses" style = {{color :"whitesmoke", backgroundColor:"black"}}>Courses</NavDropdown.Item>
          <NavDropdown.Item href="/Departments" style = {{color :"whitesmoke", backgroundColor:"black"}}>Departments</NavDropdown.Item>

          </NavDropdown>


    <Nav.Link className={style.navglow} style = {{color :"whitesmoke"}} href="/Welfare">Student's Welfare Activities</Nav.Link>
    <Nav.Link className={style.navglow} style = {{color :"whitesmoke"}} href="/Publications">Publications</Nav.Link>
    <Nav.Link  className={style.navglow} style = {{color :"whitesmoke"}} href="/ContactUs">Contact Us</Nav.Link>
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