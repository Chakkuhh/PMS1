import {useState,useEffect,React} from 'react'
import './Adminpanel.css'
import NavBar from './Nav'
import {BsPersonAdd} from 'react-icons/bs'
import {FaUsersViewfinder} from 'react-icons/fa6'
import {FcLeave} from 'react-icons/fc'
import { Link } from 'react-router-dom'

function AdminPanel() {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      
    };
    const optionTime={
        hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    }
  
    const formattedDateTime = dateTime.toLocaleDateString(undefined, options);
    const timeTime= dateTime.toLocaleTimeString(undefined, optionTime)
  


    
  return (
    <div>
        <div>
            <NavBar/>
        </div >
        
      
        <div className='date'>
            <h3>{formattedDateTime}</h3>
            <h2>{timeTime}</h2>
        </div>

        
        
    <div className='row' id='adminpanel' >

        

        <div className='col' >
            <div id='add'>
                 <p><BsPersonAdd size={30}/></p>
           <h4>New Employee</h4>
            <Link to='/employee'><button className='but'>Click here</button></Link>
            </div>
        </div>

        <div className='col' >
            <div id='total'>
                       <p><FaUsersViewfinder size={30} /></p>
                     <h4>Total Employees</h4>
                     <Link to='/total'><button className='but'>View/Update</button></Link>
            </div>
       
            </div>
            <div className="col">
              <div id='lee'>

                <p><FcLeave size={30}/></p>

                <h4>Leave Application</h4>
                <Link to='/leaveapp'><button className='but'>View</button></Link>

              </div>
            </div>
        

    </div>
    </div>
  )
}

export default AdminPanel