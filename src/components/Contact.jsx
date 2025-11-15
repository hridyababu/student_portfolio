import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload
} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card className="h-100 p-4">
              <h4 className="mb-4">Contact Information</h4>
              <div className="mb-3">
                <FaEnvelope className="me-3 text-primary" style={{ fontSize: '1.2rem' }} />
                <a href="mailto:hridyababu01@gmail.com" className="text-decoration-none">
                  hridyababu01@gmail.com
                </a>
              </div>
              <div className="mb-3">
                <FaPhone className="me-3 text-primary" style={{ fontSize: '1.2rem' }} />
                <a href="tel:7902331524" className="text-decoration-none">
                  7902331524
                </a>
              </div>
              <div className="mb-3">
                <FaMapMarkerAlt className="me-3 text-primary" style={{ fontSize: '1.2rem' }} />
                <span>Thrissur, Kerala</span>
              </div>
              <hr />
              <div className="d-flex gap-3">
                <a
                  href="https://linkedin.com/in/hridya-babu-267b73312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <FaLinkedin className="social-icon" style={{ color: '#007bff', fontSize: '1.5rem' }} />
                </a>
                <a
                  href="https://github.com/hridyababu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <FaGithub className="social-icon" style={{ color: '#007bff', fontSize: '1.5rem' }} />
                </a>
              </div>
              <hr />
              <div className="mt-3">
                <h6 className="mb-3">Resume</h6>
                <Button
                  variant="primary"
                  href="/resume.pdf"
                  download="HRIDYA_BABU_Resume.pdf"
                  className="w-100 mb-2"
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

