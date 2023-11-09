import {useState,React} from 'react'
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import {MdAdminPanelSettings} from 'react-icons/md'
import NavBar from './Nav'



function Login() {
    const navigate = useNavigate()

    const [data,setData]=useState({})


    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value.trim()})
      
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setData(data)
        
        axios.post('http://localhost:3002/admin',data)
        .then((userData)=>{
            console.log(userData.data.status)
            if(userData.data.status){
                localStorage.setItem('username',userData.data.username)
                navigate('/adminpanel')
                console.log('successful');
            }
            else{
                alert('invalid username or password')
            }
        
        })

       }
  return (
    <div className='background'>
    <div className='nn'>
        <NavBar/>
    </div>
    <div className='form'>
        
        <form  onSubmit={handleSubmit} className='admin-form'>
            <p><MdAdminPanelSettings size={50}/></p>
            
        <input className='admin-input' type="text" placeholder='enter the username' name='name' onChange={handleChange}/>
        <input className='admin-input'  type="password" name="password" placeholder='enter the password' onChange={handleChange} />
        <button className='admin-button'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login