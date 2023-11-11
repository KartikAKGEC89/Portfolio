import React from 'react'
import './Top.css'
import Logo from './Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Top = () => {
  return (
    <>
 <Navbar className='navbar-main'>
        <Container>
          <Navbar.Brand href="#home"><img src={ Logo } alt='Kartik' /></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href='#home' className="auto">Home</Nav.Link>
            <Nav.Link href='#about' className="auto">About</Nav.Link>
            <Nav.Link href='#project' className="auto">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Top
