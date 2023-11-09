import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Leave.css'
import { useParams } from 'react-router-dom';

function Leave() {
    const [leaveap, setLeave] = useState([]);
    const [refresh,setrefresh]=useState(false)

    const id=useParams()

    useEffect(() => {
        axios.get('http://localhost:3002/leaveapp')
            .then(res => {
                console.log(res.data);
                setLeave(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
          
    }, [refresh]); 
console.log(leaveap,'fghjk');
    const salaryUpdate = (id,userid) => {
        let usersid={userid:userid}
        console.log(userid);
        axios.post(`http://localhost:3002/employeecar/${id}`,usersid)
            .then(res => {
                console.log('done');
                setrefresh(!refresh)
                // Optionally, update the UI or re-fetch data here if needed
            })
            .catch(error => {
                console.error('Error updating salary:', error);
            });
    }

    const leaveUpdate=(id)=>{
        axios.post(`http://localhost:3002/leaveapplications/${id}`)

        .then(res=>{
            console.log('done');
        
        })
        
        setrefresh(!refresh)
    }

    // let decline=(status)=>{
    //     console.log(status,'dfghjk');
    // }
    

    return (
        <>
        <h1>Leave Requests</h1>
        <div className='back d-flex flex-wrap gap-3'>
            
            {
                leaveap.map((item,index) => (
                    <div key={index} className='box'>
                       
                        <h3>{item.fullname}</h3>
                        <p>{item.leavedate}</p>
                        <p>{item.reason}</p>
                        <p>{item.email}</p>
                        <p>{item.status}</p>
{ item.status==='decline' 

}
{ item.status==='approved' 


}
{!item.status &&

<>
<button onClick={() => salaryUpdate(item._id,item.userid)}>approve</button>
                        <button onClick={()=>leaveUpdate(item._id)}>decline</button>
</>}
                    
                    
                
                    </div>
                ))
            }
        </div>
        </>
    );
}
export default Leave;
