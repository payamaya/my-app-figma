import React from 'react'
import { FaMobileAlt, FaCartPlus } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className='nav-logo'>
        Paul Phones <FaMobileAlt />
      </span>

      <div className='nav-items'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/checkout'>Checkout</a>
        <a href='/orderconfirm'>OrderConfirm</a>
        <span className='logo'>
          <FaCartPlus />
        </span>
      </div>
    </div>
  )
}
export default Navbar
