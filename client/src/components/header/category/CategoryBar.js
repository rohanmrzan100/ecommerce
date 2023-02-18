import React from 'react'
import AllDropdown from './AllDropdown'

const CategoryBar = () => {
  return (
    <div className="w-full bg-primary h-12 flex  items-center zindex">
      <div className=" w-11/12 m-auto flex justify-start items-center ">
        <AllDropdown />
        <ul className=" flex justify-start items-center mx-4 font-semibold sm:hidden">
          <li className=" hover:highlight mx-4 ">Men's Fashion</li>
          <li className=" hover:highlight mx-4">Women's Fashion</li>
          <li className=" hover:highlight mx-4">Electronic Accessories</li>
          <li className=" hover:highlight mx-4">Home & Lifestyle</li>
          <li className=" hover:highlight mx-4">Sports & Fitness</li>
          <li className=" hover:highlight mx-4">Kids & Toys</li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryBar