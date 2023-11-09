import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './LeaveUpdation.css'

function LeaveUpdation() {
  const { email } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3002/leaveupdation/${email}`)
      .then(res => {
        setItem(res.data)
        console.log(res.data);
      })
  }, [email])
console.log(item);
  return (
    <>

    <h1>Leave Status</h1>

    hi ,{item.fullname}


    {
      item.map((value)=>(
        <div className='das'>
        <ul>
          <li>
        <h3> Hi,{value.fullname}.Your leave request for {value.leavedate} has been {value.status}</h3>
    </li> 
    </ul>
    </div>
      ))
    }
      
    </>
  )
}

export default LeaveUpdation
