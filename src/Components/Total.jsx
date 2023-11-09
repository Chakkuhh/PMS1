import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Total.css'
import { Link, useParams } from 'react-router-dom';

function Total() {
   
  const {email}=useParams()


  const [total,setTotal]=useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/totalemployee')
      .then(response => {
        setTotal(response.data);
        console.log(total);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(email)=>{
    axios.post(`http://localhost:3002/empdelt/${email}`)
    .then((res=>{
      console.log('deleted');
    }))
    window.location.reload()
  }


  return (
    <div className='d-flex flex-wrap gap-3' >

      {
        total.map((item)=>(
          
          
          <div className='total' style={{color:'white'}} key={item.id}>
            <div className='connt'>
          
          <h1>{item.fullname}</h1><p>({item.username})</p>
          <p>{item.position}</p>
          
          <p>{item.email}</p>
          <p>{item.number}</p>
          <Link to={`/updateemployee/${item.email}`}><button className='bu' >Edit</button></Link>
          <button  onClick={() => handleDelete(item.email)} className='bu'>Delete</button>
          </div>
          </div>
          
        ))
      }

      



    </div>
  )
}

export default Total