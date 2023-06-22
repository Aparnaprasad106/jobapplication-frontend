import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {ToastContainer, toast} from 'react-toastify'
import { companyRegister } from '../services/Allapi'
import {useNavigate} from 'react-router-dom'

export default function CompanyRegister() {

  const navigate = useNavigate()

  // state to store image
  const [image,setimage] = useState("")

  // state to hold company details
  const [companyData,setcompanyData] = useState({
    name:"",
    email:"",
    password:"",
    location:""
  })

//to updare company details when company enter value in form
const companyDetails = (e)=>{
  const {name,value}=e.target
  setcompanyData({...companyData,[name]:value})
}

// to set image
const setprofile = (e)=>{
  console.log(e);
  setimage(e.target.files[0])
}
console.log(image);

const handlesubmit = async (e)=>{
  e.preventDefault()
  // get companydetails
  const {name,email,password,location} = companyData
  if(name===""){
    toast.error("Name required")
  }
  else if(email===""){
    toast.error("Email required")
  }
  else if(password===""){
    toast.error("Password Required")
  }
  else if(image===""){
    toast.error("Company Image Required")
  }
  else if(location===""){
    toast.error("Location Required")
  }
  else{
    // make register api call
   const headerConfig = {
    "Content-Type" : "multipart/form-data"
   }
   const data = new FormData()
   data.append("name",name)
   data.append("email",email)
   data.append("password",password)
   data.append("location",location)
   data.append("company-image",image)
  //  make api
const response = await companyRegister(data,headerConfig)
console.log(response);
if(response.status===200){
  setcompanyData({...companyData,
    name:"",
    email:"",
    password:"",
    location:""
  })
  setimage("")
  navigate('/companylogin')
}
else{
  console.log("error");
}

  }
}


useEffect(()=>{

},[])
  return (
    <>
    <div className="container mt-5">
      <div className="row ">
        <div className="col">
          <img src="https://assets.materialup.com/uploads/0108cca9-3a32-406a-b3b0-7bebbe20aae1/preview.jpg" alt="" />
        </div>
        <div className="col border">
          <h2 className='text-center text-success'>Register your Company Here !</h2>
          <Form>
              <Form.Group className='mt-2'>
              <Form.Label>Enter Your Company Name</Form.Label>
              <Form.Control 
              type='text'
              onChange={companyDetails}
              value={companyData.name}
              name='name'
              placeholder='Enter Your Company Name'
              required
              />
            </Form.Group>
              <Form.Group className='mt-3'>
              <Form.Label>Enter Company Mail</Form.Label>
              <Form.Control 
              type='email'
              onChange={companyDetails}
              value={companyData.email}
              name='email'
              placeholder='Enter Your company mail'
              required
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Enter a Password</Form.Label>
              <Form.Control 
              type='password'
              onChange={companyDetails}
              value={companyData.password}
              name='password'
              placeholder='Enter Your company password'
              required
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Choose Company image</Form.Label>
              <Form.Control 
              type='file'
              name='company-image'
              onChange={setprofile}
              required
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Enter Company Location</Form.Label>
              <Form.Control 
              type='text'
              onChange={companyDetails}
              value={companyData.location}
              name='location'
              placeholder='Enter Your company Location'
              required
              />
            </Form.Group>
            <div className="text-center">
            <Button onClick={handlesubmit} className='mt-2 btn-success mb-3'>Register</Button>
            <h6> Already Registerd? Please <a href='/companylogin' className='text-danger'>Login</a> here</h6>
            </div>
          </Form>
        </div>
      </div> 
    </div>
    <ToastContainer position='top-center'/>
    </>
  )
}
