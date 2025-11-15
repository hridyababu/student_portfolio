import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MERN STACK BLOG APPLICATION',
      description: 'Developed a full-stack, responsive blog platform using the MERN stack.',
      descriptionPoints: [
        'Designed a **RESTful API** with **Express.js** and **Node.js** for managing blog posts (CRUD operations).',
        'Integrated **MongoDB** with Mongoose for storing and retrieving post data.',
        'Built an interactive frontend using **React.js** and **Tailwind CSS** for a responsive user interface.',
        'Implemented error handling and smooth data flow between frontend and backend.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      github: 'https://github.com/hridyababu/BLOG_APP',
      demo: 'https://your-demo-link.com'
    },
    {
      title: 'FAKE LOGO DETECTION',
      description: 'Developed a deep learning-based Fake Logo Detection system using ResNet50. Key highlights:',
      descriptionPoints: [
        'Utilized **ResNet50** to analyze logo features such as shape, color, and font.',
        'Accurately distinguishes between genuine and counterfeit logos.',
        'Applied **deep learning** techniques for reliable visual feature recognition.'
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'Deep Learning'],
      github: 'https://github.com/hridyababu/FakeLogo_Detection',
      demo: 'https://your-demo-link.com'
    },
    {
  title: 'FULL-STACK MERN JOB PORTAL APPLICATION',
  description: 'Developed a comprehensive, full-stack platform connecting Job Seekers and Recruiters with secure, role-based functionality. Key highlights:',
  descriptionPoints: [
    'Implemented **Role-Based Access Control (RBAC)** to secure functions, allowing only **Recruiters** to post jobs and only **Job Seekers** to apply.',
    'Designed a **RESTful API** and defined three core MongoDB schemas (**Users, Jobs, Applications**) to manage the entire hiring cycle.',
    'Enabled advanced job search using dynamic **filtering** (by category, location) and facilitated a complete **application tracking system**.'
  ],
  technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'Google OAuth'],
  github: 'https://github.com/hridyababu/Job_Portal_AppNew',
},
  
  ]

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                    {project.descriptionPoints && (
                      <ul className="mt-3 mb-0" style={{ paddingLeft: '20px' }}>
                        {project.descriptionPoints.map((point, pointIndex) => {
                          // Parse bold text (**text**)
                          const parts = point.split(/(\*\*.*?\*\*)/g);
                          return (
                            <li key={pointIndex} className="mb-2">
                              {parts.map((part, partIndex) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
                                }
                                return <span key={partIndex}>{part}</span>;
                              })}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-secondary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow-1"
                    >
                      <FaGithub className="me-1" />
                      Code
                    </Button>
                    {/* <Button
                      variant="primary"
                      size="sm"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow-1"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Demo
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Row className="mt-5">
          <Col className="text-center">
            <p className="lead mb-3">Want to see more of my work?</p>
            <Button
              variant="outline-primary"
              size="lg"
              href="https://drive.google.com/your-portfolio-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Portfolio on Drive
            </Button>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}

export default Projects

