import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'MERN Stack',
      institution: 'Avodha',
      location: 'Thrissur, Kerala',
      period: '2025',
      // description: 'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development, Machine Learning',
      // achievements: [
      //   'Dean\'s List for 3 semesters',
      //   'Member of Computer Science Society',
      //   'Participated in Hackathons'
      // ]
    },
    {
      degree: 'Master of Computer Applications',
      institution: 'Government Engineering College, Thrissur',
      location: 'Thrissur, Kerala',
      period: '2023 - 2025',
      gpa: '8.38/10.0',
      // description: 'Graduated with honors, focused on Mathematics and Science',
      // achievements: [
      //   'Valedictorian',
      //   'Math Olympiad Winner'
      // ]
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Mar Dionysius College, Pazhanji',
      location: 'Pazhanji, Thrissur',
      period: '2020 - 2023',
      gpa: '7.46/10.0',
    }
  ]

  return (
    <section id="education" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="section-title">Education</h2>
        <Row className="g-4">
          {education.map((edu, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <FaGraduationCap
                      className="me-3"
                      style={{ fontSize: '2rem', color: '#007bff', marginTop: '5px' }}
                    />
                    <div className="flex-grow-1">
                      <Card.Title className="mb-2">{edu.degree}</Card.Title>
                      <h6 className="text-primary mb-2">{edu.institution}</h6>
                      <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                        <small className="text-muted">
                          <FaMapMarkerAlt className="me-1" />
                          {edu.location}
                        </small>
                        <small className="text-muted">
                          <FaCalendarAlt className="me-1" />
                          {edu.period}
                        </small>
                        {edu.gpa && (
                          <small className="badge bg-success">CGPA: {edu.gpa}</small>
                        )}
                      </div>
                    </div>
                  </div>
                  <Card.Text className="mb-3">{edu.description}</Card.Text>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <strong>Achievements:</strong>
                      <ul className="mt-2 mb-0">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Education

