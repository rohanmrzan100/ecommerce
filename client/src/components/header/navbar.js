import React from 'react'
import Action from './Action'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='w-full shadow-md h-16 p-3 flex justify-center' >
        <div className='w-4/5 flex justify-between'>
            <h1 className='text-primary text-3xl font-bold'>LOGO</h1>
            <SearchBar/>
            <Action/>
        </div>
    </div>
  )
}

export default Navbar