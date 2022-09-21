import React from 'react'
import ReusableButton from './ReusableButton'

const Image = () => {
  return (
    <div className='image'>
      <div className='card'>
        <img
          src={require('../img/smartphone1.jpg')}
          className='img'
          alt=''
          width={300}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
          excepturi culpa omnis illo quas libero sapiente facere quam, ipsa amet
          vero fugit expedita eligendi consequatur natus, officiis eveniet
          adipisci aspernatur animi. Nam, odio quos!
        </p>
        <div className='button'>
          <ReusableButton>Add to Cart</ReusableButton>
          <ReusableButton>More Info</ReusableButton>
        </div>
      </div>
      <div className='card'>
        <img
          src={require('../img/smartphone2.jpg')}
          className='img'
          alt=''
          width={300}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
          excepturi culpa omnis illo quas libero sapiente facere quam, ipsa amet
          vero fugit expedita eligendi consequatur natus, officiis eveniet
          adipisci aspernatur animi. Nam, odio quos!
        </p>
        <div className='button'>
          <ReusableButton>Add to Cart</ReusableButton>
          <ReusableButton>More Info</ReusableButton>
        </div>
      </div>

      {/*  <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
        quibusdam, facere modi possimus error provident et deserunt magni
        dolorum delectus pariatur, quasi blanditiis temporibus, debitis
        exercitationem veniam perspiciatis dolor asperiores nulla laudantium.
        Quia placeat at culpa corporis magnam odit, rem ipsa est officia magni
        beatae mollitia? Laudantium, natus sunt!
      </p> */}

      {/*  <About /> */}
      {/*  <div className='image'>
        <img src={require('./img/skor1.jpg')} className='logo' alt='' />
        <img src={require('./img/waterfall1.jpg')} className='logo' alt='' />
      </div> */}
      {/*  <Message greet='Welcome' who='Javascript student' name='paul' /> */}
      {/* <img src={logo} className='logo' alt='' />
      <img src={logo1} className='logo' alt='' /> */}
      {/*  <Home /> */}
    </div>
  )
}
export default Image
