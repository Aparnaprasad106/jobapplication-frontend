import React, { useState } from 'react'
import Header from '../Components/Header'
import { Button, Card, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { addJobVaccencies } from '../services/Allapi'
import { useParams } from 'react-router-dom'
 
function Company() {
  const {id} = useParams()

  // state to hold job details
  const [jobData,setjobData] = useState({
    postname:"",
    vaccency:"",
    description:"",
    experience:"",
    qualification:"",
    salery:"",
    date:""
  })

  // to update the value of state
  const jobDetails = (e)=>{
    const {name,value} = e.target
    setjobData({...setjobData,[name]:value})
  }

  // handlesubmit
  const handlesubmit = async(e)=>{
    e.preventDefault()

    const {postname,vaccency,description,experience,qualification,salery,date} = jobData
    if(postname===""){
      toast.error("Please enter position Name")
    }
    else if(vaccency){
      toast.error("Please enter number of vaccencies")
    }
    else if(description){
      toast.error("Please enter job description")
    }
    else if(experience){
      toast.error("Please enter experience required")
    }
    else if(qualification){
      toast.error("Please enter qualification required")
    }
    else if(salery){
      toast.error("Please enter salery details")
    }
    else if(date){
      toast.error("Please enter last date for apply")
    }
    else{
      const data = new FormData
      data.append("postname",postname)
      data.append("vaccency",vaccency)
      data.append("description",description)
      data.append("experience",experience)
      data.append("qualificartion",qualification)
      data.append("salery",salery)
      data.append("date",date)
      // make api call
      const response = await addJobVaccencies(id,data)
    }
  }


  return (
    <>
      <Header/>
      <div className="container mt-5 justify-content-center">
        <h3>Add Job Vaccencies</h3>
        <Card className='shadow col-md-8 p-5'>
          <Form className=''>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='text'
              name='postname'
              value={jobData.postname}
              onChange={jobDetails}
              placeholder=' Name of the post'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='number'
              name='vaccency'
              value={jobData.vaccency}
              onChange={jobDetails}
              placeholder='Number of vaccency'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='text'
              name='description'
              value={jobData.description}
              onChange={jobDetails}
              placeholder='Job Description'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='text'
              name='experience'
              value={jobData.experience}
              onChange={jobDetails}
              placeholder='Experience'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='text'
              name='qualification'
              value={jobData.qualification}
              onChange={jobDetails}
              placeholder='Qualification'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Control
              required
              type='text'
              name='salery'
              value={jobData.salery}
              onChange={jobDetails}
              placeholder='Salery'
              />
             </Form.Group>
             <Form.Group className='mt-2'>
              <Form.Label>Last Date For Apply</Form.Label>
              <Form.Control
              required
              type='date'
              name='date'
              value={jobData.date}
              onChange={jobDetails }
              placeholder='Last data for apply'
              />
             </Form.Group>
             <Button onClick={handlesubmit} className="btn-success mt-4">Add</Button>
          </Form>
        </Card>

      </div>
      <ToastContainer position='top-center' />
    </>
  )
}

export default Company