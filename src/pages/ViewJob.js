import React from 'react'
import Header from '../Components/Header'

function ViewJob() {
  return (
    <>
    <Header/>
    <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="border p-3 mt-5">
                    <h1>Software Engineer</h1>
                    <h3>Company Name</h3>
                    <p>Experience:</p>
                    <p>Qualification</p>
                    <p>Description</p>
                    <p>Salery</p>
                    <button className='btn btn-success'><a href="login">Apply Now</a></button>
                </div>
            </div>
            <div className="col-4">
                <div className="border mt-5 p-3">
                    <img style={{height:'300px',width:'300px'}} src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="companyimg" />
                    <h2>Company Name</h2>
                    <p>Location</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ViewJob