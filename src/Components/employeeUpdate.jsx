import React, { useEffect, useState } from 'react'
import './EmployeeAdd.css'
import axios from 'axios'
import NavBar from './Nav'
import { useParams } from 'react-router-dom'


function EmployeeUpdate() {

  const {email}=useParams()
  console.log(email);

  const [empData,setEmpData]=useState({})
  const [values,setValues]=useState([])


  const employeeChange=(e)=>{
    setEmpData({...empData,[e.target.name]:e.target.value})
    console.log(empData);
   
  }

  useEffect(()=>{
    axios.get(`http://localhost:3002/viewemployee/${email}`).then((res)=>{
      console.log(res.data);
      setValues(res.data)
    })
  },[])
  console.log(values);

  const employeeSubmit=(e)=>{
    e.preventDefault()
    setEmpData(empData)
    console.log(empData);
    axios.post(`http://localhost:3002/employeeupdate/${email}`,empData)
    .then(console.log('success'))
  }

  return (
    <div>
      <NavBar/>
    <div className='employee-body'>
      
     
    <div className='employe-input-card'>
        <h1 className='newwork'>Upadate Workers</h1>
        
        <form className='employe-input-form' onSubmit={employeeSubmit}>
            <input className='employe-input' type="text" placeholder={values.fullname} name='fullname'  onChange={employeeChange} />
            <input className='employe-input' type="email" placeholder={values.email} name='email'   onChange={employeeChange}/>
            <input className='employe-input' type="number" placeholder={values.number} name='number'  onChange={employeeChange}/>
            <input className='employe-input' type="text" placeholder={values.username} name='username'  onChange={employeeChange}/>
             <select name='position'  className='employe-input' onChange={employeeChange}>
             <option value="" disabled selected hidden>{values.position}</option>
              <option value='UI/UX Developer'>UI/UX Developer</option>
              <option value='MERN Stack'>Mern stack</option>
              <option value='ReactJs Developer'>ReactJS Developer</option>
              <option value='JavaScript Developer'>JavaScript Developer</option>
              <option value='NodeJs developer'>NodeJs developer</option>
             </select>
             <input className='employe-input' type='number' placeholder={values.salary} name='salary' onChange={employeeChange}/>
             <button className='employe-button' onClick={()=>window.location.reload()}>Submit</button>
        </form>
    
    </div>
    </div>
    </div>
   
  )
}

export default EmployeeUpdate