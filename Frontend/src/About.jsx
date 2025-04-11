import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='clll'>
      <div>
        <img src="5.png" alt="" />
      </div>
      <div className='about-container'>
        <h1>Welcome to <span class="highlight">MediQuest</span></h1>
        <p>Your trusted medicine price comparison platform! Our mission is to make healthcare more accessible and affordable by helping you find the best prices for the medicines you need.</p>

        <h3>With MediQuest, you can:</h3>
        <ul>
            <li>✔ Search for medicines easily.</li>
            <li>✔ Compare prices from various pharmacies.</li>
            <li>✔ Save your favorites for quick access.</li>
            <li>✔ Make informed decisions about your healthcare.</li>
        </ul>

        <p>We are committed to providing a seamless and reliable experience, ensuring that you get the right medicine at the best price.</p>

        <p class="rocket">Your health, your choice!</p>
      </div>
    </div>
    </>
  )
}

export default About