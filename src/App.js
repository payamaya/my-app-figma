import React from 'react'
/* import Image from './components/Image' */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Header from './components/Header'
/* import Message from './components/Message' */
import Login from './components/Login'
import Users from './components/Users'
import About from './components/About'
import OrderConfirm from './components/OrderConfirm'
/* import logo from './img/waterfall1.jpg'
import logo1 from './img/oil.jpg' */
import Footer from './components/Footer'
import Navbar from './components/Navbar'
/* import ReusableButton from './components/ReusableButton' */
import { Container } from 'react-bootstrap'
import ButtonBar from './components/ButtonBar'
function App() {
  return (
    <BrowserRouter>
      <Container className='p-3'>
        <h1>React Bootstrap Demo</h1>
        <h2>
          <ButtonBar/>
        </h2>
        <div>
          <Header />
        </div>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about'exact element={<About />} />
            <Route path='/checkout' exact element={<Checkout />} />
            <Route path='/orderconfirm' exact element={<OrderConfirm />} />
            <Route path='/login' exact element={<Login/>} />
            <Route path='/users' exact element={<Users/>} />
            {/*    <Image>
            <ReusableButton />
          </Image> */}
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Container>
    </BrowserRouter>
  )
}

export default App
