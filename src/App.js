
import { Link } from 'react-router-dom';
import './App.css';
import EmployeLogin from './Components/EmployeLogin';
import Login from './Components/Login';
import NavBar from './Components/Nav';
// import qw from './Components/pms.jpg'
import {AiFillInfoCircle} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'


function App() {
  return (
    <div className='App'>
      <NavBar/>

      <img src='https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021_1280.jpg' alt='' width='100%' height='700px'/>
      <div className='discription'>
        <h3 className='mainheading'>PayRoll Management System</h3>
        <p className='para'>The Payroll Management System is a comprehensive software solution developed to automate and streamline the payroll processing within an organization. It aims to eliminate manual errors, save time, and provide a reliable platform for managing employee compensation.</p>
       <Link to='/about'> <button className='butt'> <AiFillInfoCircle /> About</button></Link>
        <Link to='/contact'><button className='butt'> <IoMdContact/>Contact Us</button></Link>
      </div>
      
      
      
    </div>
      );
}

export default App;
