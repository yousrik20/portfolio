import React from 'react'
import './footer.css';
export default function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#main">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>&copy; 2024 All rights reserved</p>
    </footer>
  )
}
