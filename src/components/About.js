import React from "react"
import ReusableButton from "./ReusableButton"
const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <div /* style={{ marginTop: '10px' }} className='link_list' */>
       
        <p>This is About Page</p>
      
        <ul>
          <li>Link About 1</li>
          <li>Link About 2</li>
          <li>Link About 3</li>
        </ul>
      </div>
      <ReusableButton>About Page Button</ReusableButton>
    </div>
  )
}
export default About
