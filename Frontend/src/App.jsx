import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import Medicine from "./Medicine"
import Contact from "./Contact"
import About from "./About"
import Cart from "./Cart"
import Register from "./Register"
import Details from "./Details";
import SearchResults from './SearchResults';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar/>

      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path="/:category" element={<Details />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart/> } />
        <Route path='/register' element={<Register />} />

        <Route path="/search" element={<SearchResults />} />

      </Routes>
      
    </>
  )
}

export default App