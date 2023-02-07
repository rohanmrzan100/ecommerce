import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2Icon from '@mui/icons-material/Person2';
const Action = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col items-center  mx-8 '>
        <ShoppingCartIcon style={{transform: "scale(1.5)"}} className="text-gray-800"/>
        <h2>Cart</h2>
      </div>
      <div className='flex flex-col items-center mx-8 '>
        <FavoriteBorderIcon style={{transform: "scale(1.5)"}} className="text-gray-800"/>
        <h2>Wishlist</h2>
      </div>
      <div className='flex flex-col items-center  mx-8'>
        <Person2Icon style={{transform: "scale(1.5)"}} className="text-gray-800"/>
        <h2>Profile</h2>
      </div>
    </div>
  )
}

export default Action