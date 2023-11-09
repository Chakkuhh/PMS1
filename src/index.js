import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import EmployeeAdd from './Components/EmployeeAdd';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Nav';
import EmployeLogin from './Components/EmployeLogin';
import EmpCard from './Components/EmpCard';
import About from './Components/About';
import Contact from './Components/Contact';
import AdminPanel from './Components/AdminPanel';
import Total from './Components/Total';
import EmployeeUpdate from './Components/employeeUpdate';
import LeaveEmp from './Components/LeaveEmp';
import Leave from './Components/Leave';
import LeaveUpdation from './LeaveUpdation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/employee' element={<EmployeeAdd/>}/>
      <Route path='/emplogin' element={<EmployeLogin/>}/>
      <Route path='/empcard/:email' element={<EmpCard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>}/>
      <Route path='/total' element={<Total/>}/>
      <Route path='/updateemployee/:email' element={<EmployeeUpdate/>}/>
      <Route path='/leave/:email' element={<LeaveEmp/>}/>
      <Route path='/leave/:email' element={<LeaveUpdation/>}/>
      <Route path='leaveapp' element={<Leave/>}/>
      <Route path='/leaveupdation/:email' element={<LeaveUpdation/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      
      
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


