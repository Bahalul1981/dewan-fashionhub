import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../header/Navbar'



function Home() {
  return (
    <div>
      <Navbar />
      <img className='myimg' src="/home.PNG" alt="" />

      <Footer />
      {/* TERNERY OPARETOR for new if else  */}
     
    </div>
  )
}

export default Home
