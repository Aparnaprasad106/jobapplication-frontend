import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../Components/Header'

function Jobs() {
  return (
    <>
    <Header />
    <div className="container mt-5">
     <div>
     <Card>
        <Card.Body>
          <Card.Title>
            <h2>Software Engineer</h2>
          </Card.Title>
          <Card.Subtitle>
            <h4>Company Name</h4>
          </Card.Subtitle>
          <Card.Text>
            <p>Experience: 1 year</p>
            <h4><a href="/viewjob">view Job</a></h4>
          </Card.Text>
        </Card.Body>
      </Card>
     </div>
    </div>

    </>
  )
}

export default Jobs