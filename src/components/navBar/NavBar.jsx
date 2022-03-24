import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {

  return (
      <Navbar className="" bg="light" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src=""
            width="30"
            height="30"
            className="mx-4"
            alt='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-end mx-4'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar;