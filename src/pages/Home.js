import React from 'react'
import './Home.css'
import { Card, Carousel, Container, Nav, Navbar } from 'react-bootstrap'

function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand style={{marginRight:'600px'}} href="/">
          <i class="fa-solid fa-handshake fa-beat fa-xl me-4" ></i>
            JOB WORLD
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login"><h4>Job Seeker</h4> </Nav.Link>
            <Nav.Link href="/companylogin"><h4 className='ms-5'>Company</h4></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="header">
        {/* Search */}
        <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.livecareer.com/wp-content/uploads/2020/09/career-job-fair-dos-donts.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://radiant.in/wp-content/uploads/2022/01/careers_banner1.jpg"
          alt="Second slide"
        />
         <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.livecareer.com/wp-content/uploads/2020/09/jobseeker-glossary.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       

        {/* section */}
<div className="row mt-5 justify-content-center">
  {/* Explore Best Categories */}
  <div className="text-center justify-content-center">
    <h2>Explore Best Categories</h2>
    <p >Lorem, ipsum dolor sit amet consecttur adipisicing elit. Quaerat impedit cumque, modi sint quidem quibusdam laudantium !</p>
  </div>
  {/* cards */}
  <div className='d-flex p-2 py-5'>
     <Card style={{width:'250px'}} className='shadow border ms-5 me-5'>
     <i class="fa-solid fa-file-invoice fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Accounting & Finance</h4>
    </Card>
    <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-caravan fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Automotive Jobs</h4>
    </Card>
     <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-person-chalkboard fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Business & Tech</h4>
    </Card>
     <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-user-graduate fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Education Training</h4>
    </Card>
  </div>

  <div className='d-flex p-2 py-5'>
     <Card style={{width:'250px'}} className='shadow border ms-5 me-5'>
     <i class="fa-solid  fa-suitcase-medical fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Healthcare</h4>
    </Card>
    <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-burger fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Restaurant & Food</h4>
    </Card>
     <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-plane fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Transportation</h4>
    </Card>
     <Card  style={{width:'250px'}} className='shadow ms-5 me-5'>
     <i class="fa-solid fa-mobile fa-2xl p-5" style={{color:'green'}}></i>
     <h4>Telecommunications</h4>
    </Card>
  </div>

  {/* section */}
  {/* Choose What You Need */}
  
<section>
  <div className='mt-5' style={{backgroundColor:'gray'}}>
    <h2 className='mt-5'>Choose What You Need</h2>
    <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor accusamus exercitationem expedita quo.</p>
    <div className='d-flex mt-5'>
      <Card className='shadow ms-5 me-5 p-5 py-5 mb-5' style={{width:'350px'}}>
        <h1 className='text-warning mb-2'>01</h1>
        <h3>Create an Account</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum maxime obcaecati debitis omnis ducimus commodi quod aliquid?</p>
      </Card>
      <Card className='shadow ms-5 me-5 p-5 mb-5 py-5' style={{width:'350px'}}>
        <h1 className='text-info mb-2'>02</h1>
        <h3>Search Jobs</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum maxime obcaecati debitis omnis ducimus commodi quod aliquid,</p>
      </Card>
      <Card className='shadow ms-5 me-5 p-5 mb-5 py-5' style={{width:'350px'}}>
        <h1 className='text-danger mb-2'>03</h1>
        <h3>Save And Apply Jobs</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum maxime obcaecati debitis omnis ducimus commodi quod aliquid</p>
      </Card>
    </div>
  </div>
</section>
</div>



</div>
</div>
  )
}

export default Home

