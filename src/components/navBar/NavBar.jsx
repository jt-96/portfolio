import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {

  return (
    <Navbar className="g-0 nav" sticky="top">
        <Navbar.Brand className="disableBlur" href="#home" id="logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`}
            width="30"
            height="30"
            className="imgLogo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="links disableBlur justify-content-end">
          <Nav>
            <Nav.Link className="text-dark" href="#home">Home</Nav.Link>
            <Nav.Link className="text-dark" href="#about">About</Nav.Link>
            <Nav.Link className="text-dark" href="#profile">Profile</Nav.Link>
            <Nav.Link className="text-dark" href="#projects">Projects</Nav.Link>
            <Nav.Link className="text-dark" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;