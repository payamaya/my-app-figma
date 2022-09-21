import React from 'react'
/* import Button from './Button' */
/* import Footer from './Footer'
 */ import ReusableButton from './ReusableButton'

const Home = () => {
  return (
    <div className='container'>
      <h1>Home</h1>

      <p>This is Home Page</p>

      {/* <button class='Button_error_ax7yz'>Error Button</button> */}
      <ReusableButton>Home Page Button</ReusableButton>
      <ReusableButton>Home Page Button</ReusableButton>
    </div>
  )
}
export default Home
