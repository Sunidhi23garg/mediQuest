import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='big'>
            <div className='box'>
                <h1>Welcome to <span class="highlight">MediQuest</span></h1>
                <br />
                <h3>Your Trusted Medicine Price Comparison Platform</h3>
                <p>Finding the right medicine at the best price has never been easier! With MediQuest, you can quickly search for medicines, compare prices from various pharmacies, and make informed purchasing decisions. Whether you're looking for affordability or convenience, we’ve got you covered.</p>
                <p>Start your search today and take control of your healthcare expenses! 💊</p>
                <NavLink to="/about" className="nav-button">Learn More...</NavLink>
            </div>

            <div className='boxtwo'>
                <img  className='itwo' src="22.png" alt="img2" />
            </div>
        </div>
    </>
  )
}

export default Home