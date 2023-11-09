import React, { useState } from 'react'
import './EmployeLogin.css'
import {AiOutlineLogin} from 'react-icons/ai'
import NavBar from './Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EmployeLogin() {

    const navigate=useNavigate()
    
const [spin,setspin]=useState(false)

const [log,setLog]=useState({})


const empLog=(e)=>{
    setLog({...log,[e.target.name]:e.target.value})
}

const empSub=(e)=>{
    e.preventDefault()
    setLog(log)
    
    axios.post('http://localhost:3002/employeelogin',log)
    .then((employeeData)=>{
        // console.log(employeeData.data.employe.email);
        if(employeeData.data.status){
            localStorage.setItem('username',employeeData.data.employe.email)
            navigate(`/empcard/${employeeData.data.employe.email}`)
            
        }else{
            toast('invalid')
        }
    })
}

  return (
    <>
    {spin ?
    <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>:
    <div className='backii'>
        <ToastContainer />
    <div>
        <NavBar/>
    </div>
    <div className='empLog'>
        <h1><AiOutlineLogin  color='yellow'/></h1>
        <form className='empLogForm' onSubmit={empSub}>
        <input className='empInp' type="email" placeholder='enter the username' name='email' onChange={empLog}  />
        <input className='empInp' type="number" placeholder='enter the password' name='number' onChange={empLog} />
        <button className='empBut'>Submit</button>
        </form>
    </div>

    </div>
}
    </>
    )
}

export default EmployeLogin