import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="hero-content">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4">HRIDYA BABU</h1>
            <h2 className="h3 mb-4" style={{ opacity: 0.9 }}>
              Full Stack Developer
            </h2>
            <p className="lead mb-5" style={{ fontSize: '1.2rem', opacity: 0.8 }}>
              Passionate about creating innovative solutions and building impactful applications.
              Currently seeking opportunities to apply my skills in a professional environment.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="light"
                size="lg"
                href="/resume.pdf"
                download="HRIDYA_BABU_Resume.pdf"
                className="d-inline-flex align-items-center"
              >
                <FaDownload className="me-2" />
                Download Resume
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="#projects"
                className="d-inline-flex align-items-center"
              >
                <FaExternalLinkAlt className="me-2" />
                View Portfolio
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

