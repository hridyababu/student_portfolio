import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['GitHub', 'VS Code','Jupyter NoteBook']
    },
    {
      title: 'Other Skills',
      skills: ['Hard working', 'Problem Solving', 'Team Collaboration']
    }
  ]

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="card h-100 p-4">
                <h5 className="mb-4" style={{ color: '#007bff' }}>{category.title}</h5>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills

