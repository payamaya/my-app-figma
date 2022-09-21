
import React from 'react'
import ReusableButton from './ReusableButton'
const About = () => {
  return (
    <div>
      <h2>Checkout page</h2>
      <div /* style={{ marginTop: '10px' }} className='link_list' */>
        <p>This is checkout Page</p>

        <ul>
          <li>Link checkout 1</li>
          <li>Link checkout 2</li>
          <li>Link checkout 3</li>
        </ul>
      </div>
      <ReusableButton>Checkout Page Button</ReusableButton>
    </div>
  )
}
export default About
