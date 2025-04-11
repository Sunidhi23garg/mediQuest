import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='nin'>
      <form action="https://api.web3forms.com/submit" method="POST" className='imm'>
        <div className='ten'>
          <h2>CONTACT US</h2>
        </div>
        
        <input type="hidden" name="access_key" value="1af3624f-a9cf-4ed1-b132-2a3fda1ed1af" />
        
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        
        <button type="submit">SUBMIT</button>
      </form>

      <div className='det'>
        <img src="4.png" alt="" />
      </div>
    </div>
  )
}

export default Contact