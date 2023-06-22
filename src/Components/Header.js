import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
       <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-handshake fa-beat fa-xl me-4" ></i>
            JOB WORLD
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header