import React from 'react'
import './contact.css'
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
  return (
    <div className='contct'>

<div className="content">
  <h1>Contact Us</h1>

  <p>Have questions about our Payroll Management System?
     Need assistance with implementation, customization, or any other aspect of our software? Our dedicated team of experts is here to help.
      Reach out to us through the contact information below or use the form to send us a message.
       We look forward to hearing from you and assisting with your payroll needs.
</p>


</div>
<div className="res">

<div className="row">

  <div className="col" id='coll'>

    <div className="addrs">

      <p><ImLocation2/>  Calicut,Kerala,India,673011
      World Trade Center </p>
    </div>
    <div className="phne">
      <p><BsFillTelephoneFill/> 1236547890</p>
    </div>
    <div className="emal">
      <p><AiOutlineMail/> qwertyu@gmail.com</p>
    </div>

  </div>
  <div className="col">
      <form className='from' >

<input type="text" placeholder='enter your name...' />

<input type='text' placeholder='enter your email...'/>


<textarea name="" id="" cols="10" rows="10" placeholder='enter your experience' />


<button>Submit</button>


      </form>

  </div>
</div>

</div>




    </div>
  )
}

export default Contact