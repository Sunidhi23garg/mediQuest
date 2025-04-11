import React, { useState, useEffect } from 'react';
import './Login.css';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:9000/login', { email, pass });
      console.log('Success:', result);

      if (result.data === 'Success') {
        toast.success("Logged in successfully!");
        localStorage.setItem('token', 'your_token_here');
        setIsLoggedIn(true);
        navigate('/home');
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (err) {
      console.log('Error:', err);
      toast.error("Login error. Please try again!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    toast.info("Logged out!");
  };

  if (isLoggedIn) {
    return (
      <div className='con'>
        <div className='boxx'>
          <div className='log'>
            <h1>Logged In</h1>
          </div>
          <center><button onClick={handleLogout}>Logout</button></center>
        </div>
      </div>
    );
  }

  return (
    <div className='con'>
      <form className='boxx' onSubmit={handleSubmit}>
        <div className='log'>
          <h1>Login Form</h1>
        </div>
        <div className='onee'>
          <input
            type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password' placeholder='Enter password' onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className='for'>
          <p>Forgot password?</p>
        </div>
        <center><button>Login</button></center>
        <div className='sign'>
          <p>Not a Member?</p>
          <div className='si'>
            <NavLink to='/register' className='nav-button'>
              Register
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;