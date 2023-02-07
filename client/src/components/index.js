import React from 'react'
import Footer from './footer/footer'
import Navbar from './header/navbar'
import Main from './main/Main'
const Index = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Index