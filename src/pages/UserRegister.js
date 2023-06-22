import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userRegister } from '../services/Allapi';
import { useNavigate} from 'react-router-dom'
function UserRegister() {

const navigate = useNavigate("")
  // create state for store userdata
  const [userData,setuserData] = useState({
    name:"",
    email:"",
    password:"",
    gender:"",
  })

  // create state for qualification
   const [qualification,setqualification] = useState("")

  //  State to hold resume 
  const [resume,setresume] = useState("")

  // set error msg
  const [errormsg,seterrormsg]=useState("")

  
  // to update userdata when user enter the input using html
     const userDetails = (e) => {
    const { name, value } = e.target
    setuserData({ ...userData, [name]: value })
  };
  
  

  // to update status state
const updatequalification = (e)=>{
  setqualification(e.value)
}

// to updateimage
const updateresume = (e)=>{
   setresume(e.target.files[0])
 }
// define handleSubmit
const handleSubmit = async(e)=>{
  e.preventDefault()
  const {name,email,password,gender} = userData
  if(name===""){
    toast.error("Name required!!...")
  }
  else if(email===""){
    toast.error("Email required....")
  }
  else if(email===""){
    toast.error("Email required....")
  }
  else if(password===""){
    toast.error("Password required....")
  }
  else if(gender===""){
    toast.error("Gender required....")
  }
  else{
    // make register apicall
    const headerConfig = {
      "Content-Type":"multipart/form-data"
    }
    // data - FormData
    const data = new FormData()
    data.append("name",name)
    data.append("email",email)
    data.append("password",password)
    data.append("gender",gender)
    data.append("qualification",qualification)
    data.append("user-resume",resume)

    // make api call
    const response = await userRegister(data,headerConfig)
    if(response.status ===200){
      // reset all states
      setuserData({
        ...userData,
        name:"",
        email:"",
        password:"",
        gender:""
      })
      setqualification("")
      setresume("")
      navigate('/login')
    }
    else{
      seterrormsg("Error")
    }

  }
}
useEffect(()=>{

},[])

// Qualification Options
  const options = [
    { value: 'BCA', label: 'BCA' },
    { value: 'MCA', label: 'MCA' },
    { value: 'BTECH', label: 'BTECH'},
    { value: 'Diploma', label: 'Diploma'},
    { value: 'PG', label: 'PG'},
    { value: 'BSC', label: 'BSC'},
    { value: 'Plustwo', label: 'PLUS TWO'},
    { value: 'BTECH', label: 'BTECH'},
    { value: 'SSLC', label: 'SSLC'}

]

console.log(userData);
console.log(resume);
console.log(qualification);
  return (
    <>
    <div className="row mt-5"> 
      <div className="text-center mt-3">
        <h1 className='text-success'>Registration Form</h1>
      </div>
      <div className="col-6 p-3">
        <Card className='mt-3 ms-5 p-4'>
          <Form>
            <Form.Group className='mt-2'>
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control 
              type="text"
              name='name'
              placeholder='Enter Your Name'
              required
              onChange={userDetails} 
              value={userData.name}
              />
            </Form.Group>
            <Form.Group className='mt-2'>
               <Form.Label>Email Address</Form.Label>
                   <Form.Control type="email"
                   required
                   name="email"
                   onChange={userDetails}
                   value={userData.email}
                    placeholder="Enter Email" 
                    />
               </Form.Group>
              <Form.Group className='mt-2'>
              <Form.Label>Enter Your password</Form.Label>
              <Form.Control 
              type='password'
              name='password'
              placeholder='Enter Your password'
              required
              onChange={userDetails}
              value={userData.password}
              />
            </Form.Group>
            <Form.Group className='col-lg-6 mb-3 mt-3'>
               <Form.Label>Gender</Form.Label>
                   <Form.Check
                    type={'radio'}
                    label={'Male'}
                    name="gender"
                    value={"Male"}
                    onChange={userDetails}
                    />
                    <Form.Check
                    type={'radio'}
                    label={'Female'}
                    name="gender"
                    value={"Female"}
                    onChange={userDetails}
                    />
               </Form.Group>
           <Form.Group className='mt-2'>
           <Form.Label>Choose your Qualification</Form.Label>
            <Select options={options} defaultInputValue={qualification} onChange={updatequalification}/>
           </Form.Group>
            <Form.Group className='mt-2'>
              <Form.Label>Upload CV</Form.Label>
              <Form.Control 
              type='file'
              name='user-resume'
              onChange={updateresume}
              required
              />
            </Form.Group>
            <Button onClick={handleSubmit} className='mt-3 btn-success'>Register</Button>
            <h6> Already Registerd? Please <a href='/login' className='text-danger'>Login</a> here</h6>
          </Form>
        </Card>
      </div>
      <div className="col-6">
        <img src="https://img.freepik.com/premium-vector/tiny-hr-manager-looking-candidate-job-interview-magnifier-computer-screen-illustration_566886-1508.jpg" alt="" />
      </div>
    </div>
    <ToastContainer position='top-center' />
    </>
  )
}

export default UserRegister