import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { companyLogin } from '../services/Allapi'
import {useNavigate} from 'react-router-dom'

function CompanyLogin() {

  const navigate = useNavigate()
  // state to hold company login information
  const [companyData,setcompanyData] = useState({
    name:"",
    email:"",
    password:""
  })

  const companyDetails = (e)=>{
    const {name,value} = e.target
    setcompanyData({...companyData,[name]:value})
    
  }

  // handlesubmit
const handlesubmit = async(e)=>{
  e.preventDefault()
  const {name,email,password} = companyData
  if(name===""){
    toast.error("Company Name Required!!")
  }
  else if(email===""){
    toast.error("Please Enter your email address")
  }
  else if(password===""){
    toast.error("Please Enter your password")
  }
  else{
     const data = new FormData()
     data.append("email",email)
     data.append("password",password)

    //  make api call
    const response = await companyLogin(data)
    console.log(response.data._id);
    const {_id} = response.data
    console.log(_id);
    if(response.status===200){
      navigate(`/company/${_id}`)
    }
    
  }
}


  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
        <div className="col border">
          <h2 className='text-center text-success mt-4'>Login with your Company Here !</h2>
          <Form className='p-5'>
              <Form.Group className='mt-2'>
              <Form.Label>Enter Your Company Name</Form.Label>
              <Form.Control 
              type='text'
              name='name'
              value={companyData.name}
              onChange={companyDetails}
              placeholder='Enter Your Company Name'
              required
              />
            </Form.Group>
              <Form.Group className='mt-3'>
              <Form.Label>Enter Company Mail</Form.Label>
              <Form.Control 
              type='email'
              name='email'
              onChange={companyDetails}
              value={companyData.email}
              placeholder='Enter Your company mail'
              required
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Enter a Password</Form.Label>
              <Form.Control 
              type='password'
              name='password'
              value={companyData.password}
              onChange={companyDetails }
              placeholder='Enter Your company password'
              required
              />
            </Form.Group>
            <div className="text-center">
            <Button onClick={handlesubmit} className='mt-5 btn-success mb-3'>Login</Button>
            <h6> Not Registerd? Please <a href='/companyregister' className='text-danger'>Register</a> here</h6>
            </div>
          </Form>
        </div>
        </div>
        <div className="col-6 mt-2">
          <img src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?w=2000" alt="" />
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' />
    </>
  )
}

export default CompanyLogin