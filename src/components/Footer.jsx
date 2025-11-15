import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} Student Portfolio. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-decoration-none"
              >
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0" style={{ opacity: 0.8 }}>
              Made with <FaHeart style={{ color: '#dc3545' }} /> using React and Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

