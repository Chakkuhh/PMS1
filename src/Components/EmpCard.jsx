import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBar from './Nav'
import './Empcard.css'


function EmpCard() {

  let token=localStorage.getItem('username')

  const {email}=useParams()

  const [employee,setEmployee]=useState({})

  useEffect(()=>{
    
if(!token){
  navigate('/')
}

    axios.get(`http://localhost:3002/singleemployee/${email}`)
    .then((res)=>{

      
      console.log(employee);
      console.log(res.data);
      setEmployee(res.data)
    })
  },[])

const navigate=useNavigate()

let logout =()=>{
 localStorage.removeItem('username')
 navigate('/')
 

}



  return (
    <div>
      
     <h1 className='dashboard'>Dashboard</h1>

      <div className='row'>


        <div className="col-8" id='bor'>

          

          <div className="name">
            
            Hi,{employee.fullname}
            <p>{employee.position}</p>
            </div>
          

          <div className="row" id='le'>
            <div className="col">
              <div className="leav">

                <p>Apply Leave</p>
                <Link to={`/leave/${employee.email}`}><button>Apply</button></Link>
              </div>
            </div>
            <div className="col">
              <div className="leav">
                <p>Leave Status</p>
                <Link to={`/leaveupdation/${employee.email}`}><button>View</button></Link>

              </div>

             
            </div>
          </div>

          

        </div>

        <div className="col" id='sal'>
          <h3>Salary details</h3>
          <div className="sal">
              <p>Salary after Leave desuction:{employee.salary}$</p></div>


             <button className='logout' onClick={logout}>Logout</button>
              
        </div>

      </div>
      </div>
     

   
  )
}

export default EmpCard