import React, { useState } from 'react'
import './EmployeeAdd.css'
import axios from 'axios'
import NavBar from './Nav'


function EmployeeAdd() {

  const [empData,setEmpData]=useState({})


  const employeeChange=(e)=>{
    setEmpData({...empData,[e.target.name]:e.target.value})
    console.log(empData);
   
  }

  const employeeSubmit=(e)=>{
    e.preventDefault()
    setEmpData(empData)
    console.log(empData);
    axios.post('http://localhost:3002/employeegeneration',empData)
    .then((res)=>console.log(res))
    window.location.reload()
  }
  

  return (
    <div>
      <NavBar/>
    <div className='employee-body'>
     
    <div className='employe-input-card'>
        <h1 className='newwork'>Add Employee</h1>
        <form className='employe-input-form' onSubmit={employeeSubmit}>
            <input className='employe-input' type="text" placeholder='enter the employee name' name='fullname' required onChange={employeeChange} />
            <input className='employe-input' type="email" placeholder='enter the email' name='email' required  onChange={employeeChange}/>
            <input className='employe-input' type="number" placeholder='enter the phone number' name='number' required onChange={employeeChange}/>
            <input className='employe-input' type="text" placeholder='enter the username' name='username' required onChange={employeeChange}/>
             <select name='position' required className='employe-input' onChange={employeeChange}>
             <option value="" disabled selected hidden>select position</option>
              <option value='UI/UX Developer'>UI/UX Developer</option>
              <option value='MERN Stack'>Mern stack</option>
              <option value='ReactJs Developer'>ReactJS Developer</option>
              <option value='JavaScript Developer'>JavaScript Developer</option>
              <option value='NodeJs developer'>NodeJs developer</option>
              
             </select>
             <input className='employe-input' type='number' placeholder='Enter the salary..' name='salary' required onChange={employeeChange}/>
             <button className='employe-button'>Submit</button>
        </form>
    </div>
    </div>
    </div>
   
  )
}

export default EmployeeAdd