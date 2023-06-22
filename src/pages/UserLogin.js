import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { userLogin } from '../services/Allapi'
import { useNavigate } from 'react-router-dom'

function UserLogin() {

const navigate = useNavigate()
  // state to hold userdata
  const [userData,setuserData] = useState({
    email:"",
    password:""
  })
  // state to hold error msg
  const [errormsg,seterrormsg] = useState("")
// to update userdata when user enter the input using html
const userDetails=(e)=>{
  const {name,value} = e.target
  setuserData({...userData,[name]:value})
}
useEffect(()=>{

},[])

// handleSubmit
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email,password} = userData
    if(email===""){
      toast.error("Email Required")
    }
    else if(password===""){
      toast.error("password required")
    }
  
    const data = new FormData()
    data.append("email",email)
    data.append("password",password)
  
    // make api call
    const response = await userLogin(data)
    console.log(response);
    if(response.status===200){
      setuserData({
        ...userData,
        email:"",
        password:""
      })
      navigate('/jobs')
      
    }
    else{
      seterrormsg("Error")
    }
  }
  return (
    <>
    <div className="row mt-5 p-2">
      <div className="text-center mt-3">
        <h1 className='text-success'>Login Form</h1>
      </div>
      <div className="col-6">
        <img style={{height:'500px',width:'600px'}} src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-4836622-4032953.png" alt="" />
      </div>
      <div className="col-6 p-3">
      <Card className='mt-3 ms-5 p-4'>
          <Form>
              <Form.Group className='mt-2'>
              <Form.Label>Enter Your Email</Form.Label>
              <Form.Control 
              type='email'
              placeholder='Enter Your Email'
              required
              name='email'
              onChange={userDetails}
              value={userData.email}
              />
            </Form.Group>
              <Form.Group className='mt-3'>
              <Form.Label>Enter Your password</Form.Label>
              <Form.Control 
              type='password'
              placeholder='Enter Your password'
              required
              name='password'
              onChange={userDetails}
              value={userData.password}
              />
            </Form.Group>
            <Button onClick={handleSubmit} className='mt-3 btn-success'>LOGIN</Button>
            <h6> Not Registerd? Please <a href='/register' className='text-danger'>Register</a> here</h6>
          </Form>
        </Card>
      </div>
    </div>
    </>
  )
}

export default UserLogin