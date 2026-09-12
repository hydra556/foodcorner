import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2>Foodie & Sweets Corner</h2>
          <p>Delicious food delivery to your doorstep.</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact Info</h3>
          <p>Email: info@foodie&sweetscorner.com</p>
          <p>Phone: +91 9326472878</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2026 Foodie & Sweets Corner All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer