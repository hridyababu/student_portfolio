import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? 'bg-white' : 'bg-transparent'}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'white' : 'transparent',
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: scrolled ? '#212529' : 'white' }}>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: scrolled ? '#212529' : 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: scrolled ? '#212529' : 'white' }}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" style={{ color: scrolled ? '#212529' : 'white' }}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: scrolled ? '#212529' : 'white' }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#education" style={{ color: scrolled ? '#212529' : 'white' }}>
              Education
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: scrolled ? '#212529' : 'white' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

