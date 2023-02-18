import React from 'react'
import Footer from './footer/footer'
import CategoryBar from './header/category/CategoryBar'
import Navbar from './header/nav/navbar'
import Main from './main/Main'
const Index = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <CategoryBar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Index