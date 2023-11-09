import React, { useEffect, useState } from 'react'
import './Leaveemp.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function LeaveEmp() {

    const [leavedata,setleave]=useState({})
    const [backData,setbackData]=useState([])

    const {email}=useParams()
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3002/leave/${email}`)
        .then((res)=>{
            console.log(res.data);
            setbackData(res.data)
        })
    },[email])

    const leave=(e)=>{
        setleave({...leavedata,[e.target.name]:e.target.value})
        console.log(leavedata,'leave data');

    }
    const combinedData = {
        ...leavedata,
        fullname: backData.fullname,
        email:backData.email,
        userid:backData._id
    };

    const leaveSubmit=(e)=>{
        e.preventDefault()
        setleave(leavedata)
        axios.post(`http://localhost:3002/leave`,combinedData)
        .then(console.log('success'))
    }
  return (
    <div>
        <div className="container">
            <form onSubmit={leaveSubmit}>
                <h1>Leave application</h1>
                <div className="leave">
                
                
                <input  name='userid' disabled placeholder={backData._id}  />
                <input type='email' name='email' disabled placeholder={backData.email} onChange={leave}/>
                <input type='text' name='fullname' disabled placeholder={backData.fullname} onChange={leave}/>

                <input type="date" name='leavedate' placeholder='enter the date for leave' onChange={leave} />

                <input type='text' name='reason' placeholder='enter the reason' onChange={leave}/>

                

                <button>Submit</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default LeaveEmp