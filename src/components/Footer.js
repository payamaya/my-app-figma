import React from 'react'
import { FaBars, FaGithub, FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Footer Page</h2>
      <div className='footer-logo'>
        <FaReact />
        <FaBars />
        <FaGithub />
      </div>
      <p>This is Footer Page </p>
    </div>
  )
}
export default Footer
