import React from 'react'

import SearchBar from './SearchBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';

const Navbar = () => {
  return (
    <div className="w-full shadow-md h-16 p-3 flex justify-center items-center  bg-white">
      <div className="w-11/12 flex justify-between">
        <h1 className="text-primary text-4xl font-bold">LOGO</h1>
        <SearchBar />
        <div className="flex ">
          <div className="flex flex-col justify-center items-center w-20 h-12 mx-2">
            <div className="flex text-center">
              <ShoppingCartIcon
                style={{ transform: "scale(1.2)" }}
                className="text-gray-800"
              />
              <sup>
                <div className="h-6 w-6 bg-orange-500 rounded-full flex justify-center items-center font-semibold text-[16px]">5</div>
                </sup>
            </div>
            <h1 className="font-semibold w-full ml-[25px]">Cart</h1>
          </div>

          <div className="flex flex-col items-center  w-20 h-12 ml-2">
            <Person2Icon
              style={{ transform: "scale(1.2)" }}
              className="text-gray-800"
            />
            <h2 className="font-semibold">Profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar