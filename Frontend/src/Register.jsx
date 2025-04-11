import React from 'react';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bir, setBir] = useState('');
  const [phn, setPhn] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/register', { name, email, bir, phn, pass })
      .then((result) => {
        console.log("Success:", result);
        toast.success("Registered successfully!");
        navigate("/login");
      })
      .catch(err => {
        console.log("Error:", err);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div className='ele'>
      <div className='twe'>
        <div className='thir'>
          <div className='fift'>
            <img src="Logo.png" alt="" />
            <img src="Name.png" alt="MediQuest" />
          </div>
          <div className='sixt'>
            <center><h1>Welcome!</h1></center>
            <h4>Join us and make smarter health choices!</h4>
            <p>Register now to easily compare medicine prices, find the best deals, and save your favorite medicines for quick access. Enjoy a fast, secure, and seamless experience designed to help you make informed healthcare decisions.</p>
          </div>
          <center>
            <div className='abc'>
              <NavLink to="/about" className="nav-button">Know more...</NavLink>
            </div>
          </center>
        </div>

        <form className='fort' onSubmit={handleSubmit}>
          <div className='sev'>
            <h1>Register</h1>
          </div>
          <div className='eigh'>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="date" placeholder="Birthday" onChange={(e) => setBir(e.target.value)} /><br />
            <input type="tel" placeholder="Phone Number" onChange={(e) => setPhn(e.target.value)} /><br />
            <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} /><br />
          </div>
          <button>Create Account</button>
        </form>

      </div>
    </div>
  );
};

export default Register;