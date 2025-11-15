import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaUser, FaCode, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center p-4">
              <FaUser className="mx-auto mb-3" style={{ fontSize: '3rem', color: '#007bff' }} />
              <Card.Body>
                <Card.Title>Who I Am</Card.Title>
                <Card.Text>
                  I’m an MCA graduate with a strong interest in software development. I have completed a MERN Stack course and enjoy building projects using React, Node.js, Express, and MongoDB. I like solving problems and creating useful applications that help people.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center p-4">
              <FaCode className="mx-auto mb-3" style={{ fontSize: '3rem', color: '#007bff' }} />
              <Card.Body>
                <Card.Title>What I Do</Card.Title>
                <Card.Text>
                  I develop web applications using modern technologies like React, Node.js, Express.js
                  and MongoDB. I focus on writing clean, maintainable code.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center p-4">
              <FaGraduationCap className="mx-auto mb-3" style={{ fontSize: '3rem', color: '#007bff' }} />
              <Card.Body>
                <Card.Title>My Goals</Card.Title>
                <Card.Text>
                  Seeking opportunities to grow as a developer, contribute to meaningful projects,
                  and learn from experienced professionals in the industry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <Card className="p-4">
              <Card.Body>
                <h4 className="mb-3">More About Me</h4>
                <p>
                  I am a motivated  MCA graduate with a strong interest in software development and modern web technologies. Throughout my academic journey, I worked on different projects that helped me build a solid foundation in both frontend and backend development.
                </p>
                <p>
                  I have completed a MERN Stack course, where I gained hands-on experience with React, Node.js, Express, and MongoDB. I enjoy building full-stack applications from scratch and learning new tools that improve the way I write and structure code.
                </p>
                <p>
                  Apart from coding, I like exploring tech blogs, learning new concepts, and practicing coding challenges to sharpen my problem-solving skills. I always aim to grow, improve, and contribute to meaningful projects.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

