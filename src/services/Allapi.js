import { base_url } from "./base_url";
import { commonRequest } from "./commonRqst";

//  register
export const userRegister = async(body,headers)=>{
    return await commonRequest("POST",`${base_url}/user/register`,body,headers)
}

// login
export const userLogin = async(body)=>{
    return await commonRequest("POST",`${base_url}/user/login`,body,{})
} 

// company register
export const companyRegister = async(body,headers)=>{
    return await commonRequest("POST",`${base_url}/company/register`,body,headers)
}

// company login
export const companyLogin = async(body)=>{
    return await commonRequest("POST",`${base_url}/company/login`,body,{})
}

// add jobs
export const addJobVaccencies = async(id,body)=>{
    return await commonRequest("POST",`${base_url}/job/vaccency/${id}`,body,{})
}