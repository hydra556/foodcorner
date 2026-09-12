import React from 'react'
import './About.css'
import img from '../../assets/Peda.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are passionate about building beautiful and functional web applications. Our goal is to provide the best user experience using modern technologies.
          </p>
          <p>
            We specialize in React development, UI design, and creating responsive websites that work seamlessly on all devices.
          </p>
          <button className='about-btn'>Learn More</button>
        </div>
        <div className="about-img">
          <img src={img} alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About